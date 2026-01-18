import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Facebook, Instagram, Twitter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 0,
        image: '/assets/kupferhof.jpeg',
        subtitle: 'Exklusive Location',
        title: 'Kupferhof Rosental',
        subtitle2: 'Historisches Ambiente',
        tag: 'SEIT 17. JH',
        cta: 'Kupferhof Entdecken'
    },
    {
        id: 1,
        image: '/assets/pavillons.jpg',
        subtitle: 'Natur & Romantik',
        title: 'Der Rosengarten',
        subtitle2: 'Trauung im Freien',
        tag: 'OUTDOOR',
        cta: 'Garten Erkunden'
    },
    {
        id: 2,
        image: '/assets/brautpaar-kupferhof.jpg',
        subtitle: 'Luxuriöses Interieur',
        title: 'Der Große Ballsaal',
        subtitle2: 'Elegante Feierlichkeiten',
        tag: 'INTERIOR',
        cta: 'Saal Ansehen'
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full h-screen overflow-hidden group/hero">

            {/* Slides */}
            <div className="relative w-full h-full">
                <AnimatePresence mode='wait'>
                    {slides.map((slide, index) => (
                        index === currentSlide && (
                            <div key={slide.id} className="absolute inset-0 w-full h-full">
                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                    {/* Background Image with Zoom Effect */}
                                    <motion.img
                                        initial={{ scale: 1 }}
                                        animate={{ scale: 1.05 }}
                                        transition={{ duration: 10, ease: "linear" }}
                                        src={slide.image}
                                        className="w-full h-full object-cover origin-center"
                                        alt={slide.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/30 to-stone-900/40" />
                                </div>

                                <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 content-center items-center">
                                    <div className="hidden md:flex md:col-span-1 items-center h-full">
                                        <span className="text-xs font-medium text-white/70 tracking-widest -rotate-90 whitespace-nowrap">
                                            {slide.tag}
                                        </span>
                                    </div>
                                    <div className="md:col-span-8">
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        >
                                            <span className="text-xs md:text-sm font-medium text-white/80 tracking-widest uppercase mb-6 pl-1 block">
                                                {slide.subtitle}
                                            </span>
                                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.1] mb-10 font-serif">
                                                {slide.title} <br className="hidden md:block" />
                                                {slide.subtitle2}
                                            </h1>
                                            <a href="#about" className="group inline-flex items-center text-sm font-medium text-white hover:text-rosental-200 transition-colors pl-1">
                                                {slide.cta}
                                                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </AnimatePresence>
            </div>

            {/* Desktop Navigation Controls */}
            <div className="absolute bottom-0 right-0 z-30 bg-white w-full md:w-[450px] lg:w-[500px] p-8 md:p-12 hidden md:block border-tl-3xl shadow-2xl">
                <div className="flex justify-between items-start mb-2">
                    <div className="w-full relative flex flex-col gap-6">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`nav-item group cursor-pointer transition-all duration-300 ${index === currentSlide ? '' : 'opacity-60 hover:opacity-100'}`}
                                onClick={() => goToSlide(index)}
                            >
                                <div className="grid grid-cols-[30px_1fr] gap-4">
                                    <span className={`text-xs pt-1 transition-colors ${index === currentSlide ? 'font-semibold text-stone-900' : 'font-medium text-stone-400 group-hover:text-rosental-500'}`}>
                                        0{index + 1}.
                                    </span>
                                    <div>
                                        <h3 className={`text-lg leading-tight transition-colors ${index === currentSlide ? 'font-semibold text-stone-900' : 'font-medium text-stone-400 group-hover:text-stone-700'}`}>
                                            {slide.title} <br /> {slide.subtitle2}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Indicator */}
                    <div className="relative h-32 w-1 pt-2 flex flex-col justify-between items-center ml-4">
                        <div className="absolute top-2 bottom-0 w-[2px] bg-stone-100 rounded-full"></div>
                        <div
                            className="absolute top-2 w-1 h-8 bg-rosental-400 rounded-full transition-all duration-500 ease-in-out z-10 shadow-lg shadow-rosental-200"
                            style={{ transform: `translateY(${currentSlide * 115}%)` }}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Controls */}
            <div className="absolute bottom-28 left-0 w-full flex justify-center gap-4 md:hidden z-30">
                <button onClick={prevSlide} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextSlide} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Socials */}
            <div className="absolute bottom-12 left-6 md:left-12 z-20 flex flex-col gap-8">
                <div className="flex flex-col gap-4 text-white/60">
                    <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                </div>
                <div className="mt-4">
                    <ChevronDown className="w-6 h-6 text-white/80 animate-bounce" />
                </div>
            </div>

        </div>
    );
};

export default Hero;
