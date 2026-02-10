export default function ActiveCustomers({ name, usertype ,avatar}) {
    return (
        <div className="flex items-center justify-between p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
                data-alt="Avatar of a male user"
                src={avatar}
              />
              <div className="min-w-0">
                <p className="text-sm font-bold truncate">{name}</p>
                <p className="text-xs text-slate-500 truncate">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="c4a8ada5a9eaac84a1bca5a9b4a8a1eaa7aba9"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 ml-2">
              <p className="text-sm font-bold">$1,240</p>
              <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded whitespace-nowrap">
                {usertype}
              </span>
            </div>
          </div>
    );
}