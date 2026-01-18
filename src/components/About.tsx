import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// ...

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24 bg-rosental-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-rosental-500 font-medium tracking-widest uppercase text-sm mb-4 block">{t('about.tag')}</span>
                        <h2 className="text-4xl md:text-5xl font-medium text-stone-900 font-serif tracking-tight mb-6">
                            {t('about.title')}
                        </h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            {t('about.p1')}
                        </p>
                        <p className="text-stone-500 mb-8 leading-relaxed">
                            {t('about.p2')}
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-3xl font-serif text-rosental-500 mb-1">{t('about.stats.history.val')}</h4>
                                <p className="text-sm text-stone-400 uppercase tracking-wide">{t('about.stats.history.label')}</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-rosental-500 mb-1">{t('about.stats.park.val')}</h4>
                                <p className="text-sm text-stone-400 uppercase tracking-wide">{t('about.stats.park.label')}</p>
                            </div>
                        </div>

                        <a href="#contact-form" className="inline-flex items-center px-8 py-4 bg-stone-900 text-white rounded-full hover:bg-rosental-500 transition-colors duration-300">
                            {t('about.cta')}
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </motion.div>

                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Brautpaar bei einer freien Trauung im Garten des Kupferhofs"
                                className="rounded-2xl w-full h-80 object-cover mt-12 shadow-xl"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Festlich gedeckte Tafel beim Dinner im Kupferhof Rosental"
                                className="rounded-2xl w-full h-64 object-cover shadow-xl"
                                loading="lazy"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-rosental-100 rounded-full -z-10 blur-2xl opacity-60" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
