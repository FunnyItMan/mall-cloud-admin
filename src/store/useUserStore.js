import {defineStore} from 'pinia'

const useUserStore = defineStore("user-store", {
        state: () => {
            return {}
        },
        persist: {
            key: "user-store",
            storage: window.localStorage
        }
    }
)

export default useUserStore;