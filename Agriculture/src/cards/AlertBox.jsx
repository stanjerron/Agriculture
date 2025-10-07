import React, { useState, useEffect } from "react";

export default function AlertBox() {
  const [alerts, setAlerts] = useState([
    {
      field: "Field 1",
      sensorName: "Soil Moisture",
      number: 4,
      reading: "12%",
      condition: "Low Moisture",
      severity: "High",
      timestamp: "10:22 PM",
      date: "2025-10-06",
    },
    {
      field: "Field 2",
      sensorName: "Temperature",
      number: 3,
      reading: "37°C",
      condition: "Normal",
      severity: "Low",
      timestamp: "10:15 PM",
      date: "2025-10-06",
    },
  ]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="
        fixed bottom-4 right-4 z-40 
        left-0  md:left-[260px]
        mx-4 md:mx-0 
        bg-gray-900/90 backdrop-blur-lg 
        border border-gray-700 shadow-xl text-white 
        rounded-xl 
        p-4 
        max-h-[300px] overflow-auto
        sm:w-[calc(100%-1rem)] md:w-[calc(100%-280px)] 
        transition-all duration-300
      "
    >
      <h2 className="text-lg font-semibold mb-3 text-center">
        ⚠️ Sensor Alerts
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-collapse border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-gray-300">
              <th className="p-2 border border-gray-700">Field</th>
              <th className="p-2 border border-gray-700">Sensor</th>
              <th className="p-2 border border-gray-700">No. of Sensors</th>
              <th className="p-2 border border-gray-700">Reading</th>
              <th className="p-2 border border-gray-700">Condition</th>
              <th className="p-2 border border-gray-700">Severity</th>
              <th className="p-2 border border-gray-700">Time</th>
              <th className="p-2 border border-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array(2)
                .fill(0)
                .map((_, i) => (
                  <tr key={i}>
                    {Array(8)
                      .fill(0)
                      .map((_, j) => (
                        <td
                          key={j}
                          className="p-3 border border-gray-700 animate-pulse bg-gray-700/40"
                        >
                          &nbsp;
                        </td>
                      ))}
                  </tr>
                ))
            ) : (
              alerts.map((alert, index) => (
                <tr
                  key={index}
                  className={`${
                    alert.severity === "High"
                      ? "bg-red-500/20 border-l-4 border-red-600"
                      : "bg-green-500/10"
                  } hover:bg-gray-800 transition-colors`}
                >
                  <td className="p-2 border border-gray-700">{alert.field}</td>
                  <td className="p-2 border border-gray-700">
                    {alert.sensorName}
                  </td>
                  <td className="p-2 border border-gray-700">{alert.number}</td>
                  <td className="p-2 border border-gray-700">{alert.reading}</td>
                  <td className="p-2 border border-gray-700">
                    {alert.condition}
                  </td>
                  <td
                    className={`p-2 border border-gray-700 font-bold ${
                      alert.severity === "High"
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {alert.severity}
                  </td>
                  <td className="p-2 border border-gray-700">
                    {alert.timestamp}
                  </td>
                  <td className="p-2 border border-gray-700">{alert.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
