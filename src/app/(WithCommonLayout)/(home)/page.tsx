import HeroSection from "@/components/modules/home/HeroSection";
import ClientHomePage from "./ClientHomePage";
import { getCurrentUser, getNewToken } from "@/services/AuthService";
import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import TopBrands from "@/components/modules/home/TopBrands";
import FlashSale from "@/components/modules/home/FlashSale";

const HomePage = async () => {
  const user = await getCurrentUser(); // server-side auth check
  const result = await getNewToken();
  console.log(result);
  return (
    <div>
      <ClientHomePage user={user} />
      <HeroSection />
      <Category />
      <FeaturedProducts />
      <FlashSale />
      <TopBrands />
    </div>
  );
};

export default HomePage;
