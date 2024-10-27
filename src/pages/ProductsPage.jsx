import { useState } from "react";
import AddProductForm from "../components/AddProductForm";
import ProductCard from "../components/ProductCard";
import { useGetAllProducts } from "../services/queries";

function ProductsPage() {
  const [page, setPage] = useState(1);
  const { data, error, isPending } = useGetAllProducts(page);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <h4>Products List:</h4>
      <ul>
        {data?.data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <button onClick={() => setPage(2)}>go to page #2</button>
      </ul>
      <AddProductForm />
    </div>
  );
}

export default ProductsPage;
