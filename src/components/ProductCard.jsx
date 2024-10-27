import { useDeleteProduct } from "../services/mutations";

// eslint-disable-next-line
function ProductCard({ product }) {
  const { mutate } = useDeleteProduct();

  const deleteHandler = (id) => {
    const data = {
      ids: [id],
    };

    console.log(data);

    mutate(
      { data },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <li>
      {/* eslint-disable-next-line */}
      <p>{product?.name}</p>
      {/* eslint-disable-next-line */}
      <button onClick={() => deleteHandler(product?.id)}>delete</button>
    </li>
  );
}

export default ProductCard;
