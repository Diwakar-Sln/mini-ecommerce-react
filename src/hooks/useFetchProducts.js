import { useEffect, useState } from "react"

function useFetchProducts(productApi) {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const data = await productApi();
                setProducts(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchProducts();
    }, [])

    return {products, isLoading, error}
}

export default useFetchProducts;