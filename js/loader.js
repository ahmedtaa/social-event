let speakersData = {
  name: 'Ahmed',
  speaker_image: './img/profile-pic.jpg',
  about: 'some text random form some text random formsome text random form',
  more: 'some text random form some text random formsome text random form',
};
function load(x) {
  let speakers = document.querySelector('.speaker-cards');
  for (let i = 0; i < x; i++) {
    speakers.innerHTML += `
    <li class="card">
        <img src="${speakersData.speaker_image}" alt="">
        <div class="speaker-info">
            <h2 class="name">${speakersData.name}</h2>
            <p class="about">${speakersData.about}</p>
            <hr class="line-gray">
            <p class="more">${speakersData.more}</p>
        </div>
    </li>
    `;
  }
}

let speakers = document.querySelector('.speaker-cards');
load(2);
speakers.parentNode.innerHTML += ` <button class="more-btn" onclick="loadMore()">MORE <i class="arrow down"></i> </button>  `;
function loadMore() {
  load(4);
  document.querySelector('.more-btn').remove();
}
