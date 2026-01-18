import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../../components/ModernPageHeader';

const Impressum = () => {
    return (
        <>
            <Helmet>
                <title>Impressum | Kupferhof Rosental</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <ModernPageHeader
                title="Impressum."
                subtitle="Rechtliche Informationen und Angaben gemäß § 5 TMG."
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl font-sans text-stone-600 leading-relaxed">
                        <h2 className="text-2xl font-serif text-stone-900 mb-6">Angaben gemäß § 5 TMG</h2>
                        <p className="mb-8">
                            <strong>Kupferhof Rosental</strong><br />
                            Rathausstrasse 65-69<br />
                            52222 Stolberg (Rhld.)
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6">Kontakt</h2>
                        <p className="mb-8">
                            Telefon: +49 (0) 2402 / 963-0<br />
                            E-Mail: info@kupferhof-rosental.de
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6">Vertreten durch</h2>
                        <p className="mb-8 p-4 bg-rosental-50 border border-rosental-100 rounded-md">
                            [Name der Geschäftsführung hier einfügen]
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6">Registereintrag</h2>
                        <p className="mb-8 p-4 bg-rosental-50 border border-rosental-100 rounded-md">
                            Eintragung im Handelsregister.<br />
                            Registergericht: [Amtsgericht]<br />
                            Registernummer: [HRB Nummer]
                        </p>

                        <h2 className="text-2xl font-serif text-stone-900 mb-6">Umsatzsteuer-ID</h2>
                        <p className="mb-8 p-4 bg-rosental-50 border border-rosental-100 rounded-md">
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            [DE XXXXXXXX]
                        </p>

                        <div className="mt-12 pt-12 border-t border-stone-200">
                            <h3 className="text-xl font-bold mb-4 font-serif text-stone-900">Haftungsausschluss (Disclaimer)</h3>

                            <h4 className="font-bold mb-2 text-stone-800">Haftung für Inhalte</h4>
                            <p className="mb-6">
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                            </p>

                            <h4 className="font-bold mb-2 text-stone-800">Haftung für Links</h4>
                            <p className="mb-6">
                                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            </p>

                            <h4 className="font-bold mb-2 text-stone-800">Urheberrecht</h4>
                            <p className="mb-6">
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Impressum;
