import { useState } from "react";
import CryptoJS from "crypto-js";

import useToken from "@hooks/useToken";
import useNavigate from "@hooks/useNavigate";

import Input from "@components/Input";
import { Button } from "react-bootstrap";

function Login() {
  const { setToken } = useToken();
  const { navigate } = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const processLogin = async () => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const { access_token } = await response.json();

    if (!response.ok) {
      alert("Usuario inválido, inténtalo nuevamente");
      return;
    }

    console.log("token: ", access_token);

    setToken(access_token);
    navigate("/");

    window.location.replace("#/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    processLogin();
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuario"
          type="text"
          value={username}
          onChange={(value) => setUsername(value)}
        />
        <Input
          label="Contraseña"
          type="password"
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <Button type="submit" variant="primary">
          Ingresar
        </Button>
      </form>
    </div>
  );
}

export default Login;
