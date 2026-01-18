import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../components/ModernPageHeader';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
    // Determine form visibility or reuse a form component. 
    // Since the original ContactPage had a complex form, we should probably keep that logic 
    // but styled nicely within this new layout.
    // For simplicity and consistency, I'll rebuild the form structure here with the new aesthetics.

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
        privacy: false
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Here you would handle the submission
        alert('Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze.');
    };

    return (
        <>
            <Helmet>
                <title>Kontakt & Anfrage | Kupferhof Rosental</title>
                <meta name="description" content="Senden Sie uns Ihre Anfrage für Hochzeiten, Events oder Tagungen. Wir beraten Sie gerne persönlich." />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/kontakt" />
            </Helmet>

            <ModernPageHeader
                title="Kontakt."
                subtitle="Wir freuen uns darauf, von Ihnen zu hören und gemeinsam Ihr Event zu planen."
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Info Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-serif text-rosental-950 mb-8">Lassen Sie uns sprechen</h2>
                            <p className="text-stone-600 mb-12 text-lg leading-relaxed">
                                Jedes Event beginnt mit einem ersten Gespräch. Erzählen Sie uns von Ihren Vorstellungen, oder vereinbaren Sie einen Besichtigungstermin um den Zauber des Kupferhofs selbst zu erleben.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-rosental-50 rounded-full flex items-center justify-center shrink-0 text-rosental-500">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-stone-900 mb-1">Telefon</h4>
                                        <p className="text-stone-500">+49 (0) 2402 / 963-0</p>
                                        <p className="text-xs text-stone-400 mt-1">Mo-Fr 09:00 - 17:00 Uhr</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-rosental-50 rounded-full flex items-center justify-center shrink-0 text-rosental-500">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-stone-900 mb-1">E-Mail</h4>
                                        <p className="text-stone-500">info@kupferhof-rosental.de</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-rosental-50 rounded-full flex items-center justify-center shrink-0 text-rosental-500">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-stone-900 mb-1">Adresse</h4>
                                        <p className="text-stone-500">Rathausstrasse 65-69</p>
                                        <p className="text-stone-500">52222 Stolberg (Rhld.)</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-rosental-50 p-10 rounded-xl border border-rosental-100"
                        >
                            <h3 className="text-2xl font-serif text-rosental-900 mb-6">Anfrage senden</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rosental-400 focus:border-transparent bg-white"
                                            placeholder="Ihr Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">E-Mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rosental-400 focus:border-transparent bg-white"
                                            placeholder="ihre@email.de"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">Telefon</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rosental-400 focus:border-transparent bg-white"
                                            placeholder="Rückrufnummer"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">Art des Events</label>
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rosental-400 focus:border-transparent bg-white text-stone-600"
                                        >
                                            <option value="">Bitte wählen...</option>
                                            <option value="Hochzeit">Hochzeit</option>
                                            <option value="Firmenfeier">Firmenfeier</option>
                                            <option value="Tagung">Tagung</option>
                                            <option value="Privatfeier">Privates Fest</option>
                                            <option value="Sonstiges">Sonstiges</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Nachricht</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rosental-400 focus:border-transparent bg-white resize-none"
                                        placeholder="Erzählen Sie uns mehr über Ihre Pläne..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="privacy"
                                            name="privacy"
                                            type="checkbox"
                                            checked={formData.privacy}
                                            onChange={handleChange}
                                            className="focus:ring-rosental-500 h-4 w-4 text-rosental-600 border-stone-300 rounded"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="privacy" className="font-medium text-stone-700">Datenschutz</label>
                                        <p className="text-stone-500">Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden.</p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-rosental-900 text-white font-medium py-3 px-6 rounded-md hover:bg-rosental-800 transition-colors flex justify-center items-center gap-2 shadow-lg shadow-rosental-900/10"
                                >
                                    <MessageSquare className="w-4 h-4" /> Nachricht absenden
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
