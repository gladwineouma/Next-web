import Button from "../shared-components/Button";
import Footer from "../shared-components/Footer";
import TopHeader from "../shared-components/Header";
import MainNav from "../shared-components/Nav-bar";

const SignUpPage = () => {
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
            <h2 className="text-4xl font-semibold mb-8">Create an account</h2>
            <form className="space-y-6 max-w-md w-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-red-600"
                required
              />
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
                Create Account
              </Button>
              <Button variant="secondary" className="w-full flex items-center justify-center space-x-2 py-4 text-lg">
                <img src="/Images/Icon-Google.png" alt="Google" className="w-5 h-5" />
                <span>Sign up with Google</span>
              </Button>
            </form>
            <p className="mt-6 text-center text-gray-500 max-w-md w-full">
              Already have an account?{' '}
              <a href="/login" className="text-red-600 underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
