import { cloneDeep } from 'lodash'

export function Observe(rx: any) {
    return function(target: any, key: any) {
        let subscription: any
        const targetComponentDidMount = target.componentDidMount || function (){}
        const targetComponentWillUnmount = target.componentWillUnmount || function (){}
        
        function componentDidMount(this: any): void {
            subscription = rx.subscribe((v: any) => {
                this[key] = v
                this.setState({ ...cloneDeep(this.state), [key]: v })
            })
            targetComponentDidMount.apply(this)
        }

        function componentWillUnmount(this: any): void {
            if (subscription.unsubscribe) {
                subscription.unsubscribe()
            } else {
                subscription()
            }
            targetComponentWillUnmount.apply(this)
        }


        target.componentDidMount = componentDidMount
        target.componentWillUnmount = componentWillUnmount
    }
}