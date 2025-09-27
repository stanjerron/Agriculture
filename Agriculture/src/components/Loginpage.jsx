import { useNavigate } from "react-router-dom";
import agriculture from "../Image/agriculture.png"; // Make sure the path is correct


const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/Signup"); // make sure route path matches your App.js
  };
  
  // Moving to Dashboard
  const handleLoginClick = () => {
    navigate("/Dashboard"); // make sure route path matches your App.js
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={agriculture}
        alt="field background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay for dim effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Glass Card */}
      <div className="relative z-10 backdrop-blur-md bg-white/30 border border-black/90 rounded-2xl shadow-2xl p-6 sm:p-10 w-[90%] max-w-[400px] text-center text-white">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          🌱 Agriculture <span className="text-green-800">Technology</span>
        </h1>
        <p className="text-xs sm:text-sm mb-6 opacity-80">
          Welcome back! Please login to your account.
        </p>

        {/* Form */}
        <form className="flex flex-col space-y-3 sm:space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="px-3 sm:px-4 py-2 rounded-lg bg-white/20 border border-black/50 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-3 sm:px-4 py-2 rounded-lg bg-white/20 border border-black/50 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />

          <button
  type="submit"
  onClick={(e) => {
    e.preventDefault(); // ← prevents page reload
    handleLoginClick();  // ← navigate to dashboard
  }}
  className="bg-green-500 hover:bg-green-600 transition-all duration-300 py-2 font-semibold shadow-lg"
>
  Login
</button>

        </form>

        {/* Links */}
        <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-[12px] mt-4 opacity-80 gap-2 sm:gap-0">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
         
            Don’t have an account ?<button
            onClick={handleSignUpClick}
            className="hover:underline text-red-800 font-bold"
          >Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
