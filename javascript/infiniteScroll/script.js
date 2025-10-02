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

document.addEventListener('scroll', async () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 2) {
    const data = await fetchShimmerData(10);
    renderMemes(data.memes);
  }
});
