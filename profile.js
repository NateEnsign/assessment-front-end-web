function yaya(evt){
    evt.preventDefault()
    alert('Red!')
}


let favColor = document.querySelector('#color')
favColor.addEventListener('click', yaya)



function booya(event){
    event.preventDefault()
    alert('The Unintas!')
}


let favPlace = document.querySelector('#place')
favPlace.addEventListener('click', booya)



function awwyaa(event){
    event.preventDefault()
    alert('Eating sour gummy worms before hoopin!')
}


let favRitual = document.querySelector('#ritual')
favRitual.addEventListener('click', awwyaa)