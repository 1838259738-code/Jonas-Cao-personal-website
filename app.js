const navigation = document.querySelector('#site-navigation');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = [...navigation.querySelectorAll('a')];

function setNavigationOpen(open) {
  navigation.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
}

navToggle.addEventListener('click', () => setNavigationOpen(!navigation.classList.contains('open')));
navLinks.forEach(link => link.addEventListener('click', () => setNavigationOpen(false)));
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !navToggle.contains(event.target)) setNavigationOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    setNavigationOpen(false);
    navToggle.focus();
  }
});
document.documentElement.classList.add('js-navigation');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 2) * 70}ms`;
    observer.observe(item);
  });
  document.documentElement.classList.add('js-reveal');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  navLinks.forEach(link => sectionObserver.observe(document.querySelector(link.hash)));
}

const translations = {
  en: {
    navExplore:'Index',navWork:"Internships",navAcademic:'Research',navSocial:'Notes',navLife:'Journeys',navContact:'Contact',
    heroKicker:'XUANMING CAO · PERSONAL ARCHIVE',heroPlace:'SHENZHEN · 2026',heroTitle:"I studied German.<br />Now I work with <span class=\"scribble\">data</span><em>.</em>",heroIntro:"I’m studying computational social science in Shenzhen. I’ve worked in product and international growth, and I write about my trips.",heroCaption:"Travel photo",
    exploreTitle:"Where to start",portalAcademic:'Study & research',portalAcademicText:"German, computational social science and a thesis on word order",portalWork:"Internships",portalWorkText:"Browser ads, food delivery growth, SEO and market research",portalSocial:'Public notes',portalSocialText:"An Iceland road trip, a factory tour and more from Xiaohongshu",portalLife:'Life & journeys',portalLifeText:'Football, cities and an ever-expanding world map',
    profileTitle:"I’m <span>Xuanming Cao</span>.",profileText:"I studied German and museum studies at Nankai and spent a year on exchange in Munich. I captained the foreign languages school’s football team at Nankai. When I travel, I send myself postcards to put on the wall at home.",factWork:'years following FC Bayern',factTravel:'countries visited',factLanguage:'languages I use',mapCount:'countries visited',mapAll:'All',mapHome:'China · home base',mapList:'View all countries',
    workTitle:"What I worked on",workIntro:"I worked on browser ads, food delivery growth in Brazil, international search and component projects. Here’s what I did in each internship.",honorCompany:'HONOR',didiCompany:'DIDI · IBG',meituCompany:'MEITU',vwCompany:'VOLKSWAGEN',viewCount:'1M+',likeCount:'24K',
    present:'Present',honorRole:"Monetization Product Management Intern",honorText:"I compared ads in several browsers, then worked with design and frontend to standardize formats across feeds, search results and detail pages. We turned the shared patterns into reusable components. I also wrote requirements and helped get changes tested and released.",metricReuse:"Requirements and launch delivery",metricFeedback:"Ad guidelines and reusable components",didiRole:"International Growth Operations Intern",didiText:"I helped the food delivery team launch in new Brazilian cities. I set up coupons for different user groups, compared offers in A/B tests and sent campaign messages by push, email and WhatsApp. I also built a competitor tracker and helped evaluate an AI assistant for merchant acquisition.",metricReach:"Segmentation and multichannel outreach",metricCities:"Competitor monitoring and AI agent support",meituRole:"AI Product Growth Operations Intern",meituText:"I worked on international search growth for Vmake and Zawa. I used Search Console and GA4 to check traffic and Semrush and Ahrefs to find keywords, then updated landing pages. I also contacted creators and publications and helped set up a workflow for writing and distributing content in several languages.",metricEfficiency:"SEO / GEO and channel partnerships",metricRanking:"AI-assisted production and distribution",vwRole:"Project Management & Market Analysis Intern",vwText:"I tracked technical reviews and deliveries for component projects and checked progress with engineering, procurement and suppliers. I also turned industry and competitor data into charts and reports for supplier and technology assessments.",metricProjects:"Cross-functional delivery tracking",metricReports:"Industry research and decision support",
    academicTitle:"Courses and my<br /><span>bachelor’s thesis</span>",academicIntro:"These courses cover text analysis and research with data. My bachelor’s thesis compares German and Dutch word order.",cuhk:'The Chinese University of Hong Kong, Shenzhen',cuhkMajor:'MSc in Computational Social Science · Statistics concentration',lmu:'LMU Munich',lmuMajor:'Government-sponsored exchange · German as a Foreign Language',nankai:'Nankai University',nankaiMajor:'BA in German · Minor in Museum Studies',
    thesisTitle:'Word Order in German and Dutch',thesisScore:'BA thesis · linguistics',fieldPre:'Prefield',fieldLeft:'Left bracket',fieldMid:'Midfield',fieldRight:'Right bracket',fieldPost:'Postfield',thesisQuestionTitle:"Where do German and Dutch put the verb?",thesisQuestion:'This study compares verb position, sentence brackets and information focus in two West Germanic languages, asking whether Dutch simplification may foreshadow future changes in German.',thesisMethodTitle:"Comparing both languages with one model",thesisMethod:'Sentences are divided into prefield, left/right brackets, midfield and postfield to compare V2, multi-verb order, omission and bracket-breaking within one framework.',thesisFindingTitle:"The main differences are in subordinate clauses",thesisFinding:"Both languages have verb-second order in main clauses. In subordinate clauses, Dutch allows more flexible verb order and more often omits auxiliary verbs.",
    studyThesis:'German–Dutch<br />word-order research',studyThesisText:'A linguistic investigation into how neighboring language systems organize rules, structure and expression.',studyData:'Social data visualization',studyDataText:'Using R to clean, analyze and visualize data so complex findings become readable.',studyGame:'Psychology of games',studyGameText:'Studying how mechanics, motivation and behavior connect—and reasoning back from choices to design.',studyGlobal:'Globalization studies',studyGlobalText:'Understanding platforms, markets and individuals through cross-cultural flows.',
    socialTitle:'How I turn what I find on the road<br />into <span>public notes.</span>',socialText:"I post on Xiaohongshu as Müdemann. These are a few of my notes, including a road trip in Iceland and a search for a CD cover in Angkor.",redLabel:'RED · Xiaohongshu',copyId:'Copy ID',views:'total reads',likes:'total likes',galleryHint:'Scroll sideways · click to enlarge ↗',note1:'A 1,600 km Iceland road trip at twenty',note2:'Inside Freitag’s Zurich factory',note3:"Kota Kinabalu to Brunei and back, sixteen stamps",note4:"My postcard wall",note5:'Finding Cambodian rock at Angkor Wat',projectLabel:'Oppwise Brasil · overseas opportunity insights',
    lifeTitle:"Travel photos and <em>places I’ve been</em>",lifeText:"Here are a few photos from my exchange and later trips. Pick a year, or tap a marker to see the country and when I visited.",photoJournalTitle:"A few travel photos",photoJournalHint:"Click a photo to enlarge it.",photoSea:"Seagulls flying into the frame on an overcast day",photoEsn:"An Erasmus event during my exchange in Munich",photoBarcelona:'A sunset by the sea in Barcelona',photoAllianz:"At the Allianz Arena after twelve years as a Bayern supporter",tianjin:'Tianjin',munich:'Munich',shenzhen:'Shenzhen',brazil:'Brazil work',footballTitle:"Playing football and following Bayern",footballText:'Captain, Nankai School of Foreign Languages · FC Bayern supporter for 12 years · Matchday at Allianz Arena',languageTitle:"Languages I use",fieldNote:"I pin the postcards I mailed myself and the ones I bought on the same wall.",contactTitle:"For work, research or travel,<br /><em>send me an email or a message.</em>"
    ,focusHonorA:"Product design"
    ,focusHonorB:"Ad standards"
    ,focusDidiA:"Growth strategy"
    ,focusDidiB:"Operations tools"
    ,focusMeituA:"Global growth"
    ,focusMeituB:"Content workflows"
    ,focusVwA:"Coordination"
    ,focusVwB:"Market analysis"
  },
  de: {
    navExplore:'Index',navWork:"Praktika",navAcademic:'Forschung',navSocial:'Notizen',navLife:'Reisen',navContact:'Kontakt',
    heroKicker:'XUANMING CAO · PERSÖNLICHES ARCHIV',heroPlace:'SHENZHEN · 2026',heroTitle:"Ich habe Germanistik studiert.<br />Heute forsche ich mit <span class=\"scribble\">Daten</span><em>.</em>",heroIntro:"Ich studiere Computational Social Science in Shenzhen. Ich habe im Produktmanagement und im internationalen Marketing gearbeitet und schreibe über meine Reisen.",heroCaption:"Reisefoto",
    exploreTitle:"Wo anfangen?",portalAcademic:'Studium & Forschung',portalAcademicText:"Germanistik, Computational Social Science und eine Arbeit zur Wortstellung",portalWork:"Praktika",portalWorkText:"Browserwerbung, Wachstum im Liefergeschäft, SEO und Marktanalyse",portalSocial:'Öffentliche Notizen',portalSocialText:"Island im Mietwagen, eine Werksführung und weitere Notizen von Xiaohongshu",portalLife:'Leben & Reisen',portalLifeText:'Fußball, Städte und eine stetig wachsende Weltkarte',
    profileTitle:"Ich bin <span>Xuanming Cao</span>.",profileText:"In Nankai habe ich Germanistik und Museumswissenschaft studiert und ein Austauschjahr in München verbracht. Ich war Kapitän der Fußballmannschaft meiner Fakultät. Auf Reisen schicke ich mir Postkarten, die ich zu Hause an die Wand hänge.",factWork:'Jahre Bayern-Fan',factTravel:'besuchte Länder',factLanguage:'Sprachen im Alltag',mapCount:'besuchte Länder',mapAll:'Alle',mapHome:'China · Ausgangspunkt',mapList:'Alle Länder anzeigen',
    workTitle:"Meine Arbeit in den Praktika",workIntro:"Meine Praktika führten mich zu Browserwerbung, Essenslieferung in Brasilien, internationaler Suche und Komponentenprojekten. Hier steht, woran ich jeweils gearbeitet habe.",honorCompany:'HONOR',didiCompany:'DIDI · IBG',meituCompany:'MEITU',vwCompany:'VOLKSWAGEN',viewCount:'1 Mio.+',likeCount:'24 Tsd.',
    present:'heute',honorRole:"Praktikant Produktmanagement · Monetarisierung",honorText:"Ich habe Anzeigen in mehreren Browsern verglichen und mit Design und Frontend die Formate für Feed, Suchergebnisse und Detailseiten vereinheitlicht. Gemeinsame Elemente wurden zu wiederverwendbaren Komponenten. Ich habe auch Anforderungen geschrieben und Tests und Releases begleitet.",metricReuse:"Anforderungen und Launch-Begleitung",metricFeedback:"Richtlinien und wiederverwendbare Komponenten",didiRole:"Praktikant International Growth Operations",didiText:"Ich habe den Start des Lieferdienstes in neuen brasilianischen Städten unterstützt. Dazu gehörten Gutscheine für verschiedene Nutzergruppen, A/B-Tests und Kampagnen per Push, E-Mail und WhatsApp. Ich habe auch ein Tool zur Wettbewerbsbeobachtung gebaut und einen KI-Assistenten für die Händlergewinnung mitgetestet.",metricReach:"Segmentierung und kanalübergreifende Ansprache",metricCities:"Wettbewerbsanalyse und KI-Agent",meituRole:"Praktikant KI-Produktwachstum",meituText:"Ich habe bei Vmake und Zawa am internationalen Suchtraffic gearbeitet. Dafür habe ich den Traffic in Search Console und GA4 geprüft, mit Semrush und Ahrefs Keywords gesucht und Landingpages überarbeitet. Außerdem habe ich Creator und Medien kontaktiert und Abläufe für mehrsprachige Inhalte aufgebaut.",metricEfficiency:"SEO / GEO und Kanalpartnerschaften",metricRanking:"KI-gestützte Erstellung und Distribution",vwRole:"Praktikant Projektmanagement & Marktanalyse",vwText:"Ich habe technische Prüfungen und Lieferungen für Komponentenprojekte verfolgt und den Stand mit Technik, Einkauf und Lieferanten abgeglichen. Branchen- und Wettbewerbsdaten habe ich für die Bewertung von Lieferanten und Technologien aufbereitet.",metricProjects:"Teamübergreifende Lieferbegleitung",metricReports:"Branchenforschung und Entscheidungsgrundlagen",
    academicTitle:"Kurse und meine<br /><span>Bachelorarbeit</span>",academicIntro:"In diesen Kursen geht es um Textanalyse und Forschung mit Daten. In meiner Bachelorarbeit habe ich die Wortstellung im Deutschen und Niederländischen verglichen.",cuhk:'The Chinese University of Hong Kong, Shenzhen',cuhkMajor:'MSc Computational Social Science · Schwerpunkt Statistik',lmu:'Ludwig-Maximilians-Universität München',lmuMajor:'Stipendiengeförderter Austausch · Deutsch als Fremdsprache',nankai:'Nankai-Universität',nankaiMajor:'B.A. Germanistik · Nebenfach Museumswissenschaft',
    thesisTitle:'Wortstellung im Deutschen und Niederländischen',thesisScore:'Bachelorarbeit · Linguistik',fieldPre:'Vorfeld',fieldLeft:'Linke Satzklammer',fieldMid:'Mittelfeld',fieldRight:'Rechte Satzklammer',fieldPost:'Nachfeld',thesisQuestionTitle:"Wo steht das Verb im Deutschen und Niederländischen?",thesisQuestion:'Die Arbeit vergleicht Verbstellung, Satzklammer und Informationsfokus zweier westgermanischer Sprachen und fragt, ob die Vereinfachung des Niederländischen künftige Veränderungen im Deutschen andeutet.',thesisMethodTitle:"Beide Sprachen im selben Satzmodell vergleichen",thesisMethod:'Sätze werden in Vorfeld, linke und rechte Satzklammer, Mittelfeld und Nachfeld gegliedert. So lassen sich V2, Verbcluster, Auslassung und Rahmensprengung in einem Rahmen vergleichen.',thesisFindingTitle:"Die größten Unterschiede liegen im Nebensatz",thesisFinding:"In beiden Sprachen steht das Verb im Hauptsatz an zweiter Stelle. Im niederländischen Nebensatz ist die Verbstellung flexibler und Hilfsverben fallen häufiger weg.",
    studyThesis:'Deutsch–Niederländisch:<br />Wortstellung',studyThesisText:'Eine linguistische Untersuchung zu Regeln, Struktur und Ausdruck benachbarter Sprachsysteme.',studyData:'Visualisierung sozialer Daten',studyDataText:'Daten mit R bereinigen, analysieren und so visualisieren, dass komplexe Befunde lesbar werden.',studyGame:'Spielpsychologie',studyGameText:'Zusammenhänge zwischen Mechanik, Motivation und Verhalten untersuchen – und von Entscheidungen auf Design schließen.',studyGlobal:'Globalisierungsforschung',studyGlobalText:'Plattformen, Märkte und Individuen im Kontext kultureller Verflechtung verstehen.',
    socialTitle:'Wie Erlebnisse unterwegs<br />zu <span>öffentlichen Notizen</span> werden.',socialText:"Auf Xiaohongshu schreibe ich als Müdemann. Hier sind ein paar meiner Beiträge, von der Autofahrt durch Island bis zur Suche nach einem CD-Cover in Angkor.",redLabel:'RED · Xiaohongshu',copyId:'ID kopieren',views:'Aufrufe gesamt',likes:'Likes gesamt',galleryHint:'Seitwärts scrollen · zum Vergrößern klicken ↗',note1:'Mit zwanzig: 1.600 km durch Island',note2:'Zu Besuch in der Freitag-Fabrik Zürich',note3:"Kota Kinabalu–Brunei und zurück, sechzehn Stempel",note4:"Meine Postkartenwand",note5:'Kambodschanischen Rock in Angkor Wat finden',projectLabel:'Oppwise Brasil · Einblicke in Auslandschancen',
    lifeTitle:"Reisefotos und <em>besuchte Orte</em>",lifeText:"Hier sind einige Fotos aus meinem Austauschjahr und von Reisen. Wähle ein Jahr oder tippe auf einen Punkt, um Land und Besuchsjahr zu sehen.",photoJournalTitle:"Ein paar Reisefotos",photoJournalHint:"Ein Klick öffnet das Foto in groß.",photoSea:"Möwen im Bild an einem grauen Tag am Meer",photoEsn:"Ein Erasmus-Treffen während meines Austauschs in München",photoBarcelona:'Ein Sonnenuntergang am Meer in Barcelona',photoAllianz:"Nach zwölf Jahren als Bayern-Fan in der Allianz Arena",tianjin:'Tianjin',munich:'München',shenzhen:'Shenzhen',brazil:'Brasilien-Projekt',footballTitle:"Fußball spielen und Bayern schauen",footballText:'Kapitän der Fakultätsmannschaft in Nankai · seit 12 Jahren Bayern-Fan · Spieltag in der Allianz Arena',languageTitle:"Sprachen, die ich nutze",fieldNote:"Die Postkarten, die ich mir selbst geschickt oder unterwegs gekauft habe, hängen an derselben Wand.",contactTitle:"Bei Fragen zu Arbeit, Forschung oder Reisen<br /><em>schreib mir gern eine Mail oder Nachricht.</em>"
    ,focusHonorA:"Produktdesign"
    ,focusHonorB:"Werbestandards"
    ,focusDidiA:"Wachstum"
    ,focusDidiB:"Analysetools"
    ,focusMeituA:"Globales Wachstum"
    ,focusMeituB:"Content-Prozesse"
    ,focusVwA:"Koordination"
    ,focusVwB:"Marktanalyse"
  },
  nl: {
    navExplore:'Index',navWork:"Stages",navAcademic:'Onderzoek',navSocial:'Notities',navLife:'Reizen',navContact:'Contact',
    heroKicker:'XUANMING CAO · PERSOONLIJK ARCHIEF',heroPlace:'SHENZHEN · 2026',heroTitle:"Ik studeerde Duits.<br />Nu doe ik onderzoek met <span class=\"scribble\">data</span><em>.</em>",heroIntro:"Ik studeer computationele sociale wetenschappen in Shenzhen. Ik heb aan productontwikkeling en internationale groei gewerkt en schrijf over mijn reizen.",heroCaption:"Reisfoto",
    exploreTitle:"Waar begin je?",portalAcademic:'Studie & onderzoek',portalAcademicText:"Duits, computationele sociale wetenschappen en een scriptie over woordvolgorde",portalWork:"Stages",portalWorkText:"Browseradvertenties, groei bij maaltijdbezorging, SEO en marktonderzoek",portalSocial:'Openbare notities',portalSocialText:"IJsland met de auto, een fabrieksrondleiding en andere posts van Xiaohongshu",portalLife:'Leven & reizen',portalLifeText:'Voetbal, steden en een wereldkaart die blijft groeien',
    profileTitle:"Ik ben <span>Xuanming Cao</span>.",profileText:"Ik studeerde Duits en museumstudies aan Nankai en ging een jaar op uitwisseling naar München. Bij Nankai was ik aanvoerder van het voetbalteam van mijn faculteit. Op reis stuur ik mezelf ansichtkaarten voor aan de muur.",factWork:'jaar Bayern-supporter',factTravel:'bezochte landen',factLanguage:'talen die ik gebruik',mapCount:'bezochte landen',mapAll:'Alles',mapHome:'China · thuisbasis',mapList:'Bekijk alle landen',
    workTitle:"Mijn werk tijdens stages",workIntro:"Ik werkte aan browseradvertenties, groei bij maaltijdbezorging in Brazilië, internationaal zoekverkeer en onderdelenprojecten. Hieronder staat wat ik per stage deed.",honorCompany:'HONOR',didiCompany:'DIDI · IBG',meituCompany:'MEITU',vwCompany:'VOLKSWAGEN',viewCount:'1 mln+',likeCount:'24K',
    present:'heden',honorRole:"Stagiair Productmanagement · Monetisatie",honorText:"Ik vergeleek advertenties in verschillende browsers en werkte met design en frontend aan gedeelde formats voor feeds, zoekresultaten en detailpagina’s. Voor de gedeelde onderdelen maakten we herbruikbare componenten. Ik schreef ook requirements en hielp bij het testen en uitrollen.",metricReuse:"Requirements en lanceringen",metricFeedback:"Richtlijnen en herbruikbare componenten",didiRole:"Stagiair Internationale Groeioperaties",didiText:"Ik hielp de maaltijdbezorgdienst in nieuwe Braziliaanse steden te starten. Ik stelde coupons in per gebruikersgroep, vergeleek aanbiedingen in A/B-tests en verstuurde campagnes via push, e-mail en WhatsApp. Ik bouwde ook een concurrentietool en hielp een AI-assistent voor het werven van verkopers te testen.",metricReach:"Segmentatie en multichannelcommunicatie",metricCities:"Concurrentiemonitoring en AI-agent",meituRole:"Stagiair AI-productgroei",meituText:"Ik werkte aan internationaal zoekverkeer voor Vmake en Zawa. Ik bekeek het verkeer in Search Console en GA4, zocht zoekwoorden met Semrush en Ahrefs en werkte landingspagina’s bij. Ik nam ook contact op met makers en media en hielp een proces voor meertalige content opzetten.",metricEfficiency:"SEO / GEO en kanaalpartnerschappen",metricRanking:"AI-ondersteunde productie en distributie",vwRole:"Stagiair Projectmanagement & Marktanalyse",vwText:"Ik volgde technische beoordelingen en leveringen van onderdelenprojecten en stemde de voortgang af met techniek, inkoop en leveranciers. Ik verwerkte branche- en concurrentiedata tot grafieken en rapporten voor beoordelingen van leveranciers en technologie.",metricProjects:"Afstemming en leveringsopvolging",metricReports:"Brancheonderzoek en beslisondersteuning",
    academicTitle:"Vakken en mijn<br /><span>bachelorscriptie</span>",academicIntro:"Deze vakken gaan over tekstanalyse en onderzoek met data. In mijn bachelorscriptie vergeleek ik de Duitse en Nederlandse woordvolgorde.",cuhk:'The Chinese University of Hong Kong, Shenzhen',cuhkMajor:'MSc Computational Social Science · specialisatie Statistiek',lmu:'LMU München',lmuMajor:'Uitwisseling met beurs · Duits als vreemde taal',nankai:'Nankai University',nankaiMajor:'BA Duits · minor Museumstudies',
    thesisTitle:'Woordvolgorde in het Duits en Nederlands',thesisScore:'Bachelorscriptie · taalkunde',fieldPre:'Voorveld',fieldLeft:'Linker zinsbeugel',fieldMid:'Middenveld',fieldRight:'Rechter zinsbeugel',fieldPost:'Naveld',thesisQuestionTitle:"Waar staat het werkwoord in het Duits en Nederlands?",thesisQuestion:'Het onderzoek vergelijkt werkwoordspositie, zinskader en informatiefocus in twee West-Germaanse talen en vraagt of Nederlandse vereenvoudiging toekomstige veranderingen in het Duits voorspelt.',thesisMethodTitle:"Beide talen vergelijken met hetzelfde zinsmodel",thesisMethod:'Zinnen worden verdeeld in voorveld, linker- en rechterzinsbeugel, middenveld en naveld om V2, werkwoordclusters, weglating en zinsbeugeldoorbreking te vergelijken.',thesisFindingTitle:"De grootste verschillen zitten in bijzinnen",thesisFinding:"In beide talen staat de persoonsvorm in hoofdzinnen op de tweede plaats. In Nederlandse bijzinnen is de volgorde van werkwoorden flexibeler en worden hulpwerkwoorden vaker weggelaten.",
    studyThesis:'Duits–Nederlands:<br />woordvolgorde',studyThesisText:'Een taalkundig onderzoek naar regels, structuur en expressie in verwante taalsystemen.',studyData:'Visualisatie van sociale data',studyDataText:'Data met R opschonen, analyseren en visualiseren zodat complexe bevindingen leesbaar worden.',studyGame:'Gamepsychologie',studyGameText:'De relatie tussen mechanismen, motivatie en gedrag onderzoeken—en vanuit keuzes terugredeneren naar ontwerp.',studyGlobal:'Globaliseringsonderzoek',studyGlobalText:'Platforms, markten en individuen begrijpen via interculturele stromen.',
    socialTitle:'Hoe ik wat ik onderweg vind<br />bewaar als <span>openbare notities.</span>',socialText:"Op Xiaohongshu schrijf ik als Müdemann. Hier staan een paar van mijn posts, van een autorit door IJsland tot een zoektocht naar een cd-hoes in Angkor.",redLabel:'RED · Xiaohongshu',copyId:'ID kopiëren',views:'totaal gelezen',likes:'totale likes',galleryHint:'Scroll zijwaarts · klik om te vergroten ↗',note1:'Op mijn twintigste: 1.600 km door IJsland',note2:'Binnen bij de Freitag-fabriek in Zürich',note3:"Kota Kinabalu–Brunei en terug, zestien stempels",note4:"Mijn ansichtkaartenmuur",note5:'Cambodjaanse rock vinden bij Angkor Wat',projectLabel:'Oppwise Brasil · inzichten in kansen over de grens',
    lifeTitle:"Reisfoto’s en <em>plekken waar ik ben geweest</em>",lifeText:"Hier staan een paar foto’s van mijn uitwisseling en reizen. Kies een jaar of tik op een stip om het land en jaar te zien.",photoJournalTitle:"Een paar reisfoto’s",photoJournalHint:"Klik op een foto om die te vergroten.",photoSea:"Meeuwen die op een bewolkte dag het beeld in vlogen",photoEsn:"Een Erasmus-bijeenkomst tijdens mijn uitwisseling in München",photoBarcelona:'Een zonsondergang aan zee in Barcelona',photoAllianz:"Na twaalf jaar Bayern-supporter in de Allianz Arena",tianjin:'Tianjin',munich:'München',shenzhen:'Shenzhen',brazil:'Project Brazilië',footballTitle:"Voetballen en Bayern volgen",footballText:'Aanvoerder, talenfaculteit Nankai · 12 jaar Bayern-supporter · wedstrijddag in de Allianz Arena',languageTitle:"Talen die ik gebruik",fieldNote:"De kaarten die ik mezelf stuurde en de kaarten die ik onderweg kocht, hangen aan dezelfde muur.",contactTitle:"Voor werk, onderzoek of reizen,<br /><em>stuur me gerust een mail of bericht.</em>"
    ,focusHonorA:"Productontwerp"
    ,focusHonorB:"Advertentienormen"
    ,focusDidiA:"Groeistrategie"
    ,focusDidiB:"Analysetools"
    ,focusMeituA:"Internationale groei"
    ,focusMeituB:"Contentprocessen"
    ,focusVwA:"Coördinatie"
    ,focusVwB:"Marktanalyse"
  }
};

Object.assign(translations.en, {
  backToTop: "Back to top",
  mobileMenu: "Menu",
  navigationLabel: "Main navigation",
  previousNote: "Previous notes",
  nextNote: "Next notes",
  closePhoto: "Close image viewer",
  previousPhoto: "Previous image",
  nextPhoto: "Next image",
  copySuccess: "Account ID copied.",
  copyFallback: "Press and hold or select the account ID to copy it.",
  photoUnavailable: "This image could not load. Try again later.",
  mapHomeBadge: "Home base",
  indexLabel: 'INDEX',
  thesisSubtitle: 'Word order in German and Dutch',
  redLabel: 'RED · Xiaohongshu',
  featuredStories: 'Selected stories',
  noteMedia: 'Note photos and screenshots',
  contactChannel: 'Message me on Xiaohongshu · Müdemann',
  storyAngkorPlace: 'Cambodia · Angkor',
  storyAngkorTitle: 'Taking a record to Angkor to find its cover',
  storyAngkorIntro: 'The relief on the cover of Cambodian Rocks is just to the right of an entrance across from a stone elephant.',
  storyIcelandPlace: 'Iceland · South Coast',
  storyIcelandTitle: 'Driving 1,600 km through Iceland at twenty',
  storyIcelandIntro: 'Four people, five days and four nights. We picked up a car at the airport and drove along the south coast to Höfn.',
  storyBorneoPlace: 'Borneo · Kota Kinabalu to Brunei',
  storyBorneoTitle: 'One round trip by bus, sixteen stamps',
  storyBorneoIntro: "I took the bus both ways and got sixteen entry and exit stamps along the way.",
  storyFreitagPlace: 'Switzerland · Zurich',
  storyFreitagTitle: 'A trip to Zurich for a factory tour',
  storyFreitagIntro: 'A small group tour showed me how FREITAG turns used truck tarps into bags.',
  projectLabel: 'Oppwise Brasil · overseas opportunity insights',
  languageList: 'Chinese · English · German · Dutch',
  courseLabel: 'SELECTED COURSES',
  courseTitle: "Graduate courses",
  courseHint: 'Scroll through courses ↔',
  courseMachineTitle: 'Introduction of Machine Learning for Social Science',
  courseMachineText: "Regression, classification and how to check whether a prediction holds up.",
  courseLinguisticsTitle: 'Computational Linguistics',
  courseLinguisticsText: "Cleaning text, counting words and using NLP to study how words are used in context.",
  courseMethodsTitle: 'Research Methods in Computational Social Science',
  courseMethodsText: "Turning a research question into a testable hypothesis, choosing data and interpreting the results.",
  noteBorneoDate: "January 2026",
  noteBorneoRoute: "Kota Kinabalu to Brunei and back",
  noteBorneoExcerpt: "If you have time, try the bus. I went overland both ways and got sixteen entry and exit stamps."
});
Object.assign(translations.de, {
  backToTop: "Nach oben",
  mobileMenu: "Menü",
  navigationLabel: "Hauptnavigation",
  previousNote: "Vorherige Beiträge",
  nextNote: "Weitere Beiträge",
  closePhoto: "Bildansicht schließen",
  previousPhoto: "Vorheriges Bild",
  nextPhoto: "Nächstes Bild",
  copySuccess: "Account-ID kopiert.",
  copyFallback: "Zum Kopieren die Account-ID gedrückt halten oder markieren.",
  photoUnavailable: "Das Bild konnte nicht geladen werden. Versuche es später erneut.",
  mapHomeBadge: "Ausgangspunkt",
  indexLabel: 'INDEX',
  thesisSubtitle: 'Wortstellung im Deutschen und Niederländischen',
  redLabel: 'RED · Xiaohongshu',
  featuredStories: 'Ausgewählte Geschichten',
  noteMedia: 'Fotos und Screenshots',
  contactChannel: 'Nachricht auf Xiaohongshu · Müdemann',
  storyAngkorPlace: 'Kambodscha · Angkor',
  storyAngkorTitle: 'Mit einer CD nach Angkor, auf der Suche nach ihrem Cover',
  storyAngkorIntro: 'Das Relief vom Cover von Cambodian Rocks liegt rechts hinter einem Eingang gegenüber einem steinernen Elefanten.',
  storyIcelandPlace: 'Island · Südküste',
  storyIcelandTitle: 'Mit zwanzig 1.600 km durch Island',
  storyIcelandIntro: 'Vier Leute, fünf Tage und vier Nächte. Vom Flughafen fuhren wir mit dem Mietwagen an der Südküste bis nach Höfn.',
  storyBorneoPlace: 'Borneo · Kota Kinabalu bis Brunei',
  storyBorneoTitle: 'Hin und zurück im Bus, sechzehn Stempel',
  storyBorneoIntro: "Ich fuhr beide Wege mit dem Bus und sammelte dabei sechzehn Ein- und Ausreisestempel.",
  storyFreitagPlace: 'Schweiz · Zürich',
  storyFreitagTitle: 'Für eine Werksführung nach Zürich',
  storyFreitagIntro: 'Bei einer Führung in kleiner Gruppe sah ich, wie FREITAG aus gebrauchten LKW-Planen Taschen macht.',
  projectLabel: 'Oppwise Brasil · Einblicke in Auslandschancen',
  languageList: 'Chinesisch · Englisch · Deutsch · Niederländisch',
  courseLabel: 'AUSGEWÄHLTE KURSE',
  courseTitle: "Kurse im Masterstudium",
  courseHint: 'Kurse horizontal durchsehen ↔',
  courseMachineTitle: 'Introduction of Machine Learning for Social Science',
  courseMachineText: "Regression, Klassifikation und die Frage, wie verlässlich eine Vorhersage ist.",
  courseLinguisticsTitle: 'Computational Linguistics',
  courseLinguisticsText: "Texte bereinigen, Wörter zählen und mit NLP untersuchen, wie Wörter im Kontext verwendet werden.",
  courseMethodsTitle: 'Research Methods in Computational Social Science',
  courseMethodsText: "Aus einer Forschungsfrage eine prüfbare Hypothese machen, Daten auswählen und Ergebnisse auswerten.",
  noteBorneoDate: "Januar 2026",
  noteBorneoRoute: "Kota Kinabalu–Brunei und zurück",
  noteBorneoExcerpt: "Wer genug Zeit hat, kann den Bus nehmen. Ich bin beide Wege über Land gefahren und kam auf sechzehn Ein- und Ausreisestempel."
});
Object.assign(translations.nl, {
  backToTop: "Naar boven",
  mobileMenu: "Menu",
  navigationLabel: "Hoofdnavigatie",
  previousNote: "Vorige notities",
  nextNote: "Volgende notities",
  closePhoto: "Foto sluiten",
  previousPhoto: "Vorige foto",
  nextPhoto: "Volgende foto",
  copySuccess: "Account-ID gekopieerd.",
  copyFallback: "Houd het account-ID ingedrukt of selecteer het om het te kopiëren.",
  photoUnavailable: "Deze foto kon niet worden geladen. Probeer het later opnieuw.",
  mapHomeBadge: "Vertrekpunt",
  indexLabel: 'INDEX',
  thesisSubtitle: 'Woordvolgorde in het Duits en Nederlands',
  redLabel: 'RED · Xiaohongshu',
  featuredStories: 'Uitgelichte verhalen',
  noteMedia: 'Foto’s en schermafbeeldingen',
  contactChannel: 'Bericht op Xiaohongshu · Müdemann',
  storyAngkorPlace: 'Cambodja · Angkor',
  storyAngkorTitle: 'Met een cd naar Angkor, op zoek naar de hoes',
  storyAngkorIntro: 'Het reliëf op de hoes van Cambodian Rocks ligt rechts achter een ingang tegenover een stenen olifant.',
  storyIcelandPlace: 'IJsland · Zuidkust',
  storyIcelandTitle: 'Op mijn twintigste 1.600 km door IJsland',
  storyIcelandIntro: 'Vier mensen, vijf dagen en vier nachten. Vanaf het vliegveld reden we langs de zuidkust naar Höfn.',
  storyBorneoPlace: 'Borneo · Kota Kinabalu naar Brunei',
  storyBorneoTitle: 'Eén retourrit per bus, zestien stempels',
  storyBorneoIntro: "Ik nam heen en terug de bus en kreeg onderweg zestien in- en uitreisstempels.",
  storyFreitagPlace: 'Zwitserland · Zürich',
  storyFreitagTitle: 'Naar Zürich voor een fabrieksrondleiding',
  storyFreitagIntro: 'Tijdens een rondleiding in een kleine groep zag ik hoe FREITAG gebruikte vrachtwagenzeilen verwerkt tot tassen.',
  projectLabel: 'Oppwise Brasil · inzichten in kansen over de grens',
  languageList: 'Chinees · Engels · Duits · Nederlands',
  courseLabel: 'GESELECTEERDE VAKKEN',
  courseTitle: "Mastervakken",
  courseHint: 'Scroll door de vakken ↔',
  courseMachineTitle: 'Introduction of Machine Learning for Social Science',
  courseMachineText: "Regressie, classificatie en nagaan hoe betrouwbaar een voorspelling is.",
  courseLinguisticsTitle: 'Computational Linguistics',
  courseLinguisticsText: "Tekst opschonen, woorden tellen en met NLP bekijken hoe woorden in hun context worden gebruikt.",
  courseMethodsTitle: 'Research Methods in Computational Social Science',
  courseMethodsText: "Een onderzoeksvraag omzetten in een toetsbare hypothese, data kiezen en resultaten interpreteren.",
  noteBorneoDate: "Januari 2026",
  noteBorneoRoute: "Kota Kinabalu–Brunei en terug",
  noteBorneoExcerpt: "Als je tijd hebt, probeer dan de bus. Ik ging heen en terug over land en kreeg in totaal zestien in- en uitreisstempels."
});

const pageMetadata = {
  zh: { title: '曹轩鸣 · 语言与旅途之间', description: '曹轩鸣的个人网站：语言、研究、旅行、公开笔记与工作记录。' },
  en: { title: 'Xuanming Cao · Between Languages and Journeys', description: 'Xuanming Cao’s personal archive of languages, research, journeys, public notes and practice.' },
  de: { title: 'Xuanming Cao · Zwischen Sprachen und Reisen', description: 'Xuanming Caos persönliches Archiv: Sprachen, Forschung, Reisen, öffentliche Notizen und Praxis.' },
  nl: { title: 'Xuanming Cao · Tussen talen en reizen', description: 'Het persoonlijke archief van Xuanming Cao: talen, onderzoek, reizen, openbare notities en praktijk.' }
};
let currentLanguage = 'zh';

const copyStatus = document.querySelector('.copy-status');
let copyStatusTimer;
document.querySelector('.copy-id').addEventListener('click', async event => {
  const button = event.currentTarget;
  clearTimeout(copyStatusTimer);
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    copyStatus.textContent = translations[currentLanguage]?.copySuccess ?? '账号已复制。';
    copyStatusTimer = setTimeout(() => { copyStatus.hidden = true; }, 1800);
  } catch {
    copyStatus.textContent = translations[currentLanguage]?.copyFallback ?? '请长按或选中账号手动复制。';
  }
  copyStatus.hidden = false;
});

const noteRail = document.querySelector('#noteRail');
const notePrev = document.querySelector('.note-scroll-prev');
const noteNext = document.querySelector('.note-scroll-next');
function updateNoteControls() {
  notePrev.disabled = noteRail.scrollLeft <= 2;
  noteNext.disabled = noteRail.scrollLeft >= noteRail.scrollWidth - noteRail.clientWidth - 2;
}
function scrollNotes(direction) {
  const card = noteRail.querySelector('.note-card');
  noteRail.scrollBy({ left: direction * (card.getBoundingClientRect().width + 14), behavior: 'smooth' });
}
notePrev.addEventListener('click', () => scrollNotes(-1));
noteNext.addEventListener('click', () => scrollNotes(1));
noteRail.addEventListener('scroll', updateNoteControls, { passive: true });
window.addEventListener('resize', updateNoteControls);
updateNoteControls();

const makeCountry = (year, iso, lat, lon, zh, en, de, nl, dx = 0, dy = 0) => ({ year, iso, lat, lon, names: { zh, en, de, nl }, dx, dy });
const visitedCountries = [
  makeCountry(2023,'AE',23.4241,53.8478,'阿联酋','United Arab Emirates','Vereinigte Arabische Emirate','Verenigde Arabische Emiraten'),
  makeCountry(2023,'DE',51.1657,10.4515,'德国','Germany','Deutschland','Duitsland'),
  makeCountry(2023,'AT',47.5162,14.5501,'奥地利','Austria','Österreich','Oostenrijk'),
  makeCountry(2023,'CZ',49.8175,15.473,'捷克','Czechia','Tschechien','Tsjechië'),
  makeCountry(2023,'LI',47.166,9.5554,'列支敦士登','Liechtenstein','Liechtenstein','Liechtenstein',-5,-6),
  makeCountry(2023,'CH',46.8182,8.2275,'瑞士','Switzerland','Schweiz','Zwitserland'),
  makeCountry(2023,'GR',39.0742,21.8243,'希腊','Greece','Griechenland','Griekenland'),
  makeCountry(2023,'ES',40.4637,-3.7492,'西班牙','Spain','Spanien','Spanje'),
  makeCountry(2023,'PT',39.3999,-8.2245,'葡萄牙','Portugal','Portugal','Portugal'),
  makeCountry(2023,'LU',49.8153,6.1296,'卢森堡','Luxembourg','Luxemburg','Luxemburg',-7,5),
  makeCountry(2024,'BE',50.5039,4.4699,'比利时','Belgium','Belgien','België'),
  makeCountry(2024,'NL',52.1326,5.2913,'荷兰','Netherlands','Niederlande','Nederland'),
  makeCountry(2024,'HR',45.1,15.2,'克罗地亚','Croatia','Kroatien','Kroatië'),
  makeCountry(2024,'MT',35.9375,14.3754,'马耳他','Malta','Malta','Malta',2,5),
  makeCountry(2024,'DK',56.2639,9.5018,'丹麦','Denmark','Dänemark','Denemarken'),
  makeCountry(2024,'SE',60.1282,18.6435,'瑞典','Sweden','Schweden','Zweden'),
  makeCountry(2024,'FI',61.9241,25.7482,'芬兰','Finland','Finnland','Finland'),
  makeCountry(2024,'EE',58.5953,25.0136,'爱沙尼亚','Estonia','Estland','Estland'),
  makeCountry(2024,'NO',60.472,8.4689,'挪威','Norway','Norwegen','Noorwegen'),
  makeCountry(2024,'JO',30.5852,36.2384,'约旦','Jordan','Jordanien','Jordanië'),
  makeCountry(2024,'IT',41.8719,12.5674,'意大利','Italy','Italien','Italië'),
  makeCountry(2024,'IS',64.9631,-19.0208,'冰岛','Iceland','Island','IJsland'),
  makeCountry(2024,'SI',46.1512,14.9955,'斯洛文尼亚','Slovenia','Slowenien','Slovenië',5,-5),
  makeCountry(2024,'VA',41.9029,12.4534,'梵蒂冈','Vatican City','Vatikanstadt','Vaticaanstad',-7,6),
  makeCountry(2024,'SM',43.9424,12.4578,'圣马力诺','San Marino','San Marino','San Marino',6,-3),
  makeCountry(2024,'BA',43.9159,17.6791,'波黑','Bosnia and Herzegovina','Bosnien und Herzegowina','Bosnië en Herzegovina'),
  makeCountry(2024,'MA',31.7917,-7.0926,'摩洛哥','Morocco','Marokko','Marokko'),
  makeCountry(2024,'FR',46.2276,2.2137,'法国','France','Frankreich','Frankrijk'),
  makeCountry(2024,'MC',43.7384,7.4246,'摩纳哥','Monaco','Monaco','Monaco',-5,7),
  makeCountry(2024,'RS',44.0165,21.0059,'塞尔维亚','Serbia','Serbien','Servië'),
  makeCountry(2024,'TR',38.9637,35.2433,'土耳其','Turkey','Türkei','Turkije'),
  makeCountry(2024,'HU',47.1625,19.5033,'匈牙利','Hungary','Ungarn','Hongarije'),
  makeCountry(2024,'PL',51.9194,19.1451,'波兰','Poland','Polen','Polen'),
  makeCountry(2024,'AL',41.1533,20.1683,'阿尔巴尼亚','Albania','Albanien','Albanië',3,5),
  makeCountry(2024,'QA',25.3548,51.1839,'卡塔尔','Qatar','Katar','Qatar',2,5),
  makeCountry(2025,'KR',35.9078,127.7669,'韩国','South Korea','Südkorea','Zuid-Korea'),
  makeCountry(2025,'RU',61.524,105.3188,'俄罗斯','Russia','Russland','Rusland'),
  makeCountry(2025,'MN',46.8625,103.8467,'蒙古','Mongolia','Mongolei','Mongolië'),
  makeCountry(2025,'VN',14.0583,108.2772,'越南','Vietnam','Vietnam','Vietnam'),
  makeCountry(2026,'KH',12.5657,104.991,'柬埔寨','Cambodia','Kambodscha','Cambodja'),
  makeCountry(2026,'MY',4.2105,101.9758,'马来西亚','Malaysia','Malaysia','Maleisië'),
  makeCountry(2026,'BN',4.5353,114.7277,'文莱','Brunei','Brunei','Brunei')
];
const homeCountry = makeCountry('home','CN',35.8617,104.1954,'中国 · 出发地','China · home base','China · Ausgangspunkt','China · thuisbasis');
const svgNamespace = 'http://www.w3.org/2000/svg';
const dotLayer = document.querySelector('.travel-dots');
const mapStage = document.querySelector('.map-stage');
const mapTooltip = document.querySelector('.map-tooltip');
const countryListElement = document.querySelector('.country-list');
const countryNodes = [];
let activeMapYear = 'all';
let activeMapMarker;

function projectCountry(country) {
  return [((country.lon + 180) / 360) * 1000 + country.dx, ((90 - country.lat) / 180) * 500 + country.dy];
}

function countryName(country) {
  return country.names[currentLanguage] || country.names.en;
}

function positionMapTooltip() {
  if (!activeMapMarker) return;
  const dotRect = activeMapMarker.hitArea.getBoundingClientRect();
  const stageRect = mapStage.getBoundingClientRect();
  const center = dotRect.left - stageRect.left + dotRect.width / 2;
  const inset = mapTooltip.offsetWidth / 2 + 4;
  const below = dotRect.top - stageRect.top < mapTooltip.offsetHeight + 8;
  mapTooltip.style.left = `${Math.max(inset, Math.min(center, stageRect.width - inset))}px`;
  mapTooltip.style.top = `${(below ? dotRect.bottom : dotRect.top) - stageRect.top}px`;
  mapTooltip.classList.toggle('below', below);
}

function showMapTooltip(marker) {
  if (marker.node.classList.contains('dimmed')) return;
  if (activeMapMarker !== marker) hideMapTooltip();
  activeMapMarker = marker;
  const { country, node } = marker;
  const year = country.year === 'home' ? translations[currentLanguage]?.mapHomeBadge ?? '出发地' : country.year;
  mapTooltip.innerHTML = `<b>${countryName(country)}</b><span>${year}</span>`;
  node.classList.add('active');
  positionMapTooltip();
  mapTooltip.classList.add('visible');
}

function hideMapTooltip(marker = activeMapMarker) {
  if (!marker || activeMapMarker !== marker) return;
  marker.node.classList.remove('active');
  mapTooltip.classList.remove('visible');
  activeMapMarker = undefined;
}

function createMapDot(country) {
  const group = document.createElementNS(svgNamespace, 'g');
  const hitArea = document.createElementNS(svgNamespace, 'circle');
  const pulse = document.createElementNS(svgNamespace, 'circle');
  const core = document.createElementNS(svgNamespace, 'circle');
  const [x, y] = projectCountry(country);
  group.setAttribute('transform', `translate(${x} ${y})`);
  group.setAttribute('class', `travel-dot${country.year === 'home' ? ' home' : ''}`);
  group.dataset.year = country.year;
  group.setAttribute('tabindex', '0');
  group.setAttribute('role', 'graphics-symbol');
  hitArea.setAttribute('r', '12');
  hitArea.setAttribute('fill', 'transparent');
  pulse.setAttribute('r', country.year === 'home' ? '7.5' : '6.5');
  pulse.setAttribute('class', 'pulse');
  core.setAttribute('r', country.year === 'home' ? '5.2' : '4.1');
  core.setAttribute('class', 'core');
  group.append(hitArea, pulse, core);
  const marker = { country, node: group, hitArea };
  group.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'touch') showMapTooltip(marker);
  });
  group.addEventListener('pointerleave', event => {
    if (event.pointerType !== 'touch') hideMapTooltip(marker);
  });
  group.addEventListener('click', () => showMapTooltip(marker));
  group.addEventListener('focus', () => showMapTooltip(marker));
  group.addEventListener('blur', () => hideMapTooltip(marker));
  dotLayer.append(group);
  countryNodes.push(marker);
}

function rebuildCountryList() {
  countryListElement.replaceChildren();
  visitedCountries.filter(country => activeMapYear === 'all' || String(country.year) === activeMapYear).forEach(country => {
    const row = document.createElement('div');
    const name = document.createElement('span');
    const year = document.createElement('time');
    name.textContent = countryName(country);
    year.textContent = country.year;
    row.append(name, year);
    countryListElement.append(row);
  });
}

function refreshTravelMapLanguage() {
  if (!countryNodes.length) return;
  countryNodes.forEach(({ country, node }) => node.setAttribute('aria-label', country.year === 'home' ? countryName(country) : `${countryName(country)}, ${country.year}`));
  rebuildCountryList();
  if (activeMapMarker) showMapTooltip(activeMapMarker);
}

function filterTravelMap(year) {
  activeMapYear = year;
  hideMapTooltip();
  countryNodes.forEach(({ country, node }) => {
    const dimmed = country.year !== 'home' && year !== 'all' && String(country.year) !== year;
    node.classList.toggle('dimmed', dimmed);
    node.setAttribute('tabindex', dimmed ? '-1' : '0');
  });
  document.querySelectorAll('.year-filters button').forEach(button => {
    const selected = button.dataset.year === year;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  rebuildCountryList();
}

[...visitedCountries, homeCountry].forEach(createMapDot);
document.addEventListener('click', event => {
  if (!event.target.closest('.travel-dot')) hideMapTooltip();
});
window.addEventListener('resize', positionMapTooltip);
document.querySelectorAll('.year-filters button').forEach(button => button.addEventListener('click', () => filterTravelMap(button.dataset.year)));
document.querySelector('.country-list-toggle').addEventListener('click', event => {
  const open = countryListElement.classList.toggle('open');
  countryListElement.hidden = !open;
  event.currentTarget.setAttribute('aria-expanded', String(open));
  event.currentTarget.querySelector('i').textContent = open ? '−' : '＋';
});

const lightbox = document.querySelector('#mediaLightbox');
const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxCaption = lightbox.querySelector('#lightboxCaption');
const lightboxCount = lightbox.querySelector('.lightbox-count');
const lightboxGroups = {
  notes: [...document.querySelectorAll('#social [data-lightbox]')],
  photos: [...document.querySelectorAll('#life [data-lightbox]')]
};
let activeLightboxGroup = [];
let activeLightboxIndex = 0;
let lastLightboxTrigger = null;
let lightboxFallback;

function captionForMedia(trigger) {
  const container = trigger.closest('.note-card, .photo-frame');
  return container?.querySelector('[data-lightbox-caption]')?.textContent.trim() || trigger.querySelector('img')?.alt || '';
}

function renderLightbox(index) {
  if (!activeLightboxGroup.length) return;
  activeLightboxIndex = (index + activeLightboxGroup.length) % activeLightboxGroup.length;
  const trigger = activeLightboxGroup[activeLightboxIndex];
  const thumbnail = trigger.querySelector('img');
  lightboxFallback = thumbnail.currentSrc || thumbnail.src;
  lightboxImage.classList.add('loading');
  lightboxImage.hidden = false;
  lightboxImage.alt = captionForMedia(trigger);
  lightboxImage.src = trigger.dataset.full || lightboxFallback;
  lightboxCaption.textContent = lightboxImage.alt;
  lightboxCount.textContent = `${String(activeLightboxIndex + 1).padStart(2, '0')} / ${String(activeLightboxGroup.length).padStart(2, '0')}`;
}

function openLightbox(trigger) {
  if (typeof lightbox.showModal !== 'function') {
    window.location.href = trigger.dataset.full || trigger.querySelector('img').src;
    return;
  }
  activeLightboxGroup = trigger.closest('#social') ? lightboxGroups.notes : lightboxGroups.photos;
  lastLightboxTrigger = trigger;
  renderLightbox(activeLightboxGroup.indexOf(trigger));
  document.body.classList.add('lightbox-open');
  lightbox.showModal();
  lightbox.querySelector('.lightbox-close').focus();
}

Object.values(lightboxGroups).flat().forEach(trigger => trigger.addEventListener('click', () => openLightbox(trigger)));
lightboxImage.addEventListener('load', () => lightboxImage.classList.remove('loading'));
lightboxImage.addEventListener('error', () => {
  if (lightboxFallback && lightboxImage.src !== lightboxFallback) {
    lightboxImage.src = lightboxFallback;
    return;
  }
  lightboxImage.hidden = true;
  lightboxCaption.textContent = translations[currentLanguage]?.photoUnavailable ?? '图片暂时加载失败，请稍后重试。';
});
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => renderLightbox(activeLightboxIndex - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => renderLightbox(activeLightboxIndex + 1));
lightbox.addEventListener('click', event => {
  if (event.target === lightbox || event.target === lightbox.querySelector('.lightbox-shell') || event.target === lightbox.querySelector('figure')) lightbox.close();
});
lightbox.addEventListener('close', () => {
  document.body.classList.remove('lightbox-open');
  lastLightboxTrigger?.focus({ preventScroll: true });
});
document.addEventListener('keydown', event => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') renderLightbox(activeLightboxIndex - 1);
  if (event.key === 'ArrowRight') renderLightbox(activeLightboxIndex + 1);
});

initializeLanguagePicker(translations, pageMetadata, language => {
  currentLanguage = language;
  clearTimeout(copyStatusTimer);
  copyStatus.hidden = true;
  refreshTravelMapLanguage();
});
