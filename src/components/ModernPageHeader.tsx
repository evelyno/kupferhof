import React from 'react';
import { motion } from 'framer-motion';

interface ModernPageHeaderProps {
    title: string;
    subtitle?: string;
    image?: string; // Optional side image or small accent
}

const ModernPageHeader: React.FC<ModernPageHeaderProps> = ({ title, subtitle, image }) => {
    return (
        <header className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden bg-rosental-50">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-rosental-500 font-medium tracking-widest uppercase text-xs md:text-sm mb-4 block"
                        >
                            Kupferhof Rosental
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-serif text-rosental-900 leading-tight mb-6"
                        >
                            {title}
                        </motion.h1>
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg md:text-xl text-stone-500 font-light leading-relaxed max-w-lg"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>

            {/* Decorative background element - distinct from the hero image */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-rosental-100/30 to-transparent pointer-events-none -z-0" />
        </header>
    );
};

export default ModernPageHeader;
