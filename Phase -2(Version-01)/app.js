// =========================
// Application State
// =========================

const appState = {
  symptoms: "",
  food: "",
  result: null
};

// =========================
// Doctor Data
// =========================

const doctors = [
  {
    id: 1,
    name: "Dr. Ravi Kumar",
    specialization: "General Physician",
    experience: "8 Years"
  },
  {
    id: 2,
    name: "Dr. Anjali Sharma",
    specialization: "Neurologist",
    experience: "12 Years"
  },
  {
    id: 3,
    name: "Dr. Arjun Rao",
    specialization: "Cardiologist",
    experience: "10 Years"
  }
];

// =========================
// Render Doctor Cards
// =========================

function renderDoctors() {
  const doctorGrid = document.getElementById("doctorGrid");

  doctorGrid.innerHTML = doctors.map((doctor) => {
    return `
      <div class="doctor-card">
        <h3>${doctor.name}</h3>
        <p><strong>Specialization:</strong> ${doctor.specialization}</p>
        <p><strong>Experience:</strong> ${doctor.experience}</p>
      </div>
    `;
  }).join("");
}

// =========================
// Health Analysis Function
// =========================

function analyzeHealth() {

  const symptoms = document
    .getElementById("symptoms")
    .value
    .toLowerCase();

  const food = document
    .getElementById("food")
    .value
    .toLowerCase();

  // Update State
  appState.symptoms = symptoms;
  appState.food = food;

  let result = {
    issue: "General Health Observation",
    doctor: "General Physician"
  };

  // Gastric Condition
  if (
    symptoms.includes("burning") &&
    food.includes("spicy")
  ) {
    result = {
      issue: "Possible Gastric Irritation",
      doctor: "General Physician"
    };
  }

  // Head Pain
  else if (
    symptoms.includes("head pain")
  ) {
    result = {
      issue: "Possible Neurological Concern",
      doctor: "Neurologist"
    };
  }

  // Chest Pain
  else if (
    symptoms.includes("chest pain")
  ) {
    result = {
      issue: "Possible Cardiac Concern",
      doctor: "Cardiologist"
    };
  }

  // Save Result in State
  appState.result = result;

  // Render Result
  renderResult();
}

// =========================
// Render Result
// =========================

function renderResult() {

  const resultCard = document.getElementById("resultCard");
  const issue = document.getElementById("issue");
  const doctor = document.getElementById("doctor");

  issue.innerHTML = `<strong>Possible Issue:</strong> ${appState.result.issue}`;

  doctor.innerHTML = `<strong>Recommended Doctor:</strong> ${appState.result.doctor}`;

  resultCard.classList.remove("hidden");
}

// =========================
// Scroll Function
// =========================

function scrollToAnalysis() {
  document
    .getElementById("analysis")
    .scrollIntoView({ behavior: "smooth" });
}

// =========================
// Initial Render
// =========================

renderDoctors();