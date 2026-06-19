import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./AppShell.css";

function AppShell({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <main className="app-main">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default AppShell;
