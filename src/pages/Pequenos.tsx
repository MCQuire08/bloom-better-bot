import { productos } from "@/data/productos";
import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-pequenos.jpg";

const products = productos.filter(p => p.subcategoria === "Ramos pequeños");

const Pequenos = () => (
  <CollectionPage
    eyebrow="Colección"
    title={"Ramos\nPequeños"}
    description="Detalles delicados llenos de personalidad. Pequeños gestos que dicen mucho, ideales para sorprender en cualquier momento del día."
    heroImage={img}
    products={products}
  />
);

export default Pequenos;
