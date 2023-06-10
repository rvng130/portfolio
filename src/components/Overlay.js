function Overlay(props) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className="overlay">
      <div className="selected-item-container">
        <button className="close-button" onClick={handleClose}>X</button>
        {props.children}
      </div>
    </div>
  );
}

export default Overlay;