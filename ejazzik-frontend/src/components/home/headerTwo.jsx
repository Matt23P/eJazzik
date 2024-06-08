export const HeaderTwo = ({
  text,
  classNameDiv,
  styleDiv,
  classNameHeader,
}) => {
  return (
    <div className={classNameDiv} style={styleDiv}>
      <h2 className={classNameHeader}>{text}</h2>
    </div>
  );
};
