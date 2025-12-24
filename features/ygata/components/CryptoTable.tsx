import React from "react";
import Image from "next/image";

// --- Types ---
interface TokenData {
  id: string;
  icon: string;
  name: string;
  quantity: number | string;
  reward: number | string | null;
  price: number | string | null;
  usdValue: number | string | null;
}

interface CryptoTableProps {
  data?: TokenData[];
}

// --- Helper: Format Value ---
const formatValue = (
  val: number | string | null,
  isCurrency: boolean = false
) => {
  if (val === null || val === "NaN" || val === "-") return "-";

  const num = typeof val === "string" ? parseFloat(val) : val;

  // If string parsing failed but it wasn't NaN string (e.g. "50.04K"), return original string
  if (isNaN(num)) return val;

  const options: Intl.NumberFormatOptions = isCurrency
    ? { style: "currency", currency: "USD", minimumFractionDigits: 2 }
    : { maximumFractionDigits: 5 };

  return num.toLocaleString("en-US", options);
};

export default function CryptoTable({ data = [] }: CryptoTableProps) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-black min-h-screen font-sans text-white">
      <table className="w-full border-separate border-spacing-y-3">
        {/* Table Header */}
        <thead>
          <tr className="text-gray-500 text-xs uppercase tracking-wider text-left">
            <th className="pb-2 pl-4 font-medium">Token</th>
            <th className="pb-2 font-medium">Quantity</th>
            <th className="pb-2 font-medium">Reward</th>
            <th className="pb-2 font-medium">Price</th>
            <th className="pb-2 pr-4 font-medium text-right">USD Value</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="group">
              {/* Token Column */}
              <td className="bg-gray-900/50 border border-gray-800 border-r-0 rounded-l-xl py-4 pl-4 align-middle group-hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  {row.icon.includes('/') || row.icon.includes('.') ? (
                    <Image
                      src={row.icon}
                      alt={row.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <span className="text-2xl">{row.icon}</span>
                  )}
                  <span className="font-bold text-lg tracking-wide">
                    {row.name}
                  </span>
                </div>
              </td>

              {/* Quantity Column */}
              <td className="bg-gray-900/50 border-y border-gray-800 py-4 align-middle group-hover:bg-gray-800/50 transition-colors">
                <span className="font-bold font-mono text-base">
                  {/* Directly using val because K/M might be strings */}
                  {typeof row.quantity === "number"
                    ? formatValue(row.quantity)
                    : row.quantity}
                </span>
              </td>

              {/* Reward Column */}
              <td className="bg-gray-900/50 border-y border-gray-800 py-4 align-middle group-hover:bg-gray-800/50 transition-colors">
                <span className="font-bold font-mono text-base">
                  {formatValue(row.reward)}
                </span>
              </td>

              {/* Price Column */}
              <td className="bg-gray-900/50 border-y border-gray-800 py-4 align-middle group-hover:bg-gray-800/50 transition-colors">
                <span className="font-bold font-mono text-base">
                  {formatValue(row.price, true)}
                </span>
              </td>

              {/* USD Value Column (Gradient) */}
              <td className="bg-gray-900/50 border border-gray-800 border-l-0 rounded-r-xl py-2 pr-2 align-middle text-right group-hover:bg-gray-800/50 transition-colors w-[180px]">
                {/* We use a div here only to create the pill shape *inside* the table cell */}
                <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg py-2 px-4 shadow-lg inline-block w-full">
                  <div className="text-[10px] text-white/80 uppercase font-medium mb-0.5 text-left">
                    USD Value
                  </div>
                  <div className="font-bold text-lg text-white text-left">
                    {formatValue(row.usdValue, true)}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
