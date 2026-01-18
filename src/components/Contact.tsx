import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
        message: '',
        privacy: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        // Handle checkbox separately
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add logic to send data
        alert('Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze.');
    };

    return (
        <section id="contact-form" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Contact Info */}
                    <div className="lg:w-2/5">
                        <h2 className="text-4xl md:text-5xl font-medium text-stone-900 font-serif tracking-tight mb-6">
                            Planen Sie Ihren Perfekten Tag
                        </h2>
                        <p className="text-lg text-stone-500 mb-10 leading-relaxed">
                            Bereit für Ihre Traumhochzeit im Kupferhof Rosental? Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-rosental-50 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-rosental-500" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-medium text-stone-900 mb-1">Besuchstermin</h4>
                                    <p className="text-stone-500">Kupferhof Rosental<br />Rathausstrasse 65-69, 52222 Stolberg</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-rosental-50 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-rosental-500" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-medium text-stone-900 mb-1">Anrufen</h4>
                                    <p className="text-stone-500">+49 (0) 2402 / 963-0</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-rosental-50 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-rosental-500" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-medium text-stone-900 mb-1">E-Mail</h4>
                                    <p className="text-stone-500">info@kupferhof-rosental.de</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-rosental-50 flex items-center justify-center text-rosental-500 hover:bg-rosental-100 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-rosental-50 flex items-center justify-center text-rosental-500 hover:bg-rosental-100 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-rosental-50 flex items-center justify-center text-rosental-500 hover:bg-rosental-100 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:w-3/5">
                        <form onSubmit={handleSubmit} className="bg-rosental-50 rounded-[2rem] p-8 md:p-10 border border-rosental-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Ihr Name *</label>
                                    <input
                                        type="text" id="name" name="name" required
                                        value={formData.name} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-rosental-200 bg-white focus:border-rosental-400 focus:ring-2 focus:ring-rosental-100 outline-none transition-all"
                                        placeholder="Max Mustermann"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">E-Mail Adresse *</label>
                                    <input
                                        type="email" id="email" name="email" required
                                        value={formData.email} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-rosental-200 bg-white focus:border-rosental-400 focus:ring-2 focus:ring-rosental-100 outline-none transition-all"
                                        placeholder="max@beispiel.de"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Telefonnummer</label>
                                    <input
                                        type="tel" id="phone" name="phone"
                                        value={formData.phone} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-rosental-200 bg-white focus:border-rosental-400 focus:ring-2 focus:ring-rosental-100 outline-none transition-all"
                                        placeholder="+49 123 456 789"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-stone-700 mb-2">Geplantes Datum</label>
                                    <input
                                        type="date" id="date" name="date"
                                        value={formData.date} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-rosental-200 bg-white focus:border-rosental-400 focus:ring-2 focus:ring-rosental-100 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-2">Anzahl der Gäste</label>
                                <select
                                    id="guests" name="guests"
                                    value={formData.guests} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-rosental-200 bg-white focus:border-rosental-400 focus:ring-2 focus:ring-rosental-100 outline-none transition-all"
                                >
                                    <option value="">Bitte wählen...</option>
                                    <option value="1-50">1-50 Gäste</option>
                                    <option value="51-100">51-100 Gäste</option>
                                    <option value="101-150">101-150 Gäste</option>
                                    <option value="151-200">151-200 Gäste</option>
                                    <option value="200+">200+ Gäste</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Ihre Nachricht *</label>
                                <textarea
                                    id="message" name="message" rows={5} required
                                    value={formData.message} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-rosental-200 bg-white focus:border-rosental-400 focus:ring-2 focus:ring-rosental-100 outline-none transition-all resize-none"
                                    placeholder="Erzählen Sie uns von Ihrer Traumhochzeit..."
                                ></textarea>
                            </div>

                            <div className="flex items-start gap-3 mb-6">
                                <input
                                    type="checkbox" id="privacy" name="privacy" required
                                    checked={formData.privacy} onChange={handleChange}
                                    className="mt-1 w-5 h-5 rounded-md border-rosental-200 text-rosental-500 focus:ring-rosental-400"
                                />
                                <label htmlFor="privacy" className="text-sm text-stone-500">
                                    Ich habe die <Link to="/datenschutz" target="_blank" className="text-rosental-500 hover:underline">Datenschutzerklärung</Link> zur Kenntnis genommen und stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.*
                                </label>
                            </div>

                            <Button type="submit" variant="rosental" size="lg" className="w-full md:w-auto gap-2 group">
                                Anfrage senden
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
