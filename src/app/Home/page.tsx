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
    <div>
      <TopHeader />
      <MainNav />
      <div className="flex max-w-7xl mx-auto mt-6 px-4">
              <div className="hidden lg:block mr-8">
          <Sidebar />
        </div>      
        <main className="flex-1">          
          <HeroSection/>
          <FlashSale/>
          <NewArrival/>
        
        </main>
      </div>
     
      </div>
       <Footer />
    </>
  );
}
