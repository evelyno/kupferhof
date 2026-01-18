export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Simplification: HTML string or markdown. For now, multiple paragraphs.
    image: string;
    date: string;
    author: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'winterhochzeit-im-kupferhof',
        title: 'Magische Winterhochzeiten: Romantik pur im Kupferhof',
        excerpt: 'Warum eine Hochzeit im Winter ihren ganz eigenen Zauber hat und wie wir diesen im Kupferhof Rosental perfekt in Szene setzen.',
        content: `
            <p class="mb-6">Wenn draußen die Schneeflocken tanzen und der historische Innenhof in weißes Licht getaucht ist, entfaltet der Kupferhof Rosental eine ganz besondere Magie. Winterhochzeiten werden immer beliebter – und das aus gutem Grund.</p>
            <h3 class="text-2xl font-serif text-rosental-950 mb-4 mt-8">Gemütlichkeit trifft Eleganz</h3>
            <p class="mb-6">Anders als im Sommer, wo oft die Hitze drückt, bietet der Winter die Möglichkeit für kuschelige Momente. Unser Kaminzimmer mit dem prasselnden Feuer ist der perfekte Ort für den Sektempfang. Kerzenschein, warme Farben und schwere Stoffe schaffen eine Atmosphäre von Geborgenheit und Luxus.</p>
            <h3 class="text-2xl font-serif text-rosental-950 mb-4 mt-8">Kulinarische Highlights</h3>
            <p class="mb-6">Auch kulinarisch darf es im Winter deftiger und intensiver zugehen. Wildgerichte, winterliches Wurzelgemüse und natürlich ein Dessertbuffet mit Zimt, Bratapfel und Schokolade lassen die Herzen der Gäste höherschlagen.</p>
        `,
        image: 'https://images.unsplash.com/photo-1519225448512-44fa6310e74f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        date: '2025-12-10',
        author: 'Anna Rosental',
        category: 'Inspiration'
    },
    {
        id: '2',
        slug: 'nachhaltig-feiern',
        title: 'Green Events: Nachhaltigkeit bei Ihrer Veranstaltung',
        excerpt: 'Wie Sie Ihr Event umweltbewusst gestalten können, ohne auf Stil und Exklusivität zu verzichten.',
        content: `
            <p class="mb-6">Nachhaltigkeit ist kein Trend, sondern eine Notwendigkeit. Wir im Kupferhof Rosental setzen uns aktiv dafür ein, Ressourcen zu schonen.</p>
            <p class="mb-6">Das beginnt bei der Auswahl unserer Catering-Partner, die vorwiegend regionale und saisonale Produkte verwenden, und geht bis hin zu unserem Energiekonzept.</p>
        `,
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        date: '2025-11-05',
        author: 'Team Rosental',
        category: 'Nachhaltigkeit'
    },
    {
        id: '3',
        slug: 'trends-2026',
        title: 'Event-Trends 2026: Was kommt, was bleibt?',
        excerpt: 'Ein Ausblick auf die Farben, Formen und Konzepte, die das kommende Event-Jahr prägen werden.',
        content: `
            <p class="mb-6">Das Jahr 2026 steht ganz im Zeichen von Individualität. "Micro-Weddings" – kleine, aber extrem hochwertige Feiern – liegen weiterhin im Trend.</p>
            <p class="mb-6">Farblich sehen wir eine Rückkehr zu kräftigen Erdtönen (Terrakotta, Moosgrün) kombiniert mit metallischen Akzenten in Kupfer und Bronze – was natürlich perfekt zu unserer Location passt.</p>
        `,
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        date: '2025-10-20',
        author: 'Lina Design',
        category: 'Trends'
    }
];
