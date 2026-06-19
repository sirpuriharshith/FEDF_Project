export default function Card({ children, className='' }) { return <section className={'card ' + className}>{children}</section>; }
export function StatCard({ icon, title, text, onClick }) { return <button className="stat-card" onClick={onClick}><span className="stat-icon">{icon}</span><strong>{title}</strong><p>{text}</p></button>; }
export function Pill({ children, tone='blue' }) { return <span className={'pill '+tone}>{children}</span>; }
