import { productos } from "@/data/productos";
import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-grandes.jpg";

const products = productos.filter(p => p.subcategoria === "Ramos Grandes");

const Grandes = () => (
  <CollectionPage
    eyebrow="Colección"
    title={"Ramos\nGrandes"}
    description="Composiciones generosas que llenan cualquier espacio de color y aroma. Perfectas para aniversarios, sorpresas y declaraciones inolvidables."
    heroImage={img}
    products={products}
  />
);

export default Grandes;
