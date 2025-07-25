import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, CreditCard, Shield, Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Đăng ký nhận tin tức
              </h3>
              <p className="text-primary-foreground/80">
                Nhận thông tin về sản phẩm mới, khuyến mãi và tin tức công nghệ
              </p>
            </div>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Nhập email của bạn"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[var(--gradient-primary)] rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ET</span>
              </div>
              <span className="text-xl font-bold text-foreground">ElecTech</span>
            </div>
            <p className="text-muted-foreground">
              Chúng tôi cung cấp các sản phẩm công nghệ chất lượng cao với dịch vụ tuyệt vời 
              và giá cả hợp lý cho khách hàng Việt Nam.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              {[
                "Về chúng tôi",
                "Sản phẩm",
                "Khuyến mãi",
                "Tin tức",
                "Liên hệ",
                "Hỗ trợ khách hàng"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Dịch vụ khách hàng</h4>
            <ul className="space-y-2">
              {[
                "Chính sách bảo hành",
                "Hướng dẫn mua hàng",
                "Phương thức thanh toán",
                "Chính sách đổi trả",
                "Vận chuyển & Giao hàng",
                "FAQ"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Thông tin liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">1900-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">support@electech.vn</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-muted-foreground">
                  123 Đường ABC, Quận 1<br />
                  TP. Hồ Chí Minh, Việt Nam
                </span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="font-medium text-foreground mb-2">Giờ làm việc</h5>
              <p className="text-sm text-muted-foreground">
                Thứ 2 - Thứ 6: 8:00 - 18:00<br />
                Thứ 7 - CN: 9:00 - 17:00
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Bảo hành chính hãng</p>
              <p className="text-sm text-muted-foreground">Cam kết 100% chính hãng</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Giao hàng nhanh</p>
              <p className="text-sm text-muted-foreground">Miễn phí vận chuyển toàn quốc</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Thanh toán an toàn</p>
              <p className="text-sm text-muted-foreground">Nhiều phương thức thanh toán</p>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 ElecTech. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Điều khoản sử dụng
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;