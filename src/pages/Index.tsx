import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductGrid />
      <Categories />
      <Footer />
    </div>
  );
};

export default Index;
