import axios from 'axios'
import { useState } from 'react'
import { BACKEND_DOMAIN } from '../constants/env.constant'

const useAxios = () => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState('')
    const [loading, setloading] = useState(true)

    const fetch = ({ url, method, body = null, headers = null }) => {
        axios[method](`${BACKEND_DOMAIN}${url}`, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setResponse(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setloading(false)
            })
    }

    // useEffect(() => {
    //     fetch({ url, method, body, headers })
    // }, [method, url, body, headers])

    return {
        response, error, loading, fetch
    }
}

export default useAxios
