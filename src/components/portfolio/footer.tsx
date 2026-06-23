export function Footer() {
  return (
    <footer className="section-wrap pb-10">
      <div className="flex flex-col gap-4 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Harsh Pratap Singh. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/4all3n"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--accent)] hover:underline transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-pratap-singh-4all3n/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--accent)] hover:underline transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:harsh.devmail@gmail.com"
            className="hover:text-[color:var(--accent)] hover:underline transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
