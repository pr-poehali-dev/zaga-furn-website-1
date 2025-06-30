import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-montserrat font-bold text-primary">
              ZagaFurn
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-primary font-open-sans font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#catalog"
              className="text-foreground hover:text-primary font-open-sans font-medium transition-colors"
            >
              Каталог
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary font-open-sans font-medium transition-colors"
            >
              О нас
            </a>
            <a
              href="#contacts"
              className="text-foreground hover:text-primary font-open-sans font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Icon name="Phone" size={16} className="mr-2" />8 995 444 33 63
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
