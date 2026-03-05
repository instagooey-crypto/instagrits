import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Tickets() {
    return (
        <div className="min-h-screen bg-[#020a14] flex flex-col font-sans text-white overflow-y-auto no-scrollbar relative selection:bg-white selection:text-[#020a14]">
            {/* Film Grain Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full flex items-center justify-between px-6 py-6 z-50 mix-blend-difference">
                <Link to="/" className="flex items-center space-x-2 group hover:opacity-70 transition-opacity">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">BACK</span>
                </Link>
                <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">
                    LIVE ARCHIVE
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center relative px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center space-y-10 w-full max-w-4xl"
                >
                    <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.8em] font-bold text-white/50">
                            TRUCE COLLECTIVE PRESENTS
                        </p>

                        <h1 className="text-7xl md:text-9xl font-serif leading-[0.8] tracking-tighter">
                            World <br />
                            <span className="italic font-light opacity-80">Tour.</span>
                        </h1>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />

                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="flex flex-col items-center space-y-4 opacity-50 font-light tracking-widest text-[11px] uppercase"
                        >
                            <p>Loading routing itinerary...</p>
                            <p>Securing venues...</p>
                            <div className="mt-8 px-6 py-2 border border-white/20 text-white/40">
                                TICKETS UNAVAILABLE
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </main>

            {/* Subtle glow effect */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[40vh] bg-red-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen -z-0"></div>
        </div>
    );
}
