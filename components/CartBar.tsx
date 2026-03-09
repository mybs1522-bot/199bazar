import React from 'react';
import { ShoppingCart, ArrowRight, Sparkles } from 'lucide-react';

interface CartBarProps {
    itemCount: number;
    total: number;
    onCheckout: () => void;
    onViewCart: () => void;
}

export const CartBar: React.FC<CartBarProps> = ({ itemCount, total, onCheckout, onViewCart }) => {
    if (itemCount === 0) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-[slideUp_0.3s_ease-out]">
            <style>{`
        @keyframes slideUp {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>

            <div className="bg-gray-900 border-t border-gray-800 shadow-[0_-8px_30px_rgba(0,0,0,0.3)]">
                <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">

                    {/* Left: Cart Summary */}
                    <button
                        onClick={onViewCart}
                        className="flex items-center gap-3 text-white hover:text-brand-accent transition-colors"
                    >
                        <div className="relative">
                            <ShoppingCart size={22} />
                            <div className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {itemCount}
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-bold">{itemCount} course{itemCount > 1 ? 's' : ''} selected</div>
                            <div className="text-xs text-gray-400">Tap to view cart</div>
                        </div>
                    </button>

                    {/* Right: Total + Checkout */}
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Total</div>
                            <div className="text-xl font-display font-bold text-white">₹{total.toLocaleString()}</div>
                        </div>
                        <button
                            onClick={onCheckout}
                            className="bg-brand-primary hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-glow hover:shadow-glow-lg text-sm md:text-base"
                        >
                            <span className="sm:hidden font-display text-lg">₹{total.toLocaleString()}</span>
                            <span>Checkout</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
