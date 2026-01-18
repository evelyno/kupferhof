import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';

const Stats = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { label: t('stats.items.0.label'), target: 400 },
        { label: t('stats.items.1.label'), target: 800 },
        { label: t('stats.items.2.label'), target: 360 },
        { label: t('stats.items.3.label'), target: 16 },
    ];

    return (
        <section ref={ref} className="py-20 bg-rosental-50 border-y border-rosental-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium text-stone-900 font-serif tracking-tight mb-4">{t('stats.title')}</h2>
                    <p className="text-lg text-stone-500">{t('stats.subtitle')}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <Counter key={index} stat={stat} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Counter = ({ stat, isInView }: { stat: { label: string, target: number }, isInView: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = stat.target;
            const duration = 2000;
            const incrementTime = duration / end;

            // To be efficient for large numbers, calculate step
            // For 2000ms duration:
            // If target is small (16), step is 1 per 125ms
            // If target is large (800), step is 1 per 2.5ms which is too fast for connection.
            // Better logic: standard animation frame approach

            let startTime: number | null = null;
            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const percentage = Math.min(progress / duration, 1);

                setCount(Math.floor(end * percentage));

                if (progress < duration) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, stat.target]);

    return (
        <div className="stat-card flex flex-col items-center justify-center p-8 bg-white rounded-full aspect-square border-2 border-dashed border-rosental-200 relative group hover:border-rosental-400 hover:scale-105 hover:shadow-lg hover:shadow-rosental-100 transition-all duration-300 cursor-pointer">
            <span className="stat-number text-4xl md:text-5xl font-serif text-rosental-500 mb-2 font-medium">
                {count}
            </span>
            <span className="text-sm font-medium text-stone-400 uppercase tracking-wide">{stat.label}</span>
        </div>
    )
}

export default Stats;
