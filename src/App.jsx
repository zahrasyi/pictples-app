import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, Download, RefreshCw, Star, Zap, Music, 
  School, Palette, Heart, Flame, Pencil, Crown, 
  Sparkles, Smile, Scissors, PenTool, Ghost,
  Cloud, Target, Bomb, Rocket, Disc
} from 'lucide-react';

// Komponen Sticker SWAG (SVG agar selalu tajam dan terdeteksi)
const SwagSticker = ({ className }) => (
  <div className={className}>
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fill="#adff2f" 
        fontSize="65" 
        fontWeight="900" 
        fontFamily="sans-serif"
        fontStyle="italic"
        letterSpacing="-2"
      >
        #SWAG
      </text>
    </svg>
  </div>
);

// Konfigurasi Tema dengan Sticker & Container Teks
const THEMES = {
  memphis: {
    name: "1",
    container: "bg-memphis-tiles bg-repeat border-[6px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]",
    slot: "border-4 border-black bg-white/10 backdrop-blur-[2px]",
    font: "font-cherry text-black", 
    label: "GORGEOUS",
    labelContainer: "bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    accent: "bg-blue-400",
    stickers: [
      [
        { icon: <Zap size={48} fill="#60a5fa" className="text-black" />, pos: "top-[-15px] left-[-15px] rotate-[-12deg]" },
        { icon: <div className="w-5 h-5 rounded-full bg-pink-400 border-2 border-black" />, pos: "bottom-4 right-2" }
      ],
      [
        { icon: <div className="w-20 h-5 bg-black -rotate-12" />, pos: "top-4 right-[-15px]" },
        { icon: <div className="w-10 h-10 rounded-full border-4 border-black bg-green-400" />, pos: "bottom-[-15px] left-4" }
      ],
      [
        { icon: <Star size={40} fill="#fb923c" className="text-black" />, pos: "top-2 right-2 rotate-12" },
        { icon: <div className="w-8 h-8 bg-blue-400 border-2 border-black rotate-45" />, pos: "bottom-6 left-[-15px]" }
      ]
    ]
  },
  rock: {
    name: "2",
    container: "bg-[#1a1a1a] border-2 border-white",
    slot: "border border-zinc-700 grayscale",
    font: "font-ewert text-white uppercase", 
    label: "FEEL UR STAR ROCKSTAR",
    labelContainer: "bg-black/80 border border-white/30 px-6 py-2",
    accent: "bg-red-600",
    stickers: [
      [
        { icon: <Flame size={64} fill="#dc2626" className="text-red-500" />, pos: "top-[-20px] right-[-15px] rotate-12" },
        { icon: <Star size={20} fill="white" className="text-white" />, pos: "bottom-4 left-2" }
      ],
      [
        { icon: <span className="text-6xl font-black text-red-600 drop-shadow-[0_2px_0_rgba(255,255,255,1)]">ROCK</span>, pos: "bottom-2 right-[-15px] rotate-[-5deg]" },
        { icon: <Zap size={28} fill="#ef4444" className="text-red-500" />, pos: "top-4 left-[-8px]" }
      ],
      [
        { icon: <span className="text-5xl">🤘</span>, pos: "top-[-15px] left-[-10px] rotate-[-15deg]" },
        { icon: <Star size={40} fill="none" className="text-red-600" strokeWidth={3} />, pos: "bottom-10 right-[-10px]" }
      ]
    ]
  },
  retro: {
    name: "3",
    container: "bg-[#8b0000] border-[12px] border-[#f5f5dc]",
    slot: "border-4 border-[#f5f5dc] sepia-[0.3]",
    font: "font-diplomata text-[#f5f5dc] uppercase", 
    label: "ABOUT YOU 1978",
    labelContainer: "bg-[#8b0000] border-2 border-[#f5f5dc] px-4 py-2",
    accent: "bg-[#f5f5dc]",
    stickers: [
      [
        { icon: <Heart size={60} fill="#f5f5dc" className="text-[#8b0000]" />, pos: "top-[-25px] left-[-20px]" },
        { icon: <Sparkles size={24} className="text-[#f5f5dc]" />, pos: "bottom-4 right-4" }
      ],
      [
        { icon: <Smile size={50} fill="#f5f5dc" className="text-[#8b0000]" />, pos: "bottom-[-15px] right-[-15px]" },
        { icon: <Heart size={22} fill="#f5f5dc" className="text-[#8b0000]" />, pos: "top-4 left-2" }
      ],
      [
        { icon: <Sparkles size={56} className="text-[#f5f5dc]" />, pos: "top-[-15px] right-[-20px]" },
        { icon: <div className="w-8 h-8 rounded-full border-2 border-[#f5f5dc]" />, pos: "bottom-8 left-[-10px]" }
      ]
    ]
  },
  highschool: {
    name: "4",
    container: "bg-[#002366] border-4 border-white border-dashed",
    slot: "border-2 border-white/50",
    font: "font-kavoon text-white", 
    label: "MEMORIES 4EVER",
    labelContainer: "bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-xl px-6 py-2",
    accent: "bg-yellow-400",
    stickers: [
      [
        { icon: <div className="bg-yellow-400 text-[#002366] px-4 py-1 text-2xl font-black border-2 border-white rotate-[-15deg] shadow-lg">A+</div>, pos: "top-[-15px] left-[-20px]" },
        { icon: <Pencil size={24} className="text-white rotate-45" />, pos: "bottom-4 right-2" }
      ],
      [
        { icon: <School size={50} className="text-yellow-400" />, pos: "bottom-[-15px] right-[-15px]" },
        { icon: <div className="w-12 h-1 bg-white opacity-50" />, pos: "top-10 left-[-8px]" }
      ],
      [
        { icon: <div className="bg-white text-[#002366] px-3 py-1 text-[12px] font-bold border-2 border-[#002366]">PASS</div>, pos: "top-4 right-[-15px] rotate-12" },
        { icon: <Star size={44} fill="#fbbf24" className="text-yellow-500" />, pos: "bottom-2 left-[-20px]" }
      ]
    ]
  },
  hiphop: {
    name: "5",
    container: "bg-[#121212] border-[6px] border-[#adff2f] shadow-[0_0_25px_rgba(173,255,47,0.3)]",
    slot: "border-2 border-[#adff2f] contrast-125",
    font: "font-sekuya text-[#adff2f] uppercase tracking-tighter",
    label: "LNGSHOT 4SHO",
    labelContainer: "bg-black border-2 border-[#adff2f] px-6 py-2 shadow-[4px_4px_0px_0px_#adff2f]",
    accent: "bg-[#adff2f]",
    stickers: [
      [
        { icon: <Crown size={60} fill="#adff2f" className="text-black" />, pos: "top-[-25px] left-[-20px] rotate-[-15deg]" },
        { 
          icon: <span className="text-5xl font-sekuya font-black text-[#adff2f] drop-shadow-[0_4px_4px_rgba(0,0,0,1)] italic">#SWAG</span>, 
          pos: "bottom-6 right-2 rotate-[-10deg]" 
        }
      ],
      [
        { icon: <div className="bg-[#adff2f] text-black px-4 py-1.5 text-sm font-black italic tracking-tighter">PARENTAL ADVISORY</div>, pos: "bottom-[-8px] right-[-15px] rotate-[-2deg]" },
        { icon: <Zap size={28} fill="#adff2f" className="text-black" />, pos: "top-4 left-[-12px]" }
      ],
      [
        { icon: <Disc size={52} className="text-[#adff2f] animate-pulse" />, pos: "top-4 right-[-20px]" },
        { icon: <Bomb size={28} className="text-[#adff2f]" />, pos: "bottom-8 left-[-12px]" }
      ]
    ]
  }
};

export default function App() {
  const [stream, setStream] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [activeTheme, setActiveTheme] = useState('memphis');
  const [isFinished, setIsFinished] = useState(false);
  const [html2canvasReady, setHtml2canvasReady] = useState(false);
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    startCamera();

    // Memuat html2canvas secara dinamis karena import bermasalah di lingkungan ini
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    script.async = true;
    script.onload = () => setHtml2canvasReady(true);
    document.head.appendChild(script);

    return () => {
      if (stream) stream.getTracks().forEach(track => track.stop());
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 }, 
          height: { ideal: 720 },
          facingMode: "user"
        },
        audio: false 
      });
      setStream(mediaStream);
      if (videoRef.current) videoRef.current.srcObject = mediaStream;
    } catch (err) {
      console.error("Gagal akses kamera:", err);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const targetRatio = 3 / 4;
      
      let sWidth = video.videoWidth;
      let sHeight = video.videoHeight;
      let sx = 0;
      let sy = 0;

      if (sWidth / sHeight > targetRatio) {
        sWidth = sHeight * targetRatio;
        sx = (video.videoWidth - sWidth) / 2;
      } else {
        sHeight = sWidth / targetRatio;
        sy = (video.videoHeight - sHeight) / 2;
      }

      canvas.width = 750;
      canvas.height = 1000;

      context.save();
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
      context.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);
      context.restore();

      return canvas.toDataURL('image/png');
    }
    return null;
  };

  const startCaptureSequence = async () => {
    setIsCapturing(true);
    setPhotos([]);
    setIsFinished(false);
    const newPhotos = [];
    for (let i = 0; i < 3; i++) {
      for (let c = 3; c > 0; c--) {
        setCountdown(c);
        await new Promise(r => setTimeout(r, 1000));
      }
      setCountdown(0);
      const photo = takePhoto();
      if (photo) {
        newPhotos.push(photo);
        setPhotos([...newPhotos]);
      }
      if (i < 2) await new Promise(r => setTimeout(r, 1500));
    }
    setIsCapturing(false);
    setIsFinished(true);
  };

  const downloadStrip = async () => {
    if (stripRef.current && window.html2canvas) {
      try {
        const canvas = await window.html2canvas(stripRef.current, {
          scale: 3, 
          useCORS: true,
          backgroundColor: null
        });
        const link = document.createElement('a');
        link.download = `pictples-${activeTheme}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error("Gagal mendownload:", error);
      }
    } else {
      console.warn("Library html2canvas belum siap.");
    }
  };

  const reset = () => {
    setPhotos([]);
    setIsFinished(false);
    setCountdown(0);
  };

  const theme = THEMES[activeTheme];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        <div className="space-y-6">
          <header className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center shadow-lg rotate-3">
              <Camera size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none text-black font-poppins">PICTPLES</h1>
              <p className="text-sm font-medium text-zinc-500 mt-1 uppercase tracking-widest font-poppins">set and say cheese!</p>
            </div>
          </header>

          <div className="flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[3/4] bg-black rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              {!isFinished ? (
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  className="w-full h-full object-cover -scale-x-100" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-white flex-col gap-4 text-center px-6">
                  <Star className="text-yellow-400 animate-bounce" size={48} fill="currentColor" />
                  <div>
                    <p className="font-bold text-xl font-poppins">Selesai!</p>
                    <p className="text-zinc-400 text-sm italic font-poppins">Cek strip kamu di sebelah kanan.</p>
                  </div>
                </div>
              )}
              
              {!isCapturing && !isFinished && (
                <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none"></div>
              )}

              {countdown > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                  <span className="text-white text-[10rem] font-black animate-ping drop-shadow-2xl font-poppins">{countdown}</span>
                </div>
              )}
              {countdown === 0 && isCapturing && (
                <div className="absolute inset-0 bg-white animate-flash pointer-events-none opacity-0 z-50"></div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {!isCapturing && !isFinished && (
              <button onClick={startCaptureSequence} disabled={!stream} className="flex items-center gap-2 px-10 py-5 bg-black text-white rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl disabled:opacity-50 font-poppins">
                <Zap size={20} fill="currentColor" className="text-yellow-400" /> AMBIL FOTO
              </button>
            )}
            {isFinished && (
              <>
                <button 
                  onClick={downloadStrip} 
                  disabled={!html2canvasReady}
                  className="flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:scale-105 active:scale-95 shadow-lg font-poppins disabled:opacity-50"
                >
                  <Download size={20} /> SIMPAN STRIP
                </button>
                <button onClick={reset} className="flex items-center gap-2 px-6 py-4 bg-zinc-200 text-black rounded-full font-bold hover:bg-zinc-300 font-poppins">
                  <RefreshCw size={20} /> FOTO ULANG
                </button>
              </>
            )}
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 space-y-4">
            <p className="font-bold text-xs uppercase tracking-widest text-zinc-400 flex items-center gap-2 font-poppins">
              <Palette size={14}/> Pilih Tema Frame
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {Object.entries(THEMES).map(([key, t]) => (
                <button key={key} onClick={() => setActiveTheme(key)} className={`px-5 py-2.5 rounded-xl border-2 transition-all font-bold text-sm font-poppins ${activeTheme === key ? 'border-black bg-black text-white shadow-md scale-105' : 'border-zinc-100 bg-zinc-50 hover:border-zinc-300 text-zinc-500'}`}>
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Photobooth Strip Preview - DIPERBESAR */}
        <div className="flex justify-center sticky top-8">
          <div ref={stripRef} className={`p-8 w-[340px] transition-all duration-700 ease-in-out ${theme.container} flex flex-col gap-6 shadow-2xl items-center`}>
            {[0, 1, 2].map((i) => (
              <div key={i} className={`w-full aspect-[3/4] bg-zinc-100 overflow-visible relative group ${theme.slot}`}>
                {photos[i] ? (
                  <img 
                    src={photos[i]} 
                    alt={`Capture ${i+1}`} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-300">
                    <Camera size={48} strokeWidth={1} className="opacity-10" />
                  </div>
                )}
                
                {theme.stickers[i].map((sticker, sIdx) => (
                  <div 
                    key={sIdx} 
                    className={`absolute z-10 drop-shadow-2xl pointer-events-none transition-transform hover:scale-125 ${sticker.pos}`}
                  >
                    {sticker.icon}
                  </div>
                ))}
              </div>
            ))}

            {/* Footer Strip */}
            <div className={`w-full mt-2 flex flex-col items-center justify-center text-center pb-6`}>
              <div className={`h-2 w-24 mb-8 opacity-40 rounded-full ${theme.accent}`}></div>
              
              <div className={`mb-8 flex justify-center items-center w-full`}>
                <span className={`text-4xl leading-none break-words ${theme.font} ${theme.labelContainer}`}>
                  {theme.label}
                </span>
              </div>
              
              <div className="flex items-center justify-center">
                 <div className={`w-12 h-12 rounded-full ${theme.accent} flex items-center justify-center shadow-lg border-2 border-black/10`}>
                    <Star size={22} className="text-black fill-current" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} className="hidden" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Diplomata+SC&family=Ewert&family=Kavoon&family=Sekuya&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
        
        .font-cherry { font-family: 'Cherry Bomb One', system-ui; }
        .font-ewert { font-family: 'Ewert', system-ui; }
        .font-diplomata { font-family: 'Diplomata SC', serif; }
        .font-kavoon { font-family: 'Kavoon', system-ui; }
        .font-sekuya { font-family: 'Sekuya', system-ui; }
        .font-poppins { font-family: 'Poppins', sans-serif; }

        /* Memphis Pattern inspired by the uploaded image */
        .bg-memphis-pattern {
          background-color: #f5f5f5;
          background-image: 
            linear-gradient(45deg, #ff4d4d 25%, transparent 25%), 
            linear-gradient(-45deg, #4d79ff 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #4caf50 75%), 
            linear-gradient(-45deg, transparent 75%, #ffeb3b 75%);
          background-size: 80px 80px;
          background-position: 0 0, 40px 0, 40px -40px, 0px 40px;
          position: relative;
        }

        .bg-memphis-pattern::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10q15 0 15 15t-15 15-15-15 15-15z' fill='none' stroke='%23000' stroke-width='2'/%3E%3Crect x='60' y='60' width='20' height='20' fill='%23ffeb3b' stroke='%23000' stroke-width='2'/%3E%3Cpath d='M80 20 L90 30 M90 20 L80 30' stroke='%234d79ff' stroke-width='3'/%3E%3Ccircle cx='30' cy='80' r='10' fill='%234caf50' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E");
          background-size: 120px 120px;
          opacity: 0.8;
          z-index: 0;
        }

        @keyframes flash { 0% { opacity: 0; } 20% { opacity: 1; } 100% { opacity: 0; } }
        .animate-flash { animation: flash 0.4s ease-out; }
      `}</style>
    </div>
  );
}