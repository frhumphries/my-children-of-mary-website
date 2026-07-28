document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const links = nav?.querySelector(".site-nav-links");
  if (!nav || !links) return;
  let button = nav.querySelector("#mobile-menu-btn");
  if (!button) {
    button = document.createElement("button");
    button.id = "mobile-menu-btn";
    button.type = "button";
    button.className = "md:hidden p-2";
    button.innerHTML = '<i class="fa-solid fa-bars text-xl" aria-hidden="true"></i>';
    links.insertAdjacentElement("afterend", button);
  }
  button.setAttribute("aria-label", "Open navigation menu");
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", "site-navigation");
  links.id = "site-navigation";
  button.addEventListener("click", () => {
    const open = links.classList.toggle("mobile-nav-open");
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    button.querySelector("i")?.classList.toggle("fa-xmark", open);
    button.querySelector("i")?.classList.toggle("fa-bars", !open);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && links.classList.contains("mobile-nav-open")) {
      links.classList.remove("mobile-nav-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation menu");
      button.focus();
    }
  });
});
