import { useTranslation } from 'react-i18next';

export interface BlogPost {
    id: string;
    slug: string;
    image: string;
}

export const useBlogPosts = () => {
    const { t } = useTranslation();

    const blogPosts: BlogPost[] = [
        {
            id: '1',
            slug: 'winterhochzeit-im-kupferhof',
            image: 'https://images.unsplash.com/photo-1519225448512-44fa6310e74f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            id: '2',
            slug: 'nachhaltig-feiern',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            id: '3',
            slug: 'trends-2026',
            image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        }
    ];

    // Enrich with translated content
    return blogPosts.map((post, index) => ({
        ...post,
        title: t(`blog.posts.${index}.title`),
        excerpt: t(`blog.posts.${index}.excerpt`),
        content: t(`blog.posts.${index}.content`),
        author: t(`blog.posts.${index}.author`),
        category: t(`blog.posts.${index}.category`),
        date: t(`blog.posts.${index}.date`)
    }));
};
