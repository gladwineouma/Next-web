
import Footer from "./shared-components/Footer";
import TopHeader from "./shared-components/Header";
import MainNav from "./shared-components/Nav-bar";
import Sidebar from "./shared-components/Sidebar";






const HomePage = () => {
  return (
      <div>
      <main>
      <TopHeader />
      <MainNav />
      <Sidebar />
      </main>
      <Footer/>
    </div>  
  );
};

export default HomePage;
