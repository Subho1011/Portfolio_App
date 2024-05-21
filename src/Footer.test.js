import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./components/Footer";

test("current year is shown", () => {
  render(<Footer/>);
  const year = screen.getByTestId('year');
  const date = new Date();
  console.log(date.getFullYear());
  expect(date.getFullYear()).toEqual(+year.innerHTML);
});

test("four links should be present in footer", () => {
  render(<Footer/>);
  const lists = screen.getAllByRole('listitem');
  expect(lists).toHaveLength(4);
});