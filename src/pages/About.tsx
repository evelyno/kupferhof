import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../components/ModernPageHeader';
import Contact from '../components/Contact';

const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('aboutPage.seo.title')}</title>
                <meta name="description" content={t('aboutPage.seo.description')} />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/ueber-uns" />
            </Helmet>

            <ModernPageHeader
                title={t('aboutPage.header.title')}
                subtitle={t('aboutPage.header.subtitle')}
            />

            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-serif text-rosental-950 mb-8">{t('aboutPage.intro.title')}</h2>
                        <p className="text-stone-600 text-lg leading-relaxed mb-6">
                            {t('aboutPage.intro.text1')}
                        </p>
                        <p className="text-stone-600 text-lg leading-relaxed mb-12">
                            {t('aboutPage.intro.text2')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                            alt="Das Team"
                            className="w-full rounded-sm shadow-xl"
                        />
                        <p className="text-sm text-stone-500 mt-4 text-center italic">{t('aboutPage.team.caption')}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-serif text-rosental-900 mb-4">{t('aboutPage.history.title')}</h3>
                            <p className="text-stone-600 leading-relaxed">
                                {t('aboutPage.history.text')}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif text-rosental-900 mb-4">{t('aboutPage.sustainability.title')}</h3>
                            <p className="text-stone-600 leading-relaxed">
                                {t('aboutPage.sustainability.text')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default About;
