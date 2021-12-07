class SimpleFAB {
    constructor(menuElement) {
        this.menu = menuElement;

        const items = this.menu.querySelectorAll('.sfab__item');
        const toggleBtn = this.menu.querySelector('.sfab__toggle');

        menuElement.style.cssText = `--items-count: ${items.length};`
        items.forEach((item, i) => item.style.cssText = `--i:${i}`)
        toggleBtn.addEventListener('click', () => this.menu.classList.toggle('active'))
    }

    open() {
        this.menu.classList.add('active')
    }

    close() {
        this.menu.classList.remove('active')
    }

    getMenu() {
        return this.menu
    }
}