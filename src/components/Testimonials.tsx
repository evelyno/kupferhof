import React, { useRef } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
        name: 'Julia M.',
        role: 'Hochzeitsgast',
        text: 'Sie haben unsere Hochzeit einfach wundervoll gemacht. Bevor wir den Kupferhof wählten, sprachen wir mit vielen Locations, aber diese war definitiv die beste Wahl. Atemberaubend!'
    },
    {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
        name: 'Thomas & Sarah',
        role: 'Hochzeitspaar',
        text: 'Die Zusammenarbeit mit dem Kupferhof-Team war ein absolutes Vergnügen!! Sie waren unglaublich aufmerksam und organisiert und sorgten dafür, dass unsere Hochzeit reibungslos verlief.'
    },
    {
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
        name: 'Michael S.',
        role: 'Firmenfeier',
        text: 'Das Team hat alle unsere Erwartungen übertroffen. Von der beeindruckenden Location bis zum tadellosen Service war alles perfekt. Unsere Gäste schwärmen immer noch!'
    }
];

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = 370; // approximate card width + gap
            containerRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Header */}
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-medium text-stone-900 font-serif tracking-tight mb-6">Das sagen unsere Brautpaare</h2>
                        <p className="text-lg text-stone-500 mb-10 leading-relaxed">
                            Jedes Paar, das bei uns gefeiert hat, verliebte sich in die Atmosphäre. Werden Sie Teil unserer Geschichte.
                        </p>
                        <div className="flex gap-4">
                            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors text-stone-600">
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full bg-rosental-400 text-white flex items-center justify-center hover:bg-rosental-500 transition-colors shadow-lg shadow-rosental-100">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right Cards */}
                    <div
                        ref={containerRef}
                        className="lg:w-2/3 flex gap-6 overflow-x-auto no-scrollbar pb-10 scroll-smooth"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="min-w-[350px] bg-white border border-stone-100 rounded-3xl p-8 shadow-xl shadow-stone-100/50"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                        <div>
                                            <h4 className="text-lg font-serif font-medium text-stone-900">{testimonial.name}</h4>
                                            <span className="text-sm text-stone-400">{testimonial.role}</span>
                                        </div>
                                    </div>
                                    <Quote className="w-8 h-8 text-rosental-200 fill-current opacity-50" />
                                </div>
                                <p className="text-lg text-stone-500 mb-6 italic">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
