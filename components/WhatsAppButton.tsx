import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
    visible?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ visible = true }) => {
    if (!visible) return null;
    const phoneNumber = '918454015333';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi, I have a question about the design courses.`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 group"
            aria-label="Chat on WhatsApp"
        >
            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                Need help? Chat with us
            </span>

            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></span>

            {/* Main button */}
            <div className="relative bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center">
                <MessageCircle size={24} className="md:w-7 md:h-7" />

                {/* Unread dot */}
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full animate-bounce"></span>
            </div>
        </a>
    );
};
