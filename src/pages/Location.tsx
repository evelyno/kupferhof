import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../components/ModernPageHeader';
import Contact from '../components/Contact';
import { MapPin, Maximize, Sun, Wind, Users } from 'lucide-react';

const LocationPage = () => {
    return (
        <>
            <Helmet>
                <title>Die Location | Kupferhof Rosental</title>
                <meta name="description" content="Entdecken Sie die Räumlichkeiten des Kupferhof Rosental. Historischer Charme trifft auf modernen Komfort in Stolberg." />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/location" />
            </Helmet>

            <ModernPageHeader
                title="Der Kupferhof."
                subtitle="Ein architektonisches Juwel im Herzen von Stolberg. Entdecken Sie Räume mit Charakter."
            />

            {/* Section 1: The Building */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                        <div className="space-y-6">
                            <span className="text-rosental-500 font-serif italic text-2xl block">Architektur & Historie</span>
                            <h2 className="text-4xl font-serif text-rosental-950 leading-tight">
                                Wände, die Geschichten erzählen.
                            </h2>
                            <p className="text-stone-600 text-lg leading-relaxed">
                                Der Kupferhof Rosental ist mehr als nur ein Gebäude. Er ist ein Zeugnis der blühenden Kupfermeister-Epoche Stolbergs.
                                Liebevoll restauriert, verbindet er heute den rauen Charme des Industriedenkmals mit der Eleganz einer modernen Eventlocation.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1541447231462-8e0c904975ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Fassade Detail"
                                className="w-full h-64 object-cover rounded-sm mt-8"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1594950961448-6b8017364132?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Innenhof"
                                className="w-full h-64 object-cover rounded-sm"
                            />
                        </div>
                    </div>

                    {/* Rooms Grid */}
                    <div className="space-y-32">
                        {/* Room 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                        >
                            <div className="order-2 md:order-1">
                                <h3 className="text-3xl font-serif text-rosental-900 mb-4">Der Große Festsaal</h3>
                                <p className="text-stone-600 mb-6 leading-relaxed">
                                    Unser Herzstück. Mit seinen hohen Decken, dem edlen Parkettboden und den lichtdurchfluteten Fenstern bietet der Festsaal ein Ambiente von zeitloser Eleganz. Ideal für große Bankette, Hochzeiten und Vorträge.
                                </p>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-stone-500 mb-8">
                                    <div className="flex items-center gap-2"><Maximize className="w-4 h-4 text-rosental-400" /> 200 m² Fläche</div>
                                    <div className="flex items-center gap-2"><Sun className="w-4 h-4 text-rosental-400" /> Tageslicht</div>
                                    <div className="flex items-center gap-2"><Users className="w-4 h-4 text-rosental-400" /> bis 120 Personen</div>
                                    <div className="flex items-center gap-2"><Wind className="w-4 h-4 text-rosental-400" /> Klimatisiert</div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 h-[400px] bg-stone-100 rounded-sm overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                    alt="Großer Festsaal"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* Room 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                        >
                            <div className="h-[400px] bg-stone-100 rounded-sm overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                    alt="Kaminzimmer"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif text-rosental-900 mb-4">Das Kaminzimmer</h3>
                                <p className="text-stone-600 mb-6 leading-relaxed">
                                    Intim und gemütlich. Das Kaminzimmer mit seinem offenen Kamin ist der perfekte Rückzugsort für kleinere Gesellschaften, Empfänge oder als stilvolle Lounge während Ihrer großen Feier.
                                </p>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-stone-500 mb-8">
                                    <div className="flex items-center gap-2"><Maximize className="w-4 h-4 text-rosental-400" /> 80 m² Fläche</div>
                                    <div className="flex items-center gap-2"><Sun className="w-4 h-4 text-rosental-400" /> Zugang Terrasse</div>
                                    <div className="flex items-center gap-2"><Users className="w-4 h-4 text-rosental-400" /> bis 40 Personen</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Room 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                        >
                            <div className="order-2 md:order-1">
                                <h3 className="text-3xl font-serif text-rosental-900 mb-4">Der Innenhof</h3>
                                <p className="text-stone-600 mb-6 leading-relaxed">
                                    Ein Stück Italien in Stolberg. Unser geschützter Innenhof bietet Privatsphäre unter freiem Himmel. Perfekt für freie Trauungen, Sektempfänge oder das entspannte Beisammensein an lauen Sommerabenden.
                                </p>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-stone-500 mb-8">
                                    <div className="flex items-center gap-2"><Maximize className="w-4 h-4 text-rosental-400" /> Außenbereich</div>
                                    <div className="flex items-center gap-2"><Sun className="w-4 h-4 text-rosental-400" /> Teilüberdacht</div>
                                    <div className="flex items-center gap-2"><Users className="w-4 h-4 text-rosental-400" /> bis 150 Personen</div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 h-[400px] bg-stone-100 rounded-sm overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                    alt="Innenhof"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-rosental-50 py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif mb-8">Besuchen Sie uns</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto mb-12">
                        Bilder sagen viel, aber das Gefühl, in unseren Räumen zu stehen, ist durch nichts zu ersetzen. Vereinbaren Sie einen Besichtigungstermin.
                    </p>
                    <div className="flex justify-center items-center gap-4 text-stone-900 font-medium">
                        <MapPin className="w-5 h-5 text-rosental-500" />
                        Rathausstrasse 65-69, 52222 Stolberg (Rhld.)
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default LocationPage;
