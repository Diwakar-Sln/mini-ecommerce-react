import { useEffect, useState } from "react"

function useFetchProductsById(productApi, id) {
    const [products, setProducts] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const data = await productApi.getProductsById(id);
                console.log("API DATA:", data);
                setProducts(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        if(id){
            fetchProducts();
        }
    }, [id,productApi])

    return {products, isLoading, error}
}

export default useFetchProductsById;