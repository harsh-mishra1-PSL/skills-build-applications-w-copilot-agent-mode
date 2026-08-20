const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

// Local development stays useful without ever interpolating an undefined host.
export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export const apiHostConfigured = Boolean(codespaceName)

export async function fetchResource(resource) {
  const response = await fetch(`${apiBaseUrl}/api/${resource}/`)
  if (!response.ok) {
    throw new Error(`Unable to load ${resource} (${response.status})`)
  }

  const payload = await response.json()
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload.data)) return payload.data
  if (Array.isArray(payload.results)) return payload.results
  if (Array.isArray(payload.items)) return payload.items
  return []
}