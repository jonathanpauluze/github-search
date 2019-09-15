const searchInput = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-btn')
const infoContainer = document.querySelector('.info-container')

searchInput.addEventListener('keyup', getInfo)
searchBtn.addEventListener('click', getInfo)

async function getInfo(e) {
  if(e.keyCode === 13 || e.button === 0){
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
  infoContainer.classList.add('border')
  infoContainer.innerHTML = `
    <img class="user-pic" src="${response.avatar_url}"/>
    <h2 class="user-name">${response.name}</h2>
    <p class="user-bio">${response.bio}</p>
  `
}