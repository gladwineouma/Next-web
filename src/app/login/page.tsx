import Button from "../shared-components/Button";
import Footer from "../shared-components/Footer";
import TopHeader from "../shared-components/Header";
import MainNav from "../shared-components/Nav-bar";

const LoginPage = () => {
  return (
    <div>
      <TopHeader/>
      <MainNav/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

       
        <div className="hidden md:block">
          <img
            src="Images/phone" 
            alt="Shopping cart and gifts"
            className="object-cover h-full w-full"
          />
        </div>

       
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-6">Log in to Exclusive</h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-600"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-600"
              required
            />

            <Button variant="primary" type="submit" className="w-full">
              Log in
            </Button>
          </form>

          <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
            <a href="/forgot-password" className="text-red-600 hover:underline">
              Forgot Password?
            </a>
            <a href="/signup" className="hover:underline">
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LoginPage;
