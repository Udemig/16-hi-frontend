// =====================================================
// js/state.js — Uygulamanın tüm verisi burada tutulur.
// Kart ekleme, silme ve taşıma işlemleri state üzerinde
// yapılır; DOM'a dokunulmaz. Her değişiklik render'ı tetikler.
// =====================================================

// Kart veri formatı: { id: string, text: string, status: "backlog" | "in-progress" | "done"}
let cards = [
  {
    id: "c1",
    text: "📊 Analitik dashboard sayfasını tasarla",
    status: "backlog",
  },
  {
    id: "c7",
    text: "⚡ API yanıt sürelerini optimize et",
    status: "in-progress",
  },
  {
    id: "c14",
    text: "✓ Kullanıcı kimlik doğrulama sistemi",
    status: "done",
  },
  {
    id: "c2",
    text: "🔔 Email & push bildirim sistemi",
    status: "backlog",
  },
  {
    id: "c3",
    text: "🔐 OAuth 2.0 & Google SSO entegrasyonu",
    status: "in-progress",
  },
  {
    id: "c24",
    text: "✓ PostgreSQL şeması & migration",
    status: "done",
  },
  {
    id: "c245",
    text: "🌍 Çoklu dil desteği ekle (i18n)",
    status: "backlog",
  },
  {
    id: "c334",
    text: "💳 Stripe ödeme entegrasyonu",
    status: "in-progress",
  },
  {
    id: "c2412",
    text: "✓ CI/CD pipeline (GitHub Actions)",
    status: "done",
  },
];

//-------- Benzersiz ID Üretici --------
function generateId() {
  return "c-" + Date.now() + "-" + Math.random().toString(36).slice(2, 7);
}

// -------- Kart Ekleme --------
function addCard(text) {
  const newCard = {
    id: generateId(),
    text,
    status: "backlog",
  };
  cards.push(newCard);
}

// -------- Kart Silme --------
// ID parametresiyle eşleşen kartı diziden kaldır
function removeCard(id) {
  cards = cards.filter((card) => card.id !== id);
}

// -------- Kart Taşıma --------
// ID parametresiyle eşleşen kartın status alanını günceller
function moveCard(id, newStatus) {
  const card = cards.find((card) => card.id === id);
  if (card) {
    card.status = newStatus;
  }
}

// -------- State Okuma --------
// Diğer dosyalara state'İn kopyasını verir
function getCards() {
  return [...cards];
}

export { addCard, removeCard, moveCard, getCards };
