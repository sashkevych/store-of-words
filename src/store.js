import { writable } from "svelte/store";


export let oldData = writable()
export let newData = writable()
export let alsoToday = writable()
export let workLog = writable()
export let oldWorkLog = writable()

export let isFocusDiv = writable({
    event: false,
    box_id: '',
    sentence_id: ''
})
export let onFocusDiv = writable(false)



export let isExtraMenu = writable(false)
export let extraDataIs = writable()
export let extraMenuData = writable()