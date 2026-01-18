import React from 'react';
import PageHero from '../components/PageHero';

export const Events = () => (
    <PageHero
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        title="Events &<br/>Veranstaltungen"
        subtitle="Ob Tagung, Weihnachtsfeier oder Sommerfest – wir bieten den passenden Rahmen für Ihr Event."
        tag="Corporate"
    />
);

export const Location = () => (
    <PageHero
        image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        title="Unsere<br/>Location"
        subtitle="Entdecken Sie die Vielseitigkeit des Kupferhof Rosental. Vom historischen Ballsaal bis zur modernen Lounge."
        tag="Räumlichkeiten"
    />
);

export const Catering = () => (
    <PageHero
        image="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        title="Kulinarische<br/>Highlights"
        subtitle="Genussmomente für jeden Anlass. Lassen Sie sich von unserer Küche verwöhnen."
        tag="Catering"
    />
);

export const ContactPage = () => (
    <PageHero
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        title="Kontakt &<br/>Anfrage"
        subtitle="Wir freuen uns auf Ihre Nachricht. Planen Sie jetzt Ihr Event im Kupferhof Rosental."
        tag="Kontakt"
    />
);
