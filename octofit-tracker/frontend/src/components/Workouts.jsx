import ResourcePage from './ResourcePage'

// Codespace API endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/
export default function Workouts() {
  return <ResourcePage resource="workouts" eyebrow="Ready when you are" title="Workouts" description="Browse sessions designed to turn a little available time into meaningful progress." columns={[{ key: 'title', label: 'Workout' }, { key: 'focus', label: 'Focus' }, { key: 'difficulty', label: 'Level' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'exercises', label: 'Exercises' }]} />
}