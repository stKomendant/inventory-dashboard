export default function ProductTableSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-10 bg-slate-800 rounded" />
      ))}
    </div>
  );
}
