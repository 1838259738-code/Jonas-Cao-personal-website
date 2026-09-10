const items = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
items.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 2) * 70}ms`;
  observer.observe(item);
});

const workSection = document.getElementById('internship');
const educationSection = document.getElementById('academic');
if (workSection && educationSection) educationSection.before(workSection);

document.querySelectorAll('.portal-card').forEach(card => {
  card.addEventListener('click', () => document.getElementById(card.dataset.target)?.scrollIntoView({ behavior: 'smooth' }));
});

const navLinks = [...document.querySelectorAll('.nav nav a')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-25% 0px -65% 0px' });
navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean).forEach(section => sectionObserver.observe(section));

const translations = {
  en: {
    navExplore:'Index',navWork:'Practice',navAcademic:'Research',navSocial:'Notes',navLife:'Journeys',navContact:'Contact',
    heroKicker:'XUANMING CAO · PERSONAL ARCHIVE',heroPlace:'SHENZHEN · 2026',heroTitle:'Across languages and journeys,<br />I learn to <span class="scribble">read the world</span><em>.</em>',heroIntro:'A collection of journeys, languages, research, practice,<br />and ideas still taking shape.',heroCaption:'Go out into the world, then bring the questions home.',
    exploreTitle:'Where would you like to begin?',exploreText:'Not a résumé arranged by time,<br />but four paths into who I am.',portalAcademic:'Study & research',portalAcademicText:'Language, society and data in conversation',portalWork:'Practice notes',portalWorkText:'Observing, collaborating and making inside real systems',portalSocial:'Public notes',portalSocialText:'Turning observations along the way into stories to share',portalLife:'Life & journeys',portalLifeText:'Football, cities and an ever-expanding world map',
    profileTitle:'Not a straight line,<br />but an <span>ever-unfolding map</span>.',profileText:'I study across German, museum studies and computational social science, and learn through product work, growth and writing. Travel teaches me to enter unfamiliar contexts, football to collaborate, and writing to turn scattered observations into answers of my own.',factWork:'years following FC Bayern',factTravel:'countries visited',factLanguage:'languages I use',mapCount:'countries visited',mapAll:'All',mapHome:'China · home base',mapList:'View all countries',
    workTitle:'A few places where I have worked,<br />and left something concrete behind.',workIntro:'I have worked across product, growth and analysis. This is where I keep track of what I owned, and what eventually shipped and found its way into people’s hands.',
    present:'Present',honorRole:'Monetization Product Manager',honorText:'Owned six monetization requirements from problem definition and PRD to development and launch. Led browser ad-format standardization and built reusable components and interaction standards.',metricReuse:'higher code reuse',metricFeedback:'visual negative feedback',didiRole:'International Growth Operations',didiText:'Supported city launches for a food-delivery business in Brazil through segmentation, coupon incentives, omnichannel messaging and competitor monitoring; built automated analysis tools for continuous iteration.',metricReach:'targeted user touches',metricCities:'cities launched',meituRole:'AI Product Growth Operations',meituText:'Expanded overseas growth channels for Vmake and Zawa, built an AI workflow from competitor scraping to multilingual content production and distribution, and moved core keywords into Google’s top three.',metricEfficiency:'higher channel efficiency',metricRanking:'core keyword ranking',vwRole:'Project Management & Market Analysis',vwText:'Connected engineering, procurement and global suppliers to support component delivery; turned cleaned and visualized data into input for supplier and technology decisions.',metricProjects:'core projects',metricReports:'analysis reports',
    academicTitle:'From language structure<br />to the <span>data structure of society</span>.',academicIntro:'Language study trained my sensitivity to nuance and context. Computational social science taught me to test intuition with data.',cuhk:'The Chinese University of Hong Kong, Shenzhen',cuhkMajor:'MSc in Computational Social Science · Statistics concentration',lmu:'LMU Munich',lmuMajor:'Government-sponsored exchange · German as a Foreign Language',nankai:'Nankai University',nankaiMajor:'BA in German · Minor in Museum Studies',
    thesisTitle:'Word Order in German and Dutch',thesisScore:'BA thesis · linguistics',fieldPre:'Prefield',fieldLeft:'Left bracket',fieldMid:'Midfield',fieldRight:'Right bracket',fieldPost:'Postfield',thesisQuestionTitle:'One origin—why different syntactic paths?',thesisQuestion:'This study compares verb position, sentence brackets and information focus in two West Germanic languages, asking whether Dutch simplification may foreshadow future changes in German.',thesisMethodTitle:'Topological model × comparative analysis',thesisMethod:'Sentences are divided into prefield, left/right brackets, midfield and postfield to compare V2, multi-verb order, omission and bracket-breaking within one framework.',thesisFindingTitle:'A shared frame, different flexibility',thesisFinding:'Both languages follow V2 in main clauses. Dutch allows more flexible verb order and auxiliary omission in subordinate clauses; language contact has pushed it toward simpler, more VO-like structures.',
    studyThesis:'German–Dutch<br />word-order research',studyThesisText:'A linguistic investigation into how neighboring language systems organize rules, structure and expression.',studyData:'Social data visualization',studyDataText:'Using R to clean, analyze and visualize data so complex findings become readable.',studyGame:'Psychology of games',studyGameText:'Studying how mechanics, motivation and behavior connect—and reasoning back from choices to design.',studyGlobal:'Globalization studies',studyGlobalText:'Understanding platforms, markets and individuals through cross-cultural flows.',
    socialTitle:'How I turn what I find on the road<br />into <span>public notes.</span>',socialText:'Müdemann is the name I use while travelling. Routes, encounters, factories, music and postcards slowly become memories that can be shared.',copyId:'Copy ID',views:'total reads',likes:'total likes',connection:'from expression to connection',galleryHint:'Scroll sideways · click to enlarge ↗',note1:'A 1,600 km Iceland road trip at twenty',note2:'Inside Freitag’s Zurich factory',note3:'Kota Kinabalu to Brunei: 16 border stamps',note4:'Keeping the world on a postcard wall',note5:'Finding Cambodian rock at Angkor Wat',
    lifeTitle:'Beyond the map, <em>there is a life.</em>',lifeText:'Travel is not a checklist. It teaches me to observe and adapt in unfamiliar places, and to understand places, cultures and myself anew.',photoJournalTitle:'Moments more tangible than coordinates',photoJournalHint:'Exchange, coastlines and matchdays. Click any frame to open it.',photoSea:'Sea wind, overcast skies and birds caught in the frame',photoEsn:'An exchange in Munich—and a new circle of friends',photoBarcelona:'A sunset by the sea in Barcelona',photoAllianz:'Twelve years of support, finally at the home ground',tianjin:'Tianjin',munich:'Munich',shenzhen:'Shenzhen',brazil:'Brazil work',footballTitle:'Football is another team language',footballText:'Captain, Nankai School of Foreign Languages · FC Bayern supporter for 12 years · Matchday at Allianz Arena',languageTitle:'Living between four languages',fieldNote:'“Staying curious matters<br />more than finding the standard answer.”',contactTitle:'Want to talk about languages, products,<br />or something you noticed on the road? <em>Write to me.</em>'
  },
  de: {
    navExplore:'Index',navWork:'Praxis',navAcademic:'Forschung',navSocial:'Notizen',navLife:'Reisen',navContact:'Kontakt',
    heroKicker:'XUANMING CAO · PERSÖNLICHES ARCHIV',heroPlace:'SHENZHEN · 2026',heroTitle:'Zwischen Sprachen und Reisen<br />lerne ich, die <span class="scribble">Welt zu lesen</span><em>.</em>',heroIntro:'Eine Sammlung aus Reisen, Sprachen, Forschung, Praxis<br />und Ideen, die noch Gestalt annehmen.',heroCaption:'Hinausgehen – und die Fragen mit zurückbringen.',
    exploreTitle:'Wo möchtest du anfangen?',exploreText:'Kein chronologisch sortierter Lebenslauf,<br />sondern vier Wege, mich kennenzulernen.',portalAcademic:'Studium & Forschung',portalAcademicText:'Sprache, Gesellschaft und Daten im Dialog',portalWork:'Praxisnotizen',portalWorkText:'In realen Systemen beobachten, zusammenarbeiten und gestalten',portalSocial:'Öffentliche Notizen',portalSocialText:'Beobachtungen unterwegs in teilbare Geschichten verwandeln',portalLife:'Leben & Reisen',portalLifeText:'Fußball, Städte und eine stetig wachsende Weltkarte',
    profileTitle:'Keine gerade Linie,<br />sondern eine <span>Karte, die sich weiter entfaltet</span>.',profileText:'Ich bewege mich zwischen Germanistik, Museumswissenschaft und Computational Social Science und lerne ebenso durch Produktarbeit, Wachstum und Schreiben. Reisen schult mich im Umgang mit fremden Kontexten, Fußball in Zusammenarbeit und Schreiben darin, verstreute Beobachtungen zu eigenen Antworten zu ordnen.',factWork:'Jahre Bayern-Fan',factTravel:'besuchte Länder',factLanguage:'Sprachen im Alltag',mapCount:'besuchte Länder',mapAll:'Alle',mapHome:'China · Ausgangspunkt',mapList:'Alle Länder anzeigen',
    workTitle:'Ein paar Orte, an denen ich gearbeitet<br />und etwas Konkretes hinterlassen habe.',workIntro:'Ich habe in Produkt, Wachstum und Analyse gearbeitet. Hier steht, worum ich mich gekümmert habe und was am Ende tatsächlich veröffentlicht und genutzt wurde.',
    present:'heute',honorRole:'Produktmanager Monetarisierung',honorText:'Sechs Monetarisierungsanforderungen von Problemdefinition und PRD bis Entwicklung und Launch verantwortet. Standardisierung von Werbeformaten und wiederverwendbaren Komponenten geleitet.',metricReuse:'mehr Code-Wiederverwendung',metricFeedback:'visuelles Negativfeedback',didiRole:'International Growth Operations',didiText:'Stadtstarts eines Food-Delivery-Geschäfts in Brasilien mit Segmentierung, Coupons, Omnichannel-Kommunikation und Wettbewerbsbeobachtung unterstützt; automatisierte Analysewerkzeuge entwickelt.',metricReach:'gezielte Kontakte',metricCities:'gestartete Städte',meituRole:'AI Product Growth Operations',meituText:'Internationale Wachstumskanäle für Vmake und Zawa aufgebaut und einen KI-Workflow von Wettbewerbsdaten bis zur mehrsprachigen Content-Produktion entwickelt; zentrale Keywords in Googles Top 3 gebracht.',metricEfficiency:'höhere Effizienz',metricRanking:'Keyword-Ranking',vwRole:'Projektmanagement & Marktanalyse',vwText:'Technik, Einkauf und globale Lieferanten koordiniert; Datenanalysen und Visualisierungen als Grundlage für Lieferanten- und Technologieentscheidungen erstellt.',metricProjects:'Kernprojekte',metricReports:'Analysen',
    academicTitle:'Von Sprachstrukturen<br />zur <span>Datenstruktur der Gesellschaft</span>.',academicIntro:'Das Sprachstudium schärfte mein Gespür für Nuancen und Kontext. Computational Social Science lehrte mich, Intuition mit Daten zu prüfen.',cuhk:'The Chinese University of Hong Kong, Shenzhen',cuhkMajor:'MSc Computational Social Science · Schwerpunkt Statistik',lmu:'Ludwig-Maximilians-Universität München',lmuMajor:'Stipendiengeförderter Austausch · Deutsch als Fremdsprache',nankai:'Nankai-Universität',nankaiMajor:'B.A. Germanistik · Nebenfach Museumswissenschaft',
    thesisTitle:'Wortstellung im Deutschen und Niederländischen',thesisScore:'Bachelorarbeit · Linguistik',fieldPre:'Vorfeld',fieldLeft:'Linke Satzklammer',fieldMid:'Mittelfeld',fieldRight:'Rechte Satzklammer',fieldPost:'Nachfeld',thesisQuestionTitle:'Ein Ursprung – warum verschiedene Syntaxwege?',thesisQuestion:'Die Arbeit vergleicht Verbstellung, Satzklammer und Informationsfokus zweier westgermanischer Sprachen und fragt, ob die Vereinfachung des Niederländischen künftige Veränderungen im Deutschen andeutet.',thesisMethodTitle:'Topologisches Modell × Vergleich',thesisMethod:'Sätze werden in Vorfeld, linke und rechte Satzklammer, Mittelfeld und Nachfeld gegliedert. So lassen sich V2, Verbcluster, Auslassung und Rahmensprengung in einem Rahmen vergleichen.',thesisFindingTitle:'Gemeinsamer Rahmen, andere Flexibilität',thesisFinding:'Beide Sprachen folgen im Hauptsatz dem V2-Prinzip. Im Nebensatz erlaubt das Niederländische flexiblere Verbfolgen und häufigere Auxiliarauslassung; Sprachkontakt fördert einfachere, VO-nahe Strukturen.',
    studyThesis:'Deutsch–Niederländisch:<br />Wortstellung',studyThesisText:'Eine linguistische Untersuchung zu Regeln, Struktur und Ausdruck benachbarter Sprachsysteme.',studyData:'Visualisierung sozialer Daten',studyDataText:'Daten mit R bereinigen, analysieren und so visualisieren, dass komplexe Befunde lesbar werden.',studyGame:'Spielpsychologie',studyGameText:'Zusammenhänge zwischen Mechanik, Motivation und Verhalten untersuchen – und von Entscheidungen auf Design schließen.',studyGlobal:'Globalisierungsforschung',studyGlobalText:'Plattformen, Märkte und Individuen im Kontext kultureller Verflechtung verstehen.',
    socialTitle:'Wie Erlebnisse unterwegs<br />zu <span>öffentlichen Notizen</span> werden.',socialText:'Müdemann ist mein Name auf Reisen. Routen, Begegnungen, Fabriken, Musik und Postkarten werden dort nach und nach zu Erinnerungen, die sich teilen lassen.',copyId:'ID kopieren',views:'Aufrufe gesamt',likes:'Likes gesamt',connection:'vom Ausdruck zur Verbindung',galleryHint:'Seitwärts scrollen · zum Vergrößern klicken ↗',note1:'Mit zwanzig: 1.600 km durch Island',note2:'Zu Besuch in der Freitag-Fabrik Zürich',note3:'Kota Kinabalu–Brunei: 16 Grenzstempel',note4:'Die Welt an meiner Postkartenwand',note5:'Kambodschanischen Rock in Angkor Wat finden',
    lifeTitle:'Jenseits der Karte <em>liegt das Leben.</em>',lifeText:'Reisen ist keine Checkliste. In unbekannten Situationen lerne ich zu beobachten und mich anzupassen – und Orte, Kulturen und mich selbst immer neu zu verstehen.',photoJournalTitle:'Momente, die konkreter sind als Koordinaten',photoJournalHint:'Austausch, Küsten und Spieltage. Ein Klick öffnet das Bild.',photoSea:'Seewind, Wolken und Vögel, die gerade ins Bild fliegen',photoEsn:'Ein Austausch in München – und ein neuer Freundeskreis',photoBarcelona:'Ein Sonnenuntergang am Meer in Barcelona',photoAllianz:'Zwölf Jahre Fan – endlich im eigenen Stadion',tianjin:'Tianjin',munich:'München',shenzhen:'Shenzhen',brazil:'Brasilien-Projekt',footballTitle:'Fußball ist eine weitere Teamsprache',footballText:'Kapitän der Fakultätsmannschaft in Nankai · seit 12 Jahren Bayern-Fan · Spieltag in der Allianz Arena',languageTitle:'Zwischen vier Sprachen leben',fieldNote:'„Neugierig zu bleiben ist wichtiger,<br />als die Standardantwort zu finden.“',contactTitle:'Du möchtest über Sprachen, Produkte<br />oder Reisen sprechen? <em>Schreib mir.</em>'
  },
  nl: {
    navExplore:'Index',navWork:'Praktijk',navAcademic:'Onderzoek',navSocial:'Notities',navLife:'Reizen',navContact:'Contact',
    heroKicker:'XUANMING CAO · PERSOONLIJK ARCHIEF',heroPlace:'SHENZHEN · 2026',heroTitle:'Tussen talen en reizen<br />leer ik de <span class="scribble">wereld lezen</span><em>.</em>',heroIntro:'Een verzameling reizen, talen, onderzoek, praktijk<br />en ideeën die nog vorm krijgen.',heroCaption:'Naar buiten gaan, en de vragen mee terugnemen.',
    exploreTitle:'Waar wil je beginnen?',exploreText:'Geen cv op volgorde van tijd,<br />maar vier routes om mij te leren kennen.',portalAcademic:'Studie & onderzoek',portalAcademicText:'Waar taal, samenleving en data elkaar ontmoeten',portalWork:'Praktijknotities',portalWorkText:'Observeren, samenwerken en maken in echte systemen',portalSocial:'Openbare notities',portalSocialText:'Observaties onderweg omzetten in verhalen om te delen',portalLife:'Leven & reizen',portalLifeText:'Voetbal, steden en een wereldkaart die blijft groeien',
    profileTitle:'Geen rechte lijn,<br />maar een <span>kaart die zich blijft ontvouwen</span>.',profileText:'Ik leer tussen Duits, museumstudies en computational social science, en evenzeer via productwerk, groei en schrijven. Reizen leert me onbekende contexten binnen te stappen, voetbal om samen te werken en schrijven om losse observaties tot eigen antwoorden te ordenen.',factWork:'jaar Bayern-supporter',factTravel:'bezochte landen',factLanguage:'talen die ik gebruik',mapCount:'bezochte landen',mapAll:'Alles',mapHome:'China · thuisbasis',mapList:'Bekijk alle landen',
    workTitle:'Plekken waar ideeën<br />de werkelijkheid ontmoeten.',workIntro:'Bedrijven zijn coördinaten. Belangrijker is hoe ik in verschillende omgevingen problemen begrijp, met mensen samenwerk en een vaag idee verder breng tot iets dat gebruikt kan worden.',
    present:'heden',honorRole:'Productmanager Monetisatie',honorText:'Zes monetisatievraagstukken begeleid van probleemdefinitie en PRD tot ontwikkeling en lancering. Standaardisatie van browseradvertenties en herbruikbare componenten geleid.',metricReuse:'meer codehergebruik',metricFeedback:'negatieve visuele feedback',didiRole:'International Growth Operations',didiText:'Stadsintroducties voor food delivery in Brazilië ondersteund met segmentatie, coupons, omnichannelberichten en concurrentiemonitoring; geautomatiseerde analysetools gebouwd.',metricReach:'gerichte contactmomenten',metricCities:'gelanceerde steden',meituRole:'AI Product Growth Operations',meituText:'Internationale groeikanalen voor Vmake en Zawa ontwikkeld en een AI-workflow gebouwd van concurrentiedata tot meertalige content; kernwoorden naar Googles top drie gebracht.',metricEfficiency:'hogere efficiëntie',metricRanking:'ranking kernwoorden',vwRole:'Projectmanagement & Marktanalyse',vwText:'Engineering, inkoop en wereldwijde leveranciers verbonden; data-analyse en visualisatie geleverd voor leveranciers- en technologiebeslissingen.',metricProjects:'kernprojecten',metricReports:'analyses',
    academicTitle:'Van taalstructuur<br />naar de <span>datastructuur van de samenleving</span>.',academicIntro:'Taalstudie maakte mij gevoelig voor nuance en context. Computational social science leerde mij intuïtie met data te toetsen.',cuhk:'The Chinese University of Hong Kong, Shenzhen',cuhkMajor:'MSc Computational Social Science · specialisatie Statistiek',lmu:'LMU München',lmuMajor:'Uitwisseling met beurs · Duits als vreemde taal',nankai:'Nankai University',nankaiMajor:'BA Duits · minor Museumstudies',
    thesisTitle:'Woordvolgorde in het Duits en Nederlands',thesisScore:'Bachelorscriptie · taalkunde',fieldPre:'Voorveld',fieldLeft:'Linker zinsbeugel',fieldMid:'Middenveld',fieldRight:'Rechter zinsbeugel',fieldPost:'Naveld',thesisQuestionTitle:'Eén oorsprong—waarom andere syntactische paden?',thesisQuestion:'Het onderzoek vergelijkt werkwoordspositie, zinskader en informatiefocus in twee West-Germaanse talen en vraagt of Nederlandse vereenvoudiging toekomstige veranderingen in het Duits voorspelt.',thesisMethodTitle:'Topologisch model × vergelijking',thesisMethod:'Zinnen worden verdeeld in voorveld, linker- en rechterzinsbeugel, middenveld en naveld om V2, werkwoordclusters, weglating en zinsbeugeldoorbreking te vergelijken.',thesisFindingTitle:'Hetzelfde kader, andere flexibiliteit',thesisFinding:'Beide talen volgen V2 in hoofdzinnen. In bijzinnen kent het Nederlands flexibelere werkwoordsvolgorde en vaker weglating van hulpwerkwoorden; taalcontact stimuleert eenvoudigere, meer VO-achtige structuren.',
    studyThesis:'Duits–Nederlands:<br />woordvolgorde',studyThesisText:'Een taalkundig onderzoek naar regels, structuur en expressie in verwante taalsystemen.',studyData:'Visualisatie van sociale data',studyDataText:'Data met R opschonen, analyseren en visualiseren zodat complexe bevindingen leesbaar worden.',studyGame:'Gamepsychologie',studyGameText:'De relatie tussen mechanismen, motivatie en gedrag onderzoeken—en vanuit keuzes terugredeneren naar ontwerp.',studyGlobal:'Globaliseringsonderzoek',studyGlobalText:'Platforms, markten en individuen begrijpen via interculturele stromen.',
    socialTitle:'Hoe ik wat ik onderweg vind<br />bewaar als <span>openbare notities.</span>',socialText:'Müdemann is de naam die ik onderweg gebruik. Routes, ontmoetingen, fabrieken, muziek en ansichtkaarten worden er langzaam herinneringen die ik kan delen.',copyId:'ID kopiëren',views:'totaal gelezen',likes:'totale likes',connection:'van expressie naar verbinding',galleryHint:'Scroll zijwaarts · klik om te vergroten ↗',note1:'Op mijn twintigste: 1.600 km door IJsland',note2:'Binnen bij de Freitag-fabriek in Zürich',note3:'Kota Kinabalu–Brunei: 16 grensstempels',note4:'De wereld bewaren op een ansichtkaartenmuur',note5:'Cambodjaanse rock vinden bij Angkor Wat',
    lifeTitle:'Buiten de kaart <em>ligt het leven.</em>',lifeText:'Reizen is geen checklist. Op onbekende plekken leer ik observeren en me aanpassen, en plaatsen, culturen en mezelf steeds opnieuw te begrijpen.',photoJournalTitle:'Momenten die tastbaarder zijn dan coördinaten',photoJournalHint:'Uitwisseling, kustlijnen en wedstrijddagen. Klik op een beeld om het te openen.',photoSea:'Zeewind, bewolking en vogels die precies in beeld vliegen',photoEsn:'Een uitwisseling in München—en een nieuwe vriendenkring',photoBarcelona:'Een zonsondergang aan zee in Barcelona',photoAllianz:'Twaalf jaar support, eindelijk bij het thuisstadion',tianjin:'Tianjin',munich:'München',shenzhen:'Shenzhen',brazil:'Project Brazilië',footballTitle:'Voetbal is een andere teamtaal',footballText:'Aanvoerder, talenfaculteit Nankai · 12 jaar Bayern-supporter · wedstrijddag in de Allianz Arena',languageTitle:'Leven tussen vier talen',fieldNote:'“Nieuwsgierig blijven is belangrijker<br />dan het standaardantwoord vinden.”',contactTitle:'Als talen, steden, producten of reizen jou ook interesseren,<br /><em>stuur gerust een bericht.</em>'
  }
};

const baseTranslations = {};
document.querySelectorAll('[data-i18n]').forEach(element => { baseTranslations[element.dataset.i18n] = element.innerHTML; });
const languageNames = { zh: '中文', en: 'English', de: 'Deutsch', nl: 'Nederlands' };
const pageMetadata = {
  zh: { title: '曹轩鸣 · 语言与旅途之间', description: '曹轩鸣的个人数字档案：语言、研究、旅行、公开笔记与实践片段。' },
  en: { title: 'Xuanming Cao · Between Languages and Journeys', description: 'Xuanming Cao’s personal archive of languages, research, journeys, public notes and practice.' },
  de: { title: 'Xuanming Cao · Zwischen Sprachen und Reisen', description: 'Xuanming Caos persönliches Archiv: Sprachen, Forschung, Reisen, öffentliche Notizen und Praxis.' },
  nl: { title: 'Xuanming Cao · Tussen talen en reizen', description: 'Het persoonlijke archief van Xuanming Cao: talen, onderzoek, reizen, openbare notities en praktijk.' }
};
const languagePicker = document.querySelector('.language-picker');
const languageButton = document.querySelector('.lang');
let currentLanguage = 'zh';

function setLanguage(language) {
  currentLanguage = language;
  const dictionary = language === 'zh' ? baseTranslations : translations[language];
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = dictionary?.[element.dataset.i18n] ?? baseTranslations[element.dataset.i18n];
    element.innerHTML = value;
  });
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  document.title = pageMetadata[language].title;
  document.querySelector('meta[name="description"]').setAttribute('content', pageMetadata[language].description);
  document.querySelector('.current-language').textContent = languageNames[language];
  document.querySelectorAll('.language-menu button').forEach(button => button.classList.toggle('active', button.dataset.lang === language));
  localStorage.setItem('portfolio-language', language);
  languagePicker.classList.remove('open');
  languageButton.setAttribute('aria-expanded', 'false');
  refreshTravelMapLanguage();
}

languageButton.addEventListener('click', event => {
  event.stopPropagation();
  const open = languagePicker.classList.toggle('open');
  languageButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.language-menu button').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
document.addEventListener('click', () => {
  languagePicker.classList.remove('open');
  languageButton.setAttribute('aria-expanded', 'false');
});
document.querySelector('.copy-id').addEventListener('click', async event => {
  await navigator.clipboard.writeText(event.currentTarget.dataset.copy);
  const oldText = event.currentTarget.textContent;
  event.currentTarget.textContent = document.documentElement.lang === 'zh-CN' ? '已复制 ✓' : 'Copied ✓';
  setTimeout(() => { event.currentTarget.textContent = oldText; }, 1400);
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

function projectCountry(country) {
  return [((country.lon + 180) / 360) * 1000 + country.dx, ((90 - country.lat) / 180) * 500 + country.dy];
}

function countryName(country) {
  return country.names[currentLanguage] || country.names.en;
}

function showMapTooltip(country, node) {
  const dotRect = node.querySelector('.core').getBoundingClientRect();
  const stageRect = mapStage.getBoundingClientRect();
  mapTooltip.innerHTML = `<b>${countryName(country)}</b><span>${country.year === 'home' ? 'HOME BASE' : country.year}</span>`;
  mapTooltip.style.left = `${dotRect.left - stageRect.left + dotRect.width / 2}px`;
  mapTooltip.style.top = `${dotRect.top - stageRect.top}px`;
  mapTooltip.classList.add('visible');
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
  group.addEventListener('mouseenter', () => showMapTooltip(country, group));
  group.addEventListener('focus', () => showMapTooltip(country, group));
  group.addEventListener('mouseleave', () => mapTooltip.classList.remove('visible'));
  group.addEventListener('blur', () => mapTooltip.classList.remove('visible'));
  dotLayer.append(group);
  countryNodes.push({ country, node: group });
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
  countryNodes.forEach(({ country, node }) => node.setAttribute('aria-label', `${countryName(country)}, ${country.year === 'home' ? 'home' : country.year}`));
  rebuildCountryList();
  mapTooltip.classList.remove('visible');
}

function filterTravelMap(year) {
  activeMapYear = year;
  countryNodes.forEach(({ country, node }) => node.classList.toggle('dimmed', country.year !== 'home' && year !== 'all' && String(country.year) !== year));
  document.querySelectorAll('.year-filters button').forEach(button => button.classList.toggle('active', button.dataset.year === year));
  rebuildCountryList();
}

[...visitedCountries, homeCountry].forEach(createMapDot);
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

function captionForMedia(trigger) {
  const container = trigger.closest('.note-card, .photo-frame');
  return container?.querySelector('[data-lightbox-caption]')?.textContent.trim() || trigger.querySelector('img')?.alt || '';
}

function renderLightbox(index) {
  if (!activeLightboxGroup.length) return;
  activeLightboxIndex = (index + activeLightboxGroup.length) % activeLightboxGroup.length;
  const trigger = activeLightboxGroup[activeLightboxIndex];
  const thumbnail = trigger.querySelector('img');
  lightboxImage.classList.add('loading');
  lightboxImage.alt = thumbnail?.alt || '';
  lightboxImage.src = trigger.dataset.full || thumbnail?.currentSrc || thumbnail?.src;
  lightboxCaption.textContent = captionForMedia(trigger);
  lightboxCount.textContent = `${String(activeLightboxIndex + 1).padStart(2, '0')} / ${String(activeLightboxGroup.length).padStart(2, '0')}`;
}

function openLightbox(trigger) {
  activeLightboxGroup = trigger.closest('#social') ? lightboxGroups.notes : lightboxGroups.photos;
  lastLightboxTrigger = trigger;
  renderLightbox(activeLightboxGroup.indexOf(trigger));
  document.body.classList.add('lightbox-open');
  lightbox.showModal();
  lightbox.querySelector('.lightbox-close').focus();
}

Object.values(lightboxGroups).flat().forEach(trigger => trigger.addEventListener('click', () => openLightbox(trigger)));
lightboxImage.addEventListener('load', () => lightboxImage.classList.remove('loading'));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => renderLightbox(activeLightboxIndex - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => renderLightbox(activeLightboxIndex + 1));
lightbox.addEventListener('click', event => {
  if (event.target === lightbox || event.target === lightbox.querySelector('.lightbox-shell') || event.target === lightbox.querySelector('figure')) lightbox.close();
});
lightbox.addEventListener('close', () => {
  document.body.classList.remove('lightbox-open');
  lastLightboxTrigger?.focus();
});
document.addEventListener('keydown', event => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') renderLightbox(activeLightboxIndex - 1);
  if (event.key === 'ArrowRight') renderLightbox(activeLightboxIndex + 1);
});

setLanguage(localStorage.getItem('portfolio-language') || 'zh');
