import SideBar from '../../components/SideBar';
import HeaderAdmi from '../../components/HeaderAdmi';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { getAllProducts } from "../../services/api"; // tu función que ya consulta
import { exportProductsToExcel } from "../../utils/exportToExcel";


export default function Dashboard() {

  async function handleExportExcel() {
    try {
      const productos = await getAllProducts();
      if (!productos || productos.length === 0) {
        alert("No hay productos para exportar");
        return;
      }

      // Puedes mapear los campos si quieres renombrar columnas
      const data = productos.map((p) => ({
        ID: p.id,
        Nombre: p.nombre,
        Categoría: p.categoria_id,
        Stock: p.stock,
        Precio: `$${p.precio}`,
      }));

      exportProductsToExcel(data);
    } catch (error) {
      console.error("Error exportando productos:", error);
    }
  }


  return (
    <div className="min-h-screen bg-white flex">
      <SideBar />

      <div className="flex-1 flex flex-col">
        <HeaderAdmi />

        <main className="flex-1 p-10">
          {/* Título y botón */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Productos Populares</h1>
              <p className="text-sm text-gray-400">Productos más vendidos</p>
            </div>
            <div className='gap-2 flex items-center'>

              <button className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 text-sm">
              <Plus className="w-4 h-4" /> Añadir producto
            </button>

            <button
              onClick={handleExportExcel}
              className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 text-sm"
            >
              Descargar Excel
            </button>
            </div>
            

          </div>

          {/* Tabla de productos */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                  <tr>
                    {["ID", "Imagen", "Nombre", "Categoría", "Stock", "Precio", "Acciones"].map((col) => (
                      <th key={col} className="px-6 py-3 text-left tracking-wider">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[1, 2, 3, 4, 5].map((id) => (
                    <tr key={id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">{id}</td>
                      <td className="px-6 py-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">Pin Lorem</td>
                      <td className="px-6 py-4 text-gray-700">Accesorios</td>
                      <td className="px-6 py-4 text-gray-900">15</td>
                      <td className="px-6 py-4 text-gray-900">$99.99</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="inline-flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button className="inline-flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
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
