import React from "react";
import {Link} from "react-router-dom";

function ConfirmedBooking() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Buchung bestätigt! 🎉
      </h1>
      <p className="text-lg text-gray-700">
        Ihre Reservierung wurde erfolgreich gespeichert.
      </p>
      <Link
        to="/"
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full">
        Zurück zur Startseite
      </Link>
    </div>
  );
}

export default ConfirmedBooking;
