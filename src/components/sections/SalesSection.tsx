import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart, Truck, Sparkles, Zap } from "lucide-react";

interface SalesSectionProps {
  activeTab: string;
}

export function SalesSection({ activeTab }: SalesSectionProps) {
  if (activeTab === "Product Details") {
    const product = products[0];
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="h-80 bg-gradient-to-br from-sales/20 to-sales/5 rounded-xl flex items-center justify-center"><span className="text-8xl">📱</span></div>
            <div>
              <Badge variant="secondary" className="mb-2 rounded-lg">{product.category}</Badge>
              <h1 className="text-2xl font-display font-bold text-foreground">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2"><Star className="h-5 w-5 fill-amber-400 text-amber-400" /><span className="font-medium">{product.rating}</span><span className="text-muted-foreground">({product.reviews} reviews)</span></div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && <><span className="text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span><Badge className="bg-green-500">{product.discount}% off</Badge></>}
              </div>
              <div className="flex items-center gap-2 mt-4 text-sm text-green-600"><Truck className="h-4 w-4" /><span>Free delivery in {product.deliveryDays} days</span></div>
              <div className="flex gap-3 mt-6">
                <Button className="flex-1 bg-sales hover:bg-sales/90 rounded-lg"><ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart</Button>
                <Button variant="outline" className="flex-1 border-sales text-sales hover:bg-sales/10 rounded-lg">Buy Now</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-r from-sales to-sales/80 text-sales-foreground overflow-hidden">
        <CardContent className="p-6"><div className="flex items-center gap-3"><Zap className="h-8 w-8" /><div><h2 className="text-2xl font-display font-bold flex items-center gap-2"><Sparkles className="h-6 w-6" /> Flash Deals</h2><p>Up to 70% off on electronics and more!</p></div></div></CardContent>
      </Card>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="card-interactive overflow-hidden group">
            <div className="relative h-36 bg-gradient-to-br from-sales/15 to-sales/5 flex items-center justify-center">
              <span className="text-4xl">📦</span>
              <button className="absolute top-2 right-2 p-1.5 bg-card/80 rounded-full text-muted-foreground hover:text-sales transition-colors"><Heart className="h-4 w-4" /></button>
              {product.discount && <Badge className="absolute top-2 left-2 bg-green-500 text-xs">{product.discount}% off</Badge>}
            </div>
            <CardContent className="p-3">
              <p className="text-xs text-muted-foreground">{product.category}</p>
              <h3 className="font-medium text-sm text-foreground line-clamp-2 mt-1 group-hover:text-sales transition-colors">{product.name}</h3>
              <div className="flex items-center gap-1 mt-1"><Badge variant="secondary" className="text-xs flex items-center gap-0.5 px-1">{product.rating} <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" /></Badge></div>
              <div className="mt-2"><span className="text-lg font-bold text-foreground">₹{product.price.toLocaleString()}</span></div>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1"><Truck className="h-3 w-3" /> Free delivery</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}