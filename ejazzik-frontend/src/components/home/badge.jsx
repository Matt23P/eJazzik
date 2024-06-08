export const Badge = ({ icon, text, className, style }) => {
  return (
    <div
      style={style}
      className={`flex gap-2 mb-5 items-center text-md max-sm:text-sm font-bold bg-white py-3 px-6 rounded-2xl ${className}`}
    >
      {icon}
      {text}
    </div>
  );
};
