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
    desc: 'Nyashinski is a multi-talented Kenyan musician, singer and rapper, who has captivated audiences with his unique blend of African rhythms, Swahili lyrics and English rap',

  },
  {
    image: 'images/femi-one.webp',
    artist: 'Femi One',
    type: 'Rapper',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    desc: 'Femi One is a Kenyan rapper and songwriter, who has made a name for herself with her powerful lyrics and socially conscious messages, inspiring a new generation of African women',
  },
  {
    image: 'images/mejja-genge.jpeg',
    artist: 'Mejja Genge',
    type: 'Rapper',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    desc: 'Mejja Genge is a Kenyan musician and rapper, known for his infectious beats and catchy lyrics that celebrate the vibrant culture and spirit of the Kenyan people',
  },
  {
    image: 'images/jua-cali.jpeg',
    artist: 'Jua Cali',
    type: 'Rapper',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    desc: 'Jua Cali is a Kenyan musician and rapper, known as the "King of Genge" for his pioneering role in popularizing the genre and promoting Swahili language and culture',
  },
  {
    image: 'images/nameless.jpeg',
    artist: 'Nameless',
    type: 'Rapper',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    desc: 'Nameless is a Kenyan musician and singer-songwriter, whose soulful vocals and blend of African rhythms with contemporary pop and R&B have made him a household name in East Africa',
  },
  {
    image: 'images/khali.webp',
    artist: 'Papa Jones',
    type: 'Rapper',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    desc: 'Papa Jones is a Kenyan rapper and songwriter, known for his raw, hard-hitting lyrics and dynamic flow that have established him as one of the top hip-hop artists in Africa',
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
