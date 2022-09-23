function Preloader() {
  return (
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-red-only">
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}
export default Preloader;
