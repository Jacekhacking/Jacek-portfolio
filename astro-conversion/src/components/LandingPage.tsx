import SelfieImg from "../images/landing_page_selfie.png";

const LandingPage = () => {
  return (
    <>
      <section className="flex align-middle justify-center items-center h-full">
        <div className="flex items-center justify-center flex-col  w-full h-screen">
          <img src={SelfieImg} alt="Me" className="object-cover h-auto w-96" />

          <h1>Hi, I'm Jacek!</h1>

          <p>A Web Developer from Salt Lake City, Utah!</p>
        </div>
      </section>

      <section>{/* <AboutMe /> */}</section>

      <section>{/* <Projects /> */}</section>
    </>
  );
};
export default LandingPage;
