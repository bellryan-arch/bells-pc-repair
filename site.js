const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#main-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#quote-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get('name');
  const email = data.get('email');
  const service = data.get('service');
  const details = data.get('details');
  const subject = encodeURIComponent(`Website request: ${service}`);
  const body = encodeURIComponent(`Hi Ryan,\n\nMy name is ${name}. I’m looking for help with: ${service}.\n\n${details}\n\nYou can reply to me at ${email}.\n\nThanks,\n${name}`);
  document.querySelector('#form-note').textContent = 'Your email app should open now. Review the message, then press Send.';
  window.location.href = `mailto:bell.ryan@gmail.com?subject=${subject}&body=${body}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
