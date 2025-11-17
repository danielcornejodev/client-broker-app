import { useState } from "react";

interface Props {
  onFilter: (coverage: string, maxPremium: number) => void;
}

export default function PlanFilter({ onFilter }: Props) {
  const [coverage, setCoverage] = useState("");
  const [maxPremium, setMaxPremium] = useState(0);

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Coverage"
        value={coverage}
        onChange={e => setCoverage(e.target.value)}
        className="border p-1 mr-2"
      />
      <input
        type="number"
        placeholder="Max Premium"
        value={maxPremium}
        onChange={e => setMaxPremium(Number(e.target.value))}
        className="border p-1 mr-2"
      />
      <button
        onClick={() => onFilter(coverage, maxPremium)}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        Apply Filter
      </button>
    </div>
  );
}
