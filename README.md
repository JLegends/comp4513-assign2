
# CanvasHub - COMP 4513 Assignment 2

CanvasHub is a single-page React application built with Vite, designed to explore and interact with art data including galleries, artists, paintings, and genres. This project was developed as part of COMP 4513 Assignment #2, showcasing a responsive and visually appealing interface styled with Tailwind CSS, dynamic data fetching from a custom API, and interactive map features powered by React Leaflet.
## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Assignment Compliance](#assignment-compliance)
- [Credits](#credits)

## Overview
CanvasHub provides users with an immersive experience to browse art-related data through multiple views: Gallery, Artist, Painting, and Genre. Users can log in (simulated), filter and sort paintings, view detailed painting information in a modal dialog, manage a favorites list, and explore gallery locations on a map. The application fetches data from a custom API hosted at `https://w2025-assign1.onrender.com/api` and persists user preferences using local storage.

## Features
- **Login View**: Simulated login with a hero image and credentials display (email: `test@gmail.com`, password: `1234`).
- **Gallery View**: Lists galleries with details and a map (via React Leaflet), displays associated paintings with sorting options.
- **Artist View**: Shows artist information and their paintings with sorting capabilities.
- **Painting View**: Allows filtering paintings by artist, gallery, or genre, with sortable results.
- **Genre View**: Displays genre details and related paintings with sorting.
- **Painting Popup**: Modal dialog showing detailed painting info, dominant colors, and favorite toggle.
- **Favorites Popup**: Modal dialog to view and manage favorited artists, galleries, and paintings.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.
- **Loading States**: Displays loading animations during data fetching for a smooth user experience.

## Technologies Used
- ![React](https://img.shields.io/badge/React-19.0.0--rc.1-blue) - JavaScript library for building the user interface.
- ![Vite](https://img.shields.io/badge/Vite-6.2.2-green) - Fast build tool and development server for modern web projects.
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0.15-teal) - Utility-first CSS framework for styling, with `@tailwindcss/vite` ![Tailwind Vite](https://img.shields.io/badge/Tailwind%20Vite-4.0.14-teal).
- ![React Leaflet](https://img.shields.io/badge/React%20Leaflet-5.0.0--rc.2-orange) - Integration of ![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-orange) maps for displaying gallery locations.
- ![React Router](https://img.shields.io/badge/React%20Router-7.4.0-purple) & ![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-7.4.0-purple) - Manages navigation between views in the single-page application.
- ![Lucide React](https://img.shields.io/badge/Lucide%20React-0.483.0-pink) - Icon library for UI elements.
- ![Tailwind Scrollbar Hide](https://img.shields.io/badge/Tailwind%20Scrollbar%20Hide-2.0.0-cyan) - Customizes scrollbar visibility with Tailwind.
- **Local Storage**: Persists login state and fetched data for performance.
- **Fetch API**: Retrieves data from the custom API endpoint.

## Installation
To run CanvasHub locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/JLegends/comp4513-assign2.git
   cd comp4513-assign2
   ```
2. **Install Dependencies**:
    ```bash
    npm install
    ```
3. **Start the Development Server**:
    ```bash
    npm run dev
    ```
    Open your browser to http://localhost:5173 (or the port Vite assigns).

## Usage
1. **Login**: Enter `test@gmail.com` and `1234` on the login screen to access the app.
2. **Navigate Views**: Use the navigation to switch between Gallery, Artist, Painting, and Genre Views.
3. **Interact with Data**:
    - Click a gallery, artist, or genre to view details and associated paintings.
    - Sort painting lists by clicking column headers (e.g., title, artist, year).
    - Filter paintings in the Painting View using dropdowns.
    - Click a painting to open its detailed popup.
    - Add items to favorites and view them in the Favorites popup.
4. **Explore Maps**: In the gallery and artist views, see gallery locations or artists country of origin on an interactive map (React Leaflet).

## Assignment Compliance
This project meets the COMP 4513 Assignment #2 requirements:
- **Vite Structure**: Built using Vite with index.html as the entry point.
- **CSS Library**: Uses Tailwind CSS for styling.
- **Views**: Implements Login, Gallery, Artist, Painting, and Genre views with required functionality.
- **Data Fetching**: Consumes APIs from Assignment 1 (https://w2025-assign1.onrender.com/api).
- **Sorting**: Supports sorting in painting lists (title, artist, year).
- **Filtering**: Painting View includes mutually exclusive filters.
- **Modal Dialogs**: Painting and Favorites popups with detailed info and management options.
- **Map**s: Gallery and Artist Views integrate React Leaflet for locations.
- **Favorites**: Add/remove items with feedback via heart icons and a dedicated popup.
- **Performance**: Data fetched once and cached in local storage, with loading animations.
- **Styling**: Polished design with Tailwind CSS, exceeding basic sketch requirements.

## Credits
### Hero Image
- [Starry Night Image](https://sanctuarymentalhealth.org/2021/03/04/the-starry-night/)

### Login Form Inspiration
- [Default Login Page](https://flowbite.com/blocks/marketing/login/)

### Icons
- [Image Placeholder](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:image:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=image&icon.size=24&icon.color=%236A7283)
- [Person Placeholder](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:person:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=profi&icon.size=24&icon.color=%236A7283)
- [Heart Icon Contour](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:favorite:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=Heart&icon.size=24&icon.color=%236A7283)
- [Heart Icon Filled In](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:favorite:FILL@1;wght@400;GRAD@0;opsz@24&icon.query=Heart&icon.size=24&icon.color=%23e3e3e3)
- [Trash Icon](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:delete:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=trash&icon.size=24&icon.color=%23FFFFFF)
- [Blank](https://imgur.com/gallery/blank-transparent-png-Y1x2s41)

### Gallery Photos
- [Prado Museum](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.booking.com%2Fattractions%2Fes%2Fprsyzqcx5dhn-prado-museum-skip-the-line-admission.en-gb.html&psig=AOvVaw0yFAHhUr-IqCbEpbzqJjYR&ust=1742626826721000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLj75PnMmowDFQAAAAAdAAAAABAP)
- [State Museum](https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStaatliche_Museen_zu_Berlin&psig=AOvVaw2BCZZClVfIfg3FX7kvLyEG&ust=1742626667865000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiUmq7MmowDFQAAAAAdAAAAABAO)
- [Uffizi Museum](https://lovefromtuscany.com/wp-content/uploads/2019/02/gallery-1803525_1280-1024x768.jpg)
- [National Gallery London](https://www.nationalgallery.org.uk/media/4pjlkodd/plan-your-visit-crop-photoshop.jpg?rxy=0.6015037593984962,0.4844054580896686&width=1150&height=640&v=1db6b42cbcfd310)
- [Met Museum](https://engage.metmuseum.org/media/f14c3uuo/assets__ga__locations__met-fifth-ave.jpg?anchor=center&mode=crop&quality=80&width=600&height=400&rnd=132599299305800000)
- [National Gallery of Art](https://www.nga.gov/content/dam/ngaweb/press/2021/tickets-no-longer-required/card-west-building.jpg)
- [Art Institute of Chicago](https://static01.nyt.com/images/2024/09/11/multimedia/CHICAGO-ART-01-cwgb/CHICAGO-ART-01-cwgb-mediumSquareAt3X.jpg)
- [Philadelphia Museum of Art](https://content.presspage.com/uploads/1935/7016f566-3047-4295-8b72-ebe9a50407b6/1920_2023-05-31-tt-088.jpg?10000)
- [Louvre](https://www.theartlifegallery.com/blog/wp-content/uploads/2023/08/Image-01-1.jpg)
- [Tate Britain](https://upload.wikimedia.org/wikipedia/commons/c/c0/Tate_Britain_%285822081512%29_%282%29.jpg)
- [Art History Museum of Vienna](https://upload.wikimedia.org/wikipedia/commons/c/c0/Tate_Britain_%285822081512%29_%282%29.jpg)
- [Musée d'Orsay](https://www.fattiretours.com/app/uploads/2022/03/paris-third-party-tours-musee-d-orsay-hero-slider-8-large.jpg)
- [MoMA](https://press.moma.org/wp-content/uploads/2023/06/01_MoMA_Photography-by-Brett-Beyer-2000x1359.jpg)
- [Belvedere Gallery](https://www.belvedere.at/sites/default/files/jart-images/_437475375137.jpg)
- [Hermitage Museum](https://www.justgorussia.co.uk/userfiles/images/pages/excursions/stpetersburg_hermitage/new_recommend_a_friend.jpg)
- [J Paul Getty Museum](https://www.1000museums.com/wp-content/uploads/2019/11/Getty-Center.jpg)
- [National Gallery of Norway](https://www.nasjonalmuseet.no/globalassets/bilder/lokaler/nye-nm/national-museum-of-norway_photo-iwan-baan_2.jpg)
- [Van Gogh Museum](https://www.nasjonalmuseet.no/globalassets/bilder/lokaler/nye-nm/national-museum-of-norway_photo-iwan-baan_2.jpg)
- [Rijksmuseum](https://www.rijksmuseum.nl/assets/fdd2733b-030d-46be-ac53-932f3b719e77?w=1920&h=1080&fx=3333&fy=2025&c=c454422478deb97d5028ef15fe8ee1444efc831752f549ed9579f8f86f2b6708)
- [Royal Picture Gallery](https://www.bb-belgravia.com/wp-content/uploads/sites/3/2020/09/404f885e0b35b4ff4f510c17e19bc814.jpg)
- [Musée du Petit Palais](https://cdn.paris.fr/eqpts-prod/2022/12/09/6f38ba91ce3ca671c3bee336051d5d7e.jpg)
- [Guggenheim](https://www.guggenheim.org/wp-content/uploads/2016/04/architecture-srgm-exterior-flavin-16-9-ratio-web.jpg)
- [Courtauld](https://courtauld.ac.uk/wp-content/uploads/2021/03/Somerset-House.jpg)
- [Barnes](https://images.adsttc.com/media/images/5018/2c05/28ba/0d48/2400/0915/large_jpg/stringio.jpg?1414557414)
- [Sistine Chapel](https://www.thetrainline.com/cms/media/4162/italy_rome_vatican-city.jpg?mode=crop&width=660&height=440&quality=70)
- [Picture Gallery (Berlin)](https://upload.wikimedia.org/wikipedia/commons/a/a9/Berlin%2C_Mitte%2C_Museumsinsel%2C_Alte_Nationalgalerie.jpg)
- [Brooklyn Museum](https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/0b/9e/97/the-facade-of-the-brooklyn.jpg?w=900&h=500&s=1)
- [Old Masters Gallery](https://dam.destination.one/1886669/af5eb34927fa29cafa0348580447127314b535bd489f20be81548cf5f12cdb7d/gema-ldegalerie-alte-meister-jpg.jpg)
- [Museum of Fine Arts](https://d1nn9x4fgzyvn4.cloudfront.net/inline-images/SC446013b_860x645.jpg)
- [National Gallery of Scotland](https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/8c/c1/a2/the-national.jpg?w=900&h=500&s=1)
- [Albright-Knox Art Gallery](https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/43/48/69/the-museum-s-east-facade.jpg?w=1200&h=-1&s=1)
- [Detroit Institute of Arts](https://statebystatetravel.com/wp-content/uploads/2023/07/IMG_5107.jpg)
- [Indianapolis Museum of Art](https://assets.simpleviewinc.com/simpleview/image/upload/crm/demo/DMS_image_2573_d9b788ed-5056-854c-b6ab204c716641e1.jpg)
- [Brera Art Gallery](https://upload.wikimedia.org/wikipedia/commons/a/ac/Milan_-_Pinacoth%C3%A8que_de_Brera_-_Cour_int%C3%A9rieure.jpg)
- [Leopold Museum](https://upload.wikimedia.org/wikipedia/commons/4/43/Wien_07_Leopold_Museum_a.jpg)

### Missing Artist Portraits
- [Jacob van Ruisdael](https://dutch-art-reproductions.com/en/masters/jacob-van-ruisdael)
- [Canaletto](https://www.wikiart.org/en/canaletto)
- [Agnolo Gaddi](https://en.wikipedia.org/wiki/Agnolo_Gaddi)
