import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
  e.preventDefault();
  console.log("Email:", email);
  console.log("Password:", password);
};

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Ingresar</h1>

      <input 
        type="email"
        placeholder="Correo"
        className="w-full p-2 mb-3 border rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input 
        type="password"
        placeholder="Contraseña"
        className="w-full p-2 mb-3 border rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full bg-blue-600 text-white p-2 rounded">
        Iniciar sesión
      </button>
    </form>
  );
}