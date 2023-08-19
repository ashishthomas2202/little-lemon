import { render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();
});
