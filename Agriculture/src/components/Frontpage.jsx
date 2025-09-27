import { useNavigate } from "react-router-dom";
import logo from "../Image/Logo.png";
import leaves from "../Image/leaves.png"; 

const Frontpage = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/login");
  };

  return (
    <div
  className="relative font-serif min-h-screen flex flex-col items-center justify-center text-center px-6"
  style={{
    backgroundImage: `url(${leaves})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dim overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

  {/* Your content goes here */}
  <div className="relative z-10">
    {/* logo, titles, buttons, etc. */}
  </div>


      {/* logo section */}
      <div className="bg-white p-6 rounded-full shadow-lg border-4 border-yellow-500">
        <img src={logo} alt="agri logo" className="h-32 w-32 rounded-full" />
      </div>
      {/* title section */}
      <div className="mt-10">
        <h1 className="font-bold text-5xl capitalize bg-gradient-to-r from-yellow-400 via-green-200 to-green-500 text-transparent bg-clip-text">
          the new era of agriculture
        </h1>
        <p className="text-amber-100 text-lg mt-4">
          Growing smarter, greener, and better for tomorrow 🌱
        </p>
      </div>
      {/* summa content*/}
      <div className="flex justify-between mt-10 gap-x-5 p-8">
        <div className="w-1/2 p-2">
          <h1 className="text-xl capitalize text-white">
            agricultural growth is our responsibility
          </h1>
        </div>

        <div className="w-1/2">
          <h1 className="hidden md:block text-xl capitalize text-white p-2">
  In agriculture, moisture is crucial for plant growth,<br />
  requiring soil levels to be maintained within plant-specific ranges (generally 20–60%, or higher for some vegetables).
</h1>
       {/* Mobile view */}
         <h1 className="text-xl capitalize text-white  md:hidden p-2">
           Soil Moisture 💧50% </h1>
          <h1 className="text-xl capitalize text-white  md:hidden p-6">
           Growth 🌱 25cm </h1>
        </div>
      </div>
      {/* button */}
      <div className="mt-10">
       <button
  onClick={handleclick}
  className="relative text-3xl capitalize text-white px-6 py-2 rounded-full cursor-pointer transition overflow-hidden
              backdrop-blur-md border border-white/30 hover:bg-white/30 hover:text-green-950"
>
  get start
</button>

      </div>
    </div>
  );
};

export default Frontpage;
