import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Laptop, Headphones, Watch, Tablet, Camera, Gamepad2, Speaker } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Smartphone",
    icon: Smartphone,
    count: 145,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    id: 2,
    name: "Laptop",
    icon: Laptop,
    count: 89,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    id: 3,
    name: "Audio",
    icon: Headphones,
    count: 234,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    id: 4,
    name: "Smartwatch",
    icon: Watch,
    count: 67,
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/20"
  },
  {
    id: 5,
    name: "Tablet",
    icon: Tablet,
    count: 78,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
  {
    id: 6,
    name: "Camera",
    icon: Camera,
    count: 156,
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20"
  },
  {
    id: 7,
    name: "Gaming",
    icon: Gamepad2,
    count: 203,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20"
  },
  {
    id: 8,
    name: "Loa",
    icon: Speaker,
    count: 124,
    color: "text-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/20"
  }
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Danh mục
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Khám phá theo danh mục
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tìm kiếm sản phẩm theo từng danh mục để dễ dàng lựa chọn những gì bạn cần
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group cursor-pointer hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] bg-card/80 backdrop-blur"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-[var(--transition-bounce)]`}>
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} sản phẩm
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Danh mục nổi bật
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gaming Category Highlight */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Gamepad2 className="w-12 h-12" />
                  <Badge className="bg-white/20">Hot</Badge>
                </div>
                <h4 className="text-xl font-bold mb-2">Gaming</h4>
                <p className="text-white/80 mb-4">Console, PC Gaming, phụ kiện game</p>
                <p className="text-2xl font-bold">203 sản phẩm</p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
              </CardContent>
            </Card>

            {/* Audio Category Highlight */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Headphones className="w-12 h-12" />
                  <Badge className="bg-white/20">Trending</Badge>
                </div>
                <h4 className="text-xl font-bold mb-2">Audio</h4>
                <p className="text-white/80 mb-4">Tai nghe, loa, âm thanh</p>
                <p className="text-2xl font-bold">234 sản phẩm</p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
              </CardContent>
            </Card>

            {/* Camera Category Highlight */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-pink-500 to-red-600 text-white md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Camera className="w-12 h-12" />
                  <Badge className="bg-white/20">New</Badge>
                </div>
                <h4 className="text-xl font-bold mb-2">Camera</h4>
                <p className="text-white/80 mb-4">DSLR, Mirrorless, Action cam</p>
                <p className="text-2xl font-bold">156 sản phẩm</p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;