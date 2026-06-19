import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function AiBubble(){const [tip,setTip]=useState(false); const nav=useNavigate(); return <div className="ai-bubble"><button onMouseEnter={()=>setTip(true)} onMouseLeave={()=>setTip(false)} onClick={()=>nav('/assistant')}>💬</button>{tip&&<span>Open AI Assistant</span>}</div>}
