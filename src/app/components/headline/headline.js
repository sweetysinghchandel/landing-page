import "./headline.css";
function Headline(props) {
  const { title, description, center } = props;
  return (
    <div style={{textAlign: center? 'center': 'left'}} className="marginY-50">
      <h1 className="section-title">{title ? title : "Heading"}</h1>
      <p style={{padding: center ? "0 20%": 0}} className="section-description">
        {description
          ? description
          : "Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"}
      </p>
    </div>
  );
}
export default Headline;
