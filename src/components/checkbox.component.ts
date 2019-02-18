export const bootstrapCheckboxComponent = () => {
    const props = {
        checked: 'checked'
    }

    class CheckboxComponent extends HTMLElement { 
        static get observedAttributes() {
            return [ props.checked ];
        }

        get checked() {
            return (this.getAttribute(props.checked) === 'true')
        }

        attributeChangedCallback(name: string) {
            if (name === props.checked) {
                this.onCheckedUpdated()
            }
        }
        
        connectedCallback() {
            this.style.cssText = `
                display: block;
                height: 20px;
                width: 20px;
                border: #666 solid 4px;
                border-radius: 8px;
            `
            this.onCheckedUpdated()
        }

        onCheckedUpdated() {
            if (this.checked) {
                this.style.backgroundColor = '#666'
            } else {
                this.style.backgroundColor = '#fff'
            }
        }
    }

    customElements.define('app-checkbox', CheckboxComponent)
}