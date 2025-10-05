import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Summarycard() {
  // Initial static data (can be replaced by live backend)
  const [yearlyData, setYearlyData] = useState([
    { year: "2025", good: 10, warning: 0, fault: 0 },
  ]);

  const [sensorData, setSensorData] = useState([
    { name: "Soil Moisture 1", condition: "Good" },
    { name: "Soil Moisture 2", condition: "Good" },
    { name: "Soil Moisture 3", condition: "Good" },
    { name: "Soil Moisture 4", condition: "Good" },
    { name: "Soil Moisture 5", condition: "Good" },
    { name: "Soil Moisture 6", condition: "Good" },
    { name: "NPK", condition: "Good" },
    { name: "DHT22", condition: "Good" },
    { name: "ESP32 Data", condition: "Good" },
    { name: "ESP32 SIM", condition: "Good" },
  ]);

  // Example: fetch live data from backend (replace URL when backend ready)
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/sensors") // Replace with your backend endpoint
        .then((res) => res.json())
        .then((data) => {
          setSensorData(data.sensors);
          setYearlyData(data.yearlySummary);
        })
        .catch((err) => console.log("Error fetching sensor data:", err));
    }, 5000); // fetch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-[45%] max-w-xl bg-white rounded-xl shadow-sm p-4 mt-4">
      {/* Title */}
      <h2 className="text-lg font-semibold text-green-900 mb-2">
        Sensor Summary
      </h2>

      {/* Yearly Line Chart */}
      <div className="w-full h-48 mb-4">
        <ResponsiveContainer>
          <LineChart data={yearlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 12, fill: "#334155" }}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 12, fill: "#334155" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f6fff6",
                border: "1px solid #ccc",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="good"
              stroke="#16a34a"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="warning"
              stroke="#eab308"
              strokeWidth={2}
              dot={{ r: 2 }}
            />
            <Line
              type="monotone"
              dataKey="fault"
              stroke="#dc2626"
              strokeWidth={2}
              dot={{ r: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sensor Status Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto">
        {sensorData.map((sensor, i) => {
          const bgColor =
            sensor.condition === "Good"
              ? "bg-green-50 text-green-900"
              : sensor.condition === "Warning"
              ? "bg-yellow-50 text-yellow-800"
              : "bg-red-50 text-red-700";

          return (
            <div
              key={i}
              className={`p-2 rounded-md flex justify-between items-center ${bgColor} shadow-sm text-sm`}
            >
              <span>{sensor.name}</span>
              <span className="font-semibold">{sensor.condition}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
