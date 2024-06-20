import React, {useState, useEffect, useRef} from "react";

const gifts = [
  "Try Again",
  "iPhone 14",
  "Free Referral",
  "$5000",
  "Free Headphones",
];

const Roulette = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const rouletteRef = useRef(null);

  const spinRoulette = () => {
    if (spinning) return;
    setSpinning(true);

    const spinDuration = 4000; // 4 seconds
    const spinResult = Math.floor(Math.random() * gifts.length);

    setTimeout(() => {
      setResult(gifts[spinResult]);
      setSpinning(false);
    }, spinDuration);
  };

  const createPieSegments = () => {
    const numSegments = gifts.length;
    const segmentAngle = 360 / numSegments;
    return gifts.map((gift, index) => {
      const startAngle = index * segmentAngle;
      const endAngle = (index + 1) * segmentAngle;
      const rotation = (startAngle + endAngle) / 2;
      return {
        gift,
        startAngle,
        endAngle,
        rotation,
      };
    });
  };

  useEffect(() => {
    if (rouletteRef.current) {
      const ctx = rouletteRef.current.getContext("2d");
      const segments = createPieSegments();
      const radius = rouletteRef.current.width / 2;
      ctx.clearRect(
        0,
        0,
        rouletteRef.current.width,
        rouletteRef.current.height
      );

      segments.forEach((segment, index) => {
        ctx.beginPath();
        ctx.moveTo(radius, radius);
        ctx.arc(
          radius,
          radius,
          radius,
          (segment.startAngle * Math.PI) / 180,
          (segment.endAngle * Math.PI) / 180
        );
        ctx.fillStyle = "#D1D5DB"; // Set the background color of the roulette to gray
        ctx.fill();
        ctx.strokeStyle = "purple"; // Set the border color of the roulette to purple
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.save();

        ctx.translate(radius, radius);
        ctx.rotate((segment.rotation * Math.PI) / 180);
        ctx.textAlign = "center";
        ctx.fillStyle = index === 1 ? "purple" : "black"; // Change the text color to purple for the "iPhone 14" segment
        ctx.font = "16px Arial";
        ctx.fillText(segment.gift, radius / 2, 10);
        ctx.restore();
      });
    }
  }, [spinning]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-8">Roulette Spin</h1>
      <div className="relative w-96 h-96 mb-8">
        <canvas
          ref={rouletteRef}
          width="384"
          height="384"
          className={`rounded-full border-4 border-purple-600 ${
            spinning ? "animate-spin-slow" : ""
          }`}
        ></canvas>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <button
        onClick={spinRoulette}
        className={`px-4 py-2 bg-blue-600 rounded ${
          spinning ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
        disabled={spinning}
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>
      {result && <div className="mt-4 text-xl font-bold">Result: {result}</div>}
    </div>
  );
};

export default Roulette;
