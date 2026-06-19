import { useNavigate } from 'react-router-dom';
import PageShell from '../../components/PageShell';
import Card, { StatCard, Pill } from '../../components/Card';
import { useAuth } from '../../context/AuthContext';
import { load } from '../../services/storage';

export default function Dashboard(){
 const nav=useNavigate(); const {user}=useAuth();
 const appts=load('appointments',[]); const vitals=load('vitals',[]);
 const name=(user?.displayName||'Harshith').split(' ')[0];
 const cards=[['/records','▣','Health Records','Vitals & medications'],['/analysis','♨','Symptom Check','AI-guided triage'],['/assistant','✦','AI Assistant','Medical language simplified'],['/doctors','♡','Doctors','Specialist recommendations'],['/hospitals','▤','Hospitals','Nearby & top-rated'],['/booking','□','Appointments','Book & manage'],['/costs','◌','Cost Estimator','Plan ahead'],['/recovery','↗','Recovery','Daily check-ins'],['/awareness','▥','Awareness','Articles & guides']];
 return <PageShell title={`Hello, ${name} 👋`} subtitle="Here's a calm overview of your care today." wide>
  <section className="hero-dashboard">
    <div><Pill tone="mint">WELCOME BACK</Pill><h2>MediAssist keeps your care organized.</h2><p>Records, symptoms, doctors, appointments and emergency help in one professional patient hub.</p></div>
    <button className="danger big" onClick={()=>nav('/emergency')}>+ Open emergency guide</button>
  </section>
  <section className="grid cards-grid">{cards.map(c=><StatCard key={c[0]} icon={c[1]} title={c[2]} text={c[3]} onClick={()=>nav(c[0])}/>)}</section>
  <section className="two-col"><Card><div className="card-row"><h3>Upcoming appointments</h3><button className="link" onClick={()=>nav('/booking')}>View all →</button></div>{appts.length?<p>{appts[0].doctor} on {appts[0].date} at {appts[0].time}</p>:<p>No appointments yet. <button className="link" onClick={()=>nav('/doctors')}>Find a doctor.</button></p>}</Card><Card><h3>Recent vitals</h3>{vitals.length?<p>{vitals[0].kind}: <b>{vitals[0].value}</b></p>:<p>Log your first vital on the <button className="link" onClick={()=>nav('/records')}>Records page</button>.</p>}</Card></section>
 </PageShell>;
}
