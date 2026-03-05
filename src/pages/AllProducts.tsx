import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { allProducts } from "../data/products";
import { AddToCartModal, InteractiveProduct } from "../components/ui/AddToCartModal";

const categories = ["All", "Outerwear", "Tops", "Bottoms", "Accessories"];

export default function AllProducts() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState<InteractiveProduct | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (product: any) => {
        setSelectedProduct({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category
        });
        setIsModalOpen(true);
    };

    const filteredProducts = activeCategory === "All"
        ? allProducts
        : allProducts.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#f4f2ee] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-[#f4f2ee]">

            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-[#f4f2ee]/90 backdrop-blur-md z-50 px-6 py-6 flex items-center justify-between border-b border-black/5">
                <div className="flex-1 flex items-center space-x-6">
                    <Link to="/" className="hover:opacity-60 transition-opacity flex items-center space-x-2 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Back</span>
                    </Link>
                </div>

                <div className="flex-1 flex justify-center">
                    <Link to="/">
                        <h1 className="text-xl font-serif tracking-tighter lowercase font-bold cursor-pointer">
                            truce.
                        </h1>
                    </Link>
                </div>

                <div className="flex-1 flex justify-end space-x-6">
                    <button className="hover:scale-110 transition-transform opacity-60 hover:opacity-100">
                        <Search size={18} strokeWidth={1.5} />
                    </button>
                    <button className="hover:scale-110 transition-transform opacity-60 hover:opacity-100 relative">
                        <ShoppingBag size={18} strokeWidth={1.5} />
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col">

                {/* Page Header & Categories */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-8 md:space-y-0 relative z-40">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif tracking-tighter"
                        >
                            Collection
                        </motion.h2>
                        <p className="text-xs uppercase tracking-[0.3em] font-bold mt-4 opacity-50">
                            {filteredProducts.length} Items Available
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 md:gap-8 justify-start md:justify-end">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-[10px] uppercase font-bold tracking-[0.2em] relative transition-colors ${activeCategory === cat ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70'
                                    }`}
                            >
                                {cat}
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeCategoryIndicator"
                                        className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-[#1a1a1a]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                key={product.id}
                                className="group cursor-pointer flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="bg-white border-[1.5px] border-[#e8e6df] h-[450px] md:h-[500px] flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-transparent">

                                    {/* Subtle Detail */}
                                    <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-[#000000]/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#f4f2ee]/50 backdrop-blur-md">
                                        <ShoppingBag size={12} strokeWidth={1.5} className="opacity-60" />
                                    </div>

                                    {/* Product Image */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="max-w-[85%] max-h-[85%] object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                                        referrerPolicy="no-referrer"
                                    />

                                    {/* Category Tag */}
                                    <div className="absolute bottom-6 left-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <span className="text-[9px] uppercase tracking-widest font-bold bg-[#1a1a1a] text-white px-3 py-1.5">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="mt-6 flex flex-col items-start w-full">
                                    <div className="flex justify-between items-start w-full gap-4">
                                        <h3 className="text-sm font-serif tracking-wide text-[#1a1a1a] group-hover:opacity-70 transition-opacity">
                                            {product.name}
                                        </h3>
                                        <span className="text-xs font-sans tracking-widest opacity-60 shrink-0">
                                            {product.price}
                                        </span>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleOpenModal(product);
                                        }}
                                        className="mt-4 px-6 py-2.5 bg-[#1a1a1a] hover:bg-[#1a1a1a]/80 text-white text-[10px] uppercase font-bold tracking-widest rounded-full transition-all shadow-md hover:shadow-lg w-fit"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="py-32 flex justify-center items-center w-full">
                        <p className="text-sm text-[#1a1a1a]/50 uppercase tracking-widest font-bold">
                            No products found in this category.
                        </p>
                    </div>
                )}
            </main>

            {/* Add to Cart Modal */}
            <AddToCartModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={selectedProduct}
            />
        </div>
    );
}
