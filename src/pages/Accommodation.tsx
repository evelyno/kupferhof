import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../components/ModernPageHeader';
import Contact from '../components/Contact';
import { Wifi, Coffee, Bath, Moon } from 'lucide-react';

const Accommodation = () => {
    // Note: Text content here is hardcoded in German for now. 
    // In a full implementation, we would replace string literals with t('key') calls.
    // For this step, I focus on the structure and design.

    return (
        <>
            <Helmet>
                <title>Übernachten | Kupferhof Rosental</title>
                <meta name="description" content="Entspannen Sie in unseren exklusiven Suiten. Historischer Charme trifft auf modernen Komfort. Übernachten im Kupferhof Rosental." />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/uebernachten" />
            </Helmet>

            <ModernPageHeader
                title="Suiten & Zimmer."
                subtitle="Ruhe finden nach einem rauschenden Fest. Träumen Sie inmitten von Geschichte."
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Intro */}
                    <div className="max-w-3xl mx-auto text-center mb-20 text-stone-600">
                        <p className="text-xl leading-relaxed">
                            Unsere Gästezimmer vereinen den Charakter des historischen Kupferhofs mit zeitgemäßem Luxus.
                            Jedes Zimmer ist ein Unikat, liebevoll eingerichtet mit ausgewählten Materialien und einem Blick für Details.
                        </p>
                    </div>

                    {/* Suite 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                                alt="Hochzeitssuite"
                                className="w-full h-[500px] object-cover rounded-sm shadow-xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-medium tracking-widest text-rosental-500 uppercase mb-4 block">Das Highlight</span>
                            <h2 className="text-4xl font-serif text-rosental-950 mb-6">Die Hochzeitssuite</h2>
                            <p className="text-stone-600 mb-8 leading-relaxed">
                                Großzügig geschnitten und lichtdurchflutet. Unsere Hochzeitssuite bietet dem Brautpaar einen Rückzugsort der Extraklasse.
                                Mit freistehender Badewanne, King-Size Bett und einem atemberaubenden Blick in den Innenhof.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-stone-500">
                                <div className="flex items-center gap-2"><Wifi className="w-4 h-4" /> High-Speed WLAN</div>
                                <div className="flex items-center gap-2"><Bath className="w-4 h-4" /> Freistehende Wanne</div>
                                <div className="flex items-center gap-2"><Coffee className="w-4 h-4" /> Nespresso Maschine</div>
                                <div className="flex items-center gap-2"><Moon className="w-4 h-4" /> King-Size Bett</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Suite 2 (Reversed) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <span className="text-sm font-medium tracking-widest text-rosental-500 uppercase mb-4 block">Für Gäste</span>
                            <h2 className="text-4xl font-serif text-rosental-950 mb-6">Gästezimmer</h2>
                            <p className="text-stone-600 mb-8 leading-relaxed">
                                Für Ihre engsten Familie und Freunde stehen weitere stilvolle Doppelzimmer zur Verfügung.
                                So können Sie das Fest gemeinsam beim Frühstück am nächsten Morgen ausklingen lassen.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-stone-500">
                                <div className="flex items-center gap-2"><Wifi className="w-4 h-4" /> High-Speed WLAN</div>
                                <div className="flex items-center gap-2"><Bath className="w-4 h-4" /> Rainshower Dusche</div>
                                <div className="flex items-center gap-2"><Coffee className="w-4 h-4" /> Tee & Wasser</div>
                                <div className="flex items-center gap-2"><Moon className="w-4 h-4" /> Queen-Size Bett</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1616594039964-40891f947852?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                                alt="Gästezimmer"
                                className="w-full h-[500px] object-cover rounded-sm shadow-xl"
                            />
                        </motion.div>
                    </div>

                </div>
            </section>

            <Contact />
        </>
    );
};

export default Accommodation;
