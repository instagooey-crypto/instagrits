import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, SkipBack, SkipForward, Pause, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { HeroGeometric } from "../components/ui/shape-landing-hero";
import { GlowingButton } from "../components/ui/glowing-button";

export default function Music() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div ref={containerRef} className="bg-black font-sans text-white h-screen overflow-y-auto selection:bg-white selection:text-black">

            {/* Fixed Nav */}
            <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-6 z-50 mix-blend-difference pointer-events-none">
                <Link to="/" className="flex items-center space-x-2 group hover:opacity-70 transition-opacity pointer-events-auto">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs uppercase font-bold tracking-widest">Visit Kannon Entertainment</span>
                </Link>
            </nav>

            {/* --- SECTION 1: HERO --- */}
            <section className="relative w-full min-h-[65svh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden shrink-0 snap-center pt-24 md:pt-0 pb-12 md:pb-0">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540039155732-d688fa5b078a?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity brightness-75 contrast-125" style={{ filter: 'hue-rotate(190deg) saturate(2)' }}></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="relative z-10 w-full px-4 text-center flex flex-col items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[12vw] md:text-[150px] font-black tracking-tighter leading-none text-[#CFE4F9] flex items-start justify-center"
                    >
                        KANNON
                        <span className="text-[4vw] md:text-[50px] ml-2 mt-4">©</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[4vw] md:text-[40px] font-black tracking-widest uppercase text-white/80 mt-2"
                    >
                        Entertainment
                    </motion.h2>
                    <motion.video
                        autoPlay
                        loop
                        muted
                        playsInline
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        src="/kannon_icon.mp4"
                        className="w-48 md:w-72 h-auto mt-6 object-contain mix-blend-screen"
                    />

                    <GlowingButton />

                    {/* Animated Glowing Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.4, 1, 0.4],
                            y: [0, 15, 0]
                        }}
                        transition={{
                            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="mt-16 md:mt-20 relative flex flex-col items-center justify-center cursor-pointer pointer-events-auto"
                        onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#3B82F6] opacity-40 blur-xl rounded-full animate-pulse"></div>
                        <ChevronDown className="w-10 h-10 relative z-10 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                    </motion.div>
                </div>
            </section>

            {/* --- SECTION 2: STREAM OUR ARTISTS / PARTICLE TEXT --- */}
            <HeroGeometric />

            {/* --- SECTION 3: SPOTIFY MOCKUP --- */}
            <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center shrink-0 snap-center overflow-hidden p-4 lg:p-12 border-t border-white/5">

                {/* Background MUSIC Text Removed */}

                {/* Phone Mockup (Spotify Player) */}
                <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                    <motion.div
                        initial={{ y: 100, opacity: 0, rotateZ: -5 }}
                        whileInView={{ y: 0, opacity: 1, rotateZ: 2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        className="w-[300px] h-[600px] md:w-[340px] md:h-[680px] bg-gradient-to-b from-[#2a2a2a] to-black border-4 md:border-8 border-neutral-900 rounded-[3rem] shadow-2xl overflow-hidden relative flex flex-col"
                    >
                        {/* Fake App Header */}
                        <div className="w-full p-6 pt-12 flex justify-center items-center">
                            <h3 className="text-xs font-bold tracking-widest uppercase opacity-70">Now Playing from Kannon</h3>
                        </div>

                        {/* Album Art */}
                        <div className="w-full px-6 mt-4">
                            <div className="w-full aspect-square bg-[#111] rounded-lg shadow-2xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-[url('/kannon_featured_artist.png')] bg-cover bg-center"></div>
                            </div>
                        </div>

                        {/* Song Info */}
                        <div className="w-full px-6 mt-8">
                            <h2 className="text-2xl font-bold tracking-tight">Neon Dreams</h2>
                            <p className="text-sm opacity-60 mt-1">MVRK</p>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full px-6 mt-6">
                            <div className="w-full h-1 bg-white/20 rounded-full relative">
                                <div className="absolute top-0 left-0 h-full w-1/3 bg-white rounded-full"></div>
                            </div>
                            <div className="w-full flex justify-between mt-2 text-[10px] opacity-60">
                                <span>1:24</span>
                                <span>3:45</span>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="w-full px-6 mt-4 flex items-center justify-center gap-8 flex-1 pb-8">
                            <button className="text-white hover:opacity-70 transition-opacity">
                                <SkipBack size={28} fill="currentColor" />
                            </button>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform"
                            >
                                {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                            </button>
                            <button className="text-white hover:opacity-70 transition-opacity">
                                <SkipForward size={28} fill="currentColor" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-md lg:mt-32 px-4 border-l-2 md:border-l-4 border-[#CFE4F9] pl-6 md:pl-10 py-4"
                    >
                        <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                            Discover<br />
                            New<br />
                            <span className="text-[#CFE4F9]">Music</span>
                        </h3>
                        <p className="text-xs md:text-sm font-medium uppercase tracking-widest leading-relaxed opacity-70 mb-8">
                            Listen to our featured artists directly. Follow their journey, stream their latest hits, and experience the sound of Kannon Entertainment.
                        </p>

                        <a href="https://spotify.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#1DB954] text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300">
                            <Play size={16} fill="currentColor" />
                            Listen on Spotify
                        </a>
                    </motion.div>

                </div>
            </section>

            {/* --- SECTION 4: YOUTUBE MUSIC VIDEOS --- */}
            <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center shrink-0 snap-center border-t border-white/5 py-24">
                <div className="w-full max-w-6xl px-4 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/3 flex flex-col justify-center"
                    >
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
                            Watch<br />
                            The<br />
                            <span className="text-[#CFE4F9]">Vision</span>
                        </h2>
                        <p className="text-xs md:text-sm font-medium uppercase tracking-widest leading-relaxed opacity-70 mb-8">
                            Dive deeper into the artistry. Experience the visual world of Kannon's roster through our curated selection of music videos.
                        </p>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="inline-block w-max text-xs font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:text-[#CFE4F9] hover:border-[#CFE4F9] transition-colors">
                            Subscribe to our channel
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-2/3 aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative group"
                    >
                        {/* Generic Music Video Placholder iframe */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/7p7Ln785Bew?autoplay=0&mute=0&controls=1&showinfo=0&rel=0"
                            title="Alan Walker - Fade [NCS Release]"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </motion.div>

                </div>
            </section>

        </div>
    );
}

