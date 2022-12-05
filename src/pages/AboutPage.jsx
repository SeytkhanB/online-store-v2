import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
import Wrapper from "../assets/wrappers/AboutPage";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="Desk image" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam
            consectetur omnis error facere eos debitis nisi earum inventore amet
            eaque minus aspernatur excepturi, nesciunt ex ullam nostrum sapiente
            provident veritatis illum. Sapiente distinctio consectetur ducimus.
            Alias possimus recusandae excepturi doloremque exercitationem!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
