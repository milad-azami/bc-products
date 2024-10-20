import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRegister } from "../services/mutations";

function RegistrationPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { mutate } = useRegister();

  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };

  const registerHandler = (event) => {
    event.preventDefault();

    const { username, password, confirmPassword } = form;

    if (!username || !password)
      return alert("User Name and Password is Necessary");
    if (password !== confirmPassword) return alert("Passwords Isn't The Same!");

    mutate(
      { username, password },
      {
        onSuccess: (data) => {
          console.log(data.data.message);
          navigate("/login");
        },
        onError: (error) => console.log(error.response.data.message),
      }
    );
  };

  return (
    <form onSubmit={registerHandler}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={form.username}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        value={form.confirmPassword}
        onChange={changeHandler}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationPage;
