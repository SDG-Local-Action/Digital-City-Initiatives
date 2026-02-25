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
                center: [6.172679230602397, 46.370887314396136], 
                zoom: 3.5, 
                pitch: 0, 
                bearing: 0, 
                duration: 7000
            },
            onChapterEnter: [
                { layer: 'country-boundaries', opacity: 1 },
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
            title: 'Prague, Czech Republic ',
            image: './assets/Prague-1.jpg',
            description: `
            The city's open-source <b>“Golemio”</b> data platform allows local governments to <b>visualize mobility patterns, monitor service delivery, and guide investments with evidence-based insights</b>. By making data accessible and actionable, the platform enhances local decision-making, promotes transparency, and helps ensure resources are distributed fairly.
            <br><br>
            <b><a href="https://sdglocalaction.org/using-data-platforms-for-local-decision-making-2/" target="_blank">Explore how Prague is leveraging data for smarter, more inclusive governance</a>.
            `,
            location: 
            { 
                center: [14.443333844042339, 50.07903012331339],
                zoom: 10, 
                pitch: 20, 
                bearing: 0,
                duration: 7000
            },
            onChapterEnter: [
            ],
        },
        {
            id: 'ch3',
            alignment: 'right',
            title: 'Barcelona, Spain ',
            image: './assets/Barcelona-1.jpg',
            description: 
            `
            Barcelona’s approach focuses on a <b>“Network of networks” that connects various urban systems through data and connectivity</b>. A key component is the open-source sensor platform “Sentilo”, which collects real-time city infrastructure data—mobility, environment, energy, and waste—enabling local governments to make evidence-based decisions, improve services, and foster citizen engagement. It facilitates data flow and system interoperability, strengthening digital infrastructure and promoting responsive urban development.   
            <br><br>
            <b><a href="https://sdglocalaction.org/smart-city-barcelona/" target="_blank">See how Barcelona is using data and sensor networks to advance public service delivery.</a></b>.
            `,
            location: 
            { center: [2.156583983161103, 41.39795662550992], 
                zoom: 11, 
                pitch: 30, 
                bearing: 0,
                duration: 7000 
            },
            onChapterEnter: [
            ]
        }
    ]
};