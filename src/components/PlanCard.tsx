

interface Plan {
  id: number;
  name: string;
  provider: string;
  premium: number;
  coverage: string[];
}

interface Props {
  plan: Plan;
  onEnroll: (id: number) => void;
}

export default function PlanCard({ plan, onEnroll }: Props) {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="font-bold text-lg">{plan.name}</h2>
      <p>Provider: {plan.provider}</p>
      <p>Premium: ${plan.premium}</p>
      <p>Coverage: {plan.coverage.join(", ")}</p>
      <button
        onClick={() => onEnroll(plan.id)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Enroll
      </button>
    </div>
  );
}
