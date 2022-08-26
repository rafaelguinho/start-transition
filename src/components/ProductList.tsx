function ProductList({ products }: any) {
    return (
      <ul>
        {products.map((product: any) => (
          <li>{product}</li>
        ))}
      </ul>
    );
  }
  
  export default ProductList;
  