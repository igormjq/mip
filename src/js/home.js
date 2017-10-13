class Home {
    constructor() {
        //console.log('calledHESAU');
        this.menu = false;
        this.$menu = document.querySelector('nav');
        this.$hamburguer = document.querySelector('.mobile-nav-button');
        this.bindEvents();
    }

    init() {
        console.log(this.menu);
    }

    toogleMenu() {
        this.menu = !this.menu;
        if (this.menu) {
            this.$menu.setAttribute('class', 'active');
        } else {
            this.$menu.removeAttribute('class');
            this.$menu.setAttribute('class', 'desactived');
        }
        console.log("Menu ativo?" , this.menu);
    }

    bindEvents() {
        window.addEventListener('scroll', () => {

            const targetSection = document.querySelector('.section-schedule');
            const start = targetSection.offsetTop;
            const end = start + targetSection.offsetHeight;

            const whereToChange = window.scrollY + this.$hamburguer.offsetTop;

            if(whereToChange >= start && whereToChange <= end) 
               return this.$hamburguer.classList.toggle('nav-dark', true);
            
            this.$hamburguer.classList.remove('nav-dark');

        });
    }
}
let home = new Home();
home.$hamburguer.addEventListener('click', function() {
    home.toogleMenu();
});
export default new Home();