import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Диван угловой Комфорт",
    price: 89900,
    oldPrice: 99900,
    image: "/placeholder.svg",
    category: "Диваны",
    description:
      "Удобный угловой диван с мягкими подушками и качественной обивкой",
    dimensions: "280x180x85 см",
    material: "Велюр, массив березы",
  },
  {
    id: 2,
    name: "Кресло Релакс",
    price: 34900,
    image: "/placeholder.svg",
    category: "Кресла",
    description: "Комфортное кресло для отдыха с механизмом качания",
    dimensions: "85x95x105 см",
    material: "Экокожа, металлический каркас",
  },
  {
    id: 3,
    name: "Кровать Люкс двуспальная",
    price: 67500,
    image: "/placeholder.svg",
    category: "Кровати",
    description: "Элегантная двуспальная кровать с мягким изголовьем",
    dimensions: "160x200x120 см",
    material: "ЛДСП, текстиль",
  },
  {
    id: 4,
    name: "Шкаф-купе Модерн",
    price: 45000,
    image: "/placeholder.svg",
    category: "Шкафы",
    description: "Вместительный шкаф-купе с зеркальными дверцами",
    dimensions: "220x60x240 см",
    material: "ЛДСП, зеркало, алюминий",
  },
  {
    id: 5,
    name: "Диван прямой Классик",
    price: 54900,
    image: "/placeholder.svg",
    category: "Диваны",
    description: "Классический прямой диван для гостиной",
    dimensions: "210x90x85 см",
    material: "Рогожка, пружинный блок",
  },
  {
    id: 6,
    name: "Кресло офисное Эргоном",
    price: 18900,
    image: "/placeholder.svg",
    category: "Кресла",
    description: "Эргономичное офисное кресло с поддержкой спины",
    dimensions: "65x65x110 см",
    material: "Сетка, пластик, газлифт",
  },
];

const categories = ["Все", "Диваны", "Кресла", "Кровати", "Шкафы"];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredProducts =
    activeCategory === "Все"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="catalog" className="py-16 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Каталог мебели
          </h2>
          <p className="text-lg font-open-sans text-muted-foreground max-w-2xl mx-auto">
            Выберите мебель для вашего дома из нашего ассортимента качественных
            товаров
          </p>
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-8"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 bg-white">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="font-open-sans text-sm data-[state=active]:bg-accent"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="font-open-sans font-medium"
          >
            <Icon name="Grid3x3" size={20} className="mr-2" />
            Показать больше товаров
          </Button>
        </div>
      </div>
    </section>
  );
}
