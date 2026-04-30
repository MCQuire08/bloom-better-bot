import CollectionPage from "@/components/CollectionPage";
import { productos } from "@/data/productos";
// Usaremos la imagen hero de alguna colección o una imagen general.
// Para este ejemplo, usamos la de grandes. Puedes cambiarla si quieres.
import heroImg from "@/assets/collection-grandes.jpg";

const Productos = () => (
  <CollectionPage
    eyebrow="Catálogo"
    title={"Todos los\nProductos"}
    description="Explora nuestra selección completa de arreglos florales, diseñados para cada ocasión especial."
    heroImage={heroImg}
    products={productos}
  />
);

export default Productos;
