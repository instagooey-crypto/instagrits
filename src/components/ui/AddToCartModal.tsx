import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

export interface InteractiveProduct {
    id: number | string;
    name: string;
    price: string;
    image: string;
    category?: string;
}

interface AddToCartModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: InteractiveProduct | null;
}

const sizes = ["S", "M", "L", "XL", "XXL"];

export function AddToCartModal({ isOpen, onClose, product }: AddToCartModalProps) {
    const [selectedSize, setSelectedSize] = useState<string>("L");
    const [quantity, setQuantity] = useState<number>(1);
    const [isAdded, setIsAdded] = useState(false);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setSelectedSize("L");
            setQuantity(1);
            setIsAdded(false);
        }
    }, [isOpen, product]);

    const handleAddToCart = () => {
        // In a real app, this would add to global cart state
        setIsAdded(true);
        setTimeout(() => {
            onClose();
            setIsAdded(false);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && product && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#020a14]/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Panel - Slide Over on Mobile, Centered Modal on Desktop */}
                    <div className="fixed inset-0 z-[101] flex items-end md:items-center justify-center p-0 md:p-6 pointer-events-none">
                        <motion.div
                            initial={{ y: "100%", opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: "100%", opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-[#0e1622] text-white w-full md:w-[600px] md:rounded-3xl rounded-t-3xl border md:border-white/10 overflow-hidden pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh]"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b border-white/5 relative">
                                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white/50">Add to Bag</h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={16} />
                                </button>

                                {/* Top highlight effect */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 overflow-y-auto no-scrollbar">
                                {/* Product Image Panel */}
                                <div className="w-full md:w-2/5 aspect-square bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-6 flex items-center justify-center relative border border-white/5">
                                    <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full mix-blend-screen scale-75 opacity-50"></div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain filter drop-shadow-2xl relative z-10"
                                    />
                                </div>

                                {/* Controls Panel */}
                                <div className="w-full md:w-3/5 flex flex-col justify-between space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-serif tracking-wide mb-2">{product.name}</h2>
                                        <p className="text-lg font-sans font-bold text-white/80">{product.price}</p>
                                    </div>

                                    {/* Size Selector */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Size</span>
                                            <button className="text-[10px] text-white/40 underline hover:text-white transition-colors">Size Guide</button>
                                        </div>
                                        <div className="flex gap-3">
                                            {sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => setSelectedSize(size)}
                                                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm transition-all duration-300 ${selectedSize === size
                                                            ? "bg-white text-[#020a14] font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                                            : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/5 hover:border-white/20"
                                                        }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quantity Selector */}
                                    <div className="space-y-4">
                                        <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Quantity</span>
                                        <div className="flex items-center space-x-4 bg-white/5 rounded-xl border border-white/10 w-fit p-1">
                                            <button
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30"
                                                disabled={quantity <= 1}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                                            <button
                                                onClick={() => setQuantity(quantity + 1)}
                                                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer / CTA */}
                            <div className="p-6 md:p-8 bg-black/40 border-t border-white/5 mt-auto">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={isAdded}
                                    className={`w-full py-5 rounded-full flex items-center justify-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 relative overflow-hidden ${isAdded
                                            ? "bg-green-500 text-[#020a14] shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                                            : "bg-white text-[#020a14] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                        }`}
                                >
                                    {isAdded ? (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="flex items-center space-x-2"
                                        >
                                            <ShoppingBag size={16} />
                                            <span>Added to Bag</span>
                                        </motion.div>
                                    ) : (
                                        <>
                                            <ShoppingBag size={16} />
                                            <span>Add - {(parseFloat(product.price.replace(/[^0-9.-]+/g, "")) * quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('$', product.price.charAt(0) === 'N' ? 'NGN ' : '$')}</span>
                                        </>
                                    )}

                                    {/* Shimmer effect */}
                                    {!isAdded && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-[150%] hover:animate-[shimmer_1.5s_infinite]"></div>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
