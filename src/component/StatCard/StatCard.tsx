type StatCardProps = {
  title: string;
  value: string;
};

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow hover:bg-slate-700 transition">
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
};

export default StatCard;
