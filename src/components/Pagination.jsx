const Pagination = ({ previous, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <>
      <div className="pagination-container">
        {previous ? <button className="pagination-btn" onClick={handlePrevious}>Previous</button> : null}
        {next ? <button className="pagination-btn" onClick={handleNext}>Next</button> : null}
      </div>
    </>
  );
};

export default Pagination;
