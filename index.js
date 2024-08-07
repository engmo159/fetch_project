const btn = document.querySelector('button')
const image = document.querySelector('img')
const myH1 = document.querySelector('#myH1')
const myInput = document.querySelector('input')
const imgDiv = document.querySelector('#imgDiv')

const fetchData = val => {
  fetch(`https://api.imgflip.com/get_memes`)
    .then(res => res.json())
    .then(data => {
      data.data.memes.filter((item, index) => {
        if (index == val) {
          myH1.innerHTML = item.name
          imgDiv.classList.replace('hidden', 'block')
          image.src = item.url
        }
      })
    })
    .catch(err => console.log(err))
}

btn.addEventListener('click', () => {
  imgDiv.classList.replace('block', 'hidden')
  !myInput.value || isNaN(myInput.value)
    ? (myH1.innerHTML = 'please enter valid number ')
    : 99 < myInput.value || myInput.value < 0
    ? (myH1.innerHTML = 'please enter number from 0 to 99')
    : fetchData(myInput.value)
})
