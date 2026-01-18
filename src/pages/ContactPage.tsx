import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ModernPageHeader from '../components/ModernPageHeader';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
    const { t } = useTranslation();

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
        alert(t('contactPage.form.success'));
    };

    return (
        <>
            <Helmet>
                <title>{t('contactPage.seo.title')}</title>
                <meta name="description" content={t('contactPage.seo.description')} />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/kontakt" />
            </Helmet>

            <ModernPageHeader
                title={t('contactPage.header.title')}
                subtitle={t('contactPage.header.subtitle')}
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
                            <h2 className="text-3xl font-serif text-rosental-950 mb-8">{t('contactPage.info.title')}</h2>
                            <p className="text-stone-600 mb-12 text-lg leading-relaxed">
                                {t('contactPage.info.text')}
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-rosental-50 rounded-full flex items-center justify-center shrink-0 text-rosental-500">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-stone-900 mb-1">{t('contactPage.info.phone')}</h4>
                                        <p className="text-stone-500">+49 (0) 2402 / 963-0</p>
                                        <p className="text-xs text-stone-400 mt-1">Mo-Fr 09:00 - 17:00 Uhr</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-rosental-50 rounded-full flex items-center justify-center shrink-0 text-rosental-500">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-stone-900 mb-1">{t('contactPage.info.email')}</h4>
                                        <p className="text-stone-500">info@kupferhof-rosental.de</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-rosental-50 rounded-full flex items-center justify-center shrink-0 text-rosental-500">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-stone-900 mb-1">{t('contactPage.info.address')}</h4>
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
                            <h3 className="text-2xl font-serif text-rosental-900 mb-6">{t('contactPage.form.title')}</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">{t('contactPage.form.name')}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rosental-400 focus:border-transparent bg-white"
                                            placeholder={t('contactPage.form.namePh')}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">{t('contactPage.form.email')}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rosental-400 focus:border-transparent bg-white"
                                            placeholder={t('contactPage.form.emailPh')}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">{t('contactPage.form.phone')}</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rosental-400 focus:border-transparent bg-white"
                                            placeholder={t('contactPage.form.phonePh')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">{t('contactPage.form.eventType')}</label>
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rosental-400 focus:border-transparent bg-white text-stone-600"
                                        >
                                            <option value="">{t('contactPage.form.select.placeholder')}</option>
                                            <option value="Hochzeit">{t('contactPage.form.select.wedding')}</option>
                                            <option value="Firmenfeier">{t('contactPage.form.select.corporate')}</option>
                                            <option value="Tagung">{t('contactPage.form.select.conference')}</option>
                                            <option value="Privatfeier">{t('contactPage.form.select.private')}</option>
                                            <option value="Sonstiges">{t('contactPage.form.select.other')}</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">{t('contactPage.form.message')}</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rosental-400 focus:border-transparent bg-white resize-none"
                                        placeholder={t('contactPage.form.messagePh')}
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
                                        <label htmlFor="privacy" className="font-medium text-stone-700">{t('contactPage.form.privacy')}</label>
                                        <p className="text-stone-500">{t('contactPage.form.privacyText')}</p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-rosental-900 text-white font-medium py-3 px-6 rounded-md hover:bg-rosental-800 transition-colors flex justify-center items-center gap-2 shadow-lg shadow-rosental-900/10"
                                >
                                    <MessageSquare className="w-4 h-4" /> {t('contactPage.form.submit')}
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
