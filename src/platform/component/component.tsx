import { createElement } from 'inferno-create-element';
import { render } from 'inferno';

export interface IComponent {
    selector: string
}

export class Component extends HTMLElement {
    public host: ShadowRoot
    private localState = {}
    private styleElement = document.createElement('style')
    
    public get state() {
        return this.localState
    }

    public set state(value: Record<any, any>) {
        this.localState = value
        this.doRender()
    }

    constructor() {
        super()
        this.host = this.attachShadow({ mode: 'open' })
        this.styleElement.innerHTML = this.css()
        this.host.appendChild(this.styleElement)
        this.doRender()
    }

    public render() {
        return <div></div>
    }

    public doRender() {
        render(this.render(), this.host)
    }

    public css() {
        return ''
    }
}