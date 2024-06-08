export const HeaderOne = ({ text }) => {
  return (
    <div
      className="flex items-center justify-center font-normal w-[90%] text-6xl max-sm:text-5xl leading-snug text-center max-w-6xl mb-0 "
      style={{ color: "rgb(0, 23, 38)" }}
    >
      <h1 className="flex text-5xl max-sm:text-3xl text-center font-normal">
        {text}
      </h1>
    </div>
  );
};
