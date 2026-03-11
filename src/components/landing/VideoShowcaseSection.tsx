import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface YouTubeVideo {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: { medium: { url: string } };
  };
}

// Static video data with the provided YouTube URLs
const staticVideos = [
  {
    id: { videoId: "aOnyKBfwKrE" },
    snippet: {
      title: "Clowee | Game On | Amusement Games | Theme Park | Made In Bangladesh",
      description: "Clowee claw machine in action at theme park",
      publishedAt: "2024-01-01",
      thumbnails: { medium: { url: `https://img.youtube.com/vi/aOnyKBfwKrE/hqdefault.jpg` } }
    }
  },
  {
    id: { videoId: "iorKosbaUPs" },
    snippet: {
      title: "Tolpar Claw Games Machine | Arcade Games | Amusement park games| Made In Bangladesh",
      description: "Tolpar claw machine demonstration",
      publishedAt: "2024-01-02",
      thumbnails: { medium: { url: `https://img.youtube.com/vi/iorKosbaUPs/hqdefault.jpg` } }
    }
  },
  {
    id: { videoId: "3V-3oOpi5Hc" },
    snippet: {
      title: "Claw Games Machine |Tolpar| Made In Bangladesh | Arcade Game | Kids zone",
      description: "Claw machine for kids zone and indoor playground",
      publishedAt: "2024-01-03",
      thumbnails: { medium: { url: `https://img.youtube.com/vi/3V-3oOpi5Hc/hqdefault.jpg` } }
    }
  }
];

const filters = [];

// Decode HTML entities from YouTube API titles
const decodeHtml = (html: string): string => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

// Keywords for category matching
const PRODUCT_DEMO_KEYWORDS = ["demo", "demonstration", "product", "machine", "clowee"];
const CUSTOMER_STORIES_KEYWORDS = ["customer", "partner", "restaurant", "success", "story"];
const HOW_IT_WORKS_KEYWORDS = ["how it works", "tutorial", "guide", "setup", "installation"];

const matchesCategory = (video: YouTubeVideo, category: string): boolean => {
  const text = `${video.snippet.title} ${video.snippet.description}`.toLowerCase();

  switch (category) {
    case "Product Demo":
      return PRODUCT_DEMO_KEYWORDS.some(kw => text.includes(kw));
    case "Customer Stories":
      return CUSTOMER_STORIES_KEYWORDS.some(kw => text.includes(kw));
    case "How It Works":
      return HOW_IT_WORKS_KEYWORDS.some(kw => text.includes(kw));
    default:
      return true;
  }
};

const VideoShowcaseSection = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedVideo]);

  useEffect(() => {
    // Use static videos instead of API call
    setVideos(staticVideos);
  }, []);

  const filtered = active === "All"
    ? videos
    : videos.filter(v => matchesCategory(v, active));

  const visibleItems = expanded ? filtered : filtered.slice(0, 8);
  const hasMore = filtered.length > 8;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  // Video card component
  const renderVideoCard = (video: YouTubeVideo, i: number) => (
    <motion.div
      key={video.id.videoId}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06 }}
      onClick={() => setSelectedVideo(video)}
      className="block rounded-2xl overflow-hidden border-2 border-border/60 hover:border-[#E291BE]/40 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
    >
      {/* Thumbnail + Play button overlay */}
      <div className="aspect-video relative overflow-hidden bg-secondary">
        <img
          src={`https://img.youtube.com/vi/${video.id.videoId}/hqdefault.jpg`}
          alt={decodeHtml(video.snippet.title)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[#E291BE]/85 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#E291BE] group-hover:scale-110 transition-all duration-300 shadow-lg">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Title strip at bottom */}
      <div className="px-3 py-2 bg-[#E291BE]">
        <p
          className="text-xs text-white font-medium truncate"
          title={decodeHtml(video.snippet.title)}
        >
          {decodeHtml(video.snippet.title)}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="section-padding">
      <div className="container max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-[#E291BE] text-sm font-semibold uppercase tracking-widest mb-3">
            Video Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-foreground">
            Clowee Stories
          </h2>
          <p className="text-muted-foreground text-base">
            Watch how our smart claw machines work and see success stories from our partners
          </p>
        </div>

        {/* Filters */}
        {filters.length > 0 && (
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => { setActive(f); setExpanded(false); }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${active === f
                  ? "bg-[#E291BE] text-white shadow-lg"
                  : "bg-card text-foreground hover:bg-secondary shadow-sm"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        {/* Video Carousel */}
        <div className="relative max-w-md mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filtered.map((video, i) => (
                <div key={video.id.videoId} className="min-w-full px-1">
                  {renderVideoCard(video, i)}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          {filtered.length > 1 && (
            <>
              {currentIndex > 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-[#E291BE] text-white flex items-center justify-center shadow-lg hover:bg-[#d17aaa] transition-all z-10"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {currentIndex < filtered.length - 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-[#E291BE] text-white flex items-center justify-center shadow-lg hover:bg-[#d17aaa] transition-all z-10"
                  aria-label="Next video"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </>
          )}

          {/* Dots Indicator */}
          {filtered.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {filtered.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#E291BE] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-3xl z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Video player card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-border/30">
                <div className="aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1&rel=0`}
                    title={decodeHtml(selectedVideo.snippet.title)}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {/* Title strip */}
                <div className="px-5 py-3 bg-[#E291BE]">
                  <p className="text-sm md:text-base text-white font-medium">
                    {decodeHtml(selectedVideo.snippet.title)}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoShowcaseSection;