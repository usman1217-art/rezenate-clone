export default function BlurDivider({ className = '' }) {
    return (
      // Real alpha fade (white -> transparent). Tight two-stop gradient so the
      // blend only happens right at the edge, not as a big wash up the page.
      <div
        className={`pointer-events-none select-none bg-gradient-to-t from-white to-transparent ${className}`}
      />
    );
  }
  