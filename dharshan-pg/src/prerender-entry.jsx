import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

/**
 * Renders the entire app to an HTML string.
 * Used at build time to pre-render the SPA so search engines
 * see the full page content in the raw HTML.
 */
export function render() {
  return renderToString(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  )
}
