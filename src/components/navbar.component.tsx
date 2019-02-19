import { createElement } from 'inferno-create-element';
import { Component } from '~/platform';

export const navbarComponent = () => {
    const selector = 'app-navbar'

    class NavbarComponent extends Component {
        
        css() {
            return `
                :host {
                    display: flex;
                    height: 80px;
                    background-color: #01579b;
                    color: white;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    font-weight 500;
                }
            `
        }
        
        render() {
            return <slot></slot>
        }
    }

    customElements.define(selector, NavbarComponent)
}