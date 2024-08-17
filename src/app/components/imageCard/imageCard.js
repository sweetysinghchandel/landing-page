import Image from "next/image";
import "./imageCard.css";

function ImageCard(props) {
  return (
    <div className="img-container">
      <Image className="img-profile"
        src={props.img}
        width={538}
        height={615}
        alt="Picture of the author"
      />
    </div>
  );
}
export default ImageCard;
