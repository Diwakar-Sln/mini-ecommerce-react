import { Card } from '../component/Card'
import useFetchProducts from '../hooks/useFetchProducts'
import { productApi } from '../services/productApi'

const Home = () => {
  let {products, isLoading, error} = useFetchProducts(productApi);
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Welcome !</h2>
      <h4 style={{ marginBottom: "20px" }}>Our Products</h4>
      {
        isLoading ? <div>Loading...</div> :
          products.length === 0 ? <div>{error}</div> :
            <div style={{ display: "grid", alignItems: "center", gridTemplateColumns:"auto auto auto auto auto", gap: "20px" }}>
              {
                products.map((product) => <Card key={product.id} title={product.title} image={product.thumbnail} price={product.price} />)
              }
            </div>
      }
    </div>
  )
}

export default Home