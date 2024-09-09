const homeList = (text)=>{
    const homeUl = document.querySelector('#home-ul');
    const li = `<li class="flex items-center"><img class="h-full" src="assets/yellow-star.png" alt=""><h2 class="font-medium text-4xl">${text}</h2></li>`
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = li
    homeUl.appendChild(tempDiv.firstChild) 
}

const rollList = (text)=>{
    const rollUl = document.querySelectorAll('.slide-div');
    const li = `<h3 class="flex items-center">${text}</h3> <img class="h-full" src="assets/yellow-star.png" alt="star" />`;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = li;

    rollUl.forEach(el => {
        const firstChildClone = tempDiv.firstChild.cloneNode(true); // Clone the first child
        const lastChildClone = tempDiv.lastChild.cloneNode(true);   // Clone the last child

        el.appendChild(firstChildClone);
        el.appendChild(lastChildClone);
    });

    
}

const addService = (text)=>{
    const servicesContent = document.querySelector('.services-content');
    const element = `<div class="service-card flex justify-start items-center rounded-lg bg-customLightGray gap-8 p-10 w-full text-3xl">
                <i class="fas fa-address-card text-customGray"></i>
                <p class="">${text}</p>
            </div>`
            
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = element
    console.log(tempDiv.firstChild);
    
    servicesContent.appendChild(tempDiv.firstChild)

}
const homeUlArr = ['Designer', 'Figma', 'Developer']
const rollUlArr = ['UI/UX', 'DEVELOPMENT', 'PRODUCT DESIGN', 'SOCIAL MEDIA DESIGN', 'BRANDING']
const services = ['UI/UX Designing', 'Web Development', 'Graphic Designing', 'Product Designing', 'Social Media Posts']

document.addEventListener('DOMContentLoaded', ()=>{
    homeUlArr.forEach(el => {
        
        homeList(el)
    })

    rollUlArr.forEach(el => {
        
        rollList(el)
    })

    services.forEach(el => {
        addService(el)
    })
})