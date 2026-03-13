export default function Header() {
  return (
    <div className="flex items-center justify-between bg-slate-900 px-6 py-4 border-b border-slate-700">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="bg-slate-800 px-3 py-1 rounded text-sm"
        />

        <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
          User
        </div>
      </div>
    </div>
  );
}
