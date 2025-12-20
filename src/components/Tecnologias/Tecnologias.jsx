const techIcons = {
    javascript: "/javascript.svg",
    react: "/react_light.svg",
    html: "/html5.svg",
    css: "/css_old.svg",
    tailwindcss: "/tailwindcss.svg",
    bootstrap: "/bootstrap.svg",
    python: "/python.svg",
    django: "/django.svg",
    git: "/git.svg",
    mysql: "/mysql-icon-light.svg",
};

export function Tecnologias(...tecnologias) {
  return tecnologias
    .map(tech => techIcons[tech.toLowerCase()])
    .filter(Boolean);
}