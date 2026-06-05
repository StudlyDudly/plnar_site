const root = document.documentElement;
const storedTheme = localStorage.getItem("plnar-theme");
if (storedTheme) root.dataset.theme = storedTheme;

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("plnar-theme", next);
});

const navToggle = document.querySelector(".nav-toggle");
navToggle?.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.16 }
);

document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

const pipeNodes = Array.from(document.querySelectorAll("[data-pipe]"));
let pipeIndex = 0;

function activatePipe(index) {
  pipeNodes.forEach((node, nodeIndex) => node.classList.toggle("active", nodeIndex === index));
}

pipeNodes.forEach((node, index) => {
  node.addEventListener("click", () => {
    pipeIndex = index;
    activatePipe(pipeIndex);
  });
});

if (pipeNodes.length) {
  setInterval(() => {
    pipeIndex = (pipeIndex + 1) % pipeNodes.length;
    activatePipe(pipeIndex);
  }, 1900);
}

const tabs = Array.from(document.querySelectorAll("[data-stage]"));
const panels = Array.from(document.querySelectorAll("[data-stage-panel]"));

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item, itemIndex) => item.setAttribute("aria-selected", String(itemIndex === index)));
    panels.forEach((panel, panelIndex) => panel.classList.toggle("active", panelIndex === index));
  });
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    if (button) button.textContent = "Request Captured";
  });
});

const roiInputs = Array.from(document.querySelectorAll("[data-roi-input]"));
const roiOutputs = {
  monthly: document.querySelector("[data-roi-output='monthly']"),
  rework: document.querySelector("[data-roi-output='rework']"),
  cycle: document.querySelector("[data-roi-output='cycle']")
};

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(Math.max(0, value || 0));
}

function updateRoi() {
  if (!roiInputs.length) return;
  const values = Object.fromEntries(
    roiInputs.map((input) => [input.dataset.roiInput, Number(input.value) || 0])
  );
  const reworkValue = values.files * values.cost * (values.rework / 100) * (values.reduction / 100);
  const cycleValue = values.files * values.dayValue * values.days;
  const monthlyValue = reworkValue + cycleValue;

  if (roiOutputs.monthly) roiOutputs.monthly.textContent = formatCurrency(monthlyValue);
  if (roiOutputs.rework) roiOutputs.rework.textContent = formatCurrency(reworkValue);
  if (roiOutputs.cycle) roiOutputs.cycle.textContent = formatCurrency(cycleValue);
}

roiInputs.forEach((input) => input.addEventListener("input", updateRoi));
updateRoi();
