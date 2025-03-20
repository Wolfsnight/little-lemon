import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockSubmitForm = jest.fn();
const mockDispatch = jest.fn();

describe("BookingForm", () => {
  test("renders all input fields and button", () => {
    render(
      <BookingForm
        availableTimes={["18:00", "19:00"]}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /submit/i})).toBeInTheDocument();
  });

  test("validates required fields before submission", () => {
    render(
      <BookingForm
        availableTimes={["18:00", "19:00"]}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    fireEvent.click(screen.getByRole("button", {name: /submit/i}));

    expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
    expect(
      screen.getByText(/please select the number of guests/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/please select an occasion/i)).toBeInTheDocument();
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test("allows submission when all fields are valid", () => {
    render(
      <BookingForm
        availableTimes={["18:00", "19:00"]}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: {value: "2025-03-21"},
    });
    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: {value: "18:00"},
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: {value: "2"},
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: {value: "Birthday"},
    });

    fireEvent.click(screen.getByRole("button", {name: /submit/i}));

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  });
});
