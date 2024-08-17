import Image from "next/image";
import "./serviceCard.css";
function ServiceCard(props) {
  const { title, description, icon } = props.data;
  return (
    <div className="service-card-container">
      <Image
        className="img-service"
        src={icon}
        width={30}
        height={30}
        alt="Picture of the author"
      />
      <div class="service-detail-container">
        <p className="service-title">{title} </p>
        <p className="service-description">
          {description}
        </p>
      </div>
    </div>
  );
}
export default ServiceCard;
