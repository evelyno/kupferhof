import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';
import ModernPageHeader from '../../components/ModernPageHeader';

const Datenschutz = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('datenschutz.seo.title')}</title>
                <meta name="robots" content="noindex" />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/datenschutz" />
            </Helmet>

            <ModernPageHeader
                title={t('datenschutz.header.title')}
                subtitle={t('datenschutz.header.subtitle')}
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl font-sans text-stone-600 leading-relaxed space-y-12">
                        <div>
                            <h2 className="text-2xl font-serif text-stone-900 mb-6">{t('datenschutz.section1.title')}</h2>
                            <h3 className="text-lg font-bold mb-3 text-stone-800">{t('datenschutz.section1.intro.title')}</h3>
                            <p>
                                {t('datenschutz.section1.intro.text')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-3 text-stone-800">{t('datenschutz.section1.collection.title')}</h3>
                            <div className="bg-rosental-50 p-6 rounded-lg border border-rosental-100 space-y-4">
                                <div>
                                    <h4 className="font-bold text-rosental-900">{t('datenschutz.section1.collection.responsible_title')}</h4>
                                    <p>{t('datenschutz.section1.collection.responsible_text')}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-rosental-900">{t('datenschutz.section1.collection.how_title')}</h4>
                                    <p>{t('datenschutz.section1.collection.how_text')}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif text-stone-900 mb-6">{t('datenschutz.section2.title')}</h2>
                            <p>
                                {t('datenschutz.section2.text')}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif text-stone-900 mb-6">{t('datenschutz.section3.title')}</h2>
                            <h3 className="text-lg font-bold mb-3 text-stone-800">{t('datenschutz.section3.general.title')}</h3>
                            <p className="mb-4">
                                {t('datenschutz.section3.general.text')}
                            </p>
                            <h3 className="text-lg font-bold mb-3 text-stone-800">{t('datenschutz.section3.responsible.title')}</h3>
                            <p className="mb-4 p-4 bg-stone-50 rounded border border-stone-200">
                                <Trans i18nKey="datenschutz.section3.responsible.text" />
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif text-stone-900 mb-6">{t('datenschutz.section4.title')}</h2>
                            <h3 className="text-lg font-bold mb-3 text-stone-800">{t('datenschutz.section4.contact.title')}</h3>
                            <p>
                                {t('datenschutz.section4.contact.text')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Datenschutz;
