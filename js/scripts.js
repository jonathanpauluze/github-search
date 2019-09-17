const searchInput = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-btn')
const infoContainer = document.querySelector('.info-container')

searchInput.addEventListener('keyup', getInfo)
searchBtn.addEventListener('click', getInfo)

async function getInfo(e) {
  if(e.keyCode === 13 || e.button === 0){
    e.preventDefault()
    const searchQuery = searchInput.value
    if(searchQuery !== '') {
      response = await fetch(`https://api.github.com/users/${searchQuery}`)
      response = await response.json()
      // console.log(response.url)
      setData()
    }
  }
}

function setData(){
  const date = new Date(response.created_at)
  const opt = {day: 'numeric', month: 'long', year: 'numeric'}
  console.log(date)
  const memberSince = new Intl.DateTimeFormat('pt-BR', opt).format(date)

  infoContainer.classList.add('card-border')
  infoContainer.innerHTML = `
    <img class="user-pic" src="${response.avatar_url}"/>
    <h2 class="user-name">${response.name}</h2>
    <p class="user-bio">${response.bio}</p>
    <hr class="user-sep"/>
    <p class="user-info"><i class="fas fa-map-marker-alt"></i> ${response.location}</p>
    <p class="user-info"><i class="fas fa-calendar-alt"></i> ${memberSince}</p>
    <a class="user-link" href="${response.html_url}" target="_blank">
      <i class="fab fa-github"></i>
      <span>Visit Profile</span>
      <i class="fas fa-arrow-right"></i>
    </a>
  `
}