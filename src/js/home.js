class Home {
    constructor() {
        //console.log('calledHESAU');
        this.menu = false;
        this.$menu = document.querySelector('nav');
        this.$hamburguer = document.querySelector('.mobile-nav-button');
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
}
let home = new Home();
home.$hamburguer.addEventListener('click', function() {
    home.toogleMenu();
});
export default new Home();