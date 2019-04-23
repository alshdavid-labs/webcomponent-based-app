import Navigo from 'navigo'
import ReactDOM from 'react-dom'
import React from 'react'
export interface Route {
    path: string,
    component: any
}

export class Router {
    public engine: Navigo
    private currentRoute: HTMLElement | null = null

    constructor(
        private routerOutlet = document.getElementById('router-outlet')
    ) {
        if (!this.routerOutlet) {
            throw new Error('No outlet found')
        }
        this.engine = new Navigo()
    }

    init(routes: Route[]) {
        const routingObeject: any = {}

        for (const route of routes) {
            routingObeject[route.path] = this.setRoute(route.component)
        }

        this.engine.on(routingObeject).resolve()
    }

    private setRoute(component: any) {
        return (params: Record<string, string>, query: string) => {
            if (!this.routerOutlet) {
                throw new Error('No outlet found')
            }
            ReactDOM.unmountComponentAtNode(this.routerOutlet)
            ReactDOM.render(React.createElement(component), this.routerOutlet)
        }
    }

    public navigate(path: string, absolute?: boolean) {
        this.engine.navigate(path, absolute)
    }
    
}