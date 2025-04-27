import React from "react";
import {
  GripVertical,
  Database,
  EllipsisVertical,
  Table,
  ChartNoAxesColumnIncreasing,
  ChartBarIncreasing,
} from "lucide-react";

interface StatsCardHeaderProps {
  title: string;
  toggleChart?: () => void;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
}

const StatsCardHeader = ({
  title,
  toggleChart,
  draggable,
  onDragStart,
  onDragEnter,
  onDragEnd,
}: StatsCardHeaderProps) => {
  return (
    <div
      className="h-[76px] cursor-grab group-hover/outer:bg-gray-100 pr-3 pb-3"
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
    >
      <div className="flex items-center justify-between gap-2 h-full">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 py-2">
            <div className="flex opacity-0 group-hover/outer:opacity-100">
              <GripVertical width={12} color="gray" />
            </div>
            <Database width={12} color="gray" />
            <span className="text-xs text-gray-400">Gaming support</span>
          </div>
          <span>{title}</span>
        </div>
        <div className="flex items-center gap-2 ">
          {toggleChart && (
            <div className="flex h-10">
              <button className="px-3 py-2 rounded-l-lg group/inner hover:bg-indigo-100 border hover:border-indigo-500!">
                <Table
                  width={12}
                  className="text-gray-400 group-hover/inner:text-indigo-400"
                />
              </button>
              <button className="px-3 py-2 group/inner hover:bg-indigo-100 border hover:border-indigo-500!">
                <ChartNoAxesColumnIncreasing
                  width={12}
                  className="text-gray-400 group-hover/inner:text-indigo-400"
                />
              </button>
              <button className="px-3 py-2 rounded-r-lg group/inner hover:bg-indigo-100 border hover:border-indigo-500!">
                <ChartBarIncreasing
                  width={12}
                  className="text-gray-400 group-hover/inner:text-indigo-400"
                />
              </button>
            </div>
          )}
          <button className="flex opacity-0 group-hover/outer:opacity-100">
            <EllipsisVertical width={12} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsCardHeader;
