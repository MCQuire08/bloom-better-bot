import { productos } from "@/data/productos";
import CollectionPage from "@/components/CollectionPage";
import img from "@/assets/collection-perfumes.jpg";

const products = productos.filter(p => p.subcategoria === "Hombres");

const PerfumesHombre = () => (
  <CollectionPage
    eyebrow="Perfumes"
    title="Hombres"
    description="Fragancias masculinas con carácter. Notas amaderadas, especiadas y frescas para cada ocasión."
    heroImage={img}
    products={products}
  />
);

export default PerfumesHombre;
