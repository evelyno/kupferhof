SEO-Optimierungs-Guide & Checkliste
Zusammenfassung der SEO-Maßnahmen, die für das Vonhoegen-Projekt umgesetzt wurden. Diese Checkliste kann als Vorlage für zukünftige Webprojekte verwendet werden.

1. Grundlegende HTML-Struktur
Sprach-Attribut: Sicherstellen, dass das <html>-Tag die richtige Sprache hat (z.B. <html lang="de">).
Viewport: Korrekter Viewport-Tag für mobile Optimierung: <meta name="viewport" content="width=device-width, initial-scale=1.0">.
Charset: UTF-8 Kodierung: <meta charset="UTF-8">.
2. Meta-Tags (Head-Bereich)
Für jede einzelne Seite müssen individuelle und einzigartige Meta-Tags erstellt werden.

Page Title
Format: Hauptkeyword - Sekundäres Keyword | Firmenname
Länge: ca. 50-60 Zeichen.
Beispiel: <title>Industriebau Aachen - Effizient Bauen | Vonhoegen Bauunternehmung</title>
Meta Description
Funktion: Kurze Zusammenfassung für die Suchergebnisse (CTR-Optimierung).
Inhalt: Keyword enthalten, USP (Alleinstellungsmerkmal) nennen, Handlungsaufforderung (Call-to-Action).
Länge: ca. 150-160 Zeichen.
Beispiel: <meta name="description" content="Nachhaltiger Industriebau ohne Produktionsausfall. Wir planen und realisieren Ihre Hallenkonzepte in Aachen. Jetzt anfragen!">
Canonical Tag
Funktion: Verhindert Duplicate Content.
Beispiel: <link rel="canonical" href="https://example.com/aktuelle-seite.html">
3. Social Media Tags (Open Graph)
Damit Links auf Plattformen wie LinkedIn, Facebook oder WhatsApp gut aussehen.

<meta property="og:title" content="Seitentitel hier">
<meta property="og:description" content="Kurze Beschreibung hier">
<meta property="og:type" content="website"> <!-- oder 'article' -->
<meta property="og:url" content="https://example.com/aktuelle-seite.html">
<meta property="og:image" content="https://example.com/bild-fuer-social-media.jpg">
4. Strukturierte Daten (Schema.org)
JSON-LD Skripte helfen Suchmaschinen, den Inhalt besser zu verstehen (Business-Infos, Dienstleistungen, etc.).

Lokales Unternehmen (LocalBusiness)
Auf der Startseite oder Kontaktseite einbinden.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness", // oder spezifischer: ConstructionBusiness
  "name": "Firmenname GmbH",
  "url": "https://example.com/",
  "logo": "https://example.com/logo.png",
  "telephone": "+49 123 456789",
  "email": "info@example.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 1",
    "addressLocality": "Musterstadt",
    "postalCode": "12345",
    "addressCountry": "DE"
  },
  "areaServed": "Region Aachen",
  "priceRange": "$$$"
}
</script>
Dienstleistung (Service)
Auf den jeweiligen Leistungs-Unterseiten.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Name der Leistung (z.B. Industriebau)",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Firmenname GmbH"
  },
  "areaServed": "Region name"
}
</script>
5. Bilder-SEO
Alt-Text: Jedes Bild (<img>) muss ein alt-Attribut haben, das beschreibt, was auf dem Bild zu sehen ist. Keywords sinnvoll, aber natürlich einbauen.
Beispiel: <img src="..." alt="Moderne Industriehalle mit Stahlkonstruktion bei Nacht">
6. Technische Dateien (Root-Verzeichnis)
sitemap.xml
Eine Liste aller URLs der Website, damit Google alle Seiten findet.

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <priority>1.0</priority>
  </url>
  <!-- Weitere Seiten hier -->
</urlset>
robots.txt
Steuert den Zugriff für Suchmaschinen-Bots.

User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml
7. Checkliste für die Umsetzung
 Keyword-Recherche: Hauptkeywords für jede Seite definieren.
 Titel & Descriptions: Für alle Seiten schreiben und einfügen.
 Schema Markup: JSON-LD Skripte generieren (z.B. mit Merkle Schema Generator) und einfügen.
 Bilder prüfen: Haben alle wichtigen Bilder descriptive Alt-Texte?
 Sitemap erstellen: XML-Datei generieren und hochladen.
 Robots.txt: Datei erstellen und hochladen.
 Testen: Mit Google Rich Results Test und Lighthouse validieren.