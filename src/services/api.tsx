
import { client } from "../supabase/client";

// Obtener todos los personajes
export async function getAllProducts() {
  const { data, error } = await client
    .from("productos")
    .select("*");

  if (error) throw error;
  return data;
}
//Obtiene todos los productos de una categoría
export async function getAllProductsByCategory(category: number) {
  const { data, error } = await client
    .from("productos")
    .select("*")
    .eq("category", category);

  if (error) throw error;
  return data;
}
// Obtiene todos los productos destacados
export async function getFeaturedProducts() {
  const { data, error } = await client
  .from('productos_destacados')
  .select(`
    id,
    productos (
      id,
      nombre,
      precio,
      descripcion,
      imagen_path,
      stock
    )
  `);

  if (error) throw error;
  console.log(data);
  return data;
}
