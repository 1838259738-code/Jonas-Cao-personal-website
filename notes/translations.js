const storyLabels = {
  en: {
    backToNotes: 'Public notes',
    byline: 'Xiaohongshu travel notes',
    sourceTitle: 'Xiaohongshu note',
    likes: 'Likes',
    saves: 'Saves',
    comments: 'Comments',
    shares: 'Shares',
    statsSource: 'Engagement counts come from the screenshot.',
    openScreenshot: 'View original screenshot',
    searchXhs: 'Search for this note on Xiaohongshu',
    allStories: 'Back to all notes'
  },
  de: {
    backToNotes: 'Öffentliche Notizen',
    byline: 'Reisenotizen auf Xiaohongshu',
    sourceTitle: 'Beitrag auf Xiaohongshu',
    likes: 'Likes',
    saves: 'Gespeichert',
    comments: 'Kommentare',
    shares: 'Geteilt',
    statsSource: 'Die Zahlen stammen aus dem Screenshot des Beitrags.',
    openScreenshot: 'Original-Screenshot ansehen',
    searchXhs: 'Beitrag auf Xiaohongshu suchen',
    allStories: 'Zurück zu allen Notizen'
  },
  nl: {
    backToNotes: 'Openbare notities',
    byline: 'Reisnotities op Xiaohongshu',
    sourceTitle: 'Post op Xiaohongshu',
    likes: 'Likes',
    saves: 'Bewaard',
    comments: 'Reacties',
    shares: 'Gedeeld',
    statsSource: 'De cijfers komen uit de schermafbeelding van de post.',
    openScreenshot: 'Originele schermafbeelding bekijken',
    searchXhs: 'Zoek deze post op Xiaohongshu',
    allStories: 'Terug naar alle notities'
  }
};

const storyText = {
  angkor: {
    en: {
      place: 'Cambodia · Angkor Thom',
      title: 'Taking a record to Angkor to find its cover',
      intro: 'I turned a corner at the Terrace of the Leper King and found the carving on the cover of Cambodian Rocks. I held the CD up to the wall and lined up the figures with the ones in front of me.',
      caption: 'Holding the Cambodian Rocks CD cover against the original relief at the Terrace of the Leper King.',
      section1: 'A clue from another blogger',
      section1p1: 'Before going to Angkor, I had seen another blogger track down the carving. That was how I knew the two figures on the album cover were in Angkor Thom. The Terrace of the Leper King sits just north of the Elephant Terrace. Once I was there, I had to find the entrance down to the relief.',
      section1p1Link: 'Maurice Glaize’s Angkor guide ↗',
      section2: 'The entrance across from a stone elephant',
      section2p1: 'I used three photos in the original note to show the way. Photo 5 gives the approximate location. Photo 4 shows the elephant across from the entrance, and photo 3 shows the entrance itself. Go through it and turn right to find the carving.',
      section2p2: 'It was straightforward to find once I got there. The stone elephant and the right turn were the two clues that helped, so I included both in the note.',
      section3: 'The cover and the stone wall',
      section3p1: 'I held the CD case up to the wall for a photo. The two crowns and raised hands lined up, right down to the small gap between the figures. The cover was brown, and you could still see mottled traces of green on the stone behind it.',
      section3p2: 'I put that photo first in the note. The pictures after it show the way for the next person who comes looking.'
    },
    de: {
      place: 'Kambodscha · Angkor Thom',
      title: 'Mit einer CD nach Angkor, auf der Suche nach ihrem Cover',
      intro: 'An der Terrasse des Lepra-Königs bog ich um eine Ecke und fand das Relief vom Cover von Cambodian Rocks. Ich hielt die CD vor die Steinwand, bis die Figuren auf dem Cover und an der Wand übereinanderlagen.',
      caption: 'Das Cover von Cambodian Rocks vor dem ursprünglichen Relief an der Terrasse des Lepra-Königs.',
      section1: 'Ein Hinweis aus einem anderen Blog',
      section1p1: 'Vor der Reise hatte ich gelesen, dass jemand das Relief gefunden hatte. Daher wusste ich, dass die beiden Figuren vom CD-Cover in Angkor Thom zu finden waren. Die Terrasse des Lepra-Königs liegt nördlich der Elefantenterrasse. Vor Ort musste ich noch den Zugang zum Relief finden.',
      section1p1Link: 'Angkor-Führer von Maurice Glaize ↗',
      section2: 'Der Eingang gegenüber dem steinernen Elefanten',
      section2p1: 'Im Originalbeitrag zeigen drei Fotos den Weg. Bild 5 markiert ungefähr die Stelle. Auf Bild 4 sieht man den steinernen Elefanten gegenüber dem Eingang, auf Bild 3 den Eingang selbst. Wer dort hineingeht und rechts abbiegt, steht vor dem Relief.',
      section2p2: 'Vor Ort war das Relief leicht zu finden. Der Elefant und das Rechtsabbiegen waren die beiden Hinweise, die mir halfen. Deshalb habe ich sie im Beitrag festgehalten.',
      section3: 'Ein Cover vor einer Steinwand',
      section3p1: 'Für das Foto hielt ich die CD-Hülle vor die Wand. Die Kronen, die erhobenen Hände und sogar die kleine Lücke zwischen den Figuren passten übereinander. Auf dem Cover war alles braun, auf dem Stein dahinter sah man grünliche Flecken.',
      section3p2: 'Dieses Foto stand im Beitrag an erster Stelle. Auf den Bildern danach lässt sich der Weg nachvollziehen.'
    },
    nl: {
      place: 'Cambodja · Angkor Thom',
      title: 'Met een cd naar Angkor, op zoek naar de hoes',
      intro: 'Bij het Terras van de Leprakoning ging ik de hoek om en vond ik het reliëf op de hoes van Cambodian Rocks. Ik hield de cd voor de stenen muur en legde de figuren op de hoes over de beelden heen.',
      caption: 'De hoes van Cambodian Rocks voor het oorspronkelijke reliëf bij het Terras van de Leprakoning.',
      section1: 'Een aanwijzing van een andere blogger',
      section1p1: 'Voor mijn reis had ik gezien dat een andere blogger het reliëf had gevonden. Zo wist ik dat de twee figuren van de cd-hoes in Angkor Thom te vinden waren. Het Terras van de Leprakoning ligt ten noorden van het Olifantenterras. Daar hoefde ik alleen nog de ingang naar het reliëf te vinden.',
      section1p1Link: 'Angkorgids van Maurice Glaize ↗',
      section2: 'De ingang tegenover de stenen olifant',
      section2p1: 'In de oorspronkelijke post wijzen drie foto’s de weg. Foto 5 geeft ongeveer de locatie aan. Foto 4 toont de stenen olifant tegenover de ingang en foto 3 de ingang zelf. Ga erdoorheen en sla rechtsaf. Dan sta je voor het reliëf.',
      section2p2: 'Eenmaal daar was het reliëf makkelijk te vinden. De olifant en de afslag naar rechts hielpen me op weg. Daarom staan ze allebei in de post.',
      section3: 'De hoes en de stenen muur',
      section3p1: 'Voor de foto hield ik het cd-doosje voor de muur. De kronen en opgeheven handen kwamen overeen, tot aan het kleine stukje ruimte tussen de twee figuren. De hoes was bruin en op het steen erachter waren nog groene vlekken te zien.',
      section3p2: 'Ik zette die foto bovenaan de post. De foto’s erna laten zien hoe je er komt.'
    }
  },
  iceland: {
    en: {
      place: 'Iceland · South Coast',
      title: 'Driving 1,600 km through Iceland at twenty',
      intro: 'Four people, five days and four nights. We picked up a car at the airport, drove along Iceland’s south coast as far as Höfn and covered more than 1,600 kilometres.',
      caption: 'The view from inside the car, with the navigation on and a line of snowy mountains ahead.',
      section1: 'Picking up the car at the airport',
      section1p1: 'We booked with Ice Rental through Zuzuche and started the road trip when we picked up the car at the airport. I opened the note with how many of us went, how long we had, our farthest stop and how we rented the car. Those details give you a starting point for picturing what five days on the south coast looks like.',
      section1p2: 'The cover photo was taken inside the car. The navigation screen is at the bottom, the driver’s seat to the left and, beyond the windshield, a road that runs all the way to the snowy foothills.',
      section2: 'As far east as Höfn',
      section2p1: 'I called the trip a half loop in the original note. We went from the airport along the south of Iceland as far as Höfn, a town in the southeast near the Vatnajökull glacier. That was the furthest east we drove.',
      section2p1Link: 'Visit South Iceland’s guide to Höfn ↗',
      section3: 'How much of five days went into driving',
      section3p1: 'Spread over five days, more than 1,600 kilometres averages out to over 320 kilometres a day. The view from the car captures a short stretch of road. The distance and the time give that photo a sense of scale.',
      section3p2: 'I called the trip a milestone and added a practical guide to the note. The figures at the beginning give readers a way to judge how much time a drive like ours might take.'
    },
    de: {
      place: 'Island · Südküste',
      title: 'Mit zwanzig 1.600 km durch Island',
      intro: 'Vier Leute, fünf Tage und vier Nächte. Wir holten den Wagen am Flughafen ab und fuhren an Islands Südküste bis nach Höfn. Insgesamt kamen wir auf mehr als 1.600 Kilometer.',
      caption: 'Der Blick aus dem Auto. Das Navi ist noch an, vor uns liegen Berge mit Schnee.',
      section1: 'Abholung am Flughafen',
      section1p1: 'Wir buchten über Zuzuche bei Ice Rental und starteten nach der Abholung am Flughafen. Gleich zu Beginn der Notiz habe ich festgehalten, zu wie vielen wir waren, wie lange wir unterwegs waren, wie weit wir kamen und wie wir den Wagen gemietet hatten. So lässt sich ungefähr einschätzen, was in fünf Tagen an der Südküste möglich ist.',
      section1p2: 'Das Titelbild entstand im Auto. Unten leuchtet die Navigation, links sitzt der Fahrer und vor der Windschutzscheibe zieht sich die Straße bis zu den verschneiten Bergen.',
      section2: 'Bis nach Höfn im Südosten',
      section2p1: 'In der Notiz nannte ich die Fahrt eine halbe Inselrunde. Vom Flughafen ging es an der Südküste entlang bis nach Höfn. Die Stadt liegt im Südosten Islands nahe dem Gletscher Vatnajökull und war der östlichste Punkt unserer Fahrt.',
      section2p1Link: 'Höfn bei Visit South Iceland ↗',
      section3: 'Wie viel Fahrzeit in fünf Tagen steckt',
      section3p1: 'Mehr als 1.600 Kilometer in fünf Tagen ergeben im Schnitt über 320 Kilometer pro Tag. Das Foto aus dem Auto zeigt einen kurzen Straßenabschnitt. Strecke und Dauer geben ihm einen Maßstab.',
      section3p2: 'Für mich war die Reise ein besonderer Moment. Der Beitrag sollte auch bei der Planung helfen. Die Zahlen am Anfang geben eine Vorstellung davon, wie viel Zeit man für eine solche Strecke braucht.'
    },
    nl: {
      place: 'IJsland · Zuidkust',
      title: 'Op mijn twintigste 1.600 km door IJsland',
      intro: 'Vier mensen, vijf dagen en vier nachten. We haalden een auto op bij de luchthaven en reden langs de zuidkust tot aan Höfn. In totaal legden we meer dan 1.600 kilometer af.',
      caption: 'Het uitzicht vanuit de auto, met de navigatie aan en een rij besneeuwde bergen voor ons.',
      section1: 'De auto ophalen bij de luchthaven',
      section1p1: 'We boekten via Zuzuche bij Ice Rental en haalden de auto op bij de luchthaven. Ik begon de post met hoeveel mensen er meegingen, hoeveel tijd we hadden, hoe ver we kwamen en hoe we de auto huurden. Zo krijg je een idee van wat er in vijf dagen langs de zuidkust past.',
      section1p2: 'De eerste foto is in de auto gemaakt. Onderaan licht de navigatie op, links zit de bestuurder en voor de voorruit loopt de weg door tot aan de besneeuwde bergen.',
      section2: 'Tot aan Höfn in het zuidoosten',
      section2p1: 'In de post noemde ik het een halve ronde om het eiland. Vanaf de luchthaven reden we langs de zuidkust tot Höfn, onze verste halte in het zuidoosten van IJsland. Het plaatsje ligt dicht bij de Vatnajökull-gletsjer.',
      section2p1Link: 'Höfn bij Visit South Iceland ↗',
      section3: 'Hoeveel tijd je in vijf dagen onderweg bent',
      section3p1: 'Meer dan 1.600 kilometer in vijf dagen komt neer op gemiddeld ruim 320 kilometer per dag. Op de foto zie je een klein stukje van die weg. De afstand en de tijd geven het beeld wat schaal.',
      section3p2: 'Ik schreef over een reis die me zou bijblijven en voegde praktische informatie toe. Met de cijfers aan het begin kunnen lezers inschatten hoeveel tijd ze voor zo’n afstand nodig hebben.'
    }
  },
  borneo: {
    en: {
      place: 'Borneo · Kota Kinabalu to Brunei',
      title: 'One round trip by bus, sixteen stamps',
      intro: 'In January 2026 I took the bus from Kota Kinabalu to Brunei and back. By the end of the round trip I had sixteen entry and exit stamps in my passport.',
      caption: 'A mosque in Brunei, framed in gold after dark.',
      section1: 'Why the route crosses the border repeatedly',
      section1p1: 'Kota Kinabalu is in the Malaysian state of Sabah. Toward Brunei, the Malaysian state of Sarawak borders Brunei, and Sarawak’s Limbang division and Brunei Bay separate the eastern district of Temburong from the rest of Brunei. A road route through several checkpoints can take you out of the same country and back into it more than once.',
      section1p1Link: 'Brunei Tourism’s Temburong map ↗',
      section2: 'One crossing can leave two stamps',
      section2p1: 'Leaving one country and entering the other can put two marks in a passport for a single crossing. In the original photo you can make out Brunei’s Labu checkpoint and stamps from Sarawak, Malaysia. Counting both directions brought the total to sixteen.',
      section2p2: 'I opened the note by recommending the route to readers with time to spare. A map shows the two ends of a trip. The stamps tell the story of what happened between them.',
      section3: 'The night view alongside the passport',
      section3p1: 'I put the open passport and a night view of Brunei together in the cover photo. The top half is full of overlapping stamps. In the lower half, an illuminated gold frame surrounds a domed mosque. One image records how I got there. The other keeps a piece of the evening after I arrived.'
    },
    de: {
      place: 'Borneo · Kota Kinabalu bis Brunei',
      title: 'Hin und zurück im Bus, sechzehn Stempel',
      intro: 'Im Januar 2026 fuhr ich mit dem Bus von Kota Kinabalu nach Brunei und zurück. Nach der Hin- und Rückfahrt hatte ich sechzehn Ein- und Ausreisestempel im Pass.',
      caption: 'Eine Moschee in Brunei, nachts von einem goldenen Rahmen umgeben.',
      section1: 'Warum die Strecke mehrmals über die Grenze führt',
      section1p1: 'Kota Kinabalu liegt im malaysischen Bundesstaat Sabah. Weiter in Richtung Brunei grenzt der Bundesstaat Sarawak an Brunei. Sarawaks Bezirk Limbang und die Brunei-Bucht trennen den östlichen Bezirk Temburong vom übrigen Staatsgebiet Bruneis. Auf einer Route über mehrere Grenzposten kann man dasselbe Land innerhalb einer Fahrt mehrfach verlassen und wieder betreten.',
      section1p1Link: 'Karte von Temburong bei Brunei Tourism ↗',
      section2: 'Ein Grenzübertritt kann zwei Stempel hinterlassen',
      section2p1: 'Bei einem Grenzübertritt kann es einen Stempel für die Ausreise und einen für die Einreise geben. Im Originalfoto erkennt man Bruneis Grenzposten Labu und Stempel aus dem malaysischen Sarawak. Zusammen waren es auf Hin- und Rückfahrt sechzehn.',
      section2p2: 'Am Anfang des Beitrags habe ich die Strecke Leuten empfohlen, die genug Zeit mitbringen. Auf einer Karte sieht man die Endpunkte der Fahrt. Die Stempel zeigen, was dazwischen passiert ist.',
      section3: 'Das Nachtbild neben dem Pass',
      section3p1: 'Für das Titelbild setzte ich den offenen Pass und ein Nachtfoto aus Brunei zusammen. Oben lagen die Ein- und Ausreisestempel dicht übereinander. Unten umrahmte ein leuchtender Goldrahmen eine Moschee mit Kuppel. Das eine Bild zeigt, wie ich ankam. Das andere hält einen Teil des Abends nach der Ankunft fest.'
    },
    nl: {
      place: 'Borneo · Kota Kinabalu naar Brunei',
      title: 'Eén retourrit per bus, zestien stempels',
      intro: 'In januari 2026 ging ik met de bus van Kota Kinabalu naar Brunei en terug. Na de heen- en terugreis had ik zestien in- en uitreisstempels in mijn paspoort.',
      caption: 'Een moskee in Brunei bij nacht, met een verlicht gouden kader eromheen.',
      section1: 'Waarom de route meermaals de grens over gaat',
      section1p1: 'Kota Kinabalu ligt in de Maleisische deelstaat Sabah. Richting Brunei grenst de Maleisische deelstaat Sarawak aan Brunei. Het oostelijke district Temburong wordt door de divisie Limbang in Sarawak en de Baai van Brunei van de rest van Brunei gescheiden. Op een weg met meerdere grensposten kun je tijdens één rit hetzelfde land meermaals verlaten en weer binnenkomen.',
      section1p1Link: 'Kaart van Temburong bij Brunei Tourism ↗',
      section2: 'Eén grensovergang kan twee stempels opleveren',
      section2p1: 'Bij vertrek uit het ene land en aankomst in het andere kun je bij één grensovergang twee stempels krijgen. Op de originele foto zijn de Bruneise grenspost Labu en stempels uit het Maleisische Sarawak te zien. Heen en terug kwam ik samen op zestien uit.',
      section2p2: 'Aan het begin van de post raadde ik de route aan als je tijd genoeg hebt. Een kaart toont de eindpunten van de rit. De stempels vertellen wat er tussendoor gebeurde.',
      section3: 'Het nachtbeeld naast het paspoort',
      section3p1: 'Voor de eerste foto combineerde ik mijn open paspoort met een nachtbeeld uit Brunei. Bovenaan staan de stempels dicht over elkaar. Onderaan staat een moskee met een koepel in een verlicht gouden kader. Op het ene beeld zie je hoe ik er kwam. Het andere houdt iets van de avond na aankomst vast.'
    }
  },
  freitag: {
    en: {
      place: 'Switzerland · Zurich',
      title: 'A trip to Zurich for a factory tour',
      intro: 'I made time on that trip to Zurich to visit FREITAG’s factory. I went into the workshop with a small tour group to see what used truck tarps look like before they become bags.',
      caption: 'Four views from the factory, including tarps on the racks, colour swatches and the workshop floor.',
      section1: 'A factory tour with a dozen people',
      section1p1: 'I joined a tour for individual visitors at the Nœrd industrial complex. At the time it ran on the first Wednesday of the month and cost CHF 20 a person. There were about twelve or thirteen of us, and a member of staff showed us around in German and English.',
      section1p1Link: 'FREITAG factory tour information ↗',
      section2: 'From colour swatches to old tarps',
      section2p1: 'I opened the note with a collage of four photos. There was the FREITAG sign above a workstation, large sheets hanging on a rack and a board with red, blue and green swatches.',
      section2p2: 'The tarps still carried their lettering and colours. Seeing them alongside the sorted swatches made it easier to appreciate how much the starting material varied.',
      section3: 'The design had already been on the road',
      section3p1: 'FREITAG washes used truck tarps and cuts out pieces for its bags with the pattern and colour of each piece in mind. A letter or a block of colour originally printed on the tarp might find its way onto a bag.',
      section3p1Link: 'FREITAG’s production process ↗',
      section3p2: 'I put the swatch board and the uncut tarps in the same image in the note. It shows how a small patch of colour on a finished bag can be picked out in the workshop.'
    },
    de: {
      place: 'Schweiz · Zürich',
      title: 'Für eine Werksführung nach Zürich',
      intro: 'Bei meiner Reise nach Zürich nahm ich mir Zeit für das FREITAG-Werk. Mit einer kleinen Gruppe ging ich durch die Werkstatt und sah, wie gebrauchte LKW-Planen aussehen, bevor Taschen daraus werden.',
      caption: 'Vier Szenen aus der Fabrik mit Planen, Farbmustern und Arbeitsplätzen.',
      section1: 'Eine Werksführung mit einem Dutzend Leuten',
      section1p1: 'Ich nahm an der offenen Führung im Nœrd-Areal teil. Damals fand sie am ersten Mittwoch des Monats statt und kostete 20 Franken pro Person. Wir waren etwa zwölf oder dreizehn Leute. Ein Mitarbeiter führte uns auf Deutsch und Englisch durch das Werk.',
      section1p1Link: 'Werksführungen bei FREITAG ↗',
      section2: 'Von den Farbmustern zu den gebrauchten Planen',
      section2p1: 'Der Beitrag beginnt mit vier Bildern. Zu sehen sind das FREITAG-Schild über einem Arbeitsplatz, große Planen an einem Gestell und eine Tafel mit roten, blauen und grünen Farbmustern.',
      section2p2: 'Die Planen trugen noch ihre ursprünglichen Aufschriften und Farben. Neben den nach Farben sortierten Mustern konnte man gut sehen, wie unterschiedlich das Ausgangsmaterial war.',
      section3: 'Das Muster war schon auf der Straße unterwegs',
      section3p1: 'FREITAG wäscht gebrauchte LKW-Planen und schneidet unter Berücksichtigung der Farben und Muster die einzelnen Teile für seine Taschen daraus. So landet manchmal ein Buchstabe oder ein Farbfeld von der alten Plane auf einer Tasche.',
      section3p1Link: 'Produktion bei FREITAG ↗',
      section3p2: 'Im Beitrag habe ich die Mustertafel und die ungeschnittenen Planen in einem Bild zusammengefügt. So sieht man, wie im Werk ein kleines Farbfeld für die fertige Tasche ausgewählt werden kann.'
    },
    nl: {
      place: 'Zwitserland · Zürich',
      title: 'Naar Zürich voor een fabrieksrondleiding',
      intro: 'Tijdens die reis naar Zürich maakte ik tijd voor de FREITAG-fabriek. Ik ging met een kleine groep de werkplaats in om te zien hoe gebruikte vrachtwagenzeilen eruitzien voordat er tassen van worden gemaakt.',
      caption: 'Vier beelden uit de fabriek met zeilen op rekken, kleurstalen en de werkvloer.',
      section1: 'Een rondleiding met een man of twaalf',
      section1p1: 'Ik sloot me aan bij de open rondleiding op het Nœrd-terrein. Toen was die er op de eerste woensdag van de maand voor 20 frank per persoon. We waren met een man of twaalf, dertien. Een medewerker nam ons mee door de fabriek in het Duits en het Engels.',
      section1p1Link: 'Fabrieksrondleiding bij FREITAG ↗',
      section2: 'Van kleurstalen naar gebruikte zeilen',
      section2p1: 'Ik begon de post met vier foto’s. Je ziet het FREITAG-bord boven een werkplek, grote stukken zeil op een rek en een bord met rode, blauwe en groene kleurstalen.',
      section2p2: 'Op de zeilen stonden nog hun oorspronkelijke letters en kleuren. Naast de gesorteerde stalen zag je hoeveel variatie er in het materiaal zat.',
      section3: 'Het ontwerp was al onderweg geweest',
      section3p1: 'FREITAG wast gebruikte vrachtwagenzeilen en snijdt er de onderdelen voor zijn tassen uit, met oog voor het patroon en de kleur van elk stuk. Zo komen er soms letters of kleurvlakken van een oud zeil op een tas terecht.',
      section3p1Link: 'Het productieproces bij FREITAG ↗',
      section3p2: 'Voor de post zette ik het stalenbord en de ongesneden zeilen in één beeld. Zo zie je hoe in de werkplaats een klein kleurvlak voor de afgewerkte tas wordt uitgekozen.'
    }
  }
};

const { story, nextStory } = document.body.dataset;
const translatedStory = {};
const storyMetadata = {};

Object.entries(storyLabels).forEach(([language, labels]) => {
  const copy = storyText[story][language];
  translatedStory[language] = {
    ...labels,
    ...copy,
    nextStory: storyText[nextStory][language].title
  };
  storyMetadata[language] = {
    title: `${copy.title} · Xuanming Cao`,
    description: copy.intro
  };
});

initializeLanguagePicker(translatedStory, storyMetadata);
