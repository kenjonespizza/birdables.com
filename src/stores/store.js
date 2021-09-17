import { writable } from 'svelte/store';

export const ShowHeaderFooter = writable(true);
export const selectedFilers = writable([]);