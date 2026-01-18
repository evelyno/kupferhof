import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ModernPageHeader from '../../components/ModernPageHeader';
import Contact from '../../components/Contact';
import { blogPosts } from '../../data/blogPosts';
import { ArrowRight } from 'lucide-react';

const BlogIndex = () => {
    return (
        <>
            <Helmet>
                <title>Blog & Inspiration | Kupferhof Rosental</title>
                <meta name="description" content="Aktuelle News, Inspirationen für Ihre Hochzeit und Einblicke hinter die Kulissen des Kupferhof Rosental." />
                <link rel="canonical" href="https://www.kupferhof-rosental.de/blog" />
            </Helmet>

            <ModernPageHeader
                title="Journal."
                subtitle="Geschichten, Inspirationen und Neuigkeiten aus dem Kupferhof."
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group cursor-pointer flex flex-col h-full"
                            >
                                <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-sm mb-6 aspect-[4/3]">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </Link>
                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-xs font-medium tracking-widest text-rosental-500 uppercase mb-3">
                                        <span>{post.category}</span>
                                        <span className="w-1 h-1 bg-rosental-300 rounded-full" />
                                        <span>{new Date(post.date).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-rosental-600 transition-colors">
                                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h3>
                                    <p className="text-stone-500 leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto">
                                        <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-rosental-900 font-medium hover:gap-3 transition-all">
                                            Artikel lesen <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default BlogIndex;
