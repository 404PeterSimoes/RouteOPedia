import { Link } from 'react-router-dom';
import { allProducts } from '../../data/products';

function ProductList() {
  return (
    <div className="py-2">
      <h2>All Products</h2>
      <p>Browse our complete product catalog</p>
      <div className="mt-3">
        {allProducts.map((product) => (
          <div key={product.id} className="border rounded p-3 mb-3">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <Link
              to={`/products/item/${product.id}`}
              className="btn btn-outline-success"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
