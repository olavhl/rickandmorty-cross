import {useState} from "react";

// Generic hook to fetch API and set Loading and Error
// Copied from lecture
const useApi = <T = unknown>(apiFunction: Function) => {
    const [data, setData] = useState<T>()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    async function request(...args: unknown[]) {
        try {
            setLoading(true)
            setError(false)
            const res = await apiFunction(...args)
            setData(res)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return {data, error, loading, request}
}

export default useApi;