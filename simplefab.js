class SimpleFAB {
    _menuCollection = Object()

    constructor(menuElement) {
        menuElement.forEach(menu => {
            const items = menu.querySelectorAll('.sfab__item');
            const toggleBtn = menu.querySelector('.sfab__toggle');

            menu.style.cssText = `--items-count: ${items.length};`
            items.forEach((item, i) => item.style.cssText = `--i:${i}`)
            toggleBtn.addEventListener('click', () => menu.classList.toggle('active'))

            // Store all menu with id in map
            if (menu.id) {
                this._menuCollection[menu.id] = menu
            }
        })
    }

    open(menuId) {
        this._menuCollection[menuId].classList.add('active')
    }

    close(menuId) {
        this._menuCollection[menuId].classList.remove('active')
    }

    getMenu(menuId) {
        return this._menuCollection[menuId]
    }
}