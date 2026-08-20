import ResourcePage from './ResourcePage'

// Codespace API endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/
export default function Leaderboard() {
  return <ResourcePage resource="leaderboard" eyebrow="Friendly competition" title="Leaderboard" description="See who is building momentum this week and celebrate the work behind the points." columns={[{ key: 'rank', label: 'Rank' }, { key: 'userId', label: 'User' }, { key: 'points', label: 'Points' }, { key: 'weeklyPoints', label: 'This week' }, { key: 'streakDays', label: 'Streak' }]} />
}