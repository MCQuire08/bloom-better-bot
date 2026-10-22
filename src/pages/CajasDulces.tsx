import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-regalos.jpg";
import { productos } from "@/data/productos";

const products = productos.filter((p) => p.subcategoria === "Cajas Dulces");

const CajasDulces = () => (
  <CollectionPage
    eyebrow="Regalos"
    title="Cajas Dulces"
    description="Cajas con dulces, globos y peluches para regalar en cualquier ocasión."
    heroImage={img}
    products={products}
  />
);

export default CajasDulces;
