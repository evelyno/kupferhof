import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    image: string;
    title: string;
    subtitle: string;
    tag?: string;
    description?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ image, title, subtitle, tag, description }) => {
    return (
        <div className="relative w-full h-[85vh] overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt={title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {tag && (
                        <span className="text-xs md:text-sm font-medium text-white/90 tracking-[0.2em] uppercase mb-6 border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm inline-block">
                            {tag}
                        </span>
                    )}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.1] mb-8 font-serif">
                        <span dangerouslySetInnerHTML={{ __html: title }} />
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light mb-10 leading-relaxed mx-auto">
                        {subtitle}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="#content" className="px-8 py-3.5 bg-white text-stone-900 rounded-full font-medium hover:bg-rosental-50 transition-colors shadow-xl">
                            Mehr erfahren
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                <ArrowDown className="w-6 h-6" />
            </div>
        </div>
    );
};

export default PageHero;
