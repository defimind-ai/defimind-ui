import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[rgb(58_106_120/0.2)] bg-[rgb(10_14_26/0.85)] px-8 backdrop-blur">
      <div className="mx-auto flex h-28 max-w-[1100px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-4 text-[1.5rem] font-medium tracking-tight text-[var(--color-text-primary)]"
        >
          <Image
            src="/defimind-mark.png"
            alt="DeFiMind"
            width={128}
            height={128}
            priority
            className="h-20 w-20 shrink-0"
          />
          <span>
            defimind<span className="text-[var(--color-accent)]">.</span>ai
          </span>
        </Link>
        <ul className="flex gap-8 text-sm text-[var(--color-text-secondary)]">
          <li>
            <a
              href="#method"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              Method
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
