import { useState, useEffect } from "react";
import axios from "axios";
import PlanCard from "../components/PlanCard";
import PlanFilter from "../components/PlanFilter";

interface Plan {
  id: number;
  name: string;
  provider: string;
  premium: number;
  coverage: string[];
}

export default function Home() {
  const [plans, setPlans] = useState<Plan[]>([]);

  const fetchPlans = async (coverage = "", maxPremium = 0) => {
    const res = await axios.get("http://localhost:5002/api/plans", {
      params: { coverage, maxPremium }
    });
    setPlans(res.data);
  };

  const handleEnroll = async (id: number) => {
    const userName = prompt("Enter user name:");
    const age = Number(prompt("Enter age:"));
    if (!userName || !age) return;
    const res = await axios.post(`http://localhost:5002/api/plans/${id}/enroll`, { userName, age });
    console.log(res);
    alert(res.data.message);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Medicare Plans</h1>
      <PlanFilter onFilter={fetchPlans} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map(plan => (
          <PlanCard key={plan.id} plan={plan} onEnroll={handleEnroll} />
        ))}
      </div>
    </div>
  );
}
