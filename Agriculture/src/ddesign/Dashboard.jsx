import  { useEffect, useState } from "react";
import { Sun, Droplets, Wind } from "lucide-react"; // icons
// import FieldCard from "../cards/FieldCard";
// import field1 from "../image/field1.png";
// import field2 from "../image/field2.png";
// import field3 from "../image/field3.png";
// import field4 from "../image/field4.png";
// import field5 from "../image/field5.png";
// import field6 from "../image/field6.png";
// import field7 from "../image/field7.png";
// import field8 from "../image/field8.png";
// import field9 from "../image/field9.png";
// import field10 from "../image/field10.png";
// import field11 from "../image/field11.png";
// import field12 from "../image/field12.png";
// import field13 from "../image/field13.png";
// import field14 from "../image/field14.png";


const Dashboard = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000 * 60); // update every minute
    return () => clearInterval(interval);
  }, []);

  const days = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
  ];
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const day = days[dateTime.getDay()];
  const date = dateTime.getDate();
  const month = months[dateTime.getMonth()];
  const year = dateTime.getFullYear();

// const Image = [field1, field2, field3, field4, field5, field6, field7, field8,
//     field9,field10,field11, field12, field13, field14
// ];


// <FieldCard images={Image} />




  return (
    <div className="min-h-screen bg-white-50 flex">
      {/* Left space like sidebar */}
      <div className="p-6 w-full b-6 md:w-[400px] lg:w-[420px]">
        <div className="bg-white rounded-2xl shadow-xl p-6">
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
  );
};

export default Dashboard;
