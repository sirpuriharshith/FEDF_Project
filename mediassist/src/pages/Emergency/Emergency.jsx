import { useState } from "react";
import AppShell from "../../components/common/AppShell";
import "./Emergency.css";

function Emergency() {
  const [injury, setInjury] = useState("");
  const [report, setReport] = useState(null);

  const analyzeEmergency = () => {
    if (!injury.trim()) {
      alert("Please describe the emergency situation.");
      return;
    }

    let severity;
    let specialist;
    let action;

    if (
      injury.toLowerCase().includes("fracture") ||
      injury.toLowerCase().includes("broken") ||
      injury.toLowerCase().includes("crush")
    ) {
      severity = "Critical";
      specialist = "Orthopedic Surgeon";
      action = "Call 911 immediately. Immobilize the affected area.";
    } else if (
      injury.toLowerCase().includes("bleed") ||
      injury.toLowerCase().includes("blood") ||
      injury.toLowerCase().includes("wound")
    ) {
      severity = "High";
      specialist = "Trauma Surgeon";
      action = "Apply pressure to stop bleeding. Call emergency services.";
    } else if (
      injury.toLowerCase().includes("burn") ||
      injury.toLowerCase().includes("scald")
    ) {
      severity = "High";
      specialist = "Burn Specialist";
      action = "Cool the burn under running water for 10-20 minutes. Seek immediate medical care.";
    } else if (
      injury.toLowerCase().includes("poison") ||
      injury.toLowerCase().includes("overdose")
    ) {
      severity = "Critical";
      specialist = "Toxicologist";
      action = "Call Poison Control immediately. Do not wait.";
    } else {
      severity = "Medium";
      specialist = "Emergency Medicine";
      action = "Seek medical attention as soon as possible.";
    }

    setReport({
      severity,
      specialist,
      action,
    });
  };

  return (
    <AppShell>
      <div className="emergency-container">
        <h1>🚨 Emergency Accident Assistance</h1>
        <p className="subtitle">Describe your emergency situation for immediate guidance</p>

        <textarea
          value={injury}
          onChange={(e) => setInjury(e.target.value)}
          placeholder="Describe the accident or emergency (e.g., fracture, severe bleeding, burns)"
          className="emergency-input"
        />

        <button onClick={analyzeEmergency} className="emergency-btn">Get Emergency Guidance</button>

        {report && (
          <div className="result emergency-result">
            <h2>Emergency Assessment</h2>
            <div className={`severity-badge severity-${report.severity.toLowerCase()}`}>
              Severity: {report.severity}
            </div>
            <div className="result-grid">
              <div className="result-item">
                <strong>Recommended Specialist:</strong>
                <p>{report.specialist}</p>
              </div>
              <div className="result-item">
                <strong>Immediate Action:</strong>
                <p>{report.action}</p>
              </div>
            </div>
            <p className="emergency-warning">⚠️ If life is in immediate danger, call 911 or your local emergency number.</p>
          </div>
        )}
      </div>
    </AppShell>
  );
}

export default Emergency;