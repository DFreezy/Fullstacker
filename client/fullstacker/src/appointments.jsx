import React from 'react'
import { useEffect, useState } from 'react'

export default function Appointments() {
useEffect(() => {
  fetch("https://fullstacker.onrender.com/appointments")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);
const [data, setData] = useState(null);
  return (
    <>
        <main style={{ padding: "2rem", maxWidth: 500 }}>
        <h1>Appointments</h1>
        {!data ? (
            <p>Loading...</p>
        ) : (
            <ul>
            {data.map((appointment) => (
                <li key={appointment.id}>
                {appointment.name} - {appointment.email} - {appointment.date}
                </li>
            ))}
            </ul>
        )}
        </main>
      </>
    )
}