import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../services/mutations";
import { setCookie } from "../utils/cookie";

function LoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { mutate } = useLogin();

  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };

  const loginHandler = (event) => {
    event.preventDefault();

    const { username, password } = form;

    if (!username || !password)
      return alert("User Name and Password is Necessary");

    mutate(form, {
      onSuccess: (data) => {
        console.log(data.data);
        setCookie("token", data.data?.token);
        navigate("/");
      },
      onError: (error) => console.log(error.response.data.message),
    });
  };

  return (
    <form onSubmit={loginHandler}>
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
      <button type="submit">Register</button>
    </form>
  );
}

export default LoginPage;
