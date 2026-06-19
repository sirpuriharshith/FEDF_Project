import AppShell from "../../components/common/AppShell";
import "./Dashboard.css";

function Dashboard() {
  return (
    <AppShell>
      <section className="dashboard-heading">
        <h1>Dashboard</h1>
        <p>Welcome to your personalized health assistant.</p>
      </section>

      <div className="dashboard-grid">
        <article className="dashboard-card card-highlight">
          <h3>Health Score</h3>
          <p>85%</p>
        </article>

        <article className="dashboard-card">
          <h3>Upcoming Appointments</h3>
          <p>2 Upcoming</p>
        </article>

        <article className="dashboard-card">
          <h3>Emergency Alerts</h3>
          <p>No Active Alerts</p>
        </article>
      </div>
    </AppShell>
  );
}

export default Dashboard;