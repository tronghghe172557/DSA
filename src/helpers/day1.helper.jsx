import { Form, Input } from "antd";

// 1 method
export const getFormFields = (bai) => {
  switch (bai) {
    case "1":
      return [
        // Form fields for bai 1
        <Form.Item
          label="Bài 1 - coeffs"
          name="b1-s1"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
          initialValue={"1 2 3 4 5"}
        >
          <Input />
        </Form.Item>,
        <Form.Item
          label="Bài 1 - powers"
          name="b1-s2"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
          initialValue={"6 7 8 9 10"}
        >
          <Input />
        </Form.Item>,
        <Form.Item
          label="Bài 1 - left and right"
          name="b1-s3"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
          initialValue={"1 4"}
        >
          <Input />
        </Form.Item>,
      ];
    case "2":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Bài 2 - String"
          name="b2-s1"
          rules={[{ required: true, message: "Please input Bài 2!" }]}
          initialValue={`accabb`}
        >
          <Input />
        </Form.Item>,
      ];
    case "3":
      return [
        <Form.Item
          label="Bài 3"
          name="b3-s1"
          initialValue={`9875`}
          rules={[{ required: true, message: "Please input Bài 3!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    case "4":
      return [
        <>
          <Form.Item
            label="Bài 4"
            name="b4-s1"
            initialValue={"4"}
            rules={[{ required: true, message: "Please input Bài 4!" }]}
          >
            <Input />
          </Form.Item>
        </>,
      ];
    case "5":
      return [
        // Form fields for bai 2
        <Form.Item
          label="String"
          name="b5-s1"
          initialValue={"RGGRR"}
          rules={[{ required: true, message: "Please input Bài 5!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    default:
      return [
        // Default form fields
        <Form.Item
          label="Default Field"
          name="defaultField"
          rules={[{ required: true, message: "Please input default field!" }]}
        >
          <Input />
        </Form.Item>,
      ];
  }
};

// 1 method
export const getTopic = (bai) => {
  switch (bai) {
    case "1":
      return {
        image: "image",
        link: "/assets/images/day1-1.png",
        linkAssignment:
          "https://www.hackerrank.com/challenges/area-under-curves-and-volume-of-revolving-a-curv/problem",
      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day1-2.png",
        linkAssignment:
          "https://www.hackerrank.com/challenges/string-reductions/problem",
      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day1-3.png",
        linkAssignment:
          "https://www.hackerrank.com/challenges/super-digit/problem?isFullScreen=false",
      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day1-4.png",
        linkAssignment:
          "https://www.hackerrank.com/challenges/pascals-triangle/problem",
      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day1-5.png",
        linkAssignment:
          "https://www.hackerrank.com/challenges/sequence-full-of-colors/problem",
      };

    default:
      return `
        Không có đề bài
     `;
  }
};

export const pascalTriangle = function(numRows) {
  const res = [[1]];
  let resultString = '';

  for (let i = 0; i < numRows - 1; i++) {
    const dummyRow = [0, ...res[res.length - 1], 0];
    const row = [];

    for (let j = 0; j < dummyRow.length - 1; j++) {
      row.push(dummyRow[j] + dummyRow[j + 1]);
    }

    res.push(row);
  }

  // Format each row and add a line break
  res.forEach((row, index) => {
    resultString += row.join(' ') + (index < res.length - 1 ? '</br>' : '');
  });

  return resultString;
};


// bai3
export function superDigit(n1, n2) {
  let check = [n1];
  for (let i = 1; i < n2; i++) {
    check.push(n1);
  }

  const super_digit = (Exam) => {
    let result = Exam.split("").reduce((initialValue, currentValue) => {
      return parseInt(currentValue) + initialValue;
    }, 0);

    if (result > 10) {
      result = super_digit(result + "");
    }

    return result;
  };

  return super_digit(check.join(""));
}

// bai 2
export function reduceString(s) {
  const arraySet = new Set();
  const test = s.split("");
  let result = [];

  test.forEach((item) => {
    arraySet.add(item);
  });

  arraySet.forEach((it) => {
    // console.log(it)
    result.push(it);
  });

  return Array.from(arraySet).join(" ");
}
// bai 2

// bai 1
function integrate(f, L, R, step = 0.001) {
  let area = 0;
  for (let x = L; x < R; x += step) {
    const xNext = x + step;
    area += (f(x) + f(xNext)) * 0.5 * step;
  }
  return area;
  //  su dung tich phan tu a den b cua f(x)dx = (b-a)[(f(a) + f(b))/2]
}

function polynomial(coeffs, powers, x) {
  let result = 0;
  for (let i = 0; i < coeffs.length; i++) {
    result += coeffs[i] * Math.pow(x, powers[i]);
  }
  return result;
}
//  tinh a1.x^b1 + a2.x^b2 + ... + an.x^bn

export function areaUnderCurve(coeffs, powers, L, R) {
  const f = (x) => polynomial(coeffs, powers, x);
  return integrate(f, L, R);
}
//   tinh dien tich

export function volumeOfRevolution(coeffs, powers, L, R) {
  const f = (x) => Math.PI * Math.pow(polynomial(coeffs, powers, x), 2);
  return integrate(f, L, R);
}

// bai 1

//bai 5
export const checkString = (exam) => {
  const count = { R: 0, G: 0, Y: 0, B: 0 };

  // Count character occurrences
  for (let char of exam) {
    if (count[char] !== undefined) {
      count[char]++;
    }
  }

  // Check conditions
  const rgDiff = Math.abs(count.R - count.G);
  const ybDiff = Math.abs(count.Y - count.B);

  if (rgDiff > 1 || ybDiff > 1) {
    return false;
  }

  return true;
};
