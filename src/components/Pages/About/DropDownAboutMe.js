import GCPic from "../../UI/Images/gc-rafting-picture.jpeg";
import AuriPic from "../../UI/Images/AuriPic_2.jpeg";
import styled from "styled-components";

const DropDownAboutMe = () => {
  const DropDownContainerWrapper = styled.div`
    margin: 2em 0;
    background-color: hsl(var(--clr-blue-gray));
    border: 5px solid hsl(var(--clr-dark-gray));
    color: hsl(var(--clr-mint-offwhite));
    max-width: 100rem;

    @media (min-width: 725px) {
      margin-left: 2em;
      margin-right: 2em;
    }

    h2 {
      text-align: center;
    }

    p {
      font-size: clamp(var(--fs-300), 3.5vw, 2rem);
      max-width: 1200px;
      text-align: center;
    }

    img {
      display: block;
      width: 100%;
      height: 600px;
      object-fit: cover;
      border: 2px solid hsl(var(--clr-orange-soda));
      border-radius: 5px;

      @media (min-width: 900px) {
        width: 80%;
        height: auto;
      }
      @media (min-width: 1200px) {
        width: 600px;
        height: auto;
        margin: 1em;
      }
    }
  `;
  const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const ImgParagraphDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => props.direction || "row"};

    @media (max-width: 1200px) {
      flex-direction: column;
    }
  `;

  return (
    <>
      <DropDownContainerWrapper>
        <h2
          className={`fs-700 ff-cursive text-light`}
          style={{
            borderBottom: "5px solid hsl(var(--clr-dark-gray))",
          }}
        >
          A Little more about me
        </h2>

        <DropdownContainer>
          <ImgParagraphDiv>
            <img src={GCPic} alt="Me in the Grand Canyon" />
            <p>
              I'm from Salt Lake City, Utah. I love to be outside. Skiing,
              hiking, playing volleyball, basketball, golf, rock climbing, and
              most recently going on white water rafting trips with my
              girlfriend. I also love to play video games and board games with
              my family and friends.
            </p>
          </ImgParagraphDiv>

          <ImgParagraphDiv direction="row-reverse">
            <img src={AuriPic} alt="My Cute Dog Auri" />
            <p>
              <h2>Fun Facts!</h2>
              My favorite genre of books is fantasy{" "}
              <span className={"text-brown"}>|</span>I have a licence to
              practice massage therapy in the state of Utah
              <span className={"text-brown"}>|</span>
              My favorite childhood video game was Pokémon Puzzle
              <span className={"text-brown"}>|</span>
              Favorite food is Sushi <span className={"text-brown"}>|</span>
              Favorite book series is the Wheel of Time
              <span className={"text-brown"}>|</span>
              Grew up on games like Warcraft 3, Diablo 2, and of course Pokemon.
            </p>
          </ImgParagraphDiv>
        </DropdownContainer>
      </DropDownContainerWrapper>
    </>
  );
};
export default DropDownAboutMe;
