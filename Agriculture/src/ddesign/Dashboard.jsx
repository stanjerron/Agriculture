import Sunnycard from "../cards/Sunnycard";
import FieldCard from "../cards/FieldCard";
import Sensorcard from "../cards/Sensorcard";
import Summarycard from "../cards/Summarycard";
const Dashboard = () => {
  return (
    <div className="rounded-2xl shadow-2xl min-h-screen p-2">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6   pb-10 ">
        <Sunnycard />
        <FieldCard />
        <Sensorcard />
        <Summarycard/>
      </div>
    </div>
  );
};
export default Dashboard;
