import ResourcePage from './ResourcePage'

// Codespace API endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/
export default function Activities() {
  return <ResourcePage resource="activities" eyebrow="Movement log" title="Activities" description="Keep the team moving with a clear view of every completed effort." columns={[{ key: 'type', label: 'Type' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'distanceKm', label: 'Distance (km)' }, { key: 'calories', label: 'Calories' }, { key: 'completedAt', label: 'Completed' }]} />
}