import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  description: string;
  dimensions: string;
  material: string;
}

export default function ProductCard({
  name,
  price,
  oldPrice,
  image,
  category,
  description,
  dimensions,
  material,
}: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-beige-200 bg-white">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            {category}
          </Badge>
        </div>

        <div className="p-6">
          <h3 className="font-montserrat font-semibold text-lg mb-2 text-primary">
            {name}
          </h3>

          <p className="font-open-sans text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Icon name="Ruler" size={14} className="mr-2" />
              <span className="font-open-sans">{dimensions}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Icon name="Package" size={14} className="mr-2" />
              <span className="font-open-sans">{material}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-montserrat font-bold text-primary">
                {price.toLocaleString("ru-RU")} ₽
              </span>
              {oldPrice && (
                <span className="text-sm font-open-sans text-muted-foreground line-through">
                  {oldPrice.toLocaleString("ru-RU")} ₽
                </span>
              )}
            </div>

            <Button size="sm" className="font-open-sans">
              <Icon name="Eye" size={16} className="mr-2" />
              Подробнее
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
