import ProductList from '../ProductList';

function AllProducts() {
  return (
    <div>
      <ProductList
        filterType="all"
        title="All Products"
        description="Complete product catalog:"
      />
    </div>
  );
}

export default AllProducts;
