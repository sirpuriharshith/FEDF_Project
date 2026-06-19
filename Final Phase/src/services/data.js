export const navItems = [
  ['/', 'Dashboard', '⌂'], ['/records', 'Records', '▣'], ['/analysis', 'Symptoms', '♨'], ['/assistant', 'AI Assistant', '✦'], ['/doctors', 'Doctors', '◎'], ['/hospitals', 'Hospitals', '▤'], ['/booking', 'Appointments', '□'], ['/costs', 'Costs', '◌'], ['/recovery', 'Recovery', '↗'], ['/awareness', 'Awareness', '▥']
];

export const doctors = [
  { id: 1, name: 'Dr. Aanya Mehta', specialty: 'Cardiology', hospital: 'Sunrise Heart Institute, Bengaluru', rating: 4.9, exp: 14, fee: 1200, availability: 'Available Today', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Dr. Rohan Iyer', specialty: 'Dermatology', hospital: 'Sage Skin Clinic, Mumbai', rating: 4.7, exp: 9, fee: 800, availability: 'Tomorrow', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Dr. Lila Chen', specialty: 'Pediatrics', hospital: "Bluebell Children's Hospital, Bengaluru", rating: 4.95, exp: 11, fee: 900, availability: 'Available Today', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'Dr. Marcus Hale', specialty: 'Orthopedics', hospital: 'Cedar Bone & Joint, Delhi', rating: 4.8, exp: 17, fee: 1500, availability: 'Next Week', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80' },
  { id: 5, name: 'Dr. Priya Nair', specialty: 'Gynecology', hospital: "Aster Women's Care, Kochi", rating: 4.85, exp: 12, fee: 1100, availability: 'Tomorrow', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80' },
  { id: 6, name: 'Dr. Samuel Okafor', specialty: 'Neurology', hospital: 'NeuroVista Center, Hyderabad', rating: 4.9, exp: 15, fee: 1800, availability: 'Available Today', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80' }
];

export const hospitals = [
  { name: "Aster Women's Care", city: 'Kochi', rating: 4.85, distance: 1.9, phone: '+91 484 222 3333', specialty: 'Gynecology', emergency: true, img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80' },
  { name: 'Sunrise Heart Institute', city: 'Bengaluru', rating: 4.8, distance: 2.4, phone: '+91 80 1234 5678', specialty: 'Cardiology', emergency: true, img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=700&q=80' },
  { name: "Bluebell Children's Hospital", city: 'Bengaluru', rating: 4.9, distance: 3.8, phone: '+91 80 5555 1212', specialty: 'Pediatrics', emergency: true, img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80' },
  { name: 'Calm Mind Wellness', city: 'Bengaluru', rating: 4.7, distance: 4.3, phone: '+91 80 7788 9900', specialty: 'Psychiatry', emergency: false, img: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=700&q=80' },
  { name: 'Sage Skin Clinic', city: 'Mumbai', rating: 4.6, distance: 5.1, phone: '+91 22 9876 5432', specialty: 'Dermatology', emergency: false, img: 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e1?auto=format&fit=crop&w=700&q=80' },
  { name: 'NeuroVista Center', city: 'Hyderabad', rating: 4.78, distance: 6.0, phone: '+91 40 6677 8899', specialty: 'Neurology', emergency: false, img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80' }
];

export const articles = [
  { tag: 'Nutrition', title: 'Reading Food Labels Without the Headache', time: '4 min read', level: 'Beginner', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=80', body: 'Check serving size first, then sodium, added sugar and fiber. Long ingredient lists with many sugar names are a sign to compare options.' },
  { tag: 'Cardiology', title: 'Heart-Healthy Habits That Actually Stick', time: '6 min read', level: 'Beginner', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=80', body: 'Small daily walks, less processed salt, consistent sleep and medication adherence reduce cardiovascular risk over years.' },
  { tag: 'Neurology', title: 'When a Headache Is More Than a Headache', time: '5 min read', level: 'Intermediate', img: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=700&q=80', body: 'Seek care for sudden severe headache, weakness, confusion, vision changes, fever or headache after injury.' },
  { tag: 'Endocrinology', title: 'Diabetes 101 for the Newly Diagnosed', time: '7 min read', level: 'Beginner', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=700&q=80', body: 'Track blood glucose, understand HbA1c, plan meals, keep active and follow your clinician’s medication plan.' },
  { tag: 'Mental Health', title: 'Mental Health Check-Ins That Take 60 Seconds', time: '3 min read', level: 'Beginner', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80', body: 'Rate mood, energy and stress daily. Early patterns help you ask for support before problems become severe.' },
  { tag: 'Diagnostics', title: 'How to Read Your Blood Test Report', time: '6 min read', level: 'Intermediate', img: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=700&q=80', body: 'Reference ranges vary. Review HbA1c, LDL, TSH and CBC values with your clinician rather than interpreting one number alone.' }
];

export const procedures = {
  'Doctor Consultation': { Standard: [500, 1200], Premium: [1200, 2500], Government: [50, 300] },
  'Basic Blood Panel': { Standard: [700, 1500], Premium: [1600, 3200], Government: [200, 600] },
  'MRI Scan': { Standard: [4000, 8000], Premium: [9000, 15000], Government: [1500, 3000] },
  'CT Scan': { Standard: [2500, 6000], Premium: [6500, 12000], Government: [1000, 2500] },
  'X-Ray': { Standard: [300, 900], Premium: [1000, 1800], Government: [80, 250] },
  'ECG': { Standard: [250, 800], Premium: [900, 1800], Government: [50, 200] },
  'Dental Cleaning': { Standard: [800, 1800], Premium: [2000, 5000], Government: [300, 800] },
  'Physiotherapy Session': { Standard: [600, 1500], Premium: [1600, 3500], Government: [200, 700] },
  'Appendectomy': { Standard: [45000, 90000], Premium: [110000, 220000], Government: [8000, 25000] },
  'Cataract Surgery': { Standard: [18000, 45000], Premium: [60000, 120000], Government: [3000, 10000] }
};

export const firstAid = [
  { title: 'Suspected Heart Attack', steps: ['Call emergency services immediately (112 / 102).', 'Have the person sit down and stay calm.', 'Chew one adult aspirin only if not allergic and advised.', 'Loosen tight clothing; do not give food or water.', 'If unconscious and not breathing, begin CPR.'], avoid: ['Driving the patient yourself if alone', 'Giving food or drink'] },
  { title: 'Severe Bleeding', steps: ['Apply firm direct pressure with a clean cloth.', 'Elevate wound above heart if possible.', 'Do not remove the cloth; add layers if soaked.', 'Call 112 if bleeding does not slow.'], avoid: ['Using a tourniquet unless trained', 'Removing embedded objects'] },
  { title: 'Stroke (FAST)', steps: ['Face drooping? Arm weakness? Speech slurred?', 'Note the exact time symptoms began.', 'Keep the person lying down with head slightly elevated.'], avoid: ['Giving aspirin without advice', 'Letting them sleep it off'] },
  { title: 'Choking Adult', steps: ['Ask if they are choking.', 'Give 5 back blows between shoulder blades.', 'Give 5 abdominal thrusts.', 'Repeat until object is dislodged.'], avoid: ['Blind finger sweeps', 'Slapping the back if they can still cough'] },
  { title: 'Burns', steps: ['Cool with running water for 20 minutes.', 'Remove jewellery or tight clothing.', 'Cover loosely with clean cloth.', 'Seek help for burns larger than palm.'], avoid: ['Ice', 'Butter or toothpaste', 'Bursting blisters'] }
];
