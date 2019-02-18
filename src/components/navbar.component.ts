import Navigo from 'navigo'

export const bootstrapNavbarComponent = () => {

    class NavbarComponent extends HTMLElement {
        static get observedAttributes() {
            return ['title'];
        }

        attributeChangedCallback(name: string, oldValue: string, newValue: string) {
            if (name === 'title') {
                this.onTitleUpdate()
            }
        }
        
        connectedCallback() { 
            this.onTitleUpdate()
            this.style.cssText = `
                display: flex;
                height: 80px;
                background-color: #01579b;
                color: white;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                font-weight 500;
            `
        }

        onTitleUpdate() {
            this.innerHTML = this.getAttribute('title') || ''
        }
    }

    customElements.define('app-navbar', NavbarComponent)

}