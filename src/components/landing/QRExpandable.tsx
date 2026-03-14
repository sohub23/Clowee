import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Maximize2, X } from 'lucide-react'; // আইকন এর জন্য ল্যুসিড আইকন ব্যবহার করা হয়েছে
import hotscanQR from '@/assets/clowee_hotscan.png'; // আপনার কিউআর কোড ইমেজ

const QRExpandable = ({ size = 'md' }: { size?: 'sm' | 'md' }) => {
  const [expanded, setExpanded] = useState(false);
  const imgSize = size === 'sm' ? 'w-20 h-20' : 'w-24 h-24';
  const containerPad = size === 'sm' ? 'p-2.5' : 'p-3';

  return (
    <>
      <div className="flex items-center gap-3">
        {/* থ্যাম্বনেইল বাটন */}
        <button
          onClick={() => setExpanded(true)}
          className={`bg-white rounded-xl ${containerPad} shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 relative group cursor-pointer transition-transform hover:scale-105`}
        >
          <img src={hotscanQR} alt="Scan QR" className={`${imgSize} object-contain`} />

          {/* হোভার ইফেক্ট (Expand আইকন দেখা যাবে) */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-xl transition-colors flex items-center justify-center">
            <Maximize2 className="w-4 h-4 text-[#E291BE] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>

        {/* সাব-টেক্সট */}
        <div>
          <p className={`${size === 'sm' ? 'text-[11px]' : 'text-xs'} font-medium text-footer-text/60`}>
            Call With<br />Hotscan
          </p>
          <p className={`${size === 'sm' ? 'text-[9px]' : 'text-[10px]'} text-footer-text/40 mt-0.5`}>
            Tap to enlarge
          </p>
        </div>
      </div>

      {/* Expanded Modal — পপ-আপ পার্ট */}
      {expanded && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-xs w-full"
            onClick={(e) => e.stopPropagation()} // পপ-আপ বক্সে ক্লিক করলে যেন বন্ধ না হয়
          >
            {/* ক্লোজ বাটন */}
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            <div className="text-center">
              <p className="text-[16px] font-semibold text-[#202124] mb-1">Call With Hotscan</p>
              <p className="text-[13px] text-[#5f6368] mb-5">Point your phone camera at this QR code</p>

              {/* মেইন কিউআর ডিসপ্লে */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6 inline-block border border-gray-100">
                <img src={hotscanQR} alt="Large QR" className="w-56 h-56 object-contain" />
              </div>

              <p className="text-[12px] text-[#5f6368] mt-4">Clowee by i3 technologies</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default QRExpandable;
