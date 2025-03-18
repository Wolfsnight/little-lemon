import BookingForm from "./BookingForm";

function BookingPage({availableTimes, dispatch, submitForm}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold p-12">Book a table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;
