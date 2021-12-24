const speakersData = [
  {
    name: 'lorem',
    speaker_image: './img/speaker_01.png',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore recusandae quia.',
    more: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolorum veritatis officiis ex. Hic quia at, harum doloremque placeat similique!',
  },
  {
    name: 'lorem',
    speaker_image: './img/speaker_02.png',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore recusandae quia.',
    more: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolorum veritatis officiis ex. Hic quia at, harum doloremque placeat similique!',
  },
  {
    name: 'loremc',
    speaker_image: './img/speaker_03.png',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore recusandae quia.',
    more: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolorum veritatis officiis ex. Hic quia at, harum doloremque placeat similique!',
  },
  {
    name: 'lorem',
    speaker_image: './img/speaker_04.png',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore recusandae quia.',
    more: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolorum veritatis officiis ex. Hic quia at, harum doloremque placeat similique!',
  },
  {
    name: 'lorem',
    speaker_image: './img/speaker_05.png',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore recusandae quia.',
    more: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolorum veritatis officiis ex. Hic quia at, harum doloremque placeat similique!',
  },
  {
    name: 'lorem',
    speaker_image: './img/speaker_06.png',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore recusandae quia.',
    more: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolorum veritatis officiis ex. Hic quia at, harum doloremque placeat similique!',
  },
];
function load(x, y) {
  const speakers = document.querySelector('.speaker-cards');
  let i = y;
  for (i; i < x; i += 1) {
    speakers.innerHTML += `
    <li class="card">
        <img src="${speakersData[i].speaker_image}" alt="">
        <div class="speaker-info">
            <h2 class="name">${speakersData[i].name}</h2>
            <p class="about">${speakersData[i].about}</p>
            <hr class="line-gray">
            <p class="more">${speakersData[i].more}</p>
        </div>
    </li>
    `;
  }
}
function loadMore() {
  load(6, 2);
  document.querySelector('.more-btn').remove();
}
const speakers = document.querySelector('.speaker-cards');
load(2, 0);
speakers.parentNode.innerHTML += ` 
<button class="more-btn" onclick="loadMore()">MORE <i class="arrow down"></i> </button>
`;
if (window.innerWidth > 768) {
  loadMore();
}
