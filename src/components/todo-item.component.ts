export const bootstrapTodoComponent = () => {
    const props = {
        item: 'item',
        date: 'date',
        completed: 'completed'
    }

    class TodoComponent extends HTMLElement { 
        static get observedAttributes() {
            return [props.item, props.date, props.completed];
        }

        private refs = {
            item: document.createElement('div'),
            date: document.createElement('div'),
            completed: document.createElement('app-checkbox')
        }

        private onUpdate = {
            item: () => this.refs.item.innerHTML = this.getAttribute(props.item) || '',
            date: () => this.refs.date.innerHTML = this.getAttribute(props.date) || '',
            completed: () => this.refs.completed.setAttribute('checked', this.getAttribute(props.completed) || 'false')
        }

        attributeChangedCallback(name: string, oldValue: string, newValue: string) {
            if (name === props.item) {
                this.onUpdate.item()
            }
            if (name === props.date) {
                this.onUpdate.date()
            }
            if (name === props.completed) {
                this.onUpdate.completed()
            }
        }
        
        connectedCallback() {
            this.appendChild(this.refs.item)
            this.appendChild(this.refs.date)
            this.appendChild(this.refs.completed)

            this.style.cssText = `
                display: flex;
                height: 100px;
                flex-direction: column;
                justify-content: center;
                border-bottom: #e0e0e0 solid 1px;
                padding-left: 20px;
                position: relative;
            `
            this.refs.item.style.cssText = `
                display: block;
                padding: 8px 0px;
                font-weight: 500;
                font-size: 18px;
            `
            this.refs.date.style.cssText = `
                display: block;
                padding: 8px 0px;
            `
            this.refs.completed.style.cssText += `
                position: absolute;
                right: 20px;
                top: calc(50% - 14px);
            `
            
            this.onUpdate.item()
            this.onUpdate.date()
            this.onUpdate.completed()
        }
    }

    customElements.define('app-todo-item', TodoComponent)
}