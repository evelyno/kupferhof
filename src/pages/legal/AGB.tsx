import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../../components/ModernPageHeader';

const AGB = () => {
    return (
        <>
            <Helmet>
                <title>AGB | Kupferhof Rosental</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <ModernPageHeader
                title="AGB."
                subtitle="Allgemeine Geschäftsbedingungen für Veranstaltungen."
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl font-sans text-stone-600 leading-relaxed space-y-10">
                        <div>
                            <h2 className="text-2xl font-serif text-stone-900 mb-6">Allgemeine Geschäftsbedingungen</h2>
                            <p className="mb-4 text-lg">
                                Für die Überlassung von Konferenz-, Bankett- und Veranstaltungsräumen des Kupferhof Rosental zur Durchführung von Veranstaltungen sowie für alle damit zusammenhängenden weiteren Leistungen und Lieferungen.
                            </p>
                        </div>

                        <div className="bg-rosental-50/50 p-8 rounded-xl border border-rosental-100">
                            <h3 className="text-lg font-bold mb-4 text-rosental-900">1. Geltungsbereich</h3>
                            <p className="mb-4">
                                1.1 Diese Geschäftsbedingungen gelten für Verträge über die mietweise Überlassung von Konferenz-, Bankett- und Veranstaltungsräumen des Kupferhof Rosental zur Durchführung von Veranstaltungen sowie für alle damit zusammenhängenden weiteren Leistungen und Lieferungen des Veranstalters.
                            </p>
                            <p className="mb-0">
                                1.2 Die Unter- oder Weitervermietung der überlassenen Räume sowie die Einladung zu Vorstellungsgesprächen, Verkaufs- oder ähnlichen Veranstaltungen bedürfen der vorherigen schriftlichen Zustimmung.
                            </p>
                        </div>

                        <div className="bg-rosental-50/50 p-8 rounded-xl border border-rosental-100">
                            <h3 className="text-lg font-bold mb-4 text-rosental-900">2. Vertragsabschluss, -partner, Haftung</h3>
                            <p className="mb-4">
                                2.1 Der Vertrag kommt durch die Annahme des Antrags des Kunden durch den Kupferhof Rosental zustande.
                            </p>
                            <p className="mb-0">
                                2.2 Vertragspartner sind der Kupferhof Rosental und der Kunde.
                            </p>
                        </div>

                        <div className="bg-rosental-50/50 p-8 rounded-xl border border-rosental-100">
                            <h3 className="text-lg font-bold mb-4 text-rosental-900">3. Leistungen, Preise, Zahlung, Aufrechnung</h3>
                            <p className="mb-4">
                                3.1 Der Kupferhof Rosental ist verpflichtet, die vom Kunden bestellten und von ihm zugesagten Leistungen zu erbringen.
                            </p>
                            <p className="mb-0">
                                3.2 Der Kunde ist verpflichtet, die für diese und weitere in Anspruch genommene Leistungen vereinbarten bzw. geltenden Preise zu zahlen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AGB;
