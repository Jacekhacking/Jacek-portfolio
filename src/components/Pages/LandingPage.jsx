import SelfieImg from "../UI/Images/IMG_9739.png";
import SelfieImg2 from "../UI/Images/IMG_1721.jpeg";
import SelfieImg3 from "../UI/Images/IMG_9740.jpg";
import Projects from "./Projects";
import AboutMe from "./About/AboutMe";

const LandingPage = () => {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-72px)] mt-[72px] flex items-center justify-center
                          px-8 lg:px-20 py-16 bg-bg">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

          {/* Left — text */}
          <div className="max-w-xl lg:max-w-2xl">

            <h1 className="text-text-primary font-medium leading-none
                           tracking-tight mb-4
                           text-6xl lg:text-8xl">
              Jacek Hacking
            </h1>

            <p className="hero-label mb-6">software engineer · salt lake city, ut.</p>
            <p className="hero-body">
              Building reliable systems — Java, Spring Boot, distributed
              architecture. Currently finishing CS at University of Utah.
              Interested in HPC, quant, and anything that runs fast.
              <span className="vim-cursor" />
            </p>
          </div>

          {/* Right — photo */}
          <div className="flex-shrink-0">
            <img
              src={SelfieImg2}
              alt="Jacek Hacking"
              className="w-72 h-96 lg:w-96 lg:h-[480px] object-cover object-top rounded-lg"
            />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── About ───────────────────────────────────────────────── */}
      <section>
        <AboutMe />
      </section>

      {/* ── Projects ────────────────────────────────────────────── */}
      <section>
        <Projects />
      </section>
    </>
  );
};

export default LandingPage;
