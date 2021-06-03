import React from "react";
import { render } from "@testing-library/react";
import { Stock } from "./Stock";
import userEvent from "@testing-library/user-event";

test("renders company label", () => {
  const { getByText } = render(<Stock />);
  const linkElement = getByText(/company:/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders value label", () => {
  const { getByText } = render(<Stock />);
  const linkElement = getByText(/Stock value:/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders day diff label", () => {
  const { getByText } = render(<Stock />);
  const linkElement = getByText(/Diff:/i);
  expect(linkElement).toBeInTheDocument();
});

test("render aria label table", () => {
  const { getByLabelText } = render(<Stock />);
  const linkElement = getByLabelText(/table/i);
  expect(linkElement).toBeInTheDocument();
});

test("render list elements must be 10", () => {
  const { getAllByLabelText } = render(<Stock />);
  const linkElement = getAllByLabelText(/list-element/i);
  expect(linkElement.length).toEqual(10);
});

// describe("<Stock />", () => {
//   let getByTestId;
//
//   describe("clicking the cross button", () => {
//     beforeEach(async () => {
//       ({ getByTestId } = render(<Stock />));
//
//       // await userEvent.type(
//       //     getByTestId('cross-button'),
//       // );
//       userEvent.click(getByTestId("cross-button"));
//     });
//
//     it("clears the text field", () => {
//       expect(getByTestId("company")).toHaveTextContent("Company:");
//     });
//   });
// });
