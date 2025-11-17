import { useState } from "react";

interface Props {
  onFilter: (coverage: string, maxPremium: number) => void;
}

export default function PlanFilter({ onFilter }: Props) {
  const [coverage, setCoverage] = useState("");
  const [maxPremium, setMaxPremium] = useState(0);

  return (
    <div className="mb-4 grid grid-cols-1  w-90">
      <h2 className="text-1xl font-bold mb-4">Input Coverage Type: </h2>
      <input
        type="text"
        placeholder="Silver, Platinum, or Premium"
        value={coverage}
        onChange={e => setCoverage(e.target.value)}
        className="border p-1 mr-2 mb-4 w-60"
      />
      <h2 className="text-1xl font-bold mb-4">Input Max Premium Amount: </h2>
      <input
        type="number"
        placeholder="Max Premium"
        value={maxPremium}
        onChange={e => setMaxPremium(Number(e.target.value))}
        className="border p-1 mr-2 mb-4 w-20"
      />
      <button
        onClick={() => onFilter(coverage, maxPremium)}
        className="bg-green-500 text-white px-3 py-1 rounded w-20"
      >
        Search
      </button>
    </div>
  );
}
