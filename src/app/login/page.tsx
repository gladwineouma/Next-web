import Button from "../shared-components/Button";
import Footer from "../shared-components/Footer";
import TopHeader from "../shared-components/Header";
import MainNav from "../shared-components/Nav-bar";

const LoginPage = () => {
  return (
    <div>
      <TopHeader />
      <MainNav />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden min-h-[700px]">
          <div className="hidden md:block bg-cyan-100">
            <img
              src="/Images/onboard.png"
              alt="Shopping cart and gifts"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-semibold mb-8">Log in to Exclusive</h2>
            <form className="space-y-6 max-w-md w-full">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-red-600"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-red-600"
                required
              />
              <Button variant="primary" type="submit" className="w-full py-4 text-lg">
                Log in
              </Button>
            </form>
            <div className="mt-6 flex justify-between items-center text-sm text-gray-500 max-w-md w-full">
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
      <Footer />
    </div>
  );
};

export default LoginPage;
