const translations = {
  en: {
    lottoTitle: "Advanced Lotto Number Generator & Statistics",
    animalTitle: "AI Animal Face Test & Physiognomy",
    generateBtn: "Generate Numbers",
    toggleDark: "Toggle Dark Mode",
    toggleLight: "Toggle Light Mode",
    animalDesc: "Discover your animal alter ego with our advanced AI facial recognition technology.",
    startCamera: "Start Real-time Camera",
    uploadBtn: "Upload Image File",
    lottoSub: "Generate truly random numbers based on cryptographic algorithms.",
    partnershipTitle: "Partnership Inquiry",
    sendInquiry: "Send Inquiry",
    placeholderName: "Name",
    placeholderEmail: "Email",
    placeholderMsg: "Message",
    backLotto: "← Lotto Generator",
    goAnimal: "Animal Face Test →",
    
    // Lotto Articles
    aboutLottoTitle: "The Science Behind Random Number Generation",
    aboutLottoDesc: "Our Advanced Lotto Number Generator utilizes cryptographic Pseudo-Random Number Generation (PRNG) algorithms to ensure maximum entropy. Unlike basic random functions that can exhibit predictable patterns over time, our system leverages the browser's crypto API to generate high-quality randomness, mimicking the physical unpredictability of real lottery drawing machines.",
    historyLottoTitle: "A Brief History of Lotteries",
    historyLottoDesc: "The concept of drawing lots for prizes dates back to ancient times. The first recorded signs of a lottery are keno slips from the Chinese Han Dynasty between 205 and 187 BC. These lotteries are believed to have helped finance major government projects like the Great Wall of China. In modern times, lotteries are highly regulated systems designed to ensure fairness and transparency.",
    statsLottoTitle: "Understanding Lottery Statistics & Probabilities",
    statsLottoDesc: "In a standard 6/45 lottery format, the odds of winning the jackpot are exactly 1 in 8,145,060. Every single combination has an identical mathematical probability of being drawn. While many players look for 'hot' or 'cold' numbers, the Law of Independent Errors states that past draws have absolutely zero influence on future draws. Using a random number generator helps eliminate human bias, such as picking dates (1-31), which often leads to shared jackpots.",
    strategyLottoTitle: "Why Use an RNG Instead of Manual Picks?",
    strategyLotto1: "Eliminates Cognitive Bias: Humans are naturally bad at generating random sequences. We tend to spread numbers out evenly or pick geometric patterns on the ticket.",
    strategyLotto2: "Reduces Shared Jackpots: Because people frequently use birthdates, numbers 1-31 are heavily overplayed. A true RNG selects numbers across the entire spectrum evenly.",
    strategyLotto3: "Instant Generation: Save time and avoid the stress of overthinking your picks.",
    responsibleLottoTitle: "Responsible Play Guide",
    responsibleLottoDesc: "Lotteries are a form of entertainment, not an investment strategy. Always play within your means, set a strict budget, and never chase losses. If you feel that gambling is becoming a problem, please reach out to professional help organizations in your region.",
    
    // Animal Articles
    aboutAnimalTitle: "Introduction to Animal Face Physiognomy",
    aboutAnimalDesc: "For centuries, physiognomy—the assessment of a person's character or personality from their outer appearance, especially the face—has intrigued humanity. In modern pop culture, classifying faces into 'animal types' has become a fascinating trend. Our AI-powered tool blends this cultural phenomenon with state-of-the-art machine learning to analyze your unique facial geometry.",
    typesAnimalTitle: "Detailed Breakdown of Animal Face Types",
    typesAnimalDog: "🐶 Dog Face: Characterized by round, droopy eyes and a generally soft, friendly contour. People with 'dog faces' often project warmth, loyalty, and approachability.",
    typesAnimalCat: "🐱 Cat Face: Defined by sharp, slightly upturned 'cat eyes', distinct cheekbones, and a sharp jawline. This face type exudes confidence, chicness, and a mysterious allure.",
    typesAnimalFox: "🦊 Fox Face: Similar to the cat but often with longer, narrower features and extremely sharp eye corners. It represents wit, charm, and a captivating, sometimes sly elegance.",
    typesAnimalDeer: "🦌 Deer Face: Known for large, bright, and innocent-looking eyes with a long, elegant neck and soft features. It projects gentleness, purity, and a calm demeanor.",
    typesAnimalRabbit: "🐰 Rabbit Face: Features a cute, slightly shorter face with bright eyes and a prominent, adorable mouth/teeth area. It represents youthfulness, energy, and an incredibly lovable vibe.",
    typesAnimalBear: "🐻 Bear Face: A rounder, broader face with soft, comforting features. It gives off a dependable, cozy, and highly trustworthy impression.",
    techAnimalTitle: "How Our AI Technology Works",
    techAnimalDesc: "Our system utilizes a Convolutional Neural Network (CNN) trained on thousands of carefully categorized facial images. When you upload a photo, the AI detects facial landmarks (eyes, nose, mouth, jawline) and extracts mathematical vectors. These vectors are then compared against our trained model to calculate percentage matches across different animal categories in real-time.",
    
    // General
    privacyTitle: "Strict Data Privacy & Security",
    privacyDesc: "Your privacy is our utmost priority. The AI models run entirely on the client-side (within your browser using TensorFlow.js). This means your images are never uploaded, transmitted, or stored on any external servers. Your biometric data remains exclusively on your personal device.",
    footerCopy: "© 2026 Advanced Lotto & AI Animal Analytics. All rights reserved. Content provided for entertainment and informational purposes.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    langEn: "English",
    langKo: "한국어",
    cameraPrompt: "Please upload a clear, front-facing photo or start the webcam for analysis.",
    disqusTitle: "Community & Discussion",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Q: Is the Lotto Generator totally random?",
    faq1A: "A: Yes, it uses cryptographic browser APIs to ensure unbiased randomness.",
    faq2Q: "Q: Can the animal test analyze multiple faces at once?",
    faq2A: "A: Currently, the model is optimized for single-face analysis. Please ensure only one face is clearly visible.",
    faq3Q: "Q: Do I need to pay to use these tools?",
    faq3A: "A: No, our tools are 100% free to use, supported by advertisements.",
    
    privacyContent: `
        <article class="legal-content">
            <h1>Privacy Policy</h1>
            <p>Last updated: February 25, 2026</p>
            <section>
                <h2>1. Introduction</h2>
                <p>Welcome to Advanced Lotto & AI Animal Analytics. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
            </section>
            <section>
                <h2>2. Data Collection and Processing</h2>
                <p>Our core services, including the AI Animal Face Test and the Lotto Number Generator, operate entirely locally within your web browser. <strong>We do not collect, transmit, or store your photos, webcam feeds, or generated numbers on our servers.</strong> The AI processing is done using client-side JavaScript (TensorFlow.js).</p>
            </section>
            <section>
                <h2>3. Cookies and Advertising</h2>
                <p>We use third-party advertising companies, specifically Google AdSense, to serve ads when you visit our website. These companies may use aggregated information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you. Google uses cookies to serve ads based on your prior visits to our website or other websites.</p>
            </section>
        </article>
    `,
    termsContent: `
        <article class="legal-content">
            <h1>Terms of Service</h1>
            <p>Last updated: February 25, 2026</p>
            <section>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>
            <section>
                <h2>2. Nature of Services</h2>
                <p>The Lotto Number Generator and Animal Face Test are provided strictly for entertainment and informational purposes. We do not guarantee any outcomes or accuracy. The lottery generator does not increase your chances of winning the lottery.</p>
            </section>
            <section>
                <h2>3. Intellectual Property</h2>
                <p>The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights.</p>
            </section>
            <section>
                <h2>4. Disclaimer of Liability</h2>
                <p>In no event shall we be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of our tools or information provided on this site.</p>
            </section>
        </article>
    `
  },
  ko: {
    lottoTitle: "고급 로또 번호 생성기 및 통계 분석",
    animalTitle: "AI 인공지능 동물상 테스트 및 관상",
    generateBtn: "번호 생성하기",
    toggleDark: "다크 모드",
    toggleLight: "라이트 모드",
    animalDesc: "첨단 AI 안면 인식 기술을 통해 당신의 숨겨진 동물상을 찾아보세요.",
    startCamera: "실시간 카메라 시작",
    uploadBtn: "이미지 파일 업로드",
    lottoSub: "암호학적 알고리즘 기반의 완벽한 무작위 번호를 생성합니다.",
    partnershipTitle: "제휴 및 비즈니스 문의",
    sendInquiry: "문의 보내기",
    placeholderName: "이름",
    placeholderEmail: "이메일",
    placeholderMsg: "내용",
    backLotto: "← 로또 생성기",
    goAnimal: "동물상 테스트 →",
    
    // Lotto Articles
    aboutLottoTitle: "난수 생성(RNG)의 과학적 원리",
    aboutLottoDesc: "저희 고급 로또 번호 생성기는 최대의 엔트로피를 보장하기 위해 암호학적 유사 난수 생성(PRNG) 알고리즘을 활용합니다. 시간이 지남에 따라 예측 가능한 패턴을 보일 수 있는 기본적인 랜덤 함수와 달리, 당사의 시스템은 브라우저의 Crypto API를 활용하여 실제 복권 추첨 기계의 물리적 예측 불가능성을 모방하는 고품질의 난수를 생성합니다.",
    historyLottoTitle: "복권의 역사와 진화",
    historyLottoDesc: "상품을 위해 제비를 뽑는다는 개념은 고대 시대로 거슬러 올라갑니다. 기록상 최초의 복권은 기원전 205년에서 187년 사이 중국 한나라의 키노 영수증입니다. 이 복권들은 만리장성 같은 주요 정부 프로젝트에 자금을 조달하는 데 도움을 준 것으로 여겨집니다. 현대에 이르러 복권은 공정성과 투명성을 보장하기 위해 엄격하게 규제되는 고도의 시스템으로 발전했습니다.",
    statsLottoTitle: "로또 통계 및 확률의 이해",
    statsLottoDesc: "표준 6/45 로또 형식에서 1등 당첨 확률은 정확히 8,145,060분의 1입니다. 모든 단일 조합은 수학적으로 동일한 추첨 확률을 갖습니다. 많은 플레이어들이 '자주 나오는 번호'나 '안 나오는 번호'를 찾지만, '독립 시행의 법칙'에 따라 과거의 추첨 결과는 미래의 추첨에 전혀 영향을 미치지 않습니다. 난수 생성기를 사용하면 기념일(1-31일)을 선택하는 등의 인간적인 편향을 배제하여 당첨금이 분할되는 것을 방지할 수 있습니다.",
    strategyLottoTitle: "왜 수동 선택 대신 RNG를 사용해야 할까요?",
    strategyLotto1: "인지적 편향 제거: 인간은 본질적으로 무작위 패턴을 생성하는 데 서툽니다. 번호를 고르게 퍼뜨리거나 용지에서 기하학적 패턴을 선택하는 경향이 있습니다.",
    strategyLotto2: "당첨금 분할 방지: 생일을 자주 사용하기 때문에 1에서 31 사이의 숫자는 지나치게 많이 선택됩니다. 진정한 RNG는 전체 스펙트럼에서 숫자를 고르게 선택합니다.",
    strategyLotto3: "즉각적인 생성: 번호를 고르며 스트레스 받을 필요 없이 즉시 최적의 무작위 조합을 제공합니다.",
    responsibleLottoTitle: "건전한 플레이 가이드",
    responsibleLottoDesc: "복권은 투자가 아닌 오락의 한 형태입니다. 항상 자신의 재정 상황에 맞게 플레이하고, 엄격한 예산을 설정하며, 잃은 돈을 만회하려고 무리하지 마십시오. 도박이 문제로 발전하고 있다고 느낀다면 해당 지역의 전문 도움 기관(한국도박문제예방치유원 1336)에 연락하시기 바랍니다.",
    
    // Animal Articles
    aboutAnimalTitle: "동물상 관상의 세계로의 초대",
    aboutAnimalDesc: "수 세기 동안 사람의 외모, 특히 얼굴에서 성격이나 인성을 평가하는 관상은 인류의 흥미를 끌어왔습니다. 현대 대중문화에서는 얼굴을 특정 '동물 유형'으로 분류하는 것이 매력적인 트렌드가 되었습니다. 당사의 AI 기반 도구는 이러한 문화적 현상과 최첨단 머신러닝을 융합하여 귀하의 고유한 안면 기하학을 분석합니다.",
    typesAnimalTitle: "동물상 유형별 상세 분석",
    typesAnimalDog: "🐶 강아지상: 둥글고 처진 눈꼬리와 부드럽고 친근한 윤곽이 특징입니다. '강아지상'을 가진 사람들은 보통 따뜻함, 충성심, 그리고 다가가기 쉬운 편안함을 발산합니다.",
    typesAnimalCat: "🐱 고양이상: 날렵하고 살짝 올라간 '고양이 눈', 뚜렷한 광대뼈와 날카로운 턱선으로 정의됩니다. 이 얼굴형은 자신감, 시크함, 그리고 신비로운 매력을 풍깁니다.",
    typesAnimalFox: "🦊 여우상: 고양이상과 비슷하지만 종종 더 길고 좁은 이목구비와 매우 날카로운 눈매를 가집니다. 기지, 매력, 그리고 사람을 홀리는 우아함을 상징합니다.",
    typesAnimalDeer: "🦌 사슴상: 크고 초롱초롱하며 순수한 눈망울, 긴 목과 부드러운 이목구비로 유명합니다. 온화함, 순수함, 그리고 차분한 태도를 투영합니다.",
    typesAnimalRabbit: "🐰 토끼상: 맑은 눈과 귀여운 입/치아 부위를 가진 약간 짧은 얼굴이 특징입니다. 젊음, 발랄한 에너지, 그리고 믿을 수 없을 만큼 사랑스러운 분위기를 나타냅니다.",
    typesAnimalBear: "🐻 곰상: 부드럽고 편안한 이목구비를 가진 둥글고 넓은 얼굴입니다. 듬직하고 포근하며 매우 신뢰할 수 있는 인상을 줍니다.",
    techAnimalTitle: "인공지능(AI) 기술 작동 원리",
    techAnimalDesc: "저희 시스템은 수천 장의 세심하게 분류된 얼굴 이미지로 훈련된 합성곱 신경망(CNN)을 활용합니다. 사진을 업로드하면 AI가 눈, 코, 입, 턱선 등 얼굴의 랜드마크를 감지하고 수학적 벡터를 추출합니다. 그런 다음 이 벡터들을 훈련된 모델과 비교하여 다양한 동물 범주에 걸친 일치율을 실시간으로 계산합니다.",
    
    // General
    privacyTitle: "철저한 데이터 프라이버시 및 보안",
    privacyDesc: "고객님의 프라이버시는 저희의 최우선 순위입니다. AI 모델은 클라이언트 측(TensorFlow.js를 사용하여 귀하의 브라우저 내)에서 전적으로 실행됩니다. 즉, 귀하의 이미지는 외부 서버로 업로드, 전송 또는 저장되지 않습니다. 생체 인식 데이터는 전적으로 개인 기기에만 남아 있습니다.",
    footerCopy: "© 2026 Advanced Lotto & AI Animal Analytics. 모든 권리 보유. 본 콘텐츠는 오락 및 정보 제공 목적으로만 제공됩니다.",
    privacyPolicy: "개인정보처리방침",
    termsOfService: "이용약관",
    langEn: "English",
    langKo: "한국어",
    cameraPrompt: "정확한 분석을 위해 정면이 잘 보이는 사진을 업로드하거나 웹캠을 켜주세요.",
    disqusTitle: "커뮤니티 및 의견 남기기",
    faqTitle: "자주 묻는 질문 (FAQ)",
    faq1Q: "Q: 로또 번호 생성기는 정말 무작위인가요?",
    faq1A: "A: 네, 편향 없는 난수를 보장하기 위해 브라우저의 암호학적 API를 사용합니다.",
    faq2Q: "Q: 동물상 테스트가 여러 명의 얼굴을 한 번에 분석할 수 있나요?",
    faq2A: "A: 현재 모델은 단일 얼굴 분석에 최적화되어 있습니다. 한 사람의 얼굴만 선명하게 보이도록 해주세요.",
    faq3Q: "Q: 이 도구들을 사용하는 데 비용이 드나요?",
    faq3A: "A: 아니요, 저희 도구는 광고 수익을 통해 100% 무료로 제공됩니다.",
    
    privacyContent: `
        <article class="legal-content">
            <h1>개인정보처리방침</h1>
            <p>최종 수정일: 2026년 2월 25일</p>
            <section>
                <h2>1. 소개</h2>
                <p>Advanced Lotto & AI Animal Analytics에 오신 것을 환영합니다. 당사는 귀하의 개인정보를 존중하며 개인 데이터를 보호하기 위해 최선을 다하고 있습니다.</p>
            </section>
            <section>
                <h2>2. 데이터 수집 및 처리</h2>
                <p>AI 동물상 테스트 및 로또 번호 생성기를 포함한 당사의 핵심 서비스는 전적으로 귀하의 웹 브라우저 내에서 로컬로 작동합니다. <strong>당사는 귀하의 사진, 웹캠 피드 또는 생성된 번호를 당사 서버로 수집, 전송 또는 저장하지 않습니다.</strong> AI 처리는 클라이언트 측 JavaScript(TensorFlow.js)를 사용하여 수행됩니다.</p>
            </section>
            <section>
                <h2>3. 쿠키 및 광고</h2>
                <p>당사는 귀하가 웹사이트를 방문할 때 광고를 게재하기 위해 Google 애드센스와 같은 타사 광고 회사를 이용합니다. 이러한 회사는 귀하가 관심 있는 상품 및 서비스에 대한 광고를 제공하기 위해 귀하의 당사 웹사이트 및 다른 웹사이트 방문에 대한 집계된 정보(이름, 주소, 이메일 주소 또는 전화번호 제외)를 사용할 수 있습니다.</p>
            </section>
        </article>
    `,
    termsContent: `
        <article class="legal-content">
            <h1>이용약관</h1>
            <p>최종 수정일: 2026년 2월 25일</p>
            <section>
                <h2>1. 약관의 수락</h2>
                <p>본 웹사이트에 접속하고 사용함으로써 귀하는 본 계약의 약관 및 규정을 수락하고 이에 구속되는 데 동의합니다.</p>
            </section>
            <section>
                <h2>2. 서비스의 성격</h2>
                <p>로또 번호 생성기와 동물상 테스트는 엄격하게 오락 및 정보 제공 목적으로만 제공됩니다. 결과나 정확성을 보장하지 않으며, 복권 생성기가 당첨 확률을 높여주지 않습니다.</p>
            </section>
            <section>
                <h2>3. 책임의 한계</h2>
                <p>어떠한 경우에도 당사는 귀하의 도구 사용 또는 본 사이트에서 제공된 정보와 관련하여 발생하는 직간접적, 우발적, 결과적 또는 특별한 손해에 대해 책임을 지지 않습니다.</p>
            </section>
        </article>
    `
  }
};

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else if (key.endsWith('Content')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const generateBtn = document.getElementById('generate-btn');
  const lottoContainer = document.getElementById('lotto-container');
  const balls = document.querySelectorAll('.ball');
  const body = document.body;
  const langSelect = document.getElementById('lang-select');

  // Theme preference persistence
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = translations[localStorage.getItem('lang') || 'ko'].toggleLight;
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      let theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
      const lang = localStorage.getItem('lang') || 'ko';
      themeToggle.textContent = theme === 'dark' ? translations[lang].toggleLight : translations[lang].toggleDark;
      localStorage.setItem('theme', theme);
    });
  }

  // Language persistence
  const savedLang = localStorage.getItem('lang') || (navigator.language.startsWith('ko') ? 'ko' : 'en');
  if (langSelect) langSelect.value = savedLang;
  applyLanguage(savedLang);
  localStorage.setItem('lang', savedLang);

  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      const newLang = e.target.value;
      localStorage.setItem('lang', newLang);
      applyLanguage(newLang);
      if (themeToggle) {
        const isDark = body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? translations[newLang].toggleLight : translations[newLang].toggleDark;
      }
    });
  }

  // Cryptographically secure Lotto number generation logic
  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      const numbers = new Set();
      while (numbers.size < 6) {
        // Use Crypto API for true randomness
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        const randomNum = (array[0] % 45) + 1;
        numbers.add(randomNum);
      }
      const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

      balls.forEach((ball, index) => {
        setTimeout(() => {
          ball.textContent = sortedNumbers[index];
          ball.classList.remove('animate');
          void ball.offsetWidth;
          ball.classList.add('animate');
        }, index * 100);
      });
    });
  }
});