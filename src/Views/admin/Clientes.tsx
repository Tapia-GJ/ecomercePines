"use client";

import SideBar from "../../components/SideBar";
import HeaderAdmi from "../../components/HeaderAdmi";

export default function Dashboard() {
  const clients = Array(7).fill({
    id: "#0000",
    nombre: "Cliente Ejemplo",
    email: "cliente@example.com",
    estado: "Activo",
    pedidos: 5,
    totalGastado: "$123.45",
  });

  return (
    <div className="min-h-screen bg-white flex">
      <SideBar />

      <div className="flex-1 flex flex-col">
        <HeaderAdmi />

        <main className="flex-1 p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">Clientes</h2>
            <p className="text-gray-500 text-sm">Clientes registrados y no registrados en Chibiquiles</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                  <tr>
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">Nombre del Cliente</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Estado</th>
                    <th className="px-6 py-3 text-left">Pedidos</th>
                    <th className="px-6 py-3 text-left">Total Gastado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {clients.map((cliente, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">{cliente.id}</td>
                      <td className="px-6 py-4 text-gray-700">{cliente.nombre}</td>
                      <td className="px-6 py-4 text-gray-700">{cliente.email}</td>
                      <td className="px-6 py-4 text-gray-700">{cliente.estado}</td>
                      <td className="px-6 py-4 text-gray-700">{cliente.pedidos}</td>
                      <td className="px-6 py-4 text-gray-700">{cliente.totalGastado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
