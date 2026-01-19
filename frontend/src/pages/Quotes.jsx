import { useEffect, useState } from "react";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

 useEffect(() => {
  setTimeout(() => {
    setQuotes([
      { id: 1, clientName: "Juan", description: "Cambio de aceite", estimatedPrice: 25000 },
      { id: 2, clientName: "María", description: "Frenos", estimatedPrice: 40000 },
    ]);
  }, 0);
}, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Cotizaciones</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quotes.map(q => (
          <div key={q.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">{q.clientName}</h2>
            <p>{q.description}</p>
            <p className="font-bold mt-2">${q.estimatedPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}