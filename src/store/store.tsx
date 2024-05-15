import { makeAutoObservable } from "mobx"

function createDoubler(value : number) {
    return makeAutoObservable({
        value,
        get double() {
            return this.value * 2
        },
        increment() {
            this.value++
        }
    })
}

export default createDoubler(0);