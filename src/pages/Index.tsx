import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Catalog />

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-montserrat font-bold text-xl mb-4">
                ZagaFurn
              </h3>
              <p className="font-open-sans text-primary-foreground/80">
                Качественная мебель для вашего дома. Создаем уют и комфорт уже
                более 10 лет.
              </p>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 font-open-sans text-primary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Диваны
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Кресла
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Кровати
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Шкафы
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 font-open-sans text-primary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Гарантия
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 font-open-sans text-primary-foreground/80">
                <p>Телефон: 8 995 444 33 63</p>
                <p>Email: info@zagafurn.ru</p>
                <p>Адрес: г. Москва, ул. Мебельная, 15</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="font-open-sans text-primary-foreground/60">
              © 2024 ZagaFurn. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
