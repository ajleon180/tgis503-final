var config = {
    style: 'mapbox://styles/ajleon180/clb4pfq8j000h14pi54eudn8d',
    accessToken: 'pk.eyJ1IjoiYWpsZW9uMTgwIiwiYSI6ImNsYTQ4ZDVqcTA5cHYzd21seGszbWI3eDIifQ.yaXUrccsnQ_RHZqxu7UKNw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Yakuza Story Map',
    subtitle: 'Demonstrating how art imitates life',
    byline: 'By A.J. Leon',
    footer: '<p>Sources</p><p>Basemap and Building Layers: Mapbox and OpenStreetMap</p><p>Story: SEGA</p><p>Identifying polygons created by author using Mapbox and OpenStreetMap basemaps as reference</p>',
    chapters: [
      {
        id: 'slug-style-id',
        alignment: 'left',
        title: 'A Brief Overview',
        image: 'images/Kiryu.png',
        description: '<p>The <i>Yakuza</i> video game series follows Kazuma Kiryu (above), a semi-retired enforcer for the Dojima Family (a subsidiary of the Tojo Clan) as he navigates the Japanese underworld. Over the course of the series, Kiryu must work with his allies in his former clan, law enforcement, and local business owners to prevent wars between Yakuza factions and to protect the city.</p><p>Photo Credit - Copyright, SEGA</p>',
        location: {
          center: [137.37347, 37.89326],
          zoom: 5.75,
          pitch: 2.5,
          bearing: -32
        },
        onChapterEnter: [            
            {
                layer: 'kiwami-cities',
                opacity: 0
            },
            {
                layer: 'kiwami-city-names',
                opacity: 0
            }
        ],
        onChapterExit: []
      },
      {
        id: 'franchise-overview',
        alignment: 'left',
        title: 'A Brief Overview',
        description: '<p>The 8 games of <i>Yakuza</i> franchise were released between 2005 and 2020 and have taken place in 8 different Japanese cities, identified in the map to the right (<i>Yakuza 5</i> alone took place in 5 cities). The games take place in fictional neighborhoods based on real neighborhoods within each city. While the neighborhoods are fictional, they have identifiable landmarks that make it clear what real neighborhoods they represent.</p><p>Aside from <i>Yakuza 0</i>, which took place in 1988, the games have taken place contemporaneously with the date of release. This has resulted in charachters aging over the course of the series. It has also allowed both real-life and story-driven changes to the neighborhoods represented in the games to occur over time.</p>',
        location: {
          center: [126.26964, 34.00550],
          zoom: 5,
          pitch: .5,
          bearing: -21
        },
        onChapterEnter: [
            {
                layer: 'yakuza-cities',
                opacity: 1
            },
            {
                layer: 'yakuza-city-names',
                opacity: 1
            }
        ],
        onChapterExit: [
            {
                layer: 'yakuza-cities',
                opacity: 0
            },
            {
                layer: 'yakuza-city-names',
                opacity: 0
            }
        ]
      },
      {
        id: 'kiwami-overview',
        alignment: 'left',
        title: 'Yakuza 1 and 2 Overview',
        description: 'This map will be focusing on <i>Yakuza</i> and <i>Yakuza 2</i>, the first two entries to the <i>Yakuza</i> franchise. <i>Yakuza</i> was set entirely within Tokyo, while <i>Yakuza 2</i> was set in both Tokyo and Osaka. Released in 2005 and 2006 respectively, <i>Yakuza 1</i> and <i>Yakuza 2</i> were remade in 2016 and 2017 as <i>Yakuza Kiwami</i> and <i>Yakuza Kiwami 2</i>. The imagery and description of the games in this map are based on the <i>Kiwami</i> versions of the games.',
        location: {
          center: [136.09801, 36.06510],
          zoom: 7.3,
          pitch: 3,
          bearing: 31.22
        },
        onChapterEnter: [
            {
                layer: 'kiwami-cities',
                opacity: 1
            },
            {
                layer: 'kiwami-city-names',
                opacity: 1
            }
        ],
        onChapterExit: [
            {
                layer: 'kiwami-cities',
                opacity: 0
            },
            {
                layer: 'kiwami-city-names',
                opacity: 0
            }
        ]
      },
      {
        id: 'yakuza1-overview',
        alignment: 'left',
        title: 'Yakuza 1 Overview',
        description: '<p><i>Yakuza</i> is set in the fictional neighborhood of Kamurocho, based on Kabukicho, Shinjuku, Tokyo.  The game begins in 1995, with Kiryu taking the blame for the murder of Sohei Dojima to protect his friends, Akira Nishikiyama and Yumi Sawamura. Kiryu spent 10 years in prison for the crime. Upon returning to Kamurocho after completing his sentence Kiryu found that the neighborhood had changed, with Nishikiyama now a ruthless Yakuza captain, Yumi disappeared, and the Tojo Clan (his former gang) in disarray. Soon thereafter, the leader of the Tojo Clan, Chairman Masaru Sera, was murdered and Kiryu learned that 10 billion yen was stolen from the Tojo Clan\'s reserves.</p><p>In the chaos, Futoshi Shimano conspired with the Omi Alliance, a Yakuza gang based in Osaka, to take over the Tojo Clan. Among Simano\'s subordinates who entered Kamurocho is Goro Majima, who took a particular interest in Kiryu prior to Kiryu\'s incarceration.</p><p>Early in his search for answers, Kiryu encountered a young girl at a murder scene.  Kiryu led the girl, Haurka Sawamura, the daughter of his missing friend Yumi, away from the crime scene and put her under his protection.</p>',
        location: {
          center: [139.69995, 35.69621],
          zoom: 16,
          pitch: 50,
          bearing: 0
        },
        onChapterEnter: [
            {
                layer: 'kabukicho-poly',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'kabukicho-poly',
                opacity: 0
            },
        ]
      },
      {
        id: 'tenkaichi',
        alignment: 'left',
        title: 'Kabukicho Streetscape',
        image: 'images/Tenkaichi_Street.jpg',
        description: '<p>When Kiryu returned to Kabukicho upon completion of his prison sentence, he is dropped off at Tenkaichi Street, near the real-life location of the Kabukicho Ichiban-gai (see images). Buisinesses found along Tenkaichi street include Serena, Kiryu\'s hideout in Kamurocho, and Stardust, a nightclub run by Kiryu\'s friends (and frequent target of Kiryu\'s enemies).</p><p><img src="images/Tenkaichi_Street_y2.png" alt="Tenkaichi Street in Yakuza 2"></p><p>Photo Credits - Top Photo: Basile Morin; Bottom Photo: Copyright, SEGA</p>',
        location: {
          center: [139.70100, 35.69421],
          zoom: 18.8,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
            {
                layer: 'tenkaichi',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'tenkaichi',
                opacity: 0
            },
        ]
      },
      {
        id: 'west-park',
        alignment: 'left',
        title: 'West Park',
        image: 'images/Kabukicho_Park.png',
        description: '<p>West Park is a park in Kamurocho that is partially used as a homeless encampment. Kiryu befriended the residnts of the camp and was able to shelter in the park when the situation in the rest of the city became too dangerous for him. West Park also contains an abandoned subway station that was converted into an underground red light district by the Florist of Sai, a disgraced police officer turned information broker who becomes one of Kiryu\'s closest confidants in his search for the missing 10 billion yen.</p><p>There is a park in Kabukicho in roughly the same location as West Park.  However, the real-life park is smaller than West Park and does not contain many of the features West Park has in the game, such as a subway station or the fountain shown in the below screenshot.</p><p><img src="images/West_Park.png" alt="West Park, Yakuza"></p><img src="/images/Purgatory.png" alt="Purgatory, Yakuza"<p></p<<p>Photo Credits - Top Photo: Copyright, Google; Bottom Photos: Copyright, SEGA</p>',
        location: {
          center: [139.70118, 35.69770],
          zoom: 18.7,
          pitch: 60,
          bearing: 63.2
        },
        onChapterEnter: [
            {
                layer: 'west-park',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'west-park',
                opacity: 0
            },
        ]
      },
      {
        id: 'batting-cage',
        alignment: 'left',
        title: 'Batting Cage',
        image: 'images/Batting_Cage.png',
        description: '<p>While the batting cages in Kamurocho mainly served as a minigame in the <i>Yakuza</i> games, they also were the setting for a key event. Goro Majima, captain of the Shimano Family kidnapped Haruka and held her hostage at the batting cages to force Kiryu into a direct confrontation.  Kiryu defeated Majima and rescued Haruka.</p><p><img src="images/Batting_Cage_y2.png" alt="Batting Cage in Yakuza 2"></p><p>Photo Credits - Top Photo: Copyright, Google; Bottom Photo: Copyright, SEGA</p>',
        location: {
          center: [139.70437, 35.69630],
          zoom: 18.7,
          pitch: 52,
          bearing: -109.6
        },
        onChapterEnter: [
            {
                layer: 'batting-cage',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'batting-cage',
                opacity: 0
            },
        ]
      },
      {
        id: 'tokyo-bay',
        alignment: 'left',
        title: 'Showdown at Shibaura Wharf',
        image: 'images/Rainbow_Bridge.jpg',
        description: '<p>Shibaura Wharf, at the base of the Rainbow Bridge (on the far side of the bridge in the above photo), is the scene of the decisive battle between Kiryu and his allies and the Shimano Family. Kiryu\'s mentor and father figure, Shintaro Kazama, was being gaurded on the yacht of Yukio Terada, a captian with the Omi Alliance. The Shimano Family attacked the yacht and in the ensuing battle, both Futoshi Shimano and Kazama are killed.</p><p><img src="images/Shibaura_Wharf_y1.png" alt="Batting Cage in Yakuza 2"></p><p>Photo Credits - Top Photo: ITA-ATU; Bottom Photo: Copyright, SEGA</p>',
        location: {
          center: [139.75712, 35.63878],
          zoom: 16,
          pitch: 52,
          bearing: -42.4
        },
        onChapterEnter: [
            {
                layer: 'shibaura-wharf',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'shibaura-wharf',
                opacity: 0
            },
        ]
      },
      {
        id: 'millennium-tower',
        alignment: 'left',
        title: 'Millennium Tower',
        image: 'images/Millennium_Tower.jpg',
        description: '<p>The Millennium Tower is the highest building in Kamurocho.  Its construction was recently completed when Kiryu returned to Kamurocho at the beginning of <i>Yakuza</i>. The Millenium Tower is also the setting for <i>Yakuza\'s</i> climax.  Following the battle at the wharf, Kiryu learned that the missing 10 billion yen was stolen by Kazama, Yumi, and Chairman Sera. Kiryu met Yumi at the Millennium Tower, but their meeting was interrupted by the arrival of Yumi\'s ex-husband and Haruka\'s father, Kyohei Jingu and his henchmen, as well as Arika Nishikiyama.  Jingu was a corrupt politician whowanted the stolen money to advance his political goals. The following series of battles results in the deaths of Yumi and Jingu, as well as Nishikiyama when he detonated a bomb in the safe containing the 10 billion yen and himself.</p><p>In a reversal of the other features shown in this map, Millennium Tower actually predates its real-life counterpart, the Shinjuku Toho Building, by about 10 years; The Millenium Tower first appeard in <i>Yakuza</i> in 2005, while the Shinjuku Toho Building was built in the early 2010s.</p><p><img src="images/Shinjuku_Toho_building.jpg" alt="Shinjuku Toho Building"></p><p>Photo Credits - Top Photo: Copyright, SEGA; Bottom Photo: nakashi</p>',
        location: {
          center: [139.70145, 35.69531],
          zoom: 18,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
            {
                layer: 'millennium-tower',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'millennium-tower',
                opacity: 0
            },
        ]
      },
      {
        id: 'yakuza2-overview',
        alignment: 'left',
        title: 'Aftermath and Yakuza 2 Overview',
        description: '<p>Following the battles at Tokyo Harbor and the Millennium Tower, it was revealed that Chairman Sera and Kazama chose Kiryu to be the next chairman of the Tojo Clan. Kiryu temporarily accepted the appointment, but handed the title to Yukio Terada in hopes that his ties to the Omi Alliance would prevent future conflict.</p><p><i>Yakuza 2</i> takes place in 2006, about one year after the events in <i>Yakuza</i>. Kiryu was once again retired from the Yakuza life, but found himself dragged back in when Terada was murdered and when his former family\'s office was bombed. The plot of <i>Yakuza 2</i> followed Kiryu as he worked to stop the Go-Ryu Clan, a subsidiary of the Omi Alliance led by Ryuji Goda, from declaring open war against the Tojo Clan.</p>',
        location: {
          center: [136.09801, 36.06510],
          zoom: 7.3,
          pitch: 3,
          bearing: 31.22
        },
        onChapterEnter: [
            {
                layer: 'kiwami-cities',
                opacity: 1
            },
            {
                layer: 'kiwami-city-names',
                opacity: 1
            }
        ],
        onChapterExit: [
            {
                layer: 'kiwami-cities',
                opacity: 0
            },
            {
                layer: 'kiwami-city-names',
                opacity: 0
            }
        ]
      },
      {
        id: 'dotonbori',
        alignment: 'left',
        title: 'A New City - Osaka',
        description: 'Osaka was added to <i>Yakuza 2</i> as a second city to explore.  The action is centered in the neighborhood of Sotenbori, a fictional representation of the real-life neighborhood of Dotonbori.',
        location: {
          center: [135.49994, 34.66814],
          zoom: 16.4,
          pitch: 48,
          bearing: 0
        },
        onChapterEnter: [
            {
                layer: 'dotonbori',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'dotonbori',
                opacity: 0
            },
        ]
      },
      {
        id: 'dotonbori-river',
        alignment: 'left',
        title: 'Dotonbori River',
        image: 'images/Dotonbori_River.jpg',
        description: '<p>The Dotonbori River bisects the neighborhood of Dotonbori. While the river did not have much significance in the story of <i>Yakuza 2</i>, it is notable in showing how the neighborhood was faithfully recreated to enhance the game\'s atmoshpere.</p><p><img src="images/Dotonbori_River_y2.png" alt="Dotonbori River in Yakuza 2"></p><p>Photo Credits - Top Photo: DVMG; Bottom Photo: Copyright, SEGA</p>',
        location: {
          center: [135.50312, 34.67004],
          zoom: 17.3,
          pitch: 60,
          bearing: 84
        },
        onChapterEnter: [
            {
                layer: 'dotonbori-river',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'dotonbori-river',
                opacity: 0
            },
        ]
      },
      {
        id: 'dotonbori-street',
        alignment: 'left',
        title: 'Dotonbori Streetscape',
        image: 'images/Dotonbori_Street.jpg',
        description: '<p>Dotonbori Street (Sotenbori Street in <i>Yakuza 2</i>) is the main commercial street in Dotonbori. In <i>Yakuza 2</i>, Sotenbori Street contains restaurants and entertainment venues that Kiryu can visit when he is taking a break from the main events of the story. One end of Sotenbori Street is dominated by the Cabaret Grand, where Kiryu first meets Ryuji Goda.</p><p><img src="images/Dotonbori_Street_y2.png" alt="Dotonbori River in Yakuza 2"></p><p>Photo Credits - Top Photo: Oilstreet; Bottom Photo: Copyright, SEGA</p>',
        location: {
          center: [135.50128, 34.66907],
          zoom: 18.2,
          pitch: 60,
          bearing: 82.21
        },
        onChapterEnter: [
            {
                layer: 'dotonbori-street',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'dotonbori-street',
                opacity: 0
            },
        ]
      },
      {
        id: 'osaka-castle',
        alignment: 'left',
        title: 'Osaka Castle',
        image: 'images/Osaka_Castle.jpg',
        description: '<p>Osaka Castle is features in the climactic sequence for Osaka in <i>Yakuza 2</i>. Toranosuke Sengoku, a captian of Goda, kidnapped Haruka and took her to his headquarters in Osaka Castle. When Kiryu arrived at the castle, it split in two, revealing a smaller version of the castle, clad in gold, within. Kiryu fought his way through Sengoku\'s goons, as well as two tigers, to rescue Haruka.</p><p><img src="images/Osaka_Castle_y2.jpg" alt="Golden Osaka Castle in Yakuza 2"></p><p>Photo Credits - Top Photo: Public Domain; Bottom Photo: Copyright, SEGA</p>',
        location: {
          center: [135.52397, 34.68676],
          zoom: 16.7,
          pitch: 60,
          bearing: -33.8
        },
        onChapterEnter: [
            {
                layer: 'osaka-castle',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'osaka-castle',
                opacity: 0
            },
        ]
      },
      {
        id: 'Tokyo-y2',
        alignment: 'left',
        title: 'Overview of Tokyo in Yakuza 2',
        description: 'Much of the action in <i>Yakuza 2</i> takes place in Kamurocho (Kabukicho), Tokyo, where Kiryu must avert a brewing turf war between the Tojo Clan and the Omi Alliance while searching for foreign operatives working to upset the balance of power. The neighborhood is largely the same as in <i>Yakuza 1</i>, aside from a few newly navigable alleys and a large construction project in West Park.',
        location: {
          center: [139.69995, 35.69621],
          zoom: 16,
          pitch: 50,
          bearing: 0
        },
        onChapterEnter: [
            {
                layer: 'kabukicho-poly',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'kabukicho-poly',
                opacity: 0
            },
        ]
      },
      {
        id: 'kamuro-hills',
        alignment: 'left',
        title: 'Finale at Kamurocho Hills',
        image: 'images/Kamurocho_Hills.jpg',
        description: '<p>The climax of <i>Yakuza 2</i> took place at the construction site of Kamurocho Hills, a new tower at the former site of West Park. Kiryu travelled to the construction site to disarm a bomb and confront Goda. Upon arrival Kiryu encountered Yukio Terada, the man he installed as chairman of the Tojo Clan and whose \'murder\' he witnessed. Terada was actually the leader of a gang from mainland Asia, seeking vengeance for the murder of many of his comrades decades earlier. Kiryu defeated Terada, Godo, and their henchmen and found the bomb to have been disarmed.</p><p>Following the death of Terada at Kamurocho Hills, Kiryu helped his protoge, Diago Dojima, to secure the rank of chariman of the Tojo Clan and he retired from the Yakuza life again.</p><p>Photo Credit - Copyright, SEGA</p>',
        location: {
          center: [139.70118, 35.69770],
          zoom: 18.7,
          pitch: 60,
          bearing: 63.2
        },
        onChapterEnter: [
            {
                layer: 'west-park',
                opacity: .5
            },
        ],
        onChapterExit: [
            {
                layer: 'west-park',
                opacity: 0
            },
        ]
      },
    ]
  };
  var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";

    return {
    url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest
});

if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor });
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function() {
    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    };

    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.add('active');
        map[chapter.mapAnimation || 'flyTo'](chapter.location);

        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
            window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
            map.once('moveend', function() {
                const rotateNumber = map.getBearing();
                map.rotateTo(rotateNumber + 90, {
                    duration: 24000, easing: function (t) {
                        return t;
                    }
                });
            });
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
    });
});

// setup resize event
window.addEventListener('resize', scroller.resize);

//Add 3D buildings layer from the Mapbox Streets vector tileset, which contains building height data from OpenStreetMap.
map.on('load', () => {
    
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
    ).id;

    map.addLayer({
        'id': 'add-3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#ffffff',
            'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height']
            ],
            'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
            }
        },
    labelLayerId
    );
});