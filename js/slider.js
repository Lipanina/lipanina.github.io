const works = document.querySelector('#carousel')

const back = works.querySelector('.left')
const next = works.querySelector('.right')
const content = works.querySelector('.content')

back.addEventListener('click', () => content.append(content.firstElementChild))
next.addEventListener('click', () => content.prepend(content.lastElementChild))
