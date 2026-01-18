import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../../components/ModernPageHeader';

const Datenschutz = () => {
    return (
        <>
            <Helmet>
                <title>Datenschutz | Kupferhof Rosental</title>
                <meta name="robots" content="noindex" />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/datenschutz" />
            </Helmet>

            <ModernPageHeader
                title="Datenschutz."
                subtitle="Informationen zum Schutz Ihrer persönlichen Daten."
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl font-sans text-stone-600 leading-relaxed space-y-12">
                        <div>
                            <h2 className="text-2xl font-serif text-stone-900 mb-6">1. Datenschutz auf einen Blick</h2>
                            <h3 className="text-lg font-bold mb-3 text-stone-800">Allgemeine Hinweise</h3>
                            <p>
                                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-3 text-stone-800">Datenerfassung auf dieser Website</h3>
                            <div className="bg-rosental-50 p-6 rounded-lg border border-rosental-100 space-y-4">
                                <div>
                                    <h4 className="font-bold text-rosental-900">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                                    <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-rosental-900">Wie erfassen wir Ihre Daten?</h4>
                                    <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. Kontaktformular). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (technische Daten).</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif text-stone-900 mb-6">2. Hosting</h2>
                            <p>
                                Wir hosten die Inhalte unserer Website bei folgendem Anbieter: [Anbietername].
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif text-stone-900 mb-6">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                            <h3 className="text-lg font-bold mb-3 text-stone-800">Datenschutz</h3>
                            <p className="mb-4">
                                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                            </p>
                            <h3 className="text-lg font-bold mb-3 text-stone-800">Hinweis zur verantwortlichen Stelle</h3>
                            <p className="mb-4 p-4 bg-stone-50 rounded border border-stone-200">
                                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                                <strong>Kupferhof Rosental</strong><br />
                                Rathausstrasse 65-69<br />
                                52222 Stolberg (Rhld.)<br /><br />
                                E-Mail: info@kupferhof-rosental.de
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif text-stone-900 mb-6">4. Datenerfassung auf dieser Website</h2>
                            <h3 className="text-lg font-bold mb-3 text-stone-800">Kontaktformular</h3>
                            <p>
                                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Datenschutz;
