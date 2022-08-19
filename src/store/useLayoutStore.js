import {defineStore} from 'pinia'

const useLayoutStore = defineStore("layout-store", {
        state: () => {
            return {
                collapse: true,
            }
        },
        actions: {
            changeCollapse() {
                this.collapse = !this.collapse
            }
        },
        persist: {
            key: "layout-store",
            storage: window.localStorage
        }
    }
)

export default useLayoutStore;