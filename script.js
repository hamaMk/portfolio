const cloudText = document.querySelector('.cloud-text');

document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 5;
  const y = (window.innerHeight / 2 - e.pageY) / 5;

  cloudText.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});