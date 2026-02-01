import { useState } from "react";
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
    <main style={{ padding: "2rem", maxWidth: 500 }}>
      <h1>Book Appointment</h1>
      <form onSubmit={submit}>
        <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
        <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
        <input type="date" onChange={e => setForm({...form, date:e.target.value})} />
        <button>Book</button>
      </form>
    </main>
  );
}

export default App;