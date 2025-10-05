import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Rnd } from "react-rnd";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00C49F", "#FFBB28"];

const fields = Array.from({ length: 20 }, (_, i) => `Field ${i + 1}`);

// Full data for 20 fields
const dataByField = {};

for (let i = 1; i <= 20; i++) {
  dataByField[`Field ${i}`] = {
    soilMoisture: [
      { name: "Moist", value: 60 + i },
      { name: "Dry", value: 40 - i },
    ],
    npk: [
      { name: "Nitrogen", value: 40 + i },
      { name: "Phosphorus", value: 30 },
      { name: "Potassium", value: 30 - i },
    ],
    activeSensors: [
      { name: `Active (Sensor${i * 1}, Sensor${i * 2}, Sensor${i * 3})`, value: 3 },
      { name: `Inactive (Sensor${i * 4}, Sensor${i * 5})`, value: 2 },
    ],
    farmers: [
      { name: `Active (Farmer${i * 1}, Farmer${i * 2}, Farmer${i * 3})`, value: 3 },
      { name: `Inactive (Farmer${i * 4}, Farmer${i * 5})`, value: 2 },
    ],
    temperature: [
      { name: "Cool", value: 20 + i },
      { name: "Warm", value: 80 - i },
    ],
    humidity: [
      { name: "Dry", value: 30 + i },
      { name: "Humid", value: 70 - i },
    ],
  };
}

// Default positions for draggable cards to avoid overlap
const positions = [
  { x: 0, y: 0 },
  { x: 350, y: 0 },
  { x: 0, y: 300 },
  { x: 350, y: 300 },
  { x: 0, y: 600 },
  { x: 350, y: 600 },
];

const ChartCard = ({ title, data, defaultPos }) => {
  // Extra display for Active Sensors and Farmers
  const renderExtraInfo = () => {
    if (title === "Active Sensors" || title === "Farmers (Active / Inactive)") {
      const activeNames = data[0].name.split("(")[1].replace(")", "");
      const inactiveNames = data[1].name.split("(")[1].replace(")", "");
      return (
        <div className="text-sm text-gray-600 mb-2 text-center">
          <div>Total Active: {data[0].value}</div>
          <div>Names: {activeNames}</div>
          <div>Total Inactive: {data[1].value}</div>
          <div>Names: {inactiveNames}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <Rnd
      default={{
        x: defaultPos.x,
        y: defaultPos.y,
        width: 320,
        height: 260,
      }}
      minWidth={250}
      minHeight={220}
      bounds="parent"
      className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-center items-center hover:shadow-xl transition-all duration-200"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {renderExtraInfo()}
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="70%"
            label={({ name, percent }) => `${name} (${Math.round(percent * 100)}%)`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Rnd>
  );
};

export default function GraphDashboard() {
  const [selectedField, setSelectedField] = useState("Field 1");

  const selectedData = dataByField[selectedField];

  return (
    <div className="p-4 w-full min-h-screen bg-gray-50">
      <div className="mb-4 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-700">Field Data Overview</h1>
        <select
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {fields.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      {/* Draggable chart area */}
      <div className="relative w-full h-[85vh] bg-white rounded-xl p-4 shadow-inner overflow-auto">
        <ChartCard title="Soil Moisture Sensor" data={selectedData.soilMoisture} defaultPos={positions[0]} />
        <ChartCard title="NPK Sensor" data={selectedData.npk} defaultPos={positions[1]} />
        <ChartCard title="Active Sensors" data={selectedData.activeSensors} defaultPos={positions[2]} />
        <ChartCard title="Farmers (Active / Inactive)" data={selectedData.farmers} defaultPos={positions[3]} />
        <ChartCard title="Temperature" data={selectedData.temperature} defaultPos={positions[4]} />
        <ChartCard title="Humidity" data={selectedData.humidity} defaultPos={positions[5]} />
      </div>
    </div>
  );
}
