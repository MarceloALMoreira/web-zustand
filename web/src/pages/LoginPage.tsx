import { useState } from "react";
import { loginRequest, profileRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setToken = useAuthStore((state) => state.setToken); // ensure store is initialized before rendering the component
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resLogin = await loginRequest(email, password); // TODO: enviar para o servidor

    //se passar aqui ja está authenticado
    setToken(resLogin.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data.profile);

    //apos o login manda para /proxima pagina de desejo
    navigate("/profile");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email@email.com"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="********"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
