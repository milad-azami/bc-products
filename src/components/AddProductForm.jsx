import { useState } from "react";

import { useCreateProduct } from "../services/mutations";

function AddProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  const { mutate } = useCreateProduct();

  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };

  const addHandler = (event) => {
    event.preventDefault();

    const { name, price } = form;

    if (!name || !price) return;

    mutate(form, {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => console.log(error),
    });
  };

  return (
    <form onSubmit={addHandler}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={form.name}
        onChange={changeHandler}
      />
      <input
        type="number"
        name="price"
        placeholder="price"
        value={form.price}
        onChange={changeHandler}
      />
      <input
        type="number"
        name="quantity"
        placeholder="confirm password"
        value={form.quantity}
        onChange={changeHandler}
      />
      <button type="submit">Add New Product</button>
    </form>
  );
}

export default AddProductForm;
