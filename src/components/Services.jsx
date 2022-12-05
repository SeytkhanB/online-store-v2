import { services } from "../utils/constants";
import Wrapper from "../assets/wrappers/Services";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            custom furniture <br /> built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            sed possimus sapiente perferendis quibusdam perspiciatis earum
            dolorem eaque in repudiandae expedita, deserunt dolores! Optio
            suscipit excepturi fugiat! Earum fuga corporis, doloribus incidunt
            nulla eos dolorem voluptate ullam expedita. Vitae itaque blanditiis
            perferendis!
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
