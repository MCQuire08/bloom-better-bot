import { productos } from "@/data/productos";
import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-grandes.jpg";

const products = productos.filter(p => p.subcategoria === "Cajas y Jarrones");

const CajasJarrones = () => (
  <CollectionPage
    eyebrow="Colección"
    title="Cajas y Jarrones"
    description="Arreglos en cajas premium y jarrones de cristal. Una presentación elegante que perdura más allá del momento."
    heroImage={img}
    products={products}
  />
);

export default CajasJarrones;
