import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Newsletter() {
    return (
        <div className="min-h-screen bg-black font-sans text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-white selection:text-black px-4 pt-24 pb-12">

            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-6 z-50 mix-blend-difference pointer-events-none">
                <Link to="/music" className="flex items-center space-x-2 group hover:opacity-70 transition-opacity pointer-events-auto">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs uppercase font-bold tracking-widest">Back to Music</span>
                </Link>
            </nav>

            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative z-10"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
                        STAY CONNECTED
                    </h1>
                    <p className="text-white/40 text-sm tracking-wide">
                        Join the Kannon Entertainment newsletter to get exclusive updates on new releases, tours, and merch.
                    </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold tracking-wider text-white/50 uppercase ml-1">First Name</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-transparent transition-all"
                                placeholder="John"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold tracking-wider text-white/50 uppercase ml-1">Last Name</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-transparent transition-all"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold tracking-wider text-white/50 uppercase ml-1">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-transparent transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold tracking-wider text-white/50 uppercase ml-1">Phone Number</label>
                        <input
                            type="tel"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-transparent transition-all"
                            placeholder="(555) 123-4567"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-4 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-black font-bold uppercase tracking-widest rounded-xl px-6 py-4 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-shadow"
                    >
                        Subscribe Now
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
