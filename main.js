window.addEventListener('scroll', onScroll)
const navigation = document.getElementById('navigation');
onScroll()
function onScroll() {
  showNavOnScroll()

};

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
};

function openMenu() {
  document.body.classList.add('menu-expanded')
};

function closeMenu() {
  document.body.classList.remove('menu-expanded')
};

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats,
  #products,
  #products header,
  #products .caroussel`);
  
// CARROUSSEL

const products = [{
            name:"PRODUTO 1",
            image:"./assets/produto1.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam ea corporis quidem exercitationem, voluptate odio vero deleniti quo quam, nostrum modi impedit necessitatibus expedita maiores voluptas odit fugit tenetur?"

        },{
            name:"PRODUTO 2",
            image:"./assets/produto2.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam ea corporis quidem exercitationem, voluptate odio vero deleniti quo quam, nostrum modi impedit necessitatibus expedita maiores voluptas odit fugit tenetur?"

        },{
            name:"PRODUTO 3",
            image:"./assets/produto3.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam ea corporis quidem exercitationem, voluptate odio vero deleniti quo quam, nostrum modi impedit necessitatibus expedita maiores voluptas odit fugit tenetur?"

        },{
            name:"PRODUTO 4",
            image:"./assets/produto4.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam ea corporis quidem exercitationem, voluptate odio vero deleniti quo quam, nostrum modi impedit necessitatibus expedita maiores voluptas odit fugit tenetur?"

        }
    ];

        let i = 0;
        let j = products.length;

        let productContainer = document.getElementById("product-container");
        let nextBtn = document.getElementById("next");
        let prevBtn = document.getElementById("prev");

        nextBtn.addEventListener("click", () => {
            i = (j + i + 1) % j;
            displayTestimonial();
        });

        prevBtn.addEventListener("click", () => {
            i = (j + i - 1) % j;
            displayTestimonial();
        });

        let displayTestimonial = () => {
          productContainer.innerHTML = `
            <div class="card-img">
                <img src=${products[i].image} />
            </div>
            <div class="card-descricao">
                <h3>${products[i].name}</h3>
                <p>${products[i].description}</p>
            </div>
            `
        };

        window.onload = displayTestimonial;
