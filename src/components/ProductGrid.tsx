import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

// Import product images
import smartphoneImg from "@/assets/smartphone.jpg";
import laptopImg from "@/assets/laptop.jpg";
import headphonesImg from "@/assets/headphones.jpg";
import smartwatchImg from "@/assets/smartwatch.jpg";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Smartphone",
    price: 29990000,
    originalPrice: 32990000,
    rating: 4.8,
    reviews: 256,
    image: smartphoneImg,
    discount: 10,
    isNew: true,
    description: "Smartphone cao cấp với chip A17 Pro và camera 48MP"
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    category: "Laptop",
    price: 45990000,
    originalPrice: 49990000,
    rating: 4.9,
    reviews: 189,
    image: laptopImg,
    discount: 8,
    isNew: false,
    description: "Laptop chuyên nghiệp với chip M3 và màn hình Retina"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 7990000,
    originalPrice: 8990000,
    rating: 4.7,
    reviews: 342,
    image: headphonesImg,
    discount: 11,
    isNew: false,
    description: "Tai nghe chống ồn hàng đầu với chất lượng âm thanh tuyệt vời"
  },
  {
    id: 4,
    name: "Apple Watch Ultra 2",
    category: "Wearable",
    price: 19990000,
    originalPrice: 21990000,
    rating: 4.6,
    reviews: 178,
    image: smartwatchImg,
    discount: 9,
    isNew: true,
    description: "Smartwatch cao cấp với pin 60 giờ và tính năng Adventure"
  }
];

const ProductGrid = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section id="products" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Sản phẩm hot
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sản phẩm nổi bật
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá những sản phẩm công nghệ mới nhất với chất lượng tuyệt vời và giá cả hợp lý
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group relative bg-[var(--gradient-card)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-[var(--transition-smooth)]"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.discount > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        -{product.discount}%
                      </Badge>
                    )}
                    {product.isNew && (
                      <Badge className="text-xs bg-success text-success-foreground">
                        Mới
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart 
                        className={`w-4 h-4 ${
                          favorites.includes(product.id) 
                            ? 'fill-destructive text-destructive' 
                            : ''
                        }`} 
                      />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Quick Add to Cart */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <Button className="w-full" size="sm" variant="cart">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Thêm vào giỏ
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-warning text-warning'
                              : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Xem tất cả sản phẩm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;