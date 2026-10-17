// TIP1200 Temel Bilimler II (Kurul 2) ders programı, 2026-2027.
// Only the four kurul subjects; language, history and elective classes are left out.
// Consecutive hours of the same topic are one lecture. [start time, subject, title]
// BF = Biyofizik (TIP1201), BK = Tıbbi Biyokimya (TIP1202),
// BS = Biyoistatistik (TIP1203), TB = Tıbbi Biyoloji (TIP1205)
// For the next kurul, replace this file.
window.KURUL = {
  name: 'Kurul 2',
  exams: [
    { name: 'Pratik', date: '2026-12-09' },
    { name: 'Teorik', date: '2026-12-11' }
  ],
  days: {
    '2026-10-19': [
      ['13:00', 'BK', 'Biyokimyaya giriş'],
      ['14:00', 'BK', 'Kimyasal bağlar'],
      ['16:00', 'BK', 'Kimyasal reaksiyonlar']
    ],
    '2026-10-20': [
      ['08:00', 'BK', 'Kimyasal reaksiyonlar (devam)'],
      // Listed as TIP1202 in the PDF, but taught by Adnan Ünalan (Biyoistatistik)
      ['09:00', 'BS', 'Biyoistatistik bilimine giriş'],
      ['10:00', 'BS', 'Biyoistatistik biliminde temel kavramlar'],
      ['11:00', 'BS', 'Bilimsel araştırmanın aşamaları ve planlama'],
      ['13:00', 'BK', 'Biyolojik sistemlerdeki temel organik bileşikler']
    ],
    '2026-10-21': [
      ['09:00', 'TB', 'Tıbbi Biyolojiye giriş'],
      ['10:00', 'TB', 'Hücre zarı ve özellikleri']
    ],
    '2026-10-22': [
      ['08:00', 'BF', 'Biyofiziğe giriş'],
      ['10:00', 'BF', 'Moleküler biyofiziğin temel kavramları'],
      ['13:00', 'BS', 'Bilimsel araştırmanın aşamaları ve planlama (devam)']
    ],
    '2026-10-23': [
      ['08:00', 'BK', 'Kimyasal reaksiyonlar (devam 2)'],
      ['10:00', 'BS', 'Tıp bilimlerinde gözlemsel araştırmalar'],
      ['13:00', 'TB', 'Sitoiskelet ve hücrelerarası bağlantılar']
    ],
    '2026-10-27': [
      ['08:00', 'BS', 'Tıp bilimlerinde deneysel araştırmalar']
    ],
    '2026-10-28': [
      ['08:00', 'BK', 'LAB: Laboratuvarın temel kuralları ve asit-baz dengesi']
    ],
    '2026-10-30': [
      ['08:00', 'BS', 'LAB: Veri dosyasının hazırlanması ve paket programlara giriş'],
      ['13:00', 'BS', 'Ölçme araçlarına giriş, anket, ölçek ve test hazırlama']
    ],
    '2026-11-02': [
      ['13:00', 'TB', 'Sitoplazmik organeller I: sentriol, mitokondri, ribozom, plastlar, vakuol']
    ],
    '2026-11-03': [
      ['09:00', 'BS', 'Örnekleme yöntemleri ve randomizasyon'],
      ['13:00', 'BK', 'Çözeltiler ve konsantrasyon kavramı'],
      ['15:00', 'BK', 'Asit-baz, tampon sistemler']
    ],
    '2026-11-04': [
      ['09:00', 'TB', 'Sitoplazmik organeller II: endoplazmik retikulum, golgi, lizozom, peroksizom']
    ],
    '2026-11-05': [
      ['08:00', 'BF', 'Biyoenerjitik, enerji ve yaşam, termodinamik'],
      ['10:00', 'BF', 'Hücrede biyofiziksel olaylar, zardan geçişler ve zar potansiyeli'],
      ['13:00', 'BS', 'LAB: Bilgisayar ortamında örnekleme yöntemleri uygulamaları'],
      ['13:00', 'TB', 'LAB: Laboratuvar tanıtımı ve kuralları']
    ],
    '2026-11-06': [
      ['09:00', 'BS', 'Örneklem büyüklüğünün belirlenmesi'],
      ['10:00', 'BS', 'Tanımlayıcı istatistikler']
    ],
    '2026-11-09': [
      ['13:00', 'TB', 'DNA özellikleri ve replikasyon'],
      ['15:00', 'BK', 'Suyun biyofonksiyonları']
    ],
    '2026-11-10': [
      ['10:00', 'BS', 'Olasılık ve olasılık dağılımları'],
      ['11:00', 'BS', 'Parametre tahminleri'],
      ['13:00', 'TB', 'DNA özellikleri ve replikasyon (devam)']
    ],
    '2026-11-11': [
      ['09:00', 'TB', 'Hücre çekirdeği ve organizasyonu']
    ],
    '2026-11-12': [
      ['08:00', 'BF', 'Aksiyon potansiyeli ve bileşik aksiyon potansiyeli'],
      ['10:00', 'BF', 'İyon kanalları'],
      ['13:00', 'BS', 'Tanımlayıcı istatistikler (devam)'],
      ['15:00', 'BK', 'Amino asitler ve sınıflandırmaları']
    ],
    '2026-11-13': [
      ['13:00', 'BS', 'LAB: Tanımlayıcı istatistikler'],
      ['13:00', 'TB', 'LAB: Işık mikroskobu kullanımı ve mikroskopta ölçme']
    ],
    '2026-11-16': [
      ['13:00', 'BK', 'LAB: Amino asit ve proteinlerin kalitatif deneyleri']
    ],
    '2026-11-17': [
      ['09:00', 'BS', 'Hipotez testlerine giriş ve normallik testleri'],
      ['11:00', 'BS', 'Parametrik testler']
    ],
    '2026-11-18': [
      ['08:00', 'BK', 'Amino asitlerin kimyasal ve fiziksel özellikleri']
    ],
    '2026-11-19': [
      ['08:00', 'BF', 'Biyolojik kontrolün temel ilkeleri'],
      ['10:00', 'BF', 'Biyolojik sistemlerde enformasyon'],
      ['13:00', 'BS', 'LAB: Aykırı değerlerin tespiti ve normallik testleri']
    ],
    '2026-11-20': [
      ['09:00', 'BS', 'Parametrik testler (devam)'],
      ['13:00', 'BK', 'Peptidler, peptid bağının özellikleri']
    ],
    '2026-11-24': [
      ['09:00', 'BS', 'Parametrik olmayan testler'],
      ['13:00', 'TB', 'RNA çeşitleri ve transkripsiyon']
    ],
    '2026-11-26': [
      ['08:00', 'BF', 'Biyoelektrik uygulama araçları'],
      ['10:00', 'BF', 'Biyoelektrik ölçü ve gözlem araçları'],
      ['13:00', 'BS', 'LAB: Parametrik testler'],
      ['13:00', 'TB', 'LAB: Canlı-cansız hücre çeşitleri']
    ],
    '2026-11-27': [
      ['10:00', 'TB', 'RNA çeşitleri ve transkripsiyon (devam)'],
      ['13:00', 'BS', 'Parametrik olmayan testler (devam)']
    ],
    '2026-11-30': [
      ['13:00', 'BK', 'Proteinlerin saflaştırılması, amino asit yapılarının belirlenmesi']
    ],
    '2026-12-01': [
      ['13:00', 'TB', 'Genetik şifre ve translasyon']
    ],
    '2026-12-02': [
      ['10:00', 'TB', 'Genom yapısı']
    ],
    '2026-12-03': [
      ['09:00', 'BK', 'Proteinler, yapıları, fiziksel ve kimyasal özellikleri'],
      ['13:00', 'BS', 'LAB: Parametrik olmayan testler'],
      ['13:00', 'BK', 'LAB: Kolorimetre ve total protein ölçümü']
    ]
  }
};
