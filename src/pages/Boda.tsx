import { productos } from "@/data/productos";
import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-boda.jpg";

const products = productos.filter(p => p.subcategoria === "Boda");

const Boda = () => (
  <CollectionPage
    eyebrow="Colección"
    title={"Ramos\nde Boda"}
    description="El día más importante merece flores que cuenten tu historia. Diseños hechos a medida, con consultoría personalizada para tu boda soñada."
    heroImage={img}
    products={products}
  />
);

export default Boda;
