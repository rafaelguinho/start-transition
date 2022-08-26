import { useState, useTransition } from "react";

import { generateProducts } from "./data";
import ProductList from "./components/ProductList";

const dummyProducts = generateProducts();

function filterProducts(filterTerm: string) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function App() {
  const [filterTerm, setFilterTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredProducts = filterProducts(filterTerm);

  async function updateFilterHandler(event: any) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });

    //setFilterTerm(event.target.value);
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p style={{ color: "white" }}>Carregando...</p>}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
