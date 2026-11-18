function initializeLanguagePicker(translations, pageMetadata = {}, onLanguageChange) {
  const picker = document.querySelector('.language-picker');
  const toggle = picker.querySelector('.lang');
  const current = toggle.querySelector('.current-language');
  const options = [...picker.querySelectorAll('button[data-lang]')];
  const languageNames = { zh: '中文', en: 'English', de: 'Deutsch', nl: 'Nederlands' };
  const localizedElements = [...document.querySelectorAll('[data-i18n]')].map(element => ({
    element,
    key: element.dataset.i18n,
    original: element.innerHTML
  }));
  const description = document.querySelector('meta[name="description"]');
  const originalMetadata = { title: document.title, description: description.content };

  function setMenuOpen(open) {
    picker.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  function setLanguage(language) {
    const dictionary = translations[language];
    localizedElements.forEach(({ element, key, original }) => {
      element.innerHTML = dictionary?.[key] ?? original;
    });
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    const metadata = pageMetadata[language] ?? originalMetadata;
    document.title = metadata.title;
    description.content = metadata.description;
    current.textContent = languageNames[language];
    options.forEach(option => option.classList.toggle('active', option.dataset.lang === language));
    localStorage.setItem('portfolio-language', language);
    setMenuOpen(false);
    onLanguageChange?.(language);
  }

  toggle.addEventListener('click', () => setMenuOpen(!picker.classList.contains('open')));
  options.forEach(option => option.addEventListener('click', () => {
    setLanguage(option.dataset.lang);
    toggle.focus();
  }));
  document.addEventListener('click', event => {
    if (!picker.contains(event.target)) setMenuOpen(false);
  });
  picker.addEventListener('keydown', event => {
    if (event.key === 'Escape' && picker.classList.contains('open')) {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  const savedLanguage = localStorage.getItem('portfolio-language');
  setLanguage(options.some(option => option.dataset.lang === savedLanguage) ? savedLanguage : 'zh');
}
