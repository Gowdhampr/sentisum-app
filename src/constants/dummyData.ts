export const dashboardsGridInfo = [
  {
    id: 1,
    name: "Stat report",
    type: "H",
  },
  {
    id: 2,
    name: "Statistic card",
    type: "MC",
  },
];

export const GamingSupportReportData = [
  {
    id: 1,
    name: "game crashed",
    volume: 8102,
    percent: 6,
  },
  {
    id: 2,
    name: "game aborted",
    volume: 706,
    percent: -10,
  },
  {
    id: 3,
    name: "request refund",
    volume: 720,
    percent: -6,
  },
  {
    id: 4,
    name: "i didn't abort",
    volume: 424,
    percent: 6,
  },
  {
    id: 5,
    name: "app crashed",
    volume: 452,
    percent: 8,
  },
  {
    id: 6,
    name: "app crashed",
    volume: 452,
    percent: 8,
  },
  {
    id: 7,
    name: "app crashed",
    volume: 452,
    percent: 8,
  },
];

export const LineChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const MetricsCardSource = {
  "demo_onlinegame-support-2023-new": "Gaming Support",
  "demo_mealkit-survey": "Meal kit Survey",
  "demo_mealkit-support": "Meal kit Support",
};

export const GamingMetricsReportData = [
  {
    id: 1,
    name: "Volume",
    value: 18851,
    comparisonValue: 555,
    source: MetricsCardSource["demo_mealkit-support"],
  },
  {
    id: 2,
    name: "% Of Tickets",
    value: 100,
    comparisonValue: 0,
    source: MetricsCardSource["demo_mealkit-support"],
  },
  {
    id: 3,
    name: "Sentiment",
    value: 93,
    comparisonValue: 3,
    source: MetricsCardSource["demo_mealkit-survey"],
  },
  {
    id: 4,
    name: "Volume",
    value: 58873,
    comparisonValue: 1213,
    source: MetricsCardSource["demo_onlinegame-support-2023-new"],
  },
];
