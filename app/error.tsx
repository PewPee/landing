'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="main">
      <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Something went wrong</h1>
        <p>An error occurred. Please try again.</p>
        <button type="button" onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  )
}
