var config = {
    style: 'mapbox://styles/chow-hong-kiu/cmk0y6tsu00u801qq8jdg6fxz',
    accessToken: 'pk.eyJ1IjoiY2hvdy1ob25nLWtpdSIsImEiOiJjbWprNXF0N2kwdWx0M2RweTJ1NnhsNmtyIn0.4742XaqjDE5TXj-3_V7beQ',
    showMarkers: false,
    theme: 'light',
    chapters: [
        {
            id: 'ch1',
            hidden: true,
            location: 
            { 
                center: [96.4937716983233, 33.151635852902864], 
                zoom: 1.8, 
                pitch: 0, 
                bearing: 0,
                duration: 7000
            },
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
            title: 'Hong Kong, China',
            image: './assets/HongKong-1.jpg',
            description: `
            <b>Hong Kong’s government connects stakeholders and aligns visions for innovative, sustainable urban development</b>, emphasizing local leadership. The <b>HOUSING • I&T Summit</b> showcases advanced technologies, innovative housing, and data-driven approaches that improve planning and public service delivery. It demonstrates practical applications and promotes knowledge exchange, highlighting local governments' role in creating smart, resilient, and inclusive cities.  
            <br><br>
            <b><a href="https://sdglocalaction.org/toronto-digital-infrastructure-strategic-framework/" target="_blank">See how this initiative highlights local government leadership in urban innovation</a></b>.
            `,
            location: 
            { 
                center: [114.13449208151843, 22.382869496740103], 
                zoom: 9.5, 
                pitch: 0, 
                bearing: 0,
                duration: 7000 
            },
            onChapterEnter: [
            ],
        }
    ]
};