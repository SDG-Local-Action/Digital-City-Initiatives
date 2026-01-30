var config = {
    style: 'mapbox://styles/chow-hong-kiu/cmk0y6tsu00u801qq8jdg6fxz',
    accessToken: 'pk.eyJ1IjoiY2hvdy1ob25nLWtpdSIsImEiOiJjbWprNXF0N2kwdWx0M2RweTJ1NnhsNmtyIn0.4742XaqjDE5TXj-3_V7beQ',
    showMarkers: false,
    theme: 'light',
    chapters: [
        {
            id: 'ch1',
            hidden: true,
            location: { center: [-108.15629603918075, 48.87092309436424], zoom: 1.8, pitch: 0, bearing: 0 },
            onChapterEnter: [
                { layer: 'country-boundaries', opacity: 1 },
                // Hide everything else
                { layer: 'world-background', opacity: 0 },
                { layer: 'world-background-line', opacity: 0 },
                { layer: 'clusters', opacity: 0 },
                { layer: 'unclustered-point', opacity: 0 },
                { layer: 'smart-points-city', opacity: 0 },
                { layer: 'smart-points-national', opacity: 0 },
                { layer: 'smart-world-background', opacity: 0 },
                { layer: 'smart-world-background-line', opacity: 0 },
                { layer: 'SDG-points-city', opacity: 0 },
                { layer: 'SDG-points-national', opacity: 0 }
            ]
        },
        {
            id: 'ch2',
            alignment: 'left',
            title: 'Toronto, Canada',
            image: './assets/Toronto-1.jpg',
            description: 
            `
            In Toronto, the city has implemented a <b>Digital Infrastructure Strategic Framework</b> that guides the planning, deployment, and governance of technology and data across municipal services and public spaces. This ensures digital tools are used responsibly to enhance inclusion, equity, privacy, transparency, and city operations. By setting principles for integrating sensors, apps, public WiFi, and data systems into urban services, the framework aims to increase citizens’ digital trust, narrow the digital divide, and facilitate decision-making that benefits local residents. 
            <br><br>
            <b><a href="https://sdglocalaction.org/toronto-digital-infrastructure-strategic-framework/" target="_blank">Discover how this initiative is shaping equitable and effective digital transformation</a></b>.
            `,
            location: { center: [-79.41931486056306, 43.663152489414344], zoom: 10, pitch: 40, bearing: 0 },
            onChapterEnter: [
            ],
        }
    ]
};