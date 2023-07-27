import {create} from "zustand";


const UseFavorites = create((set) =>({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    isOpen: false,
    show: () => set(({ isOpen: true })),
    onClose: () => set(({ isOpen: false })),
}))

export default UseFavorites;