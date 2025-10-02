import { useState, useEffect } from "react";

// import pannitu array la add pannu
import field1 from "../image/field1.png";
import field2 from "../image/field2.png";
import field3 from "../image/field3.png";
import field4 from "../image/field4.png";
import field5 from "../image/field5.png";
import field6 from "../image/field6.png";
import field7 from "../image/field7.png";
import field8 from "../image/field8.png";
import field9 from "../image/field9.png";
import field10 from "../image/field10.png";
import field11 from "../image/field11.png";
import field12 from "../image/field12.png";
import field13 from "../image/field13.png";
import field14 from "../image/field14.png";

const images = [
  field1,
  field2,
  field3,
  field4,
  field5,
  field6,
  field7,
  field8,
  field9,
  field10,
  field11,
  field12,
  field13,
  field14,
];

const FieldCard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
   <div className="flex justify-center font-sans pt-5">
  <div className="max-w-5xl w-full p-8 shadow-2xl rounded-2xl bg-gray-200 ">
    <div className="w-full h-80 overflow-hidden rounded-xl mb-4"> 
      <img
        src={images[index]}
        alt={`Field ${index + 1}`}
        className="w-full h-full object-cover transition-all duration-100"
      />
    </div>
    <div className="text-center">
      <h2 className="text-lg font-bold text-green-700">Field Gallery</h2>
      <p className="text-sm text-gray-600">
        Image {index + 1} of {images.length}
      </p>
    </div>
  </div>
</div>


  );
};

export default FieldCard;
