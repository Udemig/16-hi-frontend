// STATE (DURUM VERİSİ)
// Projenin her yerinden erişilmesi gereken global değişkenler
let tasks = JSON.parse(localStorage.getItem("tasks")) || [
  {
    id: 1,
    title: "Javascript konularını tekrar et",
    category: "Ders",
    priority: "Yüksek",
    completed: false,
  },
  {
    id: 2,
    title: "Web Tasarımı dersi için ödev taslağını hazırla",
    category: "Ödev",
    priority: "Orta",
    completed: true,
  },
];

let searchQuery = "";
let currentFilter = "all";

// DOM ELEMANLARI
const themeBtn = document.querySelector(".theme-btn");
const taskList = document.querySelector(".task-list");
const emptyMessage = document.querySelector(".empty-message");

const statTotal = document.getElementById("stat-total");
const statPending = document.getElementById("stat-pending");
const statCompleted = document.getElementById("stat-completed");
const progressBar = document.querySelector(".progress-bar");

const taskForm = document.querySelector(".task-form");
const taskInput = document.querySelector("#task-input");
const taskCategory = document.querySelector("#task-category");
const taskPriority = document.querySelector("#task-priority");

const searchInput = document.querySelector("#search-input");
const filterButtons = document.querySelectorAll(".filter-btn");

// 1. DARK MODE
// temayı değiştiren fonksiyon
function toggleTheme() {
  // mevcut temayı al
  const currentTheme = document.documentElement.getAttribute("data-theme");

  // yeni temayı belirle
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // html data özelliğini güncelle
  document.documentElement.setAttribute("data-theme", newTheme);

  // butonun içindeki iconu güncelle
  themeBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";

  // temayı localStorage'a kaydet
  localStorage.setItem("theme", newTheme);
}

// tema butonuna tıklanma olayını izle
themeBtn.addEventListener("click", toggleTheme);

// kayıtlı temayı yükle
const savedTheme = localStorage.getItem("theme") ?? "light";
document.documentElement.setAttribute("data-theme", savedTheme);
themeBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

// 2. VERİYİ SAKLAMA VE EKRANI GÜNCELLEME
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  updateStats();
}

// 3. GÖREVLERİ EKRANA BASMA (RENDER)
function renderTasks() {
  // Filtreleme ve arama işlemleri
  // .toLowerCase ile büyük-küçük harf duyarlılığını kaldırdık
  // .includes ile aratılan metni içeren görevleri bulduk
  const filtredTasks = tasks.filter((task) => {
    // başlığa göre filtre
    const titleFilter = task.title.toLowerCase().includes(searchQuery.toLowerCase());

    // kategoriye göre filtre
    const categoryFilter =
      currentFilter === "all"
        ? true
        : currentFilter === "pending"
          ? !task.completed
          : task.completed;

    return titleFilter && categoryFilter;
  });

  // Listeyi temizle
  taskList.innerHTML = "";
  emptyMessage.style.display = filtredTasks.length > 0 ? "none" : "block";

  // Görev kartlarını ekle
  filtredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;

    li.innerHTML = `
          <div class="task-left">
            <input type="checkbox" class="task-checkbox" ${task.completed ? "checked" : ""} />

            <div class="task-details">
              <span class="task-text">${task.title}</span>
              <span class="task-tags">${task.category} • ${task.priority} Öncelik</span>
            </div>
          </div>

          <div class="task-actions">
            <button class="edit-btn" title="Düzenle">🖋️</button>
            <button class="delete-btn" title="Sil">🗑️</button>
          </div>    
    `;

    // Görevi içi olaylar
    li.querySelector(".delete-btn").addEventListener("click", () => deleteTask(task.id));
    li.querySelector(".edit-btn").addEventListener("click", () => updateTask(task.id));
    li.querySelector(".task-checkbox").addEventListener("change", () => toggleTask(task.id));

    taskList.append(li);
  });
}

// 4. İSTATİSTİKLERİ HESAPLA
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  statTotal.textContent = total;
  statCompleted.textContent = completed;
  statPending.textContent = pending;
  progressBar.style.width = `${percent}%`;
}

// 5. GÖREV FONKSİYONLARI (CRUD)
function addTask(title, category, priority) {
  // yeni görev nesnesi oluştur
  const newTask = {
    id: Date.now(),
    title: title.trim(),
    category,
    priority,
    completed: false,
  };

  // yeni oluşturulan nesneyi diziye elşe
  tasks.unshift(newTask);

  // son güncellemeyi localStorage'a kaydedip arayüzü güncelle
  saveAndRender();
}

function deleteTask(id) {
  // id'si bilinen elemanı diziden kaldır
  tasks = tasks.filter((task) => task.id !== id);
  // son güncellemeyi localStorage'a kaydedip arayüzü güncelle
  saveAndRender();
}

function toggleTask(id) {
  // güncellenicek elemanı bul
  const task = tasks.find((task) => task.id === id);

  // eleman bulunursa
  if (task) {
    task.completed = !task.completed;
  }

  // son güncellemeyi localStorage'a kaydedip arayüzü güncelle
  saveAndRender();
}

function updateTask(id) {
  // güncellenicek elemanı bul
  const task = tasks.find((task) => task.id === id);

  // eleman bulunamadıysa fonksiyonu durdur
  if (!task) return;

  // title'ın yeni değerini kullanıcıdan al
  const newTitle = prompt("Yeni görev başlığı girin:", task.title);

  // yeni title boş değilse
  if (newTitle !== null && newTitle.trim() !== "") {
    // nesnedeki title alanını güncelle
    task.title = newTitle.trim();
    // arayüzü güncelle
    saveAndRender();
  }
}

// 6. OLAY DİNLİYİCİLERİ

// formun gönderilme olayını izle
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(taskInput.value, taskCategory.value, taskPriority.value);
  taskInput.value = "";
  taskInput.focus();
});

// arama inputa yazılma olayını izle
searchInput.addEventListener("input", (event) => {
  // aratılan kelimeyi global değişkene kaydet
  searchQuery = event.target.value;
  // arayüzün güncelle
  renderTasks();
});

// her bir filtreleme butona tıklanma olayını izle
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // butonlardan active class'ını kaldır
    filterButtons.forEach((b) => b.classList.remove("active"));

    // tıklanan butona active sınıfını ekle
    btn.classList.add("active");

    // global değişkene seçili kategoriyi aktar
    currentFilter = btn.dataset.filter;

    // arayüzü güncelle
    renderTasks();
  });
});

// Sayfa ilk açıldığında arayüzü güncelle
saveAndRender();
