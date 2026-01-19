import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const submit = (e) => {
    e.preventDefault();
    alert("Aquí irá el registro con el backend Nest");
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Crear cuenta</h1>

      <input 
        placeholder="Nombre"
        className="w-full p-2 mb-3 border rounded"
        onChange={(e)=>setForm({...form, name:e.target.value})}
      />

      <input 
        type="email"
        placeholder="Correo"
        className="w-full p-2 mb-3 border rounded"
        onChange={(e)=>setForm({...form, email:e.target.value})}
      />

      <input 
        type="password"
        placeholder="Contraseña"
        className="w-full p-2 mb-3 border rounded"
        onChange={(e)=>setForm({...form, password:e.target.value})}
      />

      <button className="w-full bg-green-600 text-white p-2 rounded">
        Registrarse
      </button>
    </form>
  );
}