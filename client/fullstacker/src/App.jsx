import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Appointments from "./appointments.jsx";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("https://fullstacker.onrender.com/appointments", form);
    alert("Appointment booked");
  };

  return (
    <BrowserRouter>
      <main style={{ padding: "2rem", maxWidth: 500 }}>
        <h1>Book Appointment</h1>

        <Link to="/appointments">
          <button>Appointments</button>
        </Link>

        <form onSubmit={submit}>
          <input
            placeholder="Name"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Email"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="date"
            onChange={e => setForm({ ...form, date: e.target.value })}
          />
          <button type="submit">Book</button>
        </form>

        <Routes>
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
