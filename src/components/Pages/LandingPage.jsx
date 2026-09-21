import SelfieImg2 from "../UI/Images/IMG_1721.jpeg";
import Projects from "./Projects";
import AboutMe from "./About/AboutMe";
import Experience from "./Experience.jsx";
import PageContainer from "../UI/Shared/PageContainer";
import VimCursor from "../UI/Shared/VimCursor";

const LandingPage = () => (
  <>
    {/* ── Hero ─────────────────────────────────────────────── */}
    <section className="min-h-[calc(100vh-72px)] mt-[72px] flex items-center py-24">
      <PageContainer grid gap="gap-12 lg:gap-20" className="items-start">

        <div className="col-span-4 sm:col-span-8 lg:col-span-7 text-center lg:text-left">
          <h1 className="text-text-primary font-medium leading-none
                         tracking-tight mb-4 text-6xl lg:text-8xl xl:text-9xl">
            Jacek Hacking
          </h1>
          <p className="hero-label mb-6 lg:text-2xl xl:text-3xl">software engineer · salt lake city, ut.</p>
          <p className="hero-body xl:text-2xl">
            Building reliable systems — Java, Spring Boot, distributed
            architecture. Currently finishing CS at University of Utah.
            Interested in HPC, quant, and anything that runs fast.
            <VimCursor />
          </p>
        </div>

        <div className="col-span-4 sm:col-span-8 lg:col-span-5 flex justify-center lg:justify-end">
          <img src={SelfieImg2} alt="Jacek Hacking"
               className="w-72 h-[360px] lg:w-96 lg:h-[480px]
                          xl:w-[420px] xl:h-[525px] 2xl:w-[460px] 2xl:h-[575px]
                          object-cover object-top rounded-lg" />
        </div>
      </PageContainer>
    </section>

    {/* ── About ────────────────────────────────────────────── */}
    <section className="py-8">
      <AboutMe />
    </section>

    {/* ── Projects ─────────────────────────────────────────── */}
    <section className="py-8">
      <Projects onlyImportant />
    </section>

    {/* ── Experience ───────────────────────────────────────── */}
    <section className="py-8">
      <Experience />
    </section>
  </>
);

export default LandingPage;
