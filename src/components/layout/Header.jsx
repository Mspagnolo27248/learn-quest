import { Link } from 'react-router-dom'

export default function Header({ showBack = false, backTo = '/', backLabel = 'All Topics' }) {
  return (
    <header className="bg-navy text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
        {showBack && (
          <Link
            to={backTo}
            className="flex items-center gap-1 text-sm text-blue-200 hover:text-white transition-colors min-h-[44px] pr-2"
            aria-label={`Back to ${backLabel}`}
          >
            <span aria-hidden="true">←</span>
            <span>{backLabel}</span>
          </Link>
        )}
        <Link to="/" className="flex items-center gap-2 ml-auto sm:ml-0">
          <span className="text-xl font-bold tracking-tight">
            Learn<span className="text-sky-light">Quest</span>
          </span>
        </Link>
      </div>
    </header>
  )
}
