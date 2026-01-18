import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';
import ModernPageHeader from '../../components/ModernPageHeader';

const Impressum = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('impressum.seo.title')}</title>
                <meta name="robots" content="noindex" />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/impressum" />
            </Helmet>

            <ModernPageHeader
                title={t('impressum.header.title')}
                subtitle={t('impressum.header.subtitle')}
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl font-sans text-stone-600 leading-relaxed">
                        <h2 className="text-2xl font-serif text-stone-900 mb-6">{t('impressum.tmg.title')}</h2>
                        <p className="mb-8">
                            <strong>Kupferhof Rosental</strong><br />
                            Rathausstrasse 65-69<br />
                            52222 Stolberg (Rhld.)
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6">{t('impressum.contact.title')}</h2>
                        <p className="mb-8">
                            Telefon: +49 (0) 2402 / 963-0<br />
                            E-Mail: info@kupferhof-rosental.de
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6">{t('impressum.representative.title')}</h2>
                        <p className="mb-8 p-4 bg-rosental-50 border border-rosental-100 rounded-md">
                            {t('impressum.representative.text')}
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6">{t('impressum.register.title')}</h2>
                        <p className="mb-8 p-4 bg-rosental-50 border border-rosental-100 rounded-md">
                            <Trans i18nKey="impressum.register.text" />
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6">{t('impressum.vat.title')}</h2>
                        <p className="mb-8 p-4 bg-rosental-50 border border-rosental-100 rounded-md">
                            <Trans i18nKey="impressum.vat.text" />
                        </p>

                        <div className="mt-12 pt-12 border-t border-stone-200">
                            <h3 className="text-xl font-bold mb-4 font-serif text-stone-900">{t('impressum.disclaimer.title')}</h3>

                            <h4 className="font-bold mb-2 text-stone-800">{t('impressum.disclaimer.content_liability.title')}</h4>
                            <p className="mb-6">
                                {t('impressum.disclaimer.content_liability.text')}
                            </p>

                            <h4 className="font-bold mb-2 text-stone-800">{t('impressum.disclaimer.link_liability.title')}</h4>
                            <p className="mb-6">
                                {t('impressum.disclaimer.link_liability.text')}
                            </p>

                            <h4 className="font-bold mb-2 text-stone-800">{t('impressum.disclaimer.copyright.title')}</h4>
                            <p className="mb-6">
                                {t('impressum.disclaimer.copyright.text')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Impressum;
