export const productApi = {
    getProducts: async () => {
        const response = await fetch(`https://dummyjson.com/products?limit=200`);
        if (!response.ok) {
            throw new Error("404 products not found")
        }
        const data = await response.json();
        return data?.products
    },
    getProductsById: async (id) => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
            throw new Error("404 products not found")
        }
        const data = await response.json();
        return data
    }
}