/* ═══════════════════════════════════════
   HERO SLIDER
═══════════════════════════════════════ */
const slides = [
  {
    title: 'Tingkatkan Kompetensi<br>Perluas Koneksi.',
    sub: 'Platform manajemen terpadu untuk registrasi event – event resmi INKINDO Jawa Timur.'
  },
  {
    title: 'Bergabunglah Bersama<br>Profesional Terbaik.',
    sub: 'Ribuan konsultan se-Indonesia bersatu memperkuat kompetensi dan jaringan kolaborasi.'
  },
  {
    title: 'Daftar Event Resmi<br>Mudah & Cepat.',
    sub: 'Seminar, workshop, dan musyawarah INKINDO Jawa Timur tersedia dalam satu platform.'
  }
];

let slideIndex = 0;

function updateSlide() {
  document.getElementById('heroTitle').innerHTML = slides[slideIndex].title;
  document.getElementById('heroSub').textContent = slides[slideIndex].sub;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlide();
}

setInterval(nextSlide, 4500);

/* ═══════════════════════════════════════
   EVENTS DATA & RENDER
═══════════════════════════════════════ */
const EVENTS = [
  {
    id: 1,
    title: 'Musyawarah Provinsi INKINDO Jawa Timur',
    desc: 'Musyawarah Provinsi Ikatan Konsultan Indonesia Jawa Timur 2026.',
    cat: 'Musyawarah', date: '19-20 Mei 2026',
    loc: 'Hotel Mercure Grand Mirama, Surabaya', city: 'Surabaya', price: 'GRATIS', hi: false,
    image: 'FotoMusprof2026.png',
    // ── Detail Modal Data ──
    heroTitle:   'MUSPROV INKINDO JATIM 2026',
    tags:        ['Musyawarah', 'Booth 05'],
    fullDate:    '19-20 Mei 2026',
    time:        '13.00-selesai',
    certificate: 'Tersedia (PKB)',
    address:     'Hotel Mercure Grand Mirama, Surabaya',
    description: 'Datang dan kunjungi Booth ALUSTAR di MUSPROV INKINDO JATIM 2026. Temukan berbagai pilihan ACP berkualitas untuk kebutuhan proyek Anda, mulai dari gedung komersial, fasilitas publik, hingga proyek berskala besar lainnya.',
    speakers: [
      { name: 'ALUSTAR ACP', role: 'Booth 05' },
      { name: 'INKINDO Jawa Timur', role: 'Penyelenggara' }
    ],
    agenda: [
      { name: 'Kunjungan Booth ALUSTAR', sub: 'Booth 05', desc: 'Jelajahi koleksi ACP berkualitas untuk kebutuhan proyek Anda.', tag: 'Booth 05', speaker: 'ALUSTAR ACP' },
      { name: 'Konsultasi Produk & Penawaran', sub: 'Selama pameran berlangsung', desc: 'Dapatkan konsultasi produk serta penawaran spesial selama pameran berlangsung.', tag: 'Pameran', speaker: 'Tim ALUSTAR' }
    ],
    facilities: [
      'Booth 05',
      'Konsultasi produk ACP',
      'Penawaran eksklusif selama pameran'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&q=80',
      'https://images.unsplash.com/photo-1478737270197-1e28665b33e7?w=500&q=80'
    ],
    heroImage: 'FotoMusprof2026.png',
    sponsors: 4
  },
];

let shownCount = 6;

const PALETTES = [
  ['#0d1b5e', '#1565d8'], ['#1a2d8f', '#2d80f2'], ['#081040', '#1a4caa'],
  ['#0d2b5e', '#1875d8'], ['#152575', '#2060c8'], ['#0a1a4a', '#1558c0']
];

const BADGE_MAP = {
  Workshop: 'badge-workshop', Seminar: 'badge-seminar',
  Musyawarah: 'badge-musyawarah', Sertifikasi: 'badge-sertifikasi'
};

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

function buildScene(idx) {
  const [c1, c2] = PALETTES[idx % PALETTES.length];
  return `
    <svg class="event-scene" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg${idx}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#bg${idx})"/>
      <ellipse cx="200" cy="28" rx="90" ry="65" fill="rgba(255,255,255,.07)"/>
      <rect x="115" y="18" width="170" height="95" rx="5" fill="rgba(255,255,255,.1)"/>
      <text x="200" y="75" text-anchor="middle" font-size="28" fill="rgba(255,255,255,.18)" font-family="sans-serif">⬥</text>
      <ellipse cx="200" cy="120" rx="11" ry="13" fill="rgba(255,200,100,.85)"/>
      <rect x="196" y="133" width="8" height="22" rx="2" fill="rgba(255,200,100,.85)"/>
      <ellipse cx="48"  cy="185" rx="20" ry="18" fill="rgba(0,0,0,.5)"/>
      <ellipse cx="96"  cy="188" rx="20" ry="18" fill="rgba(0,0,0,.5)"/>
      <ellipse cx="144" cy="183" rx="20" ry="18" fill="rgba(0,0,0,.5)"/>
      <ellipse cx="192" cy="186" rx="20" ry="18" fill="rgba(0,0,0,.5)"/>
      <ellipse cx="240" cy="182" rx="20" ry="18" fill="rgba(0,0,0,.5)"/>
      <ellipse cx="288" cy="187" rx="20" ry="18" fill="rgba(0,0,0,.5)"/>
      <ellipse cx="336" cy="184" rx="20" ry="18" fill="rgba(0,0,0,.5)"/>
      <ellipse cx="384" cy="186" rx="20" ry="18" fill="rgba(0,0,0,.5)"/>
    </svg>`;
}

function buildPriceHTML(price) {
  if (price === 'GRATIS')    return `<span class="price-free">GRATIS</span>`;
  if (price === 'TERDAFTAR') return `<span class="price-reg">TERDAFTAR</span>`;
  return `<span class="price-paid">${price}</span>`;
}

function renderEvents() {
  const q    = document.getElementById('q').value.toLowerCase();
  const cat  = document.getElementById('catF').value;
  const city = document.getElementById('cityF').value;

  const filtered = EVENTS.filter(e =>
    (!q    || e.title.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q)) &&
    (!cat  || e.cat  === cat) &&
    (!city || e.city === city)
  ).slice(0, shownCount);

  const grid = document.getElementById('eventGrid');

  if (!filtered.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#718096;padding:40px 0">Tidak ada event ditemukan.</p>';
    return;
  }

  grid.innerHTML = filtered.map((e, i) => `
    <div class="event-card" onclick="openEvent(${e.id})">
      ${e.image ? `<img class="event-image" src="${e.image}" alt="${e.title}" loading="lazy">` : buildScene(i)}
      <div class="event-body">
        <span class="event-badge ${BADGE_MAP[e.cat]}">${e.cat}</span>
        <div class="event-title${e.hi ? ' blue' : ''}">${e.title}</div>
        <div class="event-desc">${e.desc}</div>
        <div class="event-meta">
          <div class="meta-icon meta-date">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1565d8" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </div>
          ${e.date}
        </div>
        <div class="event-meta">
          <div class="meta-icon meta-loc">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#e74c3c" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          ${e.loc}
        </div>
        <div class="event-footer">
          ${buildPriceHTML(e.price)}
          <button class="btn-arrow" onclick="event.stopPropagation(); openEvent(${e.id})">›</button>
        </div>
      </div>
    </div>
  `).join('');
}

function showMore() {
  shownCount += 3;
  renderEvents();
}

/* ═══════════════════════════════════════
   EVENT DETAIL MODAL
═══════════════════════════════════════ */
function openEvent(id) {
  const ev = EVENTS.find(x => x.id === id);
  if (!ev) return;

  // Hero
  const heroImg = document.getElementById('evHeroImg');
  if (ev.heroImage) {
    heroImg.style.backgroundImage = `url('${ev.heroImage}')`;
  } else {
    heroImg.style.backgroundImage = '';
  }
  document.getElementById('evHeroTitle').textContent = ev.heroTitle || ev.title;

  // Badges
  const badgesEl = document.getElementById('evBadges');
  const tags = ev.tags || [ev.cat];
  badgesEl.innerHTML = tags.map((t, i) =>
    `<span class="ev-badge ${i === 0 ? 'green' : 'glass'}">${t}</span>`
  ).join('');

  // Info bar
  document.getElementById('evDate').textContent = ev.fullDate || ev.date;
  document.getElementById('evCity').textContent = ev.city;
  document.getElementById('evTime').textContent = ev.time || '–';
  document.getElementById('evCert').textContent = ev.certificate || '–';

  // Description
  document.getElementById('evDesc').textContent = ev.description || ev.desc;

  // Speakers
  const speakersEl = document.getElementById('evSpeakers');
  if (ev.speakers && ev.speakers.length) {
    speakersEl.innerHTML = ev.speakers.map(s => `
      <div class="ev-speaker-item">
        <div class="ev-speaker-avatar">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="14" r="7" fill="#94a3b8"/>
            <path d="M4 34c0-8 6.3-13 14-13s14 5 14 13" fill="#94a3b8"/>
          </svg>
        </div>
        <div>
          <div class="ev-speaker-name">${s.name}</div>
          <div class="ev-speaker-role">${s.role}</div>
        </div>
      </div>
    `).join('');
  } else {
    speakersEl.innerHTML = '<p style="font-size:13px;color:#94a3b8">Belum ada info pembicara.</p>';
  }

  // Agenda
  const agendaEl = document.getElementById('evAgendaGrid');
  if (ev.agenda && ev.agenda.length) {
    agendaEl.innerHTML = ev.agenda.map(a => `
      <div class="ev-agenda-card">
        <div class="ev-agenda-thumb">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect width="64" height="64" fill="#e2e8f0" rx="8"/>
            <path d="M16 46l10-14 10 10 8-10 12 14H16z" fill="#94a3b8"/>
            <circle cx="26" cy="24" r="6" fill="#94a3b8"/>
          </svg>
        </div>
        <div class="ev-agenda-info">
          <div class="ev-agenda-name">${a.name}</div>
          <div class="ev-agenda-sub">${a.sub}</div>
          <div class="ev-agenda-desc">${a.desc}</div>
          <span class="ev-agenda-tag">${a.tag}</span>
          <div class="ev-agenda-speaker">
            <div class="ev-agenda-avatar"></div>
            ${a.speaker}
          </div>
        </div>
      </div>
    `).join('');
  } else {
    agendaEl.innerHTML = '<p style="font-size:13px;color:#94a3b8">Belum ada agenda.</p>';
  }

  // Facilities
  const facEl = document.getElementById('evFacilities');
  if (ev.facilities && ev.facilities.length) {
    facEl.innerHTML = ev.facilities.map(f => `<li>${f}</li>`).join('');
  } else {
    facEl.innerHTML = '';
  }

  // Gallery
  const galleryEl = document.getElementById('evGallery');
  if (ev.gallery && ev.gallery.length) {
    galleryEl.innerHTML = ev.gallery.map(g =>
      `<img src="${g}" alt="Galeri event" loading="lazy">`
    ).join('');
  } else {
    galleryEl.innerHTML = '<p style="font-size:13px;color:#94a3b8">Belum ada galeri.</p>';
  }

  // Address
  document.getElementById('evAddress').textContent = ev.address || ev.loc;

  // Sponsors
  const sponsorEl = document.getElementById('evSponsors');
  const count = ev.sponsors || 0;
  sponsorEl.innerHTML = Array(count).fill('<div class="ev-sponsor-box"></div>').join('');

  // Price
  const priceEl = document.getElementById('evPrice');
  priceEl.textContent = ev.price;
  priceEl.className = ev.price === 'GRATIS' ? 'ev-footer-price green' : 'ev-footer-price';

  // Open modal
  document.getElementById('eventDetailModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEventModal(e, force) {
  if (!force && e && e.target !== document.getElementById('eventDetailModal')) return;
  document.getElementById('eventDetailModal').classList.remove('open');
  document.body.style.overflow = '';
}

function handleDaftar() {
  closeEventModal(null, true);
  openModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeEventModal(null, true);
    closeModal();
  }
});

/* ═══════════════════════════════════════
   CALENDAR
═══════════════════════════════════════ */
let calDate = new Date(2026, 4, 1); // May 2026

const CAL_EVENTS = {
  '2026-5-9':  'ev-seminar',
  '2026-5-14': 'ev-seminar',
  '2026-5-22': 'ev-workshop',
  '2026-5-27': 'ev-musyawarah'
};

function renderCalendar() {
  const y = calDate.getFullYear();
  const m = calDate.getMonth();
  document.getElementById('calTitle').textContent = `${MONTHS[m]} ${y}`;

  const firstDay = (new Date(y, m, 1).getDay() || 7) - 1;
  const daysInMonth = new Date(y, m + 1, 0).getDate();

  let html = '';
  for (let i = 0; i < firstDay; i++) html += `<div class="cal-day empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const key = `${y}-${m + 1}-${d}`;
    const cls = CAL_EVENTS[key] || '';
    html += `<div class="cal-day ${cls}" onclick="calClick(${d},${m + 1},${y})">${d}</div>`;
  }
  document.getElementById('calGrid').innerHTML = html;
}

function prevMonth() { calDate.setMonth(calDate.getMonth() - 1); renderCalendar(); }
function nextMonth() { calDate.setMonth(calDate.getMonth() + 1); renderCalendar(); }

function calClick(d, m, y) {
  const key = `${y}-${m}-${d}`;
  if (CAL_EVENTS[key]) {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ═══════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════ */
function submitForm() {
  const nama  = document.getElementById('fNama').value.trim();
  const email = document.getElementById('fEmail').value.trim();
  const pesan = document.getElementById('fPesan').value.trim();

  if (!nama || !email || !pesan) return;
  ['fNama', 'fEmail', 'fHp', 'fPesan'].forEach(id => {
    document.getElementById(id).value = '';
  });
}

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderEvents();
  renderCalendar();
});

/* ═══════════════════════════════════════
   AUTH MODAL — Login / Register / Lupa Sandi
═══════════════════════════════════════ */
let currentRole = 'member';

function openModal() {
  document.getElementById('authModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  resetToLogin();
}

function closeModal() {
  document.getElementById('authModal').classList.remove('open');
  document.body.style.overflow = '';
}

function overlayClose(e) {
  if (e.target === document.getElementById('authModal')) closeModal();
}

function hideAllPanels() {
  document.getElementById('loginForm').style.display    = 'none';
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('forgotPanel').style.display  = 'none';
  document.getElementById('authTabs').style.display     = 'none';
}

function resetToLogin() {
  hideAllPanels();
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('authTabs').style.display  = 'flex';
  document.getElementById('authTitle').textContent   = 'Masuk ke Akun';
  document.getElementById('authSub').textContent     = 'Gunakan akun yang sudah terdaftar pada sistem Inkindo Jatim Event Hub';
  setRole('member');
  document.getElementById('forgotStep1').style.display = 'block';
  document.getElementById('forgotStep2').style.display = 'none';
  ['loginEmail','loginPass','regName','regEmail','regPhone','regPass','regPassConfirm','forgotEmail']
    .forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
}

function switchToRegister(e) {
  if (e) e.preventDefault();
  hideAllPanels();
  document.getElementById('registerForm').style.display = 'block';
  document.getElementById('authTitle').textContent = 'Buat Akun Baru';
  document.getElementById('authSub').textContent   = 'Daftarkan diri Anda sebagai anggota INKINDO Jawa Timur';
}

function switchToLogin(e) {
  if (e) e.preventDefault();
  hideAllPanels();
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('authTabs').style.display  = 'flex';
  document.getElementById('authTitle').textContent   = 'Masuk ke Akun';
  document.getElementById('authSub').textContent     = 'Gunakan akun yang sudah terdaftar pada sistem Inkindo Jatim Event Hub';
}

function switchToForgot(e) {
  if (e) e.preventDefault();
  hideAllPanels();
  document.getElementById('forgotPanel').style.display  = 'block';
  document.getElementById('forgotStep1').style.display  = 'block';
  document.getElementById('forgotStep2').style.display  = 'none';
  document.getElementById('authTitle').textContent      = 'Lupa Kata Sandi';
  document.getElementById('authSub').textContent        = 'Kami akan membantu Anda memulihkan akses ke akun Anda';
  document.getElementById('forgotEmail').value          = '';
}

function setRole(role) {
  currentRole = role;
  const tabA = document.getElementById('tabAnggota');
  const tabB = document.getElementById('tabAdmin');
  if (role === 'member') {
    tabA.classList.add('active'); tabB.classList.remove('active');
    document.getElementById('fieldEmailLabel').textContent = 'EMAIL TERDAFTAR';
    document.getElementById('loginEmail').placeholder      = 'email@domain.com';
  } else {
    tabB.classList.add('active'); tabA.classList.remove('active');
    document.getElementById('fieldEmailLabel').textContent = 'EMAIL / USERNAME ADMIN';
    document.getElementById('loginEmail').placeholder      = 'admin@inkindo.org';
  }
}

function togglePw(inputId, btn) {
  const input = document.getElementById(inputId);
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  btn.querySelector('.eye-icon').style.opacity = isHidden ? '0.4' : '1';
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const isAdmin = document.getElementById('tabAdmin').classList.contains('active');
  if (isAdmin) {
    window.location.href = "dashboard-admin.html";
  } else {
    window.location.href = "dashboard-anggota.html";
  }
}

function handleRegister(e) {
  e.preventDefault();
  const name    = document.getElementById('regName').value.trim();
  const email   = document.getElementById('regEmail').value.trim();
  const pass    = document.getElementById('regPass').value;
  const confirm = document.getElementById('regPassConfirm').value;
  const agree   = document.getElementById('agreeTerms').checked;

  if (pass.length < 6) return;
  if (pass !== confirm) return;
  if (!agree) return;

  closeModal();
}

function sendResetLink() {
  const email = document.getElementById('forgotEmail').value.trim();
  if (!email) return;
  document.getElementById('forgotEmailSent').textContent = email;
  document.getElementById('forgotStep1').style.display   = 'none';
  document.getElementById('forgotStep2').style.display   = 'block';
}

function resendReset(e) {
  e.preventDefault();
}
