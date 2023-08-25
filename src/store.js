import { writable } from "svelte/store";


export let oldData = writable()
export let newData = writable()

export let isFocusDiv = writable(false)