import { User } from "lucide-react";

export default function HeaderAdmi() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">
        Gestión de Ecommerce "Chibiquiles"
      </h1>
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-600">Admin</span>
        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
          <User className="w-4 h-4 text-yellow-600" />
        </div>
      </div>
    </header>
  );
}
