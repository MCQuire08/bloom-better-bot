import { productos } from "@/data/productos";
import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-perfumes.jpg";

const products = productos.filter(p => p.subcategoria === "Mujeres");

const PerfumesMujer = () => (
  <CollectionPage
    eyebrow="Perfumes"
    title="Mujeres"
    description="Fragancias femeninas inspiradas en jardines en flor. Elegancia embotellada para cada momento."
    heroImage={img}
    products={products}
  />
);

export default PerfumesMujer;
