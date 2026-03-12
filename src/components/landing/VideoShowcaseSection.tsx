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
    <div
      key={video.id.videoId}
      className="block rounded-2xl overflow-hidden border-2 border-border/60 hover:border-[#e289a6]/40 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        setSelectedVideo(video);
      }}
    >
      {/* Thumbnail + Play button overlay */}
      <div className="aspect-video relative overflow-hidden bg-secondary">
        <img
          src={`https://img.youtube.com/vi/${video.id.videoId}/hqdefault.jpg`}
          alt={decodeHtml(video.snippet.title)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[#e289a6]/85 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#e289a6] group-hover:scale-110 transition-all duration-300 shadow-lg">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Title strip at bottom */}
      <div className="px-3 py-2 bg-[#e289a6]">
        <p className="text-xs text-white font-medium truncate">
          {decodeHtml(video.snippet.title)}
        </p>
      </div>
    </div>
  );

  return (
    <section className="section-padding">
      <div className="container max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-[#e289a6] text-sm font-semibold uppercase tracking-widest mb-3">
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
                  ? "bg-[#e289a6] text-white shadow-lg"
                  : "bg-card text-foreground hover:bg-secondary shadow-sm"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        {/* Video Grid - Desktop unchanged, Mobile carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop View - unchanged */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {filtered.slice(0, 2).map((video, i) => renderVideoCard(video, i))}
            
            {/* Third video */}
            {filtered.length > 2 && renderVideoCard(filtered[2], 2)}
          </div>
          
          {/* Mobile View - Simple single card */}
          <div className="md:hidden" onClick={(e) => e.stopPropagation()}>
            {filtered[currentIndex] && (
              <div className="relative">
                {renderVideoCard(filtered[currentIndex], currentIndex)}
                
                {/* Arrow buttons */}
                {currentIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(prev => prev - 1);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#e289a6] text-white flex items-center justify-center shadow-lg z-20"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                
                {currentIndex < filtered.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(prev => prev + 1);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#e289a6] text-white flex items-center justify-center shadow-lg z-20"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
                
                {/* Dots */}
                <div className="flex justify-center mt-4 gap-2">
                  {filtered.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 rounded-full ${
                        i === currentIndex ? 'bg-[#e289a6]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Desktop External Carousel Buttons - Only visible on desktop */}
          <div className="hidden md:block">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-[#e289a6] text-white flex items-center justify-center shadow-lg hover:bg-[#d17aaa] transition-all z-20"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-[#e289a6] text-white flex items-center justify-center shadow-lg hover:bg-[#d17aaa] transition-all z-20"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Simple Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center text-white text-xl font-bold"
            >
              ×
            </button>
            
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1&rel=0`}
                title={selectedVideo.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            
            <div className="px-5 py-3 bg-[#e289a6]">
              <p className="text-white text-sm font-medium">
                {decodeHtml(selectedVideo.snippet.title)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoShowcaseSection;