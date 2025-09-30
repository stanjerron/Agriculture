import Sunnycard from "../cards/Sunnycard";
import FieldCard from "../cards/FieldCard";
const Dashboard = () => {
  return (
     <div className="rounded-2xl shadow-2xl min-h-screen bg-gray-50 p-6">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6   pb-10 ">
        <Sunnycard />
        <FieldCard />
      </div>
    </div>
  );
};
export default Dashboard;
