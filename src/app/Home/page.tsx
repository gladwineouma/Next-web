import { BsEvStation } from "react-icons/bs";
import Footer from "../shared-components/Footer";
import TopHeader from "../shared-components/Header";
import MainNav from "../shared-components/Nav-bar";
import Sidebar from "../shared-components/Sidebar";
import FlashSale from "./components/FlashSale";
import HeroSection from "./components/HeroSection";
import NewArrival from "./components/NewArrival";


export default function HomePage() {
  return (
    <>
      <TopHeader />
      <MainNav />
      <div className="flex max-w-7xl mx-auto mt-6 px-4">
        {/* Sidebar */}
        <div className="hidden lg:block mr-8">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1">
          {/* Place your homepage sections/components here, e.g. */}
          {/* <HeroSection /> */}
          {/* <FlashSale /> */}
          {/* <BestSellers /> */}
          {/* <NewArrival /> */}
          {/* See your design for the content order */}
          <HeroSection/>
          <FlashSale/>
          <NewArrival/>
        
        </main>
      </div>
      <Footer />
    </>
  );
}
