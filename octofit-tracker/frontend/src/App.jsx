import { NavLink, Route, Routes } from 'react-router-dom'
import { apiBaseUrl, apiHostConfigured } from './api'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

const links = [
  ['/', 'Overview'],
  ['/activities', 'Activities'],
  ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'],
  ['/users', 'Users'],
  ['/workouts', 'Workouts'],
]

function Overview() {
  return <section className="overview"><p className="eyebrow">OctoFit Tracker</p><h1>Make progress visible.</h1><p className="lede">One calm place to log movement, find your people, and keep the next workout close.</p><div className="overview-grid">{links.slice(1).map(([path, label]) => <NavLink className="overview-link" to={path} key={path}><span>{label}</span><span aria-hidden="true">↗</span></NavLink>)}</div></section>
}

function App() {
  return <div className="app-shell">
    <header className="topbar"><NavLink className="brand" to="/"><img src="/octofitapp-small.png" alt="" /> <span>OctoFit</span></NavLink><nav aria-label="Main navigation">{links.map(([path, label]) => <NavLink key={path} to={path}>{label}</NavLink>)}</nav></header>
    {!apiHostConfigured && <div className="config-note">API host is using {apiBaseUrl}. Set <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> for your Codespace.</div>}
    <main><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></main>
  </div>
}

export default App