class Home {
    constructor() {
        this.$menu = document.querySelector('nav');
        this.$hamburguer = document.querySelector('.mobile-nav-button');
        this.bindEvents();
    }

    init() {
        // console.log(this.menu);
    }

    bindEvents() {
        window.addEventListener('scroll', () => {

            const targetSection = document.querySelector('.section-schedule');
            const start = targetSection.offsetTop;
            const end = start + targetSection.offsetHeight;

            const changingPoint = window.scrollY + this.$hamburguer.offsetTop;

            if(changingPoint >= start && changingPoint <= end) 
               return this.$hamburguer.classList.toggle('nav-dark', true);
            
            this.$hamburguer.classList.remove('nav-dark');

        });

        this.$hamburguer.addEventListener('click', () => {
            
            this.$menu.classList.toggle('active');
            this.$menu.classList.toggle('inactive');
            
        });
    }
}

export default new Home();