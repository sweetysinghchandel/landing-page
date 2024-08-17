import "./progressbar.css";
function ProgressBar(props) {
  const {title, growth } = props;
  return (
    <div className="marginY-50">
      <h1 className="progressbar-heading">{title}</h1>
      <div className="progress-container">
        <div className="progress-bar" style={{width:growth}}></div>
      </div>
    </div>
  );
}
export default ProgressBar;
