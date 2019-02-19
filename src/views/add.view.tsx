import { createElement } from 'inferno-create-element';
import { cloneDeep } from 'lodash'
import { Router, Component } from "~/platform"


export const addViewComponent = (
    router: Router
) => {
    const selector = 'app-view-add'

    class AddViewComponent extends Component {
        state:any = {
            items: {
                one: 'hi',
                two: 'hii',
                three: 'hiii'
            }
        }

        addOne() {
            const newState = cloneDeep(this.state)
            newState.items[Object.keys(this.state.items).length + 1] = 'suuuhh'
            this.state = newState
        }

        render() {
            return <div>
                { 
                    Object.keys(this.state.items).map(item => 
                        <div style={{ "border-bottom": '1px solid #000' }}>
                            <div>{item}</div>
                            <div>{this.state.items[item]}</div>
                        </div>
                    )                    
                }
                <button onclick={() => this.addOne()}>Add</button>
            </div>
        }
    }

    customElements.define(selector, AddViewComponent)
}
