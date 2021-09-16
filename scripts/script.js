function toggleState() {
  document.querySelector(".toggle-me").classList.toggle("active");
}

function addCards() {
  fetch("../data/posts.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        createCards(data[i]);
      }
    });
}

function createCards(card) {
  let wrapper = document.getElementById("cards");
  wrapper.innerHTML += `<li class="card-wrapper__card"><a href="./pages/post.html">
  <img src="${card.previewImage}" alt="a random image" />
  <div class="card-wrapper__content">
  <h4>${card.name}</h4>
  <h5>${card.title}</h5>
  <p>${card.email}</p>
  <p>${card.phone}</p>
  </div>
  </a>
  </li>`;
}
