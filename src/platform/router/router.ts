import Navigo from 'navigo'

export interface Route {
    path: string,
    componentName: string
}

export class Router {
    public engine: Navigo
    private currentRoute: HTMLElement | null = null

    constructor(
        public routes: Route[],
        private routerOutlet = document.getElementById('router-outlet')
    ) {
        if (!this.routerOutlet) {
            throw new Error('No outlet found')
        }
        this.engine = new Navigo()

        const routingObeject: any = {}

        for (const route of routes) {
            routingObeject[route.path] = this.setRoute(route.componentName)
        }

        this.engine.on(routingObeject).resolve()
    }

    private setRoute(componentName: string) {
        return (params: Record<string, string>, query: string) => {
            if (!this.routerOutlet) {
                throw new Error('No outlet found')
            }
            const incomingPage = document.createElement(componentName)
            if (this.currentRoute) {
                this.routerOutlet.removeChild(this.currentRoute)
            }
            this.currentRoute = incomingPage
            this.routerOutlet.appendChild(incomingPage)
        }
    }

    public navigate(path: string, absolute?: boolean) {
        this.engine.navigate(path, absolute)
    }
    
}