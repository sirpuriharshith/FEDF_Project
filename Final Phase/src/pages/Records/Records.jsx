import { useEffect, useState } from 'react';
import PageShell from '../../components/PageShell';
import Card from '../../components/Card';
import { load, save } from '../../services/storage';

const empty={blood:'',height:'',weight:'',contact:'',phone:'',allergies:'',conditions:''};
const placeholders={ 'Blood Pressure':'e.g. 120/80', 'Heart Rate':'e.g. 72', 'Temperature':'e.g. 98.6', 'Blood Sugar':'e.g. 110' };
const units={ 'Blood Pressure':'mmHg', 'Heart Rate':'bpm', 'Temperature':'°F', 'Blood Sugar':'mg/dL' };
function valid(kind,value){ if(!value.trim()) return false; if(kind==='Blood Pressure') return /^\d{2,3}\/\d{2,3}$/.test(value.trim()); return /^\d+(\.\d+)?$/.test(value.trim()); }

export default function Records(){
 const [form,setForm]=useState(load('records',empty)); const [kind,setKind]=useState('Blood Pressure'); const [value,setValue]=useState(''); const [vitals,setVitals]=useState(load('vitals',[])); const [error,setError]=useState('');
 useEffect(()=>save('records',form),[form]); useEffect(()=>save('vitals',vitals),[vitals]);
 function change(e){setForm({...form,[e.target.name]:e.target.value})}
 function addVital(){ if(!valid(kind,value)){setError(`Enter a valid ${kind} value.`); return;} setError(''); setVitals([{kind,value:`${value} ${units[kind]}`,time:new Date().toLocaleString()},...vitals]); setValue(''); }
 return <PageShell title="Health Records" subtitle="Your essentials — visible to you, useful to a clinician.">
  <Card><div className="form-grid"><label>Blood type<input name="blood" value={form.blood} onChange={change} placeholder="O+, A-, etc."/></label><label>Height (cm)<input name="height" value={form.height} onChange={change} placeholder="186"/></label><label>Weight (kg)<input name="weight" value={form.weight} onChange={change} placeholder="72"/></label><label>Emergency contact<input name="contact" value={form.contact} onChange={change} placeholder="Name"/></label><label className="full">Emergency phone<input name="phone" value={form.phone} onChange={change} placeholder="+91..."/></label><label className="full">Allergies (comma separated)<input name="allergies" value={form.allergies} onChange={change} placeholder="Penicillin, Peanuts"/></label><label className="full">Chronic conditions (comma separated)<input name="conditions" value={form.conditions} onChange={change} placeholder="Asthma, Hypertension"/></label></div><button className="primary">Save records</button></Card>
  <Card><h3>Log a vital</h3><div className="inline-form"><label>Kind<select value={kind} onChange={e=>setKind(e.target.value)}>{Object.keys(placeholders).map(k=><option key={k}>{k}</option>)}</select></label><label>Value<input value={value} onChange={e=>setValue(e.target.value)} placeholder={placeholders[kind]}/></label><button className="primary" onClick={addVital}>+ Log</button></div>{error&&<p className="error">{error}</p>}<div className="list">{vitals.map((v,i)=><div className="list-row" key={i}><span>{v.kind}</span><b>{v.value}</b><small>{v.time}</small></div>)}</div></Card>
 </PageShell>;
}
