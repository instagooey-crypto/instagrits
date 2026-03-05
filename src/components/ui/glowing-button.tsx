import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MousePointer2 } from "lucide-react";

export function GlowingButton() {
    return (
        <div className="relative inline-block mt-12 md:mt-16">
            {/* Glowing aura behind button - Added pulsating animation */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.95, 1.05, 0.95]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -inset-4 bg-[#3B82F6] blur-2xl rounded-full z-0 pointer-events-none"
            ></motion.div>

            <Link to="/newsletter" className="relative z-10 block group">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-10 py-5 bg-gradient-to-r from-[#000000] to-[#111111] rounded-full border border-transparent flex items-center justify-center overflow-hidden"
                >
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-full border border-[#3B82F6] group-hover:border-[#60A5FA] opacity-80 group-hover:opacity-100 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]"></div>

                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <span className="relative z-10 text-white font-medium tracking-widest uppercase text-sm md:text-base">
                        Join Newsletter
                    </span>
                </motion.div>

            </Link>
        </div>
    );
}
