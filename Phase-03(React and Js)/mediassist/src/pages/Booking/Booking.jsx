import { useState } from "react";
import AppShell from "../../components/common/AppShell";
import "./Booking.css";

function Booking() {
  const [booking, setBooking] = useState({
    patientName: "",
    doctor: "",
    date: "",
    time: "",
  });

  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!booking.patientName || !booking.doctor || !booking.date || !booking.time) {
      alert("Please fill in all fields");
      return;
    }

    setConfirmation(`Appointment confirmed with ${booking.doctor} on ${booking.date} at ${booking.time}`);
    setBooking({ patientName: "", doctor: "", date: "", time: "" });
  };

  return (
    <AppShell>
      <section className="booking-container">
        <h1>Appointment Booking</h1>
        <p className="subtitle">Schedule your consultation with a specialist</p>

        <form onSubmit={handleSubmit} className="booking-form">
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={booking.patientName}
            onChange={handleChange}
            className="form-input"
          />

          <select name="doctor" value={booking.doctor} onChange={handleChange} className="form-input">
            <option value="">Select Doctor</option>
            <option value="Dr. Rajesh Kumar">Dr. Rajesh Kumar (Cardiologist)</option>
            <option value="Dr. Priya Sharma">Dr. Priya Sharma (Gastroenterologist)</option>
            <option value="Dr. Arun Kumar">Dr. Arun Kumar (General Physician)</option>
            <option value="Dr. Vikram Singh">Dr. Vikram Singh (Neurologist)</option>
            <option value="Dr. Neha Patel">Dr. Neha Patel (Pulmonologist)</option>
          </select>

          <input type="date" name="date" value={booking.date} onChange={handleChange} className="form-input" />
          <input type="time" name="time" value={booking.time} onChange={handleChange} className="form-input" />

          <button type="submit" className="submit-btn">Book Appointment</button>
        </form>

        {confirmation && <div className="booking-confirmation">{confirmation}</div>}
      </section>
    </AppShell>
  );
}

export default Booking;