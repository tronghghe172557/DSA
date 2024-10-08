import LayoutDefault from "../layout/LayoutDefault";
import Day1 from "../pages/Day1";
import Day10 from "../pages/Day10";
import Day11 from "../pages/Day11";
import Day12 from "../pages/Day12";
import Day13 from "../pages/Day13";
import Day14 from "../pages/Day14";
import Day2 from "../pages/Day2";
import Day3 from "../pages/Day3";
import Day4 from "../pages/Day4";
import Day5 from "../pages/Day5";
import Day6 from "../pages/Day6";
import Day7 from "../pages/Day7";
import Day8 from "../pages/Day8";
import Day9 from "../pages/Day9";

const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/day1/:bai",
        element: <Day1 />
      },
      {
        path: "/day2/:bai",
        element: <Day2 />
      },
      {
        path: "/day3/:bai",
        element: <Day3 />
      },
      {
        path: "/day4/:bai",
        element: <Day4 />
      },
      {
        path: "/day5/:bai",
        element: <Day5 />
      },
      {
        path: "/day6/:bai",
        element: <Day6 />
      },
      {
        path: "/day7/:bai",
        element: <Day7 />
      },
      {
        path: "/day8/:bai",
        element: <Day8 />
      },
      {
        path: "/day9/:bai",
        element: <Day9 />
      },
      {
        path: "/day10/:bai",
        element: <Day10 />
      },
      {
        path: "/day11/:bai",
        element: <Day11 />
      },
      {
        path: "/day12/:bai",
        element: <Day12 />
      },
      {
        path: "/day13/:bai",
        element: <Day13 />
      },
      {
        path: "/day14/:bai",
        element: <Day14 />
      },
    ],
  },
];

export default routes;
