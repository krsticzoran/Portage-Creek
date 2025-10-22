export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      <main className="text-center">
        <h1 className="text-7xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
          Portage Creek
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-500 dark:text-gray-400">
          Coming Soon <span role="img" aria-label="hourglass">⏳</span>
        </p>
      </main>
    </div>
  );
}
