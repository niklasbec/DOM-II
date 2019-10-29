// Your code goes here
firsth2 = document.querySelector('h2')
firsth2.addEventListener('dblclick', (event) => {
    firsth2.style.color = 'red'
})

secondh2 = document.querySelectorAll('h2')[1]
secondh2.addEventListener('mouseover', (event) => {
    secondh2.style.visibility = 'hidden'
})

thirdh2 = document.querySelectorAll('h2')[2]
window.addEventListener('scroll', (event) => {
    thirdh2.style.color = 'red'
})

fourthh2 = document.querySelectorAll('h2')[3]
fourthh2.addEventListener('drag', (event) => {
    fourthh2.style.color = 'blue'
})

firsth4 = document.querySelectorAll('h4')[0]
firsth4.addEventListener('dragend', (event) => {
    firsth4.style.color = 'red'
})

secondh4 = document.querySelectorAll('h4')[1]
secondh4.addEventListener('copy', (event) => {
    secondh4.style.color = 'red'
})

thirdh4 = document.querySelectorAll('h4')[2]
document.addEventListener('keydown', (event) => {
    thirdh4.style.color = 'red'
})

thirdh4 = document.querySelectorAll('h4')[2]
document.addEventListener('keyup', (event) => {
    thirdh4.style.color = 'blue'
})

firstImage = document.querySelector('img')
window.addEventListener('resize', (event) => {
    firstImage.style.visibility = 'hidden'
})

secondImage = document.querySelectorAll('img')[1]
window.addEventListener('beforeprint', (event) => {
    secondImage.style.visibility = 'hidden'
})



//Navigation default

const allAnchors = document.querySelectorAll('a')
allAnchors[0].addEventListener('click', (event) => {
    console.log('Prevented default')
    event.preventDefault();
})
allAnchors[1].addEventListener('click', (event) => {
    console.log('Prevented default')
    event.preventDefault();
})
allAnchors[2].addEventListener('click', (event) => {
    console.log('Prevented default')
    event.preventDefault();
})
allAnchors[3].addEventListener('click', (event) => {
    console.log('Prevented default')
    event.preventDefault();
})