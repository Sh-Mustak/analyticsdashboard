"use client";
import Image from "next/image";
export default function Header({isSidebarOpen, setIsSidebarOpen }: { isSidebarOpen: boolean, setIsSidebarOpen: (isSidebarOpen: boolean) => void }) {
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header
      className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-10
    "
    >
      {/* <!-- Mobile menu button --> */}
      <button
        onClick={handleSidebarToggle}
        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* <!-- Search - Hidden on mobile, shown on tablet+ --> */}
      <div className="hidden sm:flex items-center flex-1 max-w-md">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
            search
          </span>
          <input
            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400"
            placeholder="Search analytics, users, reports..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* <!-- Search icon for mobile --> */}
        <button className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
          <span className="material-symbols-outlined">search</span>
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>

        <div className="hidden sm:block h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

        <div className="hidden md:flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold leading-none">
              Shahriar Mustak
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Super Admin
            </p>
          </div>
          <Image
            alt="Profile"
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700"
            data-alt="Headshot of a male professional avatar"
            src="/man-user-color-icon.svg"
            width={36}
            height={36}
          />
        </div>

        {/* <!-- Profile picture only for tablet --> */}
        <Image
          alt="Profile"
          className="md:hidden w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700"
          data-alt="Headshot of a male professional avatar"
          src="/man-user-color-icon.svg"
          width={36}
          height={36}
        />
      </div>
    </header>
  );
}
