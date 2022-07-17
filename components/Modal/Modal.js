const Modal = ({ children, onClick = () => {} }) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-dark bg-opacity-70">
      <div className="absolute w-full h-full " onClick={onClick}></div>
      {children}
    </div>
  );
};

export default Modal;
