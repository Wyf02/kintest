# Frontend Tasks Submission - Yifan Wang

This project implements **Task 1, Task 2, and Task 5** in a single responsive HTML page, using only **vanilla HTML, CSS, and JavaScript** (no frameworks or build tools required).  
All code is documented and functions have been tested in modern browsers.
## Project Structure

```
/
├── index.html   # Contains UI layout + 3 tasks
├── style.css    # Styling, typography, responsive navbar
└── script.js    # All task logic
```

---

##  Approach Explanation

### 🔹 Task 1 – Find the Largest Number in an Array
**Requirement:**  
Write a JavaScript function that takes an array of numbers as input and returns the largest number.

**Approach:**  
- User inputs numbers as a comma-separated string.
- The string is split into an array and converted into numeric values.
- `Math.max(...arr)` is used to compute the maximum.
- Result is displayed dynamically in the page.

**Relevant Code (`script.js`):**
```js
function findMax() {
  const input = document.getElementById("numInput").value;
  const arr = input.split(",").map(Number); // split string → number array
  const max = Math.max(...arr);             // find maximum
  document.getElementById("maxResult").textContent = " Max: " + max;
}
````

---

### 🔹 Task 2 – Asynchronous API Fetch

**Requirement:**
Fetch data from `https://jsonplaceholder.typicode.com/posts` asynchronously and log the titles of the first 5 posts.

**Approach:**

* Uses `fetch()` with `async/await` for clean asynchronous flow.
* Converts response to JSON, selects first five posts via `.slice(0, 5)`.
* Injects them into the DOM as a list.

**Relevant Code:**

```js
async function fetchTitles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const titles = data.slice(0, 5).map(p => p.title);

  const list = document.getElementById("titleList");
  list.innerHTML = ""; // clear previous content
  titles.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    list.appendChild(li);
  });
}
```

---

### 🔹 Task 5 – Responsive Navigation Bar

**Requirement:**
Create a responsive navbar containing “Home”, “About”, and “Contact”.
The navbar must collapse into a dropdown menu on screens smaller than 768px.

**Approach:**

* Desktop: horizontal layout using flexbox.
* Mobile: menu hidden by default, shown via `classList.toggle("active")`.
* A hamburger icon button triggers the toggle.
* The active tab is highlighted by adding/removing the `.active` class.

**Relevant Code:**

```js
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");
  })
);
```

---


