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
        const firstChildClone = tempDiv.firstChild.cloneNode(true); 
        const lastChildClone = tempDiv.lastChild.cloneNode(true);   

        el.appendChild(firstChildClone);
        el.appendChild(lastChildClone);
    });

    
}

const addService = (text)=>{
    const servicesContent = document.querySelector('.services-content');
    const element = `<div class="service-card flex justify-start items-center rounded-xl bg-customLightGray gap-8 p-10 w-full text-3xl">
                <i class="fas fa-address-card text-customGray"></i>
                <p class="">${text}</p>
            </div>`
            
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = element
    
    servicesContent.appendChild(tempDiv.firstChild)

}

const addPortfolio = (title, icon)=>{
    const portfolioContent = document.querySelector('.portfolios-content');
    const element = `<div class="flex flex-col justify-between p-8 border-4 border-customGray rounded-xl gap-16 text-customGray2">
    <i class="fab fa-${icon} text-6xl"></i>
    <h2 class="text-4xl font-midium ">${title}</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda inventore corrupti voluptatibus explicabo soluta fugit dolor reprehenderit quos, earum aliquam quaerat quasi dignissimos totam vero laborum, sint officiis provident.</p>
   </div>`
            
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = element
    
    portfolioContent.appendChild(tempDiv.firstChild)

}

const addTestimonials = (title, icon)=>{
    const testimonialsContent = document.querySelector('.testimonials-content');
    const element = `<div class="bg-customLightGray flex flex-col items-center text-customGray mt-16 rounded-xl px-8 pb-8 ">
        <div class="user-icon-container rounded-full bg-customGray ">

            <i class="fa-regular fa-user text-bgColor text-7xl"></i>
        </div>

        <p class='text-center'><span><i class="transform rotate-180 fa-solid fa-quote-right"></i></span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, aut ullam. Quibusdam voluptate magnam explicabo eius aliquam totam alias laboriosam sapiente ut, earum atque quo enim aspernatur beatae, voluptas aperiam? <span><i class="fa-solid fa-quote-right"></i></span></p>

        <h3 class="custom-underline-small pt-8 z-10">Vaseem Azziz</h3>
    </div>`
            
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = element
    
    testimonialsContent.appendChild(tempDiv.firstChild)

}



const addSection = (title, subTitle, sectionContentClass, addBtn=false)=>{
    const section = `<div>
        <div class="header text-center">
            <h1 class="text-6xl font-bold "><span class="custom-underline">${title}</span></h1>
            <h4 class="pt-2 font-semibold">${subTitle}</h4>
        </div>

        <div class="${sectionContentClass} grid grid-cols-3 gap-12 mt-16">
            

        </div>

        ${addBtn ? `<div class="footer mt-16 flex justify-center items-center">
            <div class="connect-btn text-customGray">
                <a class="px-16 py-3 bg-customYellow rounded-full font-semibold" href="#">View All</a>
            </div>
        </div>` : ''}
    </section>`

    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = section
    return tempDiv.firstChild
}
const homeUlArr = ['Designer', 'Figma', 'Developer']
const rollUlArr = ['UI/UX', 'DEVELOPMENT', 'PRODUCT DESIGN', 'SOCIAL MEDIA DESIGN', 'BRANDING']
const services = ['UI/UX Designing', 'Web Development', 'Graphic Designing', 'Product Designing', 'Social Media Posts']
const portfolios = [
    {title: 'UI/UX Designing', icon: 'figma'},
    {title: 'Web Development', icon: 'instagram'},
    {title: 'Graphic Designing', icon: 'figma'},
    {title: 'Product Designing', icon: 'facebook'},
    {title: 'Social Media Posts', icon: 'instagram'}
]

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.services').appendChild(addSection('Services', 'Here are the services we are providing to you', 'services-content', true))
    document.querySelector('.portfolios').appendChild(addSection('Portfolios', 'Click on the cards to see my portfolios of related category.', 'portfolios-content'))
    document.querySelector('.testimonials').appendChild(addSection('Testimonials', 'Here are some testimonials from our clients.', 'testimonials-content'))

    homeUlArr.forEach(el => {
        
        homeList(el)
    })

    rollUlArr.forEach(el => {
        
        rollList(el)
    })

    services.forEach(el => {
        addService(el)
    })
    portfolios.forEach(el => {
        addPortfolio(el.title, el.icon)
    })

    portfolios.forEach(el => {
        addTestimonials(el.title, el.icon)
    })

})