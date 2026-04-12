import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import StickyCallBar from "@/components/StickyCallBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <ImageSlider />
      <Footer />
      <StickyCallBar />
    </div>
  );
};

export default Layout;
