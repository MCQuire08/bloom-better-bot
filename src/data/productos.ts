export type Categoria = "Ramos" | "Regalos" | "Perfumes";
export type SubCategoria = 
  | "Ramos Grandes" 
  | "Ramos pequeños" 
  | "Cajas y Jarrones" 
  | "Boda" 
  | "Dulces" 
  | "Peluches" 
  | "Hombres" 
  | "Mujeres";

export interface Producto {
  id: string;
  name: string;
  price: number;
  image: string;
  categoria: Categoria;
  subcategoria: SubCategoria;
  tag?: string;
  description?: string;
}

export const productos: Producto[] = [
  {
    id: "prod-1",
    name: "Primaveral Imperial",
    price: 45000,
    image: "/productos/ramo-grande1.jpg",
    categoria: "Ramos",
    subcategoria: "Ramos Grandes",
    description: "Un hermoso arreglo floral grande.",
    tag: "Bestseller"
  },
  {
    id: "prod-2",
    name: "Primaveral Imperial",
    price: 45000,
    image: "/productos/ramo-grande2.jpg",
    categoria: "Ramos",
    subcategoria: "Ramos Grandes",
    description: "Un hermoso arreglo floral grande.",
  },
  {
    id: "prod-3",
    name: "Primaveral Imperial",
    price: 45000,
    image: "/productos/ramo-grande3.jpg",
    categoria: "Ramos",
    subcategoria: "Ramos Grandes",
    description: "Un hermoso arreglo floral grande.",
  },
  {
    id: "prod-4",
    name: "Primaveral Imperial",
    price: 45000,
    image: "/productos/ramo-grande4.jpg",
    categoria: "Ramos",
    subcategoria: "Ramos Grandes",
    description: "Un hermoso arreglo floral grande.",
  },
  {
    id: "prod-5",
    name: "Detalle de Amor",
    price: 25000,
    image: "/productos/ramo-pequeno.jpg",
    categoria: "Ramos",
    subcategoria: "Ramos pequeños",
    description: "Ideal para regalar."
  },
  {
    id: "prod-6",
    name: "Detalle de Amor",
    price: 25000,
    image: "/productos/ramo-pequeno2.jpg",
    categoria: "Ramos",
    subcategoria: "Ramos pequeños",
    description: "Ideal para regalar."
  },
  {
    id: "prod-7",
    name: "Detalle de Amor",
    price: 25000,
    image: "/productos/ramo-pequeno3.jpg",
    categoria: "Ramos",
    subcategoria: "Ramos pequeños",
    description: "Ideal para regalar."
  },
  {
    id: "prod-8",
    name: "Detalle de Amor",
    price: 25000,
    image: "/productos/ramo-pequeno4.jpg",
    categoria: "Ramos",
    subcategoria: "Ramos pequeños",
    description: "Ideal para regalar."
  },
  {
    id: "prod-3",
    name: "Jarrón de Tulipanes",
    price: 55000,
    image: "/productos/placeholder.jpg",
    categoria: "Ramos",
    subcategoria: "Cajas y Jarrones",
    description: "Elegancia en cada detalle."
  },
  {
    id: "prod-4",
    name: "Caja de Chocolates Premium",
    price: 15000,
    image: "/productos/placeholder.jpg",
    categoria: "Regalos",
    subcategoria: "Dulces",
    description: "Surtido de chocolates finos."
  },
  {
    id: "prod-5",
    name: "Oso de Peluche Gigante",
    price: 30000,
    image: "/productos/placeholder.jpg",
    categoria: "Regalos",
    subcategoria: "Peluches",
    description: "Suave y abrazable."
  },
  {
    id: "prod-6",
    name: "Perfume Aqua pour Homme",
    price: 60000,
    image: "/productos/placeholder.jpg",
    categoria: "Perfumes",
    subcategoria: "Hombres",
    description: "Fragancia masculina."
  },
  {
    id: "prod-7",
    name: "Perfume Flora Essence",
    price: 65000,
    image: "/productos/placeholder.jpg",
    categoria: "Perfumes",
    subcategoria: "Mujeres",
    description: "Fragancia femenina floral."
  }
];
