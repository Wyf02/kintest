// Mobile navbar toggle
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// Navbar active style
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function () {
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});

// Task 1 Logic
function findMax() {
  const input = document.getElementById("numInput").value;
  const arr = input.split(",").map(Number);
  const max = Math.max(...arr);
  document.getElementById("maxResult").textContent = "Max: " + max;
}

// Task 2 Logic
async function fetchTitles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const titles = data.slice(0, 5).map(p => p.title);

  const list = document.getElementById("titleList");
  list.innerHTML = "";
  titles.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    list.appendChild(li);
  });
}
