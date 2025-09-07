# NerdWijzer - Stemwijzer voor Nerds

Een moderne stemwijzer speciaal ontwikkeld voor tech-savvy burgers, met vragen over IT, privacy, mensenrechten, auto's, klimaat en energie.

## Features

- 🚀 Moderne, responsive interface
- 🎯 20 willekeurige vragen per sessie
- 📊 Slider-based antwoorden (1-5 schaal)
- 🏆 Resultaten met alle Nederlandse politieke partijen
- 📱 Mobile-friendly design
- 🎨 Mooie animaties en moderne styling

## Installatie

1. Zorg ervoor dat PHP geïnstalleerd is op je systeem
2. Clone of download dit project
3. Navigeer naar de project directory

## Gebruik

### Optie 1: PHP Development Server
```bash
php -S localhost:8000
```

### Optie 2: Via server.php script
```bash
php server.php
```

### Optie 3: Apache/Nginx
Plaats de bestanden in je web server directory en open `index.html`

## Bestanden

- `index.html` - Hoofdpagina met alle JavaScript functionaliteit
- `style.css` - Moderne styling met dark theme
- `questions.json` - Database met vragen en partijposities
- `server.php` - Eenvoudige PHP server (optioneel)

## Vragen Database

Het `questions.json` bestand bevat:
- 20 voorbeeldvragen over nerd-gerelateerde onderwerpen
- Partijposities voor alle 15 Nederlandse politieke partijen
- Uitleg bij elke vraag

## Politieke Partijen

De stemwijzer bevat alle relevante Nederlandse politieke partijen:
- PVV, GL/PvdA, VVD, NSC, D66, BBB, CDA, SP, Denk, PvdD, FvD, SGP, CU, Volt, JA21

## Technische Details

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Geen server-side processing nodig (statische bestanden)
- **Data**: JSON-formatted vragen en antwoorden
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Compatibiliteit**: Moderne browsers (Chrome, Firefox, Safari, Edge)

## Aanpassen

### Nieuwe vragen toevoegen
Bewerk `questions.json` en voeg nieuwe vragen toe aan de `questions` array. Elke vraag moet:
- Een unieke `id` hebben
- Een `question` tekst bevatten
- Een `explanation` hebben
- `type: "scale"` zijn
- `party_positions` voor alle partijen bevatten (1-5 schaal)

### Styling aanpassen
Bewerk `style.css` voor custom styling. De interface gebruikt CSS custom properties en moderne CSS features.

## Licentie

Dit project is open source en vrij te gebruiken en aan te passen.

## Contact

Voor vragen of suggesties, open een issue op GitHub of neem contact op.
