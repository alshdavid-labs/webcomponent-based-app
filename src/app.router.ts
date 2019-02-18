import Navigo from 'navigo'

export interface Route {
    path: string,
    componentName: string
}

export const bootstrapRouter = (router: Navigo, routes: Route[] ) => {
    const routerOutlet = document.getElementById('router-outlet')
    const navigate = (componentName: string) => (params: Record<string, string>, query: string) => {
        if (routerOutlet === null) {
            return
        }
        const incomingPage = document.createElement(componentName)
        routerOutlet.innerHTML = ''
        routerOutlet.appendChild(incomingPage)
    }
    
    const routingObeject: any = {}

    for (const route of routes) {
        routingObeject[route.path] = navigate(route.componentName)
    }

    router.on(routingObeject).resolve()
}