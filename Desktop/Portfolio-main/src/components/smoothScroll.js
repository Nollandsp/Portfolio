export function smoothScroll(targetId) {
  const element = document.getElementById(targetId);
  if (!element) return;

  window.scrollTo({
    top: element.offsetTop - 80, // décalage pour un header fixe éventuel
    behavior: "smooth",
  });
}
