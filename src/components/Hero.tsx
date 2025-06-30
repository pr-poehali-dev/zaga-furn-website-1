import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-beige-100 to-cream-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-primary mb-6">
            Мебель для вашего дома
          </h1>
          <p className="text-xl md:text-2xl font-open-sans text-muted-foreground mb-8 max-w-3xl mx-auto">
            Качественная мебель от ZagaFurn. Диваны, кресла, кровати и шкафы для
            создания уютного интерьера
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-open-sans font-medium">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-open-sans font-medium"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
              <Icon name="Truck" size={32} className="mx-auto text-primary" />
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">
              Быстрая доставка
            </h3>
            <p className="font-open-sans text-muted-foreground">
              По всей России
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
              <Icon name="Shield" size={32} className="mx-auto text-primary" />
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">
              Гарантия качества
            </h3>
            <p className="font-open-sans text-muted-foreground">
              2 года гарантии
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
              <Icon name="Heart" size={32} className="mx-auto text-primary" />
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">
              Собственное производство
            </h3>
            <p className="font-open-sans text-muted-foreground">
              Контроль качества
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
              <Icon name="Users" size={32} className="mx-auto text-primary" />
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">
              Довольные клиенты
            </h3>
            <p className="font-open-sans text-muted-foreground">
              Более 5000 покупателей
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
