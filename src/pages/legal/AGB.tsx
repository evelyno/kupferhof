import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ModernPageHeader from '../../components/ModernPageHeader';

const AGB = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('agb.seo.title')}</title>
                <meta name="robots" content="noindex" />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/agb" />
            </Helmet>

            <ModernPageHeader
                title={t('agb.header.title')}
                subtitle={t('agb.header.subtitle')}
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl font-sans text-stone-600 leading-relaxed space-y-10">
                        <div>
                            <h2 className="text-2xl font-serif text-stone-900 mb-6">{t('agb.intro.title')}</h2>
                            <p className="mb-4 text-lg">
                                {t('agb.intro.text')}
                            </p>
                        </div>

                        <div className="bg-rosental-50/50 p-8 rounded-xl border border-rosental-100">
                            <h3 className="text-lg font-bold mb-4 text-rosental-900">{t('agb.sections.1.title')}</h3>
                            <p className="mb-4">
                                {t('agb.sections.1.text1')}
                            </p>
                            <p className="mb-0">
                                {t('agb.sections.1.text2')}
                            </p>
                        </div>

                        <div className="bg-rosental-50/50 p-8 rounded-xl border border-rosental-100">
                            <h3 className="text-lg font-bold mb-4 text-rosental-900">{t('agb.sections.2.title')}</h3>
                            <p className="mb-4">
                                {t('agb.sections.2.text1')}
                            </p>
                            <p className="mb-0">
                                {t('agb.sections.2.text2')}
                            </p>
                        </div>

                        <div className="bg-rosental-50/50 p-8 rounded-xl border border-rosental-100">
                            <h3 className="text-lg font-bold mb-4 text-rosental-900">{t('agb.sections.3.title')}</h3>
                            <p className="mb-4">
                                {t('agb.sections.3.text1')}
                            </p>
                            <p className="mb-0">
                                {t('agb.sections.3.text2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AGB;
