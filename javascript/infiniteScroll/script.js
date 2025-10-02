import { fetchShimmerData } from "../../src/api/fetch.js";

const container = document.querySelector('.container');

function renderMemes(memes) {
  memes.forEach(meme => {
    const img = document.createElement('img');
    img.style.cssText = 'width: 20vw; height: 20vw;';
    img.src = meme.url;
    container.appendChild(img);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchShimmerData();
  renderMemes(data.memes);
});

let lastScrollTime = 0;
let isFetching = false;
const THROTTLE_DELAY = 500; // milliseconds

document.addEventListener('scroll', async () => {
  const now = Date.now();
  if (now - lastScrollTime < THROTTLE_DELAY) return; // throttle
  lastScrollTime = now;

  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 2 && !isFetching) {
    isFetching = true;
    try {
      const data = await fetchShimmerData(10);
      renderMemes(data.memes);
    } finally {
      isFetching = false; // release lock
    }
  }
});
