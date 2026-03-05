import { useState } from "react";
import { motion } from "motion/react";
import { ShoppingBag, User, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AddToCartModal, InteractiveProduct } from "../components/ui/AddToCartModal";

export default function Home() {
    const [selectedProduct, setSelectedProduct] = useState<InteractiveProduct | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (product: any) => {
        setSelectedProduct({
            id: product.id,
            name: product.label,
            price: product.price,
            image: product.image
        });
        setIsModalOpen(true);
    };

    const bgImage = "https://lh3.googleusercontent.com/d/1nz1XQhwI-EBcuXgrXHZjyzkDMqWuql49";

    const featuredProducts = [
        { id: 1, label: "RED PAISLEY BACKPACK", price: "$85.00", image: "/products_bulk/transparent_1.png", crop: "object-[10%_center]" },
        { id: 2, label: "BLUE PAISLEY JACKET", price: "$120.00", image: "/products_bulk/transparent_2.png", crop: "object-[50%_20%]" },
        { id: 3, label: "RED LOGO TEE", price: "$250.00", image: "/products_bulk/transparent_3.png", crop: "object-[20%_20%]" },
        { id: 4, label: "GREEN STRIPED TRACK PANT", price: "$145.00", image: "/products_bulk/transparent_4.png", crop: "object-[20%_80%]" }
    ];

    return (
        <div className="min-h-screen bg-[#020a14] flex flex-col font-sans text-white overflow-y-auto no-scrollbar relative selection:bg-white selection:text-[#020a14]">
            {/* Film Grain Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Header / Nav */}
            <nav className="fixed top-0 w-full flex items-center justify-between px-4 py-4 z-50 mix-blend-difference">
                <div className="flex items-center space-x-4">
                    <ShoppingBag size={16} strokeWidth={1.5} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">BAG</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <span className="text-[10px] font-bold uppercase tracking-widest">ENTER SHOP</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col relative shrink-0">
                {/* Full Screen Background Image */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 1, scale: 1.05 }}
                        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full h-full overflow-hidden"
                    >
                        {/* Mobile Hero Video */}
                        <video
                            autoPlay
                            loop
                            muted={true}
                            playsInline
                            className="w-full h-[150vh] object-cover object-top opacity-85 transform -translate-y-[20vh] block md:hidden"
                        >
                            <source src="/hero_mobile_drive.mp4" type="video/mp4" />
                        </video>
                        {/* Desktop Hero Video */}
                        <video
                            src="/hero_video_desktop.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover object-center opacity-85 hidden md:block"
                        />

                        {/* Professional Studio Lighting Layers */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#020a14] via-transparent to-[#020a14]"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#020a14]/40 via-transparent to-[#020a14]/40"></div>

                        {/* Product Spotlight - Focused on the red backpack and sweatshirt area */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_45%,transparent_0%,#020a14_100%)] opacity-70 md:hidden"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020a14_120%)] opacity-80 hidden md:block"></div>

                        {/* Soft Studio Glow */}
                        <div className="absolute inset-0 bg-blue-400/5 mix-blend-screen"></div>

                        {/* Subtle Color Wash */}
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-color"></div>
                    </motion.div>
                </div>

                {/* Top Navigation */}
                <nav className="flex items-center justify-between px-6 py-8 md:px-16 z-40 relative">
                    <div className="flex-1">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl font-serif tracking-tighter lowercase font-bold"
                        >
                            truce.
                        </motion.h1>
                    </div>

                    <div className="hidden md:flex items-center space-x-12 text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">
                        {[
                            { name: 'Shop', path: '/products' },
                            { name: 'Music', path: '/music' },
                            { name: 'Tickets', path: '/tickets' },
                            { name: 'About', path: '#' },
                            { name: 'Contact', path: '#' }
                        ].map((item) => (
                            <Link key={item.name} to={item.path} className="hover:opacity-100 transition-all hover:tracking-[0.5em]">
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex-1 flex justify-end items-center space-x-6 md:space-x-8">
                        <button className="hover:scale-110 transition-transform opacity-60 hover:opacity-100">
                            <Search size={18} strokeWidth={1.5} />
                        </button>
                        <button className="hover:scale-110 transition-transform opacity-60 hover:opacity-100">
                            <User size={18} strokeWidth={1.5} />
                        </button>
                        <button className="hover:scale-110 transition-transform opacity-60 hover:opacity-100 relative">
                            <ShoppingBag size={18} strokeWidth={1.5} />
                        </button>
                    </div>
                </nav>

                {/* Main Hero Content */}
                <div className="flex-1 relative flex items-center justify-center px-6 md:px-16 z-20">
                    <div className="max-w-4xl w-full flex flex-col items-center text-center">

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center space-y-8"
                        >
                            <div className="space-y-4">
                                <motion.p
                                    initial={{ opacity: 0, letterSpacing: "0.2em" }}
                                    animate={{ opacity: 0.5, letterSpacing: "0.8em" }}
                                    transition={{ duration: 1.5, delay: 0.8 }}
                                    className="text-[9px] uppercase font-bold"
                                >
                                    Autumn / Winter 25
                                </motion.p>

                                <h2 className="text-7xl md:text-9xl font-serif leading-[0.85] tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                    Truce <br />
                                    <span className="italic font-light">Collections</span>
                                </h2>
                            </div>

                            <p className="text-sm md:text-base font-light opacity-60 max-w-md leading-relaxed tracking-wide">
                                A dialogue between raw texture and refined silhouette. <br className="hidden md:block" />
                                Engineered for the modern creative spirit.
                            </p>

                            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 pt-8">
                                <Link to="/products" className="relative group block">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative px-12 py-5 bg-gradient-to-r from-gray-900 to-black rounded-full border border-transparent flex items-center justify-center overflow-hidden shadow-2xl"
                                    >
                                        <div className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/80 opacity-80 group-hover:opacity-100 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"></div>
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="relative z-10 text-white font-medium tracking-widest uppercase text-xs">
                                            Explore Drop
                                        </span>
                                    </motion.div>
                                </Link>

                                <Link to="/music" className="flex items-center space-x-3 group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-1 group-hover:border-white transition-all">
                                        Music Sessions
                                    </span>
                                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Navigation (Hero Only) */}
                <div className="px-6 md:px-16 py-12 flex justify-center z-40 relative">
                    <div className="flex items-center space-x-12 md:space-x-24 bg-white/10 backdrop-blur-md border border-white/20 px-12 py-6 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        {[
                            { id: "01", label: "Apparel", path: "/products" },
                            { id: "02", label: "Music", path: "/music" },
                            { id: "03", label: "Tickets", path: "/tickets" }
                        ].map((item, idx) => (
                            <Link key={item.id} to={item.path} className={`flex items-center space-x-3 cursor-pointer group opacity-80 hover:opacity-100 transition-all scale-100 hover:scale-105`}>
                                <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-white drop-shadow-md">
                                    {item.label}
                                </span>
                                {idx === 0 && (
                                    <motion.div
                                        layoutId="dot"
                                        className="w-1.5 h-1.5 bg-white rounded-full drop-shadow-md"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blended Transparent Models Campaign */}
            <section className="w-full bg-[#f4f2ee] text-[#2c2c2c] pt-24 pb-12 px-6 md:px-12 flex flex-col items-center overflow-hidden">
                <div className="w-full max-w-[1400px] flex justify-center items-center relative px-4 md:px-0">

                    {/* Blended Model Image (Desktop only) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-[1400px] h-auto overflow-hidden items-center justify-center group z-10 hidden md:flex"
                    >
                        {/* Background subtle glow for center piece */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#d1cdc2] rounded-full blur-[100px] opacity-40 mix-blend-multiply pointer-events-none"></div>
                        <motion.img
                            whileHover={{ scale: 1.03, filter: 'contrast(1.05)' }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            src="/campaign/transparent_blended.png"
                            alt="Campaign Blended Models"
                            className="w-full h-auto object-contain object-center drop-shadow-2xl relative z-10"
                        />
                    </motion.div>

                    {/* Mobile Model Image (Mobile only) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full overflow-hidden flex items-center justify-center group z-10 md:hidden mt-8"
                    >
                        {/* Background subtle glow for center piece */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#d1cdc2] rounded-full blur-[80px] opacity-40 mix-blend-multiply pointer-events-none"></div>
                        <motion.img
                            whileHover={{ scale: 1.03, filter: 'contrast(1.05)' }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            src="/campaign/mobile-model-new.png"
                            alt="Campaign Mobile Models"
                            className="w-full h-auto object-contain object-center drop-shadow-2xl relative z-10"
                        />
                    </motion.div>

                </div>
            </section>

            {/* Featured Products (Reference Style 4-Row) */}
            <section className="w-full relative py-16 md:py-24 px-6 md:px-12 flex flex-col items-center flex-1 overflow-hidden" style={{ backgroundColor: '#020a14' }}>
                {/* Professional Studio Lighting Layers (Hero Gradient) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020a14] via-transparent to-[#020a14] z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#020a14]/40 via-transparent to-[#020a14]/40 z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_45%,transparent_0%,#020a14_100%)] opacity-70 md:hidden z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020a14_120%)] opacity-80 hidden md:block z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-blue-400/5 mix-blend-screen z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-color z-0 pointer-events-none"></div>

                {/* Header and Button Row */}
                <div className="w-full max-w-[1400px] mb-12 flex items-end justify-between relative z-10">
                    <div className="flex flex-col">
                        <p className="text-[10px] text-white/60 mb-1 font-sans">Shop Category</p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase font-sans">
                            Newest Arrivals
                        </h2>
                    </div>
                    <Link to="/products" className="bg-white text-[#020a14] border border-white hover:bg-transparent hover:text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] md:flex hidden">
                        Shop All
                    </Link>
                </div>

                {/* 4-Product Grid */}
                <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-16 px-4 md:px-0 relative z-10 mb-16">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="relative group cursor-pointer flex flex-col justify-end">
                            <div className={`w-full flex items-center justify-center pt-8 pb-4 shrink-0 transition-transform duration-700 group-hover:-translate-y-4 ${product.id === 4 ? "px-12 md:px-16" : ""
                                }`}>
                                <img
                                    src={product.image}
                                    alt={product.label}
                                    className={`w-full h-auto object-contain drop-shadow-2xl ${product.id === 4 ? "scale-90 opacity-90" : ""
                                        }`}
                                    referrerPolicy="no-referrer"
                                />
                            </div>

                            <div className="text-left space-y-1 mt-4 flex flex-col items-start">
                                <p className="text-sm font-sans text-white/90 tracking-wide">{product.label}</p>
                                <p className="text-[11px] font-bold font-sans text-white tracking-wider mb-2">{product.price}</p>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleOpenModal(product);
                                    }}
                                    className="mt-3 px-6 py-2.5 bg-white/10 hover:bg-white text-white hover:text-[#020a14] text-[10px] uppercase font-bold tracking-widest rounded-full transition-all border border-white/20 hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] w-fit"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Shop All Button (visible especially for mobile below grid, and matches top) */}
                <div className="w-full flex justify-center pb-8 relative z-10">
                    <Link to="/products" className="bg-white text-[#020a14] border border-white hover:bg-transparent hover:text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                        Shop All Drop
                    </Link>
                </div>
            </section>

            {/* Add to Cart Modal */}
            <AddToCartModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={selectedProduct}
            />
        </div >
    );
}
