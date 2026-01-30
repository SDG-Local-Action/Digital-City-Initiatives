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
                center: [-62.571350486088285, -7.452706745742488], 
                zoom: 2, 
                pitch: 30, 
                bearing: 0 
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
            title: 'Buenos Aires, Argentina',
            image: './assets/Buenos Aires-2.jpg',
            description: `
            Buenos Aires is <b>utilizing AI-powered analytics to detect traffic incidents</b> in real-time, greatly lowering emergency response times. By incorporating these digital tools into urban planning, the city is not only managing its roads but also promoting safer, more efficient environments that directly improve the daily lives of its residents. 
            <br><br>
            Read more about these <b><a href="https://sdglocalaction.org/traffic-management-policies/">traffic management policies</a></b>.
            `,
            location: { center: [-58.45218120303578, -34.60890104545528], zoom: 11, pitch: 50, bearing: 0 },
            onChapterEnter: [
            ]
        },
        {
            id: 'ch3',
            alignment: 'right',
            title: 'Belize City，Belize',
            image: './assets/belize-1.jpg',
            description: `
            Belize City is advancing its <b>Urban Sustainability and Smart City Project by integrating data-driven governance with community-centred planning</b>. By establishing a dedicated Geographic Information System (GIS) department to revitalize public green spaces, the city is building both digital and physical foundations for long-term urban resilience. Incorporating evidence-based decision-making into city operations to create safe and inclusive public environments, these initiatives improve citizens' daily urban lives. 
            <br><br>
            Discover more about <b><a href="https://sdglocalaction.org/belize-smart-city/" target="_blank">Belize City’s digital city journey</a></b>.
            `,
            location: { center: [-88.21155389740738, 17.500994048623063], zoom: 12, pitch: 30, bearing: 0 },
            onChapterEnter: [
                { layer: 'country-boundaries', opacity: 1 },
                { layer: 'smart-points-city', opacity: 1 },
                { layer: 'smart-points-national', opacity: 1 },
                { layer: 'smart-world-background', opacity: 1 },
                { layer: 'smart-world-background-line', opacity: 1 },
                { layer: 'world-background', opacity: 0 },
                { layer: 'world-background-line', opacity: 0 },
                { layer: 'clusters', opacity: 0 },
                { layer: 'unclustered-point', opacity: 0 },
                { layer: 'SDG-points-city', opacity: 0 },
                { layer: 'SDG-points-national', opacity: 0 }
            ]
        }
    ]
};