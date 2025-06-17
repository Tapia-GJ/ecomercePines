"use client";

import SideBar from "../../components/SideBar";
import HeaderAdmi from "../../components/HeaderAdmi";


export default function Dashboard() {
  const orders = Array(7).fill({
    id: "#0000",
    cliente: "Pin Lorem",
    fecha: "Pin Lorem",
    estado: "Pin Lorem",
    comentario: "Pin Lorem",
    total: "Pin Lorem",
  });

  return (
    <div className="min-h-screen bg-white flex">
      <SideBar />

      <div className="flex-1 flex flex-col">
        <HeaderAdmi />

        <main className="flex-1 p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">Pedidos</h2>
            <p className="text-gray-500 text-sm">Estados de los pedidos</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                  <tr>
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">Cliente</th>
                    <th className="px-6 py-3 text-left">Fecha</th>
                    <th className="px-6 py-3 text-left">Estado</th>
                    <th className="px-6 py-3 text-left">Comentario</th>
                    <th className="px-6 py-3 text-left">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">{order.id}</td>
                      <td className="px-6 py-4 text-gray-700">{order.cliente}</td>
                      <td className="px-6 py-4 text-gray-700">{order.fecha}</td>
                      <td className="px-6 py-4 text-gray-700">{order.estado}</td>
                      <td className="px-6 py-4 text-gray-700">{order.comentario}</td>
                      <td className="px-6 py-4 text-gray-700">{order.total}</td>
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
