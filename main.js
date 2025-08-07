async function loadComponent(containerId, htmlPath, jsPath) {
  const container = document.getElementById(containerId);
  const html = await fetch(htmlPath).then(res => res.text());
  container.innerHTML = html;
  if (jsPath) import(jsPath);
}

loadComponent('navbar', './navbar/index.html', './navbar/navbar.js');
loadComponent('footer', './footer/index.html', './footer/footer.js');