# MediAssist — React + JavaScript + Vite Final Submission

MediAssist is a professional patient health hub inspired by the screenshots provided: dashboard, records, symptom analyzer, doctors, hospitals, appointments, costs, recovery, awareness, emergency guide, AI assistant, login, register, and profile.

## Run in VS Code

```bash
cd mediassist
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173/`.

## Google Login

The project includes Firebase Google authentication support. For college demo, it also has a safe demo fallback if Firebase environment variables are not configured.

To enable real Firebase login, create `.env` in the project root:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
```

Then enable Google provider in Firebase Authentication.

## CO Mapping

See `docs/CO1_CO6_VIVA_NOTES.md` for presentation/viva explanation.
