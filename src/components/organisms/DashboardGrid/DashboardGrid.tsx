"use client";

import { useRef, useState } from "react";
import { GridContainer, GridItem } from "../../atoms/GridContainer";
import {
  dashboardsGridInfo,
  GamingMetricsReportData,
  GamingSupportReportData,
  LineChartData,
} from "@/constants/dummyData";
import { Card, CardBody } from "../../atoms/Card";
import StatsCardHeader from "../../StatsCard/StatsCardHeader";
import DataTable from "../DataTable/DataTable";
import { ReportType } from "@/constants/reportType";
import { ArrowDown, ArrowUp, PlusCircle } from "lucide-react";
import { Line, LineChart } from "recharts";
import MetricsCard from "../../StatsCard/MetricsCard";

const DashboardGrid = () => {
  const [dashboardGridItems, setDashboardGridItems] =
    useState(dashboardsGridInfo);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragStart = (index: number) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index: number) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    const copyListItems = [...dashboardGridItems];
    const draggedItemContent = copyListItems[dragItem.current!];

    copyListItems.splice(dragItem.current!, 1);
    copyListItems.splice(dragOverItem.current!, 0, draggedItemContent);

    setDashboardGridItems(copyListItems);

    dragItem.current = null;
    dragOverItem.current = null;
  };

  const handleAddReport = () => {
    const randomItem =
      dashboardsGridInfo[Math.floor(Math.random() * dashboardsGridInfo.length)];

    const maxId = Math.max(...dashboardsGridInfo.map((item) => item.id));

    const newItem = {
      ...randomItem,
      id: maxId + 1,
    };
    setDashboardGridItems((prev) => [...prev, newItem]);
  };

  return (
    <GridContainer>
      {dashboardGridItems.map((dashboardGridItem, index) => {
        return (
          <GridItem key={index}>
            {/* This can be created as a component */}
            <Card classNames={"h-[27rem] group/outer"}>
              <StatsCardHeader
                title={dashboardGridItem.name}
                toggleChart={
                  dashboardGridItem.type === ReportType.H ? () => {} : undefined
                }
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragEnter={() => handleDragEnter(index)}
                onDragEnd={handleDragEnd}
              />

              <CardBody
                classNames="p-3"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                {dashboardGridItem.type === ReportType.MC ? (
                  <GridContainer>
                    {GamingMetricsReportData.map((item) => (
                      <GridItem key={item.id}>
                        <MetricsCard
                          name={item.name}
                          value={item.value}
                          comparisonValue={item.comparisonValue}
                          source={item.source}
                        />
                      </GridItem>
                    ))}
                  </GridContainer>
                ) : (
                  <DataTable
                    wrapperClassName="overflow-y-auto h-[20rem]"
                    isRowHoverable
                    data={GamingSupportReportData}
                    columns={[
                      { key: "name", header: "Sentisum Tag" },
                      { key: "volume", header: "Volume" },
                      {
                        key: "percent",
                        header: "percent",
                        render: (value) => (
                          <div className="flex gap-2 items-center justify-center">
                            <div
                              className={`flex items-center gap-2 ${
                                Number(value) > 0
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              {Number(value) > 0 ? (
                                <ArrowUp width={12} />
                              ) : (
                                <ArrowDown width={12} />
                              )}
                              <span>{value}%</span>
                            </div>
                            <LineChart
                              width={106}
                              height={35}
                              data={LineChartData}
                            >
                              <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                dot={false}
                              />
                              <Line
                                type="monotone"
                                dataKey="uv"
                                stroke="#82ca9d"
                                dot={false}
                                strokeDasharray="3 3"
                              />
                            </LineChart>
                          </div>
                        ),
                      },
                    ]}
                  />
                )}
              </CardBody>
            </Card>
          </GridItem>
        );
      })}
      <GridItem>
        <Card
          classNames={"h-[27rem] group/outer border-dashed cursor-pointer"}
          role="button"
          onClick={handleAddReport}
        >
          <CardBody classNames="flex justify-center items-center h-full p-3">
            <PlusCircle />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default DashboardGrid;
