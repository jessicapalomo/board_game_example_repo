const Square = ({ name, type, filled }) => {
  return (
    <div className={'square'}>
      <div>{name}</div>
      <div>{type}</div>
      <div>{filled ? '👟' : null}</div>
    </div>
  );
};

export default Square;
