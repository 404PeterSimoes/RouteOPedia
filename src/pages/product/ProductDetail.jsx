import { Link, useParams } from 'react-router-dom';
import { allProducts } from '../../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id == parseInt(id));

  if (!product) {
    return (
      <div className="m-3 p-3 border">
        <h1>❌ Product Not Found</h1>
        <p>Product with ID "{id}" doesn't exist.</p>
        <Link to="/products" className="btn btn-outline-success my-2">
          ← Back to Products
        </Link>
      </div>
    );
  }
  return (
    <div className="m-3 p-3 border">
      <Link to="/products" className="btn btn-outline-success my-2">
        ← Back to Products
      </Link>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Category: ${product.category}</p>
      <p>Dynamic route with ID: {id}</p>
    </div>
  );
}

export default ProductDetail;
