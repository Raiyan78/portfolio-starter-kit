import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  );
}

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Research',
  },
  'https://scholar.google.com/citations?user=QrDmxHwAAAAJ&hl=en': {
    name: 'G Scholar',
  },
  'https://drive.google.com/drive/folders/1IKJm4JmsiNFHwmOzlcApLOJ3rEBHXPLr': {
    name: 'CV',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isExternal = path.startsWith('http')
              return (
                <Link key={path} href={path} legacyBehavior>
                  <a
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center relative py-1 px-2 m-1"
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {name}
                    {isExternal && (
                      <span className="ml-1">
                        <ArrowIcon />
                      </span>
                    )}
                  </a>
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
