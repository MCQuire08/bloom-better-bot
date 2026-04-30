import { productos } from "@/data/productos";
import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-perfumes.jpg";

const products = productos.filter(p => p.categoria === "Perfumes");

const Perfumes = () => (
  <CollectionPage
    eyebrow="Colección"
    title="Perfumes"
    description="Fragancias inspiradas en nuestras flores favoritas. Elegancia embotellada para acompañarte cada día."
    heroImage={img}
    products={products}
  />
);

export default Perfumes;
