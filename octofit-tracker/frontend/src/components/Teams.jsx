import ResourcePage from './ResourcePage'

export default function Teams() {
  return <ResourcePage resource="teams" eyebrow="Collective energy" title="Teams" description="Find your crew, understand its focus, and make the next session count." columns={[{ key: 'name', label: 'Team' }, { key: 'description', label: 'About' }, { key: 'memberIds', label: 'Members' }, { key: 'color', label: 'Color' }]} />
}