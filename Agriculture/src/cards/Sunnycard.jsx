import { useEffect, useState } from "react";
import { Sun, Droplets, Wind } from "lucide-react"; // icons
const Sunnycard = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000 * 60); // update every minute
    return () => clearInterval(interval);
  }, []);

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
  const day = days[dateTime.getDay()];
  const date = dateTime.getDate();
  const month = months[dateTime.getMonth()];
  const year = dateTime.getFullYear();
return(
   <>
    <div className="bg-white-50 flex justify-center">
      {/* Left space like sidebar */}
      <div className="p-6 max-w-5xl mx-auto b-6 md:w-[500px] lg:w-[600px]">
        <div className="bg-gray-200 rounded-2xl shadow-xl p-6">
          {/* Top: Weather + Day */}
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center gap-2">
              <Sun className="text-yellow-500" size={28} />
              <h1 className="text-xl font-bold text-gray-800">Sunny</h1>
            </div>
            <span className="text-gray-600 font-semibold">{day}</span>
          </div>

          {/* Date */}
          <p className="mt-2 text-gray-500 text-sm">
            {date}-{month}-{year}
          </p>

          {/* Divider */}
          <div className="my-4 border-t border-gray-200" />

          {/* Bottom: Temp, Air, Water */}
          <div className="grid grid-cols-3 gap-3">
            {/* Temperature */}
            <div className="bg-gray-100 rounded-xl p-3 flex flex-col items-center">
              <Sun className="text-orange-500" size={24} />
              <span className="mt-1 text-sm font-semibold">28°C</span>
              <p className="text-xs text-gray-500">Temp</p>
            </div>

            {/* Air */}
            <div className="bg-gray-100 rounded-xl p-3 flex flex-col items-center">
              <Wind className="text-blue-500" size={24} />
              <span className="mt-1 text-sm font-semibold">60%</span>
              <p className="text-xs text-gray-500">Air</p>
            </div>

            {/* Water */}
            <div className="bg-gray-100 rounded-xl p-3 flex flex-col items-center">
              <Droplets className="text-cyan-600" size={24} />
              <span className="mt-1 text-sm font-semibold">45%</span>
              <p className="text-xs text-gray-500">Water</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
   </>
)
 
};
export default Sunnycard;
