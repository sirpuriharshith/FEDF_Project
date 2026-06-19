import { useState } from "react";
import AppShell from "../../components/common/AppShell";
import "./Profile.css";

function Profile() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    allergies: "",
    diseases: "",
    medicalHistory: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Profile Saved Successfully");
  };

  return (
    <AppShell>
      <section className="profile-container">
        <h1>Patient Profile</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={patient.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={patient.age}
            onChange={handleChange}
          />

          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={patient.gender}
            onChange={handleChange}
          />

          <input
            type="text"
            name="bloodGroup"
            placeholder="Blood Group"
            value={patient.bloodGroup}
            onChange={handleChange}
          />

          <input
            type="text"
            name="allergies"
            placeholder="Allergies"
            value={patient.allergies}
            onChange={handleChange}
          />

          <input
            type="text"
            name="diseases"
            placeholder="Existing Diseases"
            value={patient.diseases}
            onChange={handleChange}
          />

          <textarea
            name="medicalHistory"
            placeholder="Medical History"
            value={patient.medicalHistory}
            onChange={handleChange}
          />

          <button type="submit">Save Profile</button>
        </form>
      </section>
    </AppShell>
  );
}

export default Profile;