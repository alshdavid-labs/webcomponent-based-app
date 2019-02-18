import Navigo from 'navigo'

export const bootstrapAddViewComponent = (router: Navigo) => {

    class AddViewComponent extends HTMLElement {
        private elements = {
            title: document.createElement('div')
        }
        
        connectedCallback() {
            this.elements.title.innerHTML = 'Add View'
            this.elements.title.onclick = () => router.navigate('/')
            this.appendChild(this.elements.title)
        }
    }

    customElements.define('app-view-add', AddViewComponent)

}