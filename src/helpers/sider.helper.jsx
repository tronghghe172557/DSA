import { Link } from "react-router-dom";

const day = ['Day1','Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7', 'Day8', 'Day9', 'Day10', 'Day11', 'Day12', 'Day13', 'Day14']

export const items2 = day.map(
  (day, index) => {
    return {
      key: `${day}/${index+1}`,
      label: `${day}`,
      children: new Array(5).fill(null).map((_, j) => {
        const subKey = j + 1;
        return {
          key: `${day}/bai:${subKey}`,
          label: <Link to={`${day}/${subKey}`}>{`${day}/${subKey}`}</Link>,
        };
      }),
    };
  }
);
