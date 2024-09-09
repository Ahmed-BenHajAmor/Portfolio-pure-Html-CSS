const homeList = (text)=>{
    const homeUl = document.querySelector('#home-ul');
    const li = `<li class="flex items-center"><img class="h-full" src="assets/yellow-star.png" alt=""><h2 class="font-medium text-4xl">${text}</h2></li>`
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = li
    homeUl.appendChild(tempDiv.firstChild) 
}

const homeUlArr = ['Designer', 'Figma', 'Developer']

document.addEventListener('DOMContentLoaded', ()=>{
    homeUlArr.forEach(el => {
        console.log('in');
        
        homeList(el)
    })
})