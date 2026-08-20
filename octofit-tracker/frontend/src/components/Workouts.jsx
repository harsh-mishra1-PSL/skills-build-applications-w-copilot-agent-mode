import ResourcePage from './ResourcePage'

export default function Workouts() {
  return <ResourcePage resource="workouts" eyebrow="Ready when you are" title="Workouts" description="Browse sessions designed to turn a little available time into meaningful progress." columns={[{ key: 'title', label: 'Workout' }, { key: 'focus', label: 'Focus' }, { key: 'difficulty', label: 'Level' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'exercises', label: 'Exercises' }]} />
}