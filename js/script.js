const links = [
  {
    title: "Agendar consultoria",
    icon: "calendar",
    primary: true
  },
  {
    title: "WhatsApp",
    icon: "whatsapp",
    href: "https://wa.me/558197207696?text=Oi,%20All%C3%AA.%20Vim%20pelo%20Hazelink%20e%20quero%20saber%20mais%20sobre%20consultoria%20e%20treinamentos."
  },
  {
    title: "Treinamentos",
    icon: "academy"
  },
  {
    title: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/alleebrahim/"
  },
  {
    title: "LinkedIn",
    icon: "linkedin"
  }
];

const pillars = [
  { title: "Consultoria", icon: "people" },
  { title: "Treinamentos", icon: "bars" },
  { title: "Experiência do Cliente", icon: "heart" }
];

const icons = {
  calendar:
    '<path d="M7 2h2v3h6V2h2v3h3v16H4V5h3V2Zm11 8H6v9h12v-9ZM6 7v1h12V7H6Zm3 5h6v2H9v-2Z"/>',
  whatsapp:
    '<path d="M12.04 3.25a8.45 8.45 0 0 0-7.2 12.88L3.9 20.75l4.76-1.1a8.46 8.46 0 1 0 3.38-16.4Zm0 1.56a6.9 6.9 0 0 1 5.8 10.63 6.9 6.9 0 0 1-8.66 2.58l-.28-.14-2.9.67.58-2.82-.18-.29A6.89 6.89 0 0 1 12.04 4.8Zm-2.56 3.75c-.15 0-.38.06-.58.28-.2.22-.76.74-.76 1.8 0 1.06.78 2.09.89 2.23.11.15 1.52 2.43 3.75 3.31 1.86.74 2.24.59 2.64.55.4-.04 1.3-.53 1.49-1.04.18-.5.18-.94.13-1.03-.06-.09-.2-.14-.42-.25-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.1-1.31-1.22-1.53-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.64-.18-.43-.36-.37-.5-.38h-.43Z"/>',
  academy:
    '<path d="m12 3 10 5-10 5L2 8l10-5Zm-7 8.08 7 3.5 7-3.5V16c0 1.66-3.13 4-7 4s-7-2.34-7-4v-4.92Z"/>',
  instagram:
    '<path d="M7.3 2.8h9.4A4.5 4.5 0 0 1 21.2 7.3v9.4a4.5 4.5 0 0 1-4.5 4.5H7.3a4.5 4.5 0 0 1-4.5-4.5V7.3a4.5 4.5 0 0 1 4.5-4.5Zm0 2A2.5 2.5 0 0 0 4.8 7.3v9.4a2.5 2.5 0 0 0 2.5 2.5h9.4a2.5 2.5 0 0 0 2.5-2.5V7.3a2.5 2.5 0 0 0-2.5-2.5H7.3Zm4.7 3.1a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm4.35-2.9a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9Z"/>',
  linkedin:
    '<path d="M6.9 8.7H3.8V20h3.1V8.7ZM5.3 3.2A1.8 1.8 0 1 0 5.3 6.8a1.8 1.8 0 0 0 0-3.6ZM20.2 13.7c0-3.04-1.62-5-4.25-5a3.7 3.7 0 0 0-3.32 1.82V8.7H9.66V20h3.1v-5.6c0-1.48.28-2.9 2.1-2.9 1.8 0 1.82 1.68 1.82 3V20h3.52v-6.3Z"/>',
  people:
    '<path d="M8.1 11.3a3.55 3.55 0 1 1 0-7.1 3.55 3.55 0 0 1 0 7.1Zm7.8 0a3.55 3.55 0 1 1 0-7.1 3.55 3.55 0 0 1 0 7.1ZM2.7 19.8c.16-3.86 2.36-6.12 5.4-6.12s5.24 2.26 5.4 6.12H2.7Zm10.2 0c-.06-1.95-.6-3.58-1.55-4.84a5.9 5.9 0 0 1 4.55-1.88c3.04 0 5.24 2.42 5.4 6.72h-8.4Z"/>',
  bars:
    '<path d="M4 19h3V9H4v10Zm6.5 0h3V4h-3v15ZM17 19h3v-7h-3v7Z"/>',
  heart:
    '<path d="M12 21s-7.5-4.55-9.6-9.08C.72 8.3 2.68 4.6 6.35 4.1A5.15 5.15 0 0 1 12 7a5.15 5.15 0 0 1 5.65-2.9c3.67.5 5.63 4.2 3.95 7.82C19.5 16.45 12 21 12 21Z"/>'
};

const linksContainer = document.querySelector("[data-links]");
const pillarsContainer = document.querySelector("[data-pillars]");
const toast = document.querySelector("[data-toast]");
const loader = document.querySelector("[data-loader]");
const agendaPillIcon = document.querySelector("[data-icon='calendar']");
const loaderStart = performance.now();
const loaderMinimumTime = 3000;
let toastTimer;

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

agendaPillIcon.innerHTML = icon("calendar");

pillarsContainer.innerHTML = pillars
  .map((item, index) => {
    const pillar = `
      <div class="pillar">
        <span class="pillar-icon">${icon(item.icon)}</span>
        <span>${item.title}</span>
      </div>
    `;
    return index < pillars.length - 1 ? `${pillar}<span class="pillar-divider" aria-hidden="true"></span>` : pillar;
  })
  .join("");

linksContainer.innerHTML = links
  .map((item) => {
    const href = item.href || "#";
    const target = item.href ? 'target="_blank" rel="noreferrer"' : `data-label="${item.title}"`;
    const classes = item.primary ? "link-card link-card-primary" : "link-card";

    return `
      <a class="${classes}" href="${href}" ${target}>
        <span class="link-icon">${icon(item.icon)}</span>
        <span class="link-title">${item.title}</span>
        <span class="link-arrow" aria-hidden="true">›</span>
      </a>
    `;
  })
  .join("");

document.querySelectorAll("[data-label]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(`${link.getAttribute("data-label")} será conectado ao link oficial.`);
  });
});

function hideLoader() {
  if (!loader) {
    return;
  }

  loader.classList.add("is-hidden");

  window.setTimeout(() => {
    loader.remove();
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-ready");
  }, 700);
}

window.addEventListener("load", () => {
  const elapsedTime = performance.now() - loaderStart;
  const remainingTime = Math.max(0, loaderMinimumTime - elapsedTime);

  window.setTimeout(hideLoader, remainingTime);
});
