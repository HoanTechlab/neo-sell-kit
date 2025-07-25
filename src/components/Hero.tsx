import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-electronics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-[var(--gradient-hero)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] opacity-20" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary-foreground mr-2" />
              <span className="text-sm text-primary-foreground font-medium">
                Giảm giá lên đến 50% cho sản phẩm mới
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Công nghệ
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Tiên tiến
              </span>
              cho cuộc sống
            </h1>
            
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-lg mx-auto lg:mx-0">
              Khám phá bộ sưu tập thiết bị điện tử hàng đầu với chất lượng cao, 
              giá cả hợp lý và dịch vụ tuyệt vời.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="group">
                Mua sắm ngay
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                Xem sản phẩm
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-sm text-primary-foreground/80">Bảo hành 2 năm</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-sm text-primary-foreground/80">Miễn phí vận chuyển</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-sm text-primary-foreground/80">Giao hàng nhanh</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Electronics showcase"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-strong)] transform hover:scale-105 transition-[var(--transition-smooth)]"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-[var(--shadow-medium)] hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <span className="text-success-foreground font-bold">4.9</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Đánh giá cao</p>
                    <p className="text-sm text-muted-foreground">10,000+ khách hàng</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-accent rounded-lg p-4 shadow-[var(--shadow-medium)] hidden lg:block">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent-foreground">50+</p>
                  <p className="text-sm text-accent-foreground/80">Thương hiệu</p>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;