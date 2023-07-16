import { useEffect } from "react"

const useDebounce = (callback = () => { }, delay = 500, arrayDep = []) => {
    useEffect(() => {
        var debounced = setTimeout(() => callback(), delay)
        return () => clearTimeout(debounced)
    }, [...arrayDep])
}

export default useDebounce