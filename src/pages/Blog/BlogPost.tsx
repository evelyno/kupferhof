import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useBlogPosts } from '../../data/blogPosts';
import Contact from '../../components/Contact';
import { ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const blogPosts = useBlogPosts();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        if (!post) {
            navigate('/blog'); // Redirect to index if not found (or 404)
        }
        window.scrollTo(0, 0);
    }, [slug, post, navigate]);

    if (!post) return null;

    return (
        <>
            <Helmet>
                <title>{post.title} | Kupferhof Rosental</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://www.kupferhof-rosental.de/blog/${post.slug}`} />
            </Helmet>

            {/* Custom Hero for Blog Post */}
            <header className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-3 text-sm font-medium tracking-widest uppercase mb-6 opacity-90">
                            <span>{post.category}</span>
                            <span className="w-1 h-1 bg-white rounded-full" />
                            <span>{new Date(post.date).toLocaleDateString(i18n.language, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-sm opacity-80">
                            <span>{t('blog.ui.by')} {post.author}</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            <article className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-rosental-500 transition-colors mb-12 text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" /> {t('blog.ui.back_to_overview')}
                    </Link>

                    <div className="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:text-rosental-950 prose-a:text-rosental-600">
                        {/* 
                            In a real app, use a markdown parser or strict HTML sanitizer here. 
                            Since this is mock data we control, dangerouslySetInnerHTML is acceptable for demo. 
                        */}
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    <div className="mt-16 pt-8 border-t border-stone-100 flex justify-between items-center">
                        <span className="text-stone-500 text-sm font-medium">{t('blog.ui.share_article')}</span>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full hover:bg-rosental-50 text-stone-500 hover:text-rosental-600 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            <Contact />
        </>
    );
};

export default BlogPost;
