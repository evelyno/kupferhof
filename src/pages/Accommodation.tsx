import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../components/ModernPageHeader';
import Contact from '../components/Contact';
import { Wifi, Coffee, Bath, Moon } from 'lucide-react';

const Accommodation = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('accommodation.seo.title')}</title>
                <meta name="description" content={t('accommodation.seo.description')} />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/uebernachten" />
            </Helmet>

            <ModernPageHeader
                title={t('accommodation.header.title')}
                subtitle={t('accommodation.header.subtitle')}
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Intro */}
                    <div className="max-w-3xl mx-auto text-center mb-20 text-stone-600">
                        <p className="text-xl leading-relaxed">
                            {t('accommodation.intro')}
                        </p>
                    </div>

                    {/* Suite 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                                alt="Hochzeitssuite"
                                className="w-full h-[500px] object-cover rounded-sm shadow-xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-medium tracking-widest text-rosental-500 uppercase mb-4 block">{t('accommodation.suite.tag')}</span>
                            <h2 className="text-4xl font-serif text-rosental-950 mb-6">{t('accommodation.suite.title')}</h2>
                            <p className="text-stone-600 mb-8 leading-relaxed">
                                {t('accommodation.suite.desc')}
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-stone-500">
                                <div className="flex items-center gap-2"><Wifi className="w-4 h-4" /> {t('accommodation.suite.features.0')}</div>
                                <div className="flex items-center gap-2"><Bath className="w-4 h-4" /> {t('accommodation.suite.features.1')}</div>
                                <div className="flex items-center gap-2"><Coffee className="w-4 h-4" /> {t('accommodation.suite.features.2')}</div>
                                <div className="flex items-center gap-2"><Moon className="w-4 h-4" /> {t('accommodation.suite.features.3')}</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Suite 2 (Reversed) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <span className="text-sm font-medium tracking-widest text-rosental-500 uppercase mb-4 block">{t('accommodation.guest.tag')}</span>
                            <h2 className="text-4xl font-serif text-rosental-950 mb-6">{t('accommodation.guest.title')}</h2>
                            <p className="text-stone-600 mb-8 leading-relaxed">
                                {t('accommodation.guest.desc')}
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-stone-500">
                                <div className="flex items-center gap-2"><Wifi className="w-4 h-4" /> {t('accommodation.guest.features.0')}</div>
                                <div className="flex items-center gap-2"><Bath className="w-4 h-4" /> {t('accommodation.guest.features.1')}</div>
                                <div className="flex items-center gap-2"><Coffee className="w-4 h-4" /> {t('accommodation.guest.features.2')}</div>
                                <div className="flex items-center gap-2"><Moon className="w-4 h-4" /> {t('accommodation.guest.features.3')}</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1616594039964-40891f947852?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                                alt="Gästezimmer"
                                className="w-full h-[500px] object-cover rounded-sm shadow-xl"
                            />
                        </motion.div>
                    </div>

                </div>
            </section>

            <Contact />
        </>
    );
};

export default Accommodation;
