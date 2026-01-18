import React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const { t } = useTranslation();

    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-medium text-stone-900 font-serif tracking-tight mb-4">{t('portfolio.title')}</h2>
                    <p className="text-lg text-stone-500">{t('portfolio.subtitle')}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Glückliches Brautpaar beim Fotoshooting im Park des Kupferhofs"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-serif text-xl tracking-wide border-b border-white pb-1">{t('portfolio.overlay.gallery')}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer lg:mt-12"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Detailaufnahme der festlichen Tischdekoration im Ballsaal"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-serif text-xl tracking-wide border-b border-white pb-1">{t('portfolio.overlay.details')}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Romantische Hochzeitszeremonie unter freiem Himmel"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-serif text-xl tracking-wide border-b border-white pb-1">{t('portfolio.overlay.inspiration')}</span>
                        </div>
                    </motion.div>
                </div>

                <div className="text-center mt-12">
                    <a href="#contact-form" className="inline-flex items-center text-rosental-500 hover:text-rosental-600 font-medium transition-colors">
                        {t('portfolio.instagram')} <Instagram className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
