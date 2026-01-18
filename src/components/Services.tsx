import React from 'react';
import { Wine, Heart, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Wine className="w-6 h-6 text-rosental-500" />,
        title: 'Exklusive Feiern',
        description: 'Von intimen Empfängen bis hin zu großen Hochzeitsfesten im Ballsaal. Wir gestalten unvergessliche Momente für Sie und Ihre Gäste.'
    },
    {
        icon: <Heart className="w-6 h-6 text-rosental-500" />,
        title: 'Freie Trauungen',
        description: 'Sagen Sie "Ja" in unserem malerischen Rosengarten oder im historischen Ambiente des Hofes. Romantik pur im Herzen der Region Aachen.'
    },
    {
        icon: <Briefcase className="w-6 h-6 text-rosental-500" />,
        title: 'Firmenevents',
        description: 'Inspirierende Meetings und Tagungen in historischer Kulisse. Beeindrucken Sie Ihre Kunden und Mitarbeiter mit einer besonderen Location.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="absolute top-0 left-0 right-0 h-16 bg-rosental-50 rounded-b-[50%] lg:rounded-b-[100%] scale-x-110 opacity-30" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-medium text-stone-900 font-serif tracking-tight mb-4">Unser Angebot</h2>
                    <p className="text-lg text-stone-500">Alles für Ihren perfekten Tag in Stolberg</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group p-8 rounded-2xl bg-rosental-50 hover:bg-rosental-100 transition-colors duration-300"
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-serif font-medium text-stone-900 mb-3">{service.title}</h3>
                            <p className="text-stone-500 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
