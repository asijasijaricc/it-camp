const Kartica = ({ renderHeader, renderBody }) => {
  return (
    <div className="nova">
      {renderHeader && <div className="nheader">{renderHeader}</div>}
      <div className="nn">{renderBody}</div>
    </div>
  );
};

export default Kartica;
