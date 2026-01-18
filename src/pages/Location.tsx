import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../components/ModernPageHeader';
import Contact from '../components/Contact';
import { MapPin, Maximize, Sun, Wind, Users } from 'lucide-react';

const LocationPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('location.seo.title')}</title>
                <meta name="description" content={t('location.seo.description')} />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/location" />
            </Helmet>

            <ModernPageHeader
                title={t('location.header.title')}
                subtitle={t('location.header.subtitle')}
            />

            {/* Section 1: The Building */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                        <div className="space-y-6">
                            <span className="text-rosental-500 font-serif italic text-2xl block">{t('location.intro.tag')}</span>
                            <h2 className="text-4xl font-serif text-rosental-950 leading-tight">
                                {t('location.intro.title')}
                            </h2>
                            <p className="text-stone-600 text-lg leading-relaxed">
                                {t('location.intro.text')}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1541447231462-8e0c904975ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Fassade Detail"
                                className="w-full h-64 object-cover rounded-sm mt-8"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1594950961448-6b8017364132?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Innenhof"
                                className="w-full h-64 object-cover rounded-sm"
                            />
                        </div>
                    </div>

                    {/* Rooms Grid */}
                    <div className="space-y-32">
                        {/* Room 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                        >
                            <div className="order-2 md:order-1">
                                <h3 className="text-3xl font-serif text-rosental-900 mb-4">{t('location.rooms.0.title')}</h3>
                                <p className="text-stone-600 mb-6 leading-relaxed">
                                    {t('location.rooms.0.desc')}
                                </p>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-stone-500 mb-8">
                                    <div className="flex items-center gap-2"><Maximize className="w-4 h-4 text-rosental-400" /> {t('location.rooms.0.details.0')}</div>
                                    <div className="flex items-center gap-2"><Sun className="w-4 h-4 text-rosental-400" /> {t('location.rooms.0.details.1')}</div>
                                    <div className="flex items-center gap-2"><Users className="w-4 h-4 text-rosental-400" /> {t('location.rooms.0.details.2')}</div>
                                    <div className="flex items-center gap-2"><Wind className="w-4 h-4 text-rosental-400" /> {t('location.rooms.0.details.3')}</div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 h-[400px] bg-stone-100 rounded-sm overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                    alt="Großer Festsaal"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* Room 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                        >
                            <div className="h-[400px] bg-stone-100 rounded-sm overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                    alt="Kaminzimmer"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif text-rosental-900 mb-4">{t('location.rooms.1.title')}</h3>
                                <p className="text-stone-600 mb-6 leading-relaxed">
                                    {t('location.rooms.1.desc')}
                                </p>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-stone-500 mb-8">
                                    <div className="flex items-center gap-2"><Maximize className="w-4 h-4 text-rosental-400" /> {t('location.rooms.1.details.0')}</div>
                                    <div className="flex items-center gap-2"><Sun className="w-4 h-4 text-rosental-400" /> {t('location.rooms.1.details.1')}</div>
                                    <div className="flex items-center gap-2"><Users className="w-4 h-4 text-rosental-400" /> {t('location.rooms.1.details.2')}</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Room 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                        >
                            <div className="order-2 md:order-1">
                                <h3 className="text-3xl font-serif text-rosental-900 mb-4">{t('location.rooms.2.title')}</h3>
                                <p className="text-stone-600 mb-6 leading-relaxed">
                                    {t('location.rooms.2.desc')}
                                </p>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-stone-500 mb-8">
                                    <div className="flex items-center gap-2"><Maximize className="w-4 h-4 text-rosental-400" /> {t('location.rooms.2.details.0')}</div>
                                    <div className="flex items-center gap-2"><Sun className="w-4 h-4 text-rosental-400" /> {t('location.rooms.2.details.1')}</div>
                                    <div className="flex items-center gap-2"><Users className="w-4 h-4 text-rosental-400" /> {t('location.rooms.2.details.2')}</div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 h-[400px] bg-stone-100 rounded-sm overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                    alt="Innenhof"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-rosental-50 py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif mb-8">{t('location.visit.title')}</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto mb-12">
                        {t('location.visit.text')}
                    </p>
                    <div className="flex justify-center items-center gap-4 text-stone-900 font-medium">
                        <MapPin className="w-5 h-5 text-rosental-500" />
                        Rathausstrasse 65-69, 52222 Stolberg (Rhld.)
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default LocationPage;
