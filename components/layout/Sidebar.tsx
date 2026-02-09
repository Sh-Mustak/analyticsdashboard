export default function Sidebar(){
    return (

         <aside
        id="mobile-sidebar"
        className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col fixed h-full z-40 lg:z-20"
      >
        {/* <!-- Close button for mobile --> */}
        <button
          // onclick="toggleMobileSidebar()"
          className="lg:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="p-6 flex items-center gap-3">
          <div
            className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white"
          >
            <span className="material-symbols-outlined text-xl">analytics</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none tracking-tight">
              SaaS Admin
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Management Console
            </p>
          </div>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">monitoring</span>
            <span className="text-sm font-medium">Analytics</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Users</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="text-sm font-medium">Orders</span>
          </a>
          <div
            className="pt-4 pb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500"
          >
            System
          </div>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </a>
          
        </nav>
       
      </aside>
    );

}