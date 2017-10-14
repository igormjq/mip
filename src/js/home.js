class Home {
    constructor() {
        this.$menu = document.querySelector('nav');
        this.$hamburguer = document.querySelector('.mobile-nav-button');

        this.$btns = document.querySelectorAll('.btn-scroll');
        this.$sections = document.querySelectorAll('.section-scroll');
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


        function scrollIt(element) {
            window.scrollTo({
                'behavior': 'smooth',
                'left': 0,
                'top': element.offsetTop
            });
        }
        this.$btns.forEach((element, index, array) => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                this.$menu.classList.toggle('active');
                this.$menu.classList.toggle('inactive');
                scrollIt(this.$sections[index]);
            })
        })
    }
}

export default new Home();