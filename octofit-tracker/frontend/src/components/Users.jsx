import ResourcePage from './ResourcePage'

// Codespace API endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/
export default function Users() {
  return <ResourcePage resource="users" eyebrow="Your people" title="Users" description="A simple directory for the people making OctoFit a daily habit." columns={[{ key: 'displayName', label: 'Name' }, { key: 'username', label: 'Username' }, { key: 'email', label: 'Email' }, { key: 'joinedAt', label: 'Joined' }]} />
}