import { productos } from "@/data/productos";
import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-regalos.jpg";

const products = productos.filter(p => p.subcategoria === "Dulces");

const Dulces = () => (
  <CollectionPage
    eyebrow="Regalos"
    title="Dulces"
    description="Selección de chocolatería fina y dulces gourmet. El complemento perfecto para acompañar tus flores."
    heroImage={img}
    products={products}
  />
);

export default Dulces;
