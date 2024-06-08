export const AboutCard = ({ icon, title, description }) => {
  return (
    <div className="flex-none w-[400px] max-sm:w-[98%] max-sm:max-w-[400px] p-4 m-2 cardBox">
      <div
        className="h-[270px] p-8 px-12 align-middle justify-center w-full rounded-lg flex flex-col gap-5 divCard"
        style={{
          background: "#f6f2ec",
        }}
      >
        <div className="w-fit size-8 p-4 h-fit rounded-xl text-white" style={{background: "#c4baab",}}>
          {icon}
        </div>
        <div className="text-start text-lg font-bold" color={"rgb(0, 23, 38)"}>
          {title}
        </div>
        <div color={"rgb(105, 105, 105)"}>{description}</div>
      </div>
    </div>
  );
};
