import { FormEvent, useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "30%",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{ padding: "10px", borderRadius: "15px", width: "100%" }}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", borderRadius: "15px", width: "100%" }}
      />
      <button
        style={{ padding: "10px", borderRadius: "15px", width: "200px" }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
