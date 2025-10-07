import { useState } from "react";
import { Activity, AlertTriangle } from "lucide-react";

const fieldsData = [
  { name: "Field 1", active: 8, inactive: 2 },
  { name: "Field 2", active: 1, inactive: 9 },
  { name: "Field 3", active: 7, inactive: 3 },
  { name: "Field 5", active: 6, inactive: 4 },
  { name: "Field 6", active: 5, inactive: 5 },
  { name: "Field 7", active: 7, inactive: 3 },
  { name: "Field 9", active: 7, inactive: 3 },
  { name: "Field 10", active: 7, inactive: 3 },
  { name: "Field 11", active: 7, inactive: 3 },
  { name: "Field 12", active: 7, inactive: 3 },
  { name: "Field 13", active: 7, inactive: 3 },
  { name: "Field 14", active: 7, inactive: 3 },
  { name: "Field 15", active: 7, inactive: 3 },
  { name: "Field 16", active: 7, inactive: 3 },
  { name: "Field 17", active: 7, inactive: 3 },
  { name: "Field 18", active: 7, inactive: 3 },
  { name: "Field 19", active: 7, inactive: 3 },
  { name: "Field 20", active: 7, inactive: 3 }
];

export default function SensorDashboard() {
  const [selectedField, setSelectedField] = useState(fieldsData[0]);

  return (
    <div className="p-2 sm:p-6 lg:p-8 max-w-5xl mt-5  mx-auto bg-gray-200 rounded-2xl">
      {/* Dropdown */}
      <select
        className="w-full mb-6 p-1 border border-white bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
        value={selectedField.name}
        onChange={(e) =>
          setSelectedField(
            fieldsData.find((field) => field.name === e.target.value)
          )
        }
      >
        {fieldsData.map((field) => (
          <option key={field.name} value={field.name}>
            {field.name}
          </option>
        ))}
      </select>

      {/* Sensor Status Card */}
      <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-8 transform hover:scale-105  transition duration-300">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
          {selectedField.name} – Sensors
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Active */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-100 to-green-50 rounded-2xl shadow-md flex-1 justify-center">
            <div className="bg-green-200 p-1 rounded-full animate-pulse">
              <Activity className="text-green-700" size={28} />
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-base text-gray-600">Active</p>
              <p className="text-2xl sm:text-3xl font-bold text-green-800">
                {selectedField.active}
              </p>
            </div>
          </div>

          {/* Inactive */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-100 to-red-50 rounded-2xl shadow-md flex-1 justify-center">
            <div className="bg-red-200 p-1 rounded-full animate-pulse">
              <AlertTriangle className="text-red-700" size={28} />
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-base text-gray-600">Inactive</p>
              <p className="text-2xl sm:text-3xl font-bold text-red-800">
                {selectedField.inactive}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
