"use client";
import React from "react";
import classnames from "classnames";
import { Card } from "../atoms/Card";
import { ArrowDown, ArrowUp } from "lucide-react";
import clsx from "clsx";

interface MetricsCardProps {
  name: string;
  value: number;
  comparisonValue: number;
  source: string;
}

const MetricsCard = ({
  name,
  value,
  comparisonValue,
  source,
}: MetricsCardProps) => {
  const colors = ["#F1F3FD", "#F5F1FD", "#EDF8FD", "#F3FFE8"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Card
      classNames={clsx(
        "relative h-[140px] p-6 rounded-lg min-w-[180px]",
        "bg-[" + randomColor + "]"
      )}
    >
      <div className="absolute top-0 left-4 flex items-center gap-2 text-gray-400 text-[12px] px-2.5 py-1 rounded-b-lg bg-white">
        {source}
      </div>
      <div className="flex flex-col gap-2 justify-center h-full">
        <span className="text-sm font-semibold">{name}</span>
        <div className="flex gap-2 items-center">
          <span className="text-2xl font-bold">{value}</span>
          <div
            className={`flex items-center gap-2 ${
              comparisonValue !== 0
                ? Number(comparisonValue) > 0
                  ? "text-green-500"
                  : "text-red-500"
                : "text-gray-400"
            }`}
          >
            {Number(comparisonValue) > 0 || Number(comparisonValue) === 0 ? (
              <ArrowUp width={12} />
            ) : (
              <ArrowDown width={12} />
            )}
            <span className="text-sm">{comparisonValue}%</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MetricsCard;
