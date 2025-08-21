import { useState } from "react";

interface Square {
  id: number;
  color: string;
}

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [squares, setSquares] = useState<Square[]>([]);
  const [hiddenCount, setHiddenCount] = useState<number>(0);

  // helper: random color generator
  const randomColor = (): string =>
    `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

  const handleGenerate = (): void => {
    const arr: Square[] = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      color: randomColor(),
    }));
    setSquares(arr);
    setHiddenCount(0); // reset count when regenerate
  };

  const handleClickSquare = (): void => {
    setHiddenCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen p-6">
      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          placeholder="Enter number of squares"
          className="border p-2 rounded"
        />
        <button
          onClick={handleGenerate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate
        </button>
      </div>

      {/* Grid of Squares */}
      <div className="grid grid-cols-5 gap-4">
        {squares.map((sq) => (
          <div
            key={sq.id}
            onClick={handleClickSquare}
            style={{ backgroundColor: sq.color }}
            className="w-16 h-16 flex items-center justify-center text-white font-bold rounded cursor-pointer"
          >
            {sq.id}
          </div>
        ))}
      </div>

      {/* Hidden Squares Counter (top-right) */}
      <div className="fixed top-4 right-4">
        <div className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg">
          Hidden Count: {hiddenCount}
        </div>
      </div>
    </div>
  );
}
