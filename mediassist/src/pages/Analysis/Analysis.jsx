import { useState } from "react";
import AppShell from "../../components/common/AppShell";
import "./Analysis.css";

function Analysis() {
  const [symptoms, setSymptoms] = useState("");
  const [food, setFood] = useState("");
  const [result, setResult] = useState(null);

  const analyzeHealth = () => {
    if (!symptoms.trim()) {
      alert("Please enter your symptoms.");
      return;
    }

    let condition;
    let specialist;
    let risk;

    if (symptoms.toLowerCase().includes("chest pain")) {
      condition = "Possible Cardiac Concern";
      specialist = "Cardiologist";
      risk = "High";
    } else if (
      food.toLowerCase().includes("spicy") &&
      symptoms.toLowerCase().includes("burning")
    ) {
      condition = "Possible Gastric Irritation";
      specialist = "Gastroenterologist";
      risk = "Low";
    } else if (symptoms.toLowerCase().includes("fever")) {
      condition = "Possible Viral Infection";
      specialist = "General Physician";
      risk = "Medium";
    } else if (symptoms.toLowerCase().includes("headache")) {
      condition = "Possible Migraine";
      specialist = "Neurologist";
      risk = "Low";
    } else if (symptoms.toLowerCase().includes("cough")) {
      condition = "Possible Respiratory Issue";
      specialist = "Pulmonologist";
      risk = "Medium";
    } else {
      condition = "Further Analysis Required";
      specialist = "General Physician";
      risk = "Unknown";
    }

    setResult({
      condition,
      specialist,
      risk,
    });
  };

  return (
    <AppShell>
      <section className="analysis-container">
        <h1>Health Analysis</h1>
        <p className="subtitle">Describe your symptoms for AI-powered analysis</p>

        <textarea
          placeholder="Enter Symptoms (e.g., chest pain, fever, headache)"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          className="analysis-input"
        />

        <textarea
          placeholder="Food Consumed (optional)"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          className="analysis-input"
        />

        <button onClick={analyzeHealth} className="analyze-btn">Analyze Health</button>

        {result && (
          <div className="result">
            <h2>Analysis Result</h2>
            <div className="result-grid">
              <div className="result-item">
                <strong>Condition:</strong>
                <p>{result.condition}</p>
              </div>
              <div className="result-item">
                <strong>Risk Level:</strong>
                <p className={`risk-${result.risk.toLowerCase()}`}>{result.risk}</p>
              </div>
              <div className="result-item">
                <strong>Recommended Specialist:</strong>
                <p>{result.specialist}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </AppShell>
  );
}

export default Analysis;