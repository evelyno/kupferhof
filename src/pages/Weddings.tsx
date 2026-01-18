import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../components/ModernPageHeader';
import Contact from '../components/Contact';
import { ArrowRight, Heart, Users, Music, Utensils, Sparkles } from 'lucide-react';

const Weddings = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('weddings.seo.title')}</title>
                <meta name="description" content={t('weddings.seo.description')} />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/hochzeiten" />
            </Helmet>

            <ModernPageHeader
                title={t('weddings.header.title')}
                subtitle={t('weddings.header.subtitle')}
            />

            {/* Section 1: Intro / Emotional Hook (Asymmetrical Layout) */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <span className="text-rosental-500 font-serif italic text-2xl mb-4 block">{t('weddings.intro.tag')}</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-rosental-950 mb-8 leading-tight">
                                <Trans i18nKey="weddings.intro.title" components={{ br: <br /> }} />
                            </h2>
                            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                                {t('weddings.intro.text1')}
                            </p>
                            <p className="text-stone-600 mb-10 leading-relaxed text-lg">
                                {t('weddings.intro.text2')}
                            </p>

                            <div className="flex gap-8 items-center">
                                <div className="flex -space-x-4">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="Braut" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="Bräutigam" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-rosental-100 flex items-center justify-center text-xs text-rosental-800 font-medium">+120</div>
                                </div>
                                <span className="text-sm text-stone-500 uppercase tracking-widest font-medium">{t('weddings.intro.guests')}</span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2 relative"
                        >
                            <div className="aspect-[3/4] rounded-sm overflow-hidden relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
                                    alt="Brautpaar im Kupferhof"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Decorative Frame */}
                            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border border-rosental-300 -z-0" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Features / The Experience (Detailed Grid) */}
            <section className="py-24 bg-rosental-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif text-rosental-950 mb-6">{t('weddings.features.title')}</h2>
                        <p className="text-stone-600 text-lg">
                            {t('weddings.features.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Heart className="w-8 h-8 text-rosental-500" />,
                                title: t('weddings.features.cards.0.title'),
                                desc: t('weddings.features.cards.0.desc')
                            },
                            {
                                icon: <Utensils className="w-8 h-8 text-rosental-500" />,
                                title: t('weddings.features.cards.1.title'),
                                desc: t('weddings.features.cards.1.desc')
                            },
                            {
                                icon: <Music className="w-8 h-8 text-rosental-500" />,
                                title: t('weddings.features.cards.2.title'),
                                desc: t('weddings.features.cards.2.desc')
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 group"
                            >
                                <div className="mb-6 p-4 bg-rosental-50 rounded-full w-fit group-hover:bg-rosental-100 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-serif text-stone-900 mb-4">{item.title}</h3>
                                <p className="text-stone-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Visual Story / Parallax Break */}
            <section className="relative h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                        alt="Hochzeitsdekoration Detail"
                        className="w-full h-full object-cover fixed-attachment" // Note: fixed attachment might act weird on mobile, consider JS parallax if needed, sticking to CSS for simplicity first
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    <span className="font-serif italic text-2xl md:text-3xl opacity-90 mb-4 block">{t('weddings.parallax.tag')}</span>
                    <h2 className="text-5xl md:text-7xl font-serif mb-8">{t('weddings.parallax.title')}</h2>
                    <button className="bg-white text-rosental-900 px-8 py-4 rounded-sm font-medium hover:bg-rosental-100 transition-colors inline-flex items-center gap-2">
                        {t('weddings.parallax.button')} <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>

            {/* Section 4: Details / Room Overview (Split Layout) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1464366400600-7168b8af0bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                                alt="Festsaal gedeckt"
                                className="w-full h-[500px] object-cover rounded-sm shadow-xl"
                            />
                        </div>
                        <div>
                            <span className="text-stone-500 uppercase tracking-widest text-sm font-medium mb-4 block">{t('weddings.rooms.tag')}</span>
                            <h2 className="text-3xl md:text-4xl font-serif text-rosental-950 mb-8">{t('weddings.rooms.title')}</h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-rosental-50 flex items-center justify-center shrink-0">
                                        <Users className="w-5 h-5 text-rosental-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-stone-900 mb-2">{t('weddings.rooms.items.0.title')}</h4>
                                        <p className="text-stone-500 text-sm leading-relaxed">{t('weddings.rooms.items.0.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-rosental-50 flex items-center justify-center shrink-0">
                                        <Sparkles className="w-5 h-5 text-rosental-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-stone-900 mb-2">{t('weddings.rooms.items.1.title')}</h4>
                                        <p className="text-stone-500 text-sm leading-relaxed">{t('weddings.rooms.items.1.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-rosental-50 flex items-center justify-center shrink-0">
                                        <Music className="w-5 h-5 text-rosental-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-stone-900 mb-2">{t('weddings.rooms.items.2.title')}</h4>
                                        <p className="text-stone-500 text-sm leading-relaxed">{t('weddings.rooms.items.2.desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default Weddings;
