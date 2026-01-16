# Security & DSGVO (GDPR) Compliance Guide
Dieses Dokument fasst alle Maßnahmen zusammen, die für die **Vonhoegen Bauunternehmung** Website umgesetzt wurden, um Sicherheit und DSGVO-Konformität zu gewährleisten. Diese Best Practices können als Vorlage für zukünftige Projekte dienen.
## 1. DSGVO (GDPR) Konformität
Das Hauptziel der DSGVO-Maßnahmen ist die Minimierung der Datenübertragung an Dritte (insbesondere US-Server) ohne explizite Einwilligung des Nutzers.
### A. Lokales Hosting von Assets (Asset Localization)
Um Verbindungen zu Drittanbietern beim Laden der Seite zu vermeiden, wurden alle externen Ressourcen lokal eingebunden.
*   **Google Fonts:**
    *   **Problem:** Das Laden von Fonts direkt von Google Servern überträgt die IP-Adresse des Nutzers an Google.
    *   **Lösung:** Schriftarten (z.B. *Inter*) herunterladen und lokal im Ordner `/assets/fonts/` speichern. Einbindung über lokale CSS-Datei (`fonts.css`).
*   **Icons (Lucide / Iconify):**
    *   **Problem:** Laden von Scripten oder SVGs von CDNs.
    *   **Lösung:** Integration der benötigten Icons direkt als SVG oder lokales Hosting der Icon-Bibliotheken.
*   **Bilder:**
    *   **Problem:** Hotlinking von Bildern (z.B. Unsplash) überträgt Daten an den Hoster.
    *   **Lösung:** Alle Bilder herunterladen und lokal unter `/assets/images/` speichern.
### B. Cookie Consent Manager (`cookie-consent.js`)
Ein leichtgewichtiges, eigenentwickeltes Script zur Verwaltung von Einwilligungen.
*   **Funktion:**
    *   Blockiert nicht-essenzielle Scripte, bis der Nutzer zustimmt.
    *   Speichert die Präferenz lokal (`localStorage` / `cookie`).
    *   Bietet granulare Optionen (Notwendig, Marketing, etc. – aktuell vereinfacht, da keine Tracker genutzt werden).
    *   **Besonderheit:** Da wir Assets lokal hosten, ist der Banner oft nur informativ oder für spezifische Marketing-Tools nötig.
### C. Kontaktformulare & Datenschutz
Jedes Formular, das personenbezogene Daten verarbeitet, muss abgesichert sein.
*   **Pflichtfeld-Checkbox:**
    *   Hinzufügen einer Checkbox: *"Ich habe die Datenschutzerklärung zur Kenntnis genommen..."*
    *   Verlinkung zur Datenschutz-Seite (`target="_blank"`).
    *   Attribut `required` im HTML-Input, um das Absenden ohne Zustimmung zu verhindern.
### D. Rechtstexte
*   **Impressum:** Vollständige Anbieterkennzeichnungspflicht nach § 5 TMG.
*   **Datenschutzerklärung:** Detaillierte Aufklärung über Datenerhebung, Speicherung, Rechte der Nutzer und eingesetzte Tools.
---
## 2. Website Security (Entwicklungsphase)
Um die Website während der Entwicklung vor unbefugtem Zugriff zu schützen, wurde ein client-seitiger Passwortschutz implementiert.
### A. Passwort-Gate (`auth-gate.js`)
Ein Script, das den Zugriff auf die Seite sperrt, bis ein korrektes Passwort eingegeben wurde.
*   **Funktionsweise:**
    *   Überprüft beim Laden der Seite, ob ein Authentifizierungs-Token (Cookie) vorhanden ist.
    *   Falls nein: Zeigt ein Overlay, das den gesamten Inhalt verdeckt.
    *   **Sicherheit:** Das Passwort wird **nicht** im Klartext im Code gespeichert. Stattdessen wird ein **SHA-256 Hash** verwendet und abgeglichen.
    *   **User Experience:** Setzt nach erfolgreicher Eingabe ein Cookie (Gültigkeit: 24 Stunden), sodass das Passwort nicht bei jedem Seitenwechsel neu eingegeben werden muss.
    *   **Toggle:** Kann über die Variable `AUTH_CONFIG.enabled = false` im Script für den Live-Betrieb einfach deaktiviert werden.
### B. Input Validierung
*   Alle Formularfelder nutzen HTML5-Validierung (`type="email"`, `required`, etc.), um fehlerhafte oder bösartige Eingaben client-seitig zu erschweren.
---
## 3. Checkliste für neue Projekte
Um diese Standards auf ein neues Projekt anzuwenden, folgen Sie diesen Schritten:
1.  **Struktur anlegen:** Ordner `/assets/` mit Unterordnern `fonts`, `images`, `css`, `js`.
2.  **Assets bereinigen:**
    *   Google Fonts Helper nutzen -> Fonts herunterladen -> lokal einbinden.
    *   CDN-Links (Bootstrap, Icons etc.) durch lokale Kopien ersetzen.
3.  **Scripts kopieren:**
    *   `auth-gate.js` ins Root-Verzeichnis kopieren.
    *   `cookie-consent.js` (falls benötigt) integrieren.
4.  **HTML anpassen:**
    *   Script-Referenzen (`<script src="/auth-gate.js"></script>`) in den `<head>` aller Seiten einfügen.
    *   Datenschutz-Checkbox in alle `<form>` Elemente einbauen.
5.  **Rechtstexte:** Impressum und Datenschutz mit korrekten Inhalten füllen.
6.  **Passwort setzen:** Neuen SHA-256 Hash für das gewünschte Projekt-Passwort generieren und in `auth-gate.js` eintragen.
---
*Hinweis: Diese Maßnahmen decken grundlegende technische Anforderungen ab. Für vollständige Rechtssicherheit wird empfohlen, die Rechtstexte von einem Anwalt oder einem zertifizierten Generator (z.B. e-recht24) erstellen zu lassen.*