import React, {useState} from "react";

function BookingForm({availableTimes, dispatch, submitForm}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({type: "UPDATE_DATE", payload: selectedDate});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!date || !time || !guests || guests < 1 || guests > 10 || !occasion) {
      return; // Verhindert das Absenden, wenn ein Feld leer oder ungültig ist
    }

    submitForm({date, time, guests, occasion});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 pb-12"
      aria-labelledby="booking-form-title">
      {/* Date Selection */}
      <label htmlFor="res-date">Choose date</label>
      <input
        className="w-60 border border-gray-300 rounded-md p-2"
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        min={new Date().toISOString().split("T")[0]}
      />
      {isSubmitted && !date && (
        <p style={{color: "red"}}>Please select a date.</p>
      )}

      {/* Time Selection */}
      <label htmlFor="res-time">Choose time</label>
      {!availableTimes || availableTimes.length === 0 ? (
        <p style={{color: "red"}}>No available times for the selected date.</p>
      ) : (
        <select
          className="w-60 border border-gray-300 rounded-md p-2"
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}>
          <option
            value=""
            disabled>
            Select a time
          </option>
          {availableTimes.map((t) => (
            <option
              key={t}
              value={t}>
              {t}
            </option>
          ))}
        </select>
      )}
      {isSubmitted && !time && (
        <p style={{color: "red"}}>Please select a time.</p>
      )}

      {/* Number of Guests */}
      <label htmlFor="guests">Number of guests</label>
      <select
        className="w-60 border border-gray-300 rounded-md p-2"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value, 8))}
        aria-label="Select number of guests">
        <option value="">How many guests?</option>
        {[...Array(8).keys()].map((num) => (
          <option
            key={num + 1}
            value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>
      {isSubmitted && !guests && (
        <p style={{color: "red"}}>Please select the number of guests.</p>
      )}
      <p className="w-80 text-center text-gray-600 text-xs">
        If you have more than 8 guests, please call us at{" "}
        <a
          href="tel:+123456789"
          className="text-blue-500 underline">
          +123456789
        </a>{" "}
        and we will arrange it for you.
      </p>

      {/* Occasion Selection */}
      <label htmlFor="occasion">Occasion</label>
      <select
        className="w-60 border border-gray-300 rounded-md p-2"
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Business">Business</option>
        <option value="Casual">Casual</option>
        <option value="Hungry">I'am Hungry</option>
      </select>
      {isSubmitted && !occasion && (
        <p style={{color: "red"}}>Please select an occasion.</p>
      )}

      {/* Submit Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        type="submit"
        aria-label="Submit booking form">
        Submit
      </button>

      {/* Reset Button */}
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md"
        type="button"
        onClick={() => {
          setDate("");
          setTime("");
          setGuests("");
          setOccasion("");
          setIsSubmitted(false);
        }}
        aria-label="Reset booking form">
        Reset
      </button>
    </form>
  );
}

export default BookingForm;
