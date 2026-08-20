import { useEffect, useState } from 'react'
import { fetchResource } from '../api'

function valueFor(item, field) {
  const value = item[field]
  if (value === null || value === undefined || value === '') return '-'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

export default function ResourcePage({ resource, title, eyebrow, description, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetchResource(resource)
      .then((nextItems) => {
        if (active) {
          setItems(nextItems)
          setStatus('ready')
        }
      })
      .catch((nextError) => {
        if (active) {
          setError(nextError.message)
          setStatus('error')
        }
      })
    return () => { active = false }
  }, [resource])

  return (
    <section className="resource-page">
      <div className="page-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{description}</p>
      </div>
      <div className="resource-toolbar">
        <span>{status === 'ready' ? `${items.length} records` : 'Live data'}</span>
        <span className={`status status-${status}`}>{status}</span>
      </div>
      {status === 'loading' && <div className="empty-state">Loading {resource}...</div>}
      {status === 'error' && <div className="empty-state error-state">{error}</div>}
      {status === 'ready' && items.length === 0 && <div className="empty-state">No {resource} have been added yet.</div>}
      {status === 'ready' && items.length > 0 && (
        <div className="table-wrap">
          <table>
            <thead><tr>{columns.map(({ label }) => <th key={label}>{label}</th>)}</tr></thead>
            <tbody>{items.map((item, index) => (
              <tr key={item._id || item.id || index}>
                {columns.map(({ key, label }) => <td key={label}>{valueFor(item, key)}</td>)}
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </section>
  )
}