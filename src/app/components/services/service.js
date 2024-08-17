const { default: Headline } = require("../headline/headline");
import ServiceCard from "../serviceCard/serviceCard";
import "./service.css";
import vector from "@/image/vector0.png";
import vector1 from "@/image/vector1.png";
import vector2 from "@/image/vector2.png";
import vector3 from "@/image/vector-3.png";

const serviceData = [
  { title: "UI/UX", description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum", icon: vector },
  { title: "Web Design", description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum", icon: vector1 },
  { title: "App Design", description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum", icon: vector2 },
  { title: "Graphics Design", description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum", icon: vector3 },
];

const Service = () => {
  return (
    <div className="marginY-50">
      <Headline
        title="Services"
        description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        center
      />

      <section className="service-card-wrapper">
        {serviceData.map((data, index) => (
          <ServiceCard key={"service" + index} data={data} />
        ))}
      </section>
    </div>
  );
};

export default Service;
