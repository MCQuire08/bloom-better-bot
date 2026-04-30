import { productos } from "@/data/productos";
import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-regalos.jpg";

const products = productos.filter(p => p.subcategoria === "Peluches");

const Peluches = () => (
  <CollectionPage
    eyebrow="Regalos"
    title="Peluches"
    description="Peluches suaves y entrañables, ideales para acompañar un ramo y multiplicar la sonrisa."
    heroImage={img}
    products={products}
  />
);

export default Peluches;
