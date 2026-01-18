import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../components/ModernPageHeader';
import Contact from '../components/Contact';
import { Utensils, Wine, Coffee, ChefHat } from 'lucide-react';

const Catering = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('catering.seo.title')}</title>
                <meta name="description" content={t('catering.seo.description')} />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/kulinarik" />
            </Helmet>

            <ModernPageHeader
                title={t('catering.header.title')}
                subtitle={t('catering.header.subtitle')}
            />

            {/* Intro Sections */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                alt="Catering Presentation"
                                className="w-full rounded-sm shadow-xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-rosental-500 font-serif italic text-2xl mb-4 block">{t('catering.intro.tag')}</span>
                            <h2 className="text-4xl font-serif text-rosental-950 mb-6 leading-tight">
                                {t('catering.intro.title')}
                            </h2>
                            <p className="text-stone-600 mb-6 leading-relaxed">
                                {t('catering.intro.text1')}
                            </p>
                            <p className="text-stone-600 leading-relaxed mb-8">
                                {t('catering.intro.text2')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Food Grid */}
            <section className="py-24 bg-rosental-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: t('catering.food.0.title'), img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
                            { title: t('catering.food.1.title'), img: "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
                            { title: t('catering.food.2.title'), img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
                            { title: t('catering.food.3.title'), img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                    <h3 className="text-white font-serif text-xl">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Options Icons */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="w-16 h-16 mx-auto bg-rosental-50 rounded-full flex items-center justify-center mb-4 text-rosental-500">
                                <ChefHat className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-lg mb-2">{t('catering.features.0.title')}</h3>
                            <p className="text-sm text-stone-500">{t('catering.features.0.desc')}</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 mx-auto bg-rosental-50 rounded-full flex items-center justify-center mb-4 text-rosental-500">
                                <Utensils className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-lg mb-2">{t('catering.features.1.title')}</h3>
                            <p className="text-sm text-stone-500">{t('catering.features.1.desc')}</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 mx-auto bg-rosental-50 rounded-full flex items-center justify-center mb-4 text-rosental-500">
                                <Wine className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-lg mb-2">{t('catering.features.2.title')}</h3>
                            <p className="text-sm text-stone-500">{t('catering.features.2.desc')}</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 mx-auto bg-rosental-50 rounded-full flex items-center justify-center mb-4 text-rosental-500">
                                <Coffee className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-lg mb-2">{t('catering.features.3.title')}</h3>
                            <p className="text-sm text-stone-500">{t('catering.features.3.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default Catering;
