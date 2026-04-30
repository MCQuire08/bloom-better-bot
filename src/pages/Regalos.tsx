import { productos } from "@/data/productos";
import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-regalos.jpg";

const products = productos.filter(p => p.categoria === "Regalos");

const Regalos = () => (
  <CollectionPage
    eyebrow="Colección"
    title="Regalos"
    description="Cajas de regalo curadas con detalles únicos. Combina flores, dulces, velas y más para crear el obsequio perfecto."
    heroImage={img}
    products={products}
  />
);

export default Regalos;
