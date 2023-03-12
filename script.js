// hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile.classList.toggle('active');
});

document.querySelectorAll('.mobile').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobile.classList.remove('active');
}));

// artist section dynamic
const data = [
  {
    image: 'images/shinski.webp',
    artist: 'Nyashinski',
    type: 'Rapper',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae quibusdam, hic saepe minima dolores labore aliquid nesciunt dolor!',

  },
  {
    image: 'images/femi-one.webp',
    artist: 'Femi One',
    type: 'Rapper',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae quibusdam, hic saepe minima dolores labore aliquid nesciunt dolor!',
  },
  {
    image: 'images/femi-one.webp',
    artist: 'Femi One',
    type: 'Rapper',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae quibusdam, hic saepe minima dolores labore aliquid nesciunt dolor!',
  },
  {
    image: 'images/femi-one.webp',
    artist: 'Femi One',
    type: 'Rapper',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae quibusdam, hic saepe minima dolores labore aliquid nesciunt dolor!',
  },
  {
    image: 'images/femi-one.webp',
    artist: 'Femi One',
    type: 'Rapper',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae quibusdam, hic saepe minima dolores labore aliquid nesciunt dolor!',
  },
  {
    image: 'images/femi-one.webp',
    artist: 'Femi One',
    type: 'Rapper',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae quibusdam, hic saepe minima dolores labore aliquid nesciunt dolor!',
  },
];

// calling and appending to DOM
const artistSection = document.querySelector('.test-artists');
data.forEach((content) => {
  const item = document.createElement('artists');
  item.classList.add('d-flex');

  item.innerHTML = `
  <div class="artists d-flex my-3 align-items-center">
  <img class="pics mx-2" src="${content.image}" alt="${content.artist}">
  <div class="artist_info">
    <h3 class="artist_name my-0 fw-bold">${content.artist}</h3>
    <p class="artist_type my-0">${content.type}</p>
    <p class="artist_rating my-0">${content.rating}</p>
    <hr align="center" class="my-0" width="10%" size="4">
    <p class="artist_desc my-0">${content.desc}.</p>
  </div>
</div>
  `;

  artistSection.appendChild(item);
});
