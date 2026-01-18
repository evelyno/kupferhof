import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../components/ModernPageHeader';
import Contact from '../components/Contact';
import { Calendar, Users, Star, ArrowRight, Lightbulb } from 'lucide-react';

const Events = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('events.seo.title')}</title>
                <meta name="description" content={t('events.seo.description')} />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/veranstaltungen" />
            </Helmet>

            <ModernPageHeader
                title={t('events.header.title')}
                subtitle={t('events.header.subtitle')}
            />

            {/* Section 1: Intro / Corporate Vibe */}
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
                            <span className="text-rosental-500 font-serif italic text-2xl mb-4 block">{t('events.intro.tag')}</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-rosental-950 mb-8 leading-tight">
                                <Trans i18nKey="events.intro.title" components={{ br: <br /> }} />
                            </h2>
                            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                                {t('events.intro.text')}
                            </p>
                            <ul className="space-y-4 mb-8 text-stone-600">
                                <li className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-rosental-500" /> {t('events.intro.list.0')}
                                </li>
                                <li className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-rosental-500" /> {t('events.intro.list.1')}
                                </li>
                                <li className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-rosental-500" /> {t('events.intro.list.2')}
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="relative">
                                <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                        alt="Tagungsraum Setting"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-lg max-w-xs hidden md:block">
                                    <p className="font-serif text-xl italic text-rosental-900 leading-snug">
                                        {t('events.intro.imagequote')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Formats */}
            <section className="py-24 bg-rosental-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-rosental-950 mb-6">{t('events.formats.title')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: t('events.formats.cards.0.title'),
                                desc: t('events.formats.cards.0.desc'),
                                icon: <Lightbulb className="w-8 h-8 text-rosental-500" />
                            },
                            {
                                title: t('events.formats.cards.1.title'),
                                desc: t('events.formats.cards.1.desc'),
                                icon: <Users className="w-8 h-8 text-rosental-500" />
                            },
                            {
                                title: t('events.formats.cards.2.title'),
                                desc: t('events.formats.cards.2.desc'),
                                icon: <Calendar className="w-8 h-8 text-rosental-500" />
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 border-t-4 border-rosental-300 shadow-sm hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-stone-900 mb-4">{item.title}</h3>
                                <p className="text-stone-500 leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Visual Break */}
            <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Event Atmosphere"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif mb-8">{t('events.cta.title')}</h2>
                    <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto">
                        {t('events.cta.text')}
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-rosental-500 hover:bg-rosental-600 text-white px-8 py-4 rounded-sm font-medium transition-all inline-flex items-center gap-2">
                            {t('events.cta.button')} <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default Events;
