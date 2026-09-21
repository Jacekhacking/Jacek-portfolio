import { useState, useEffect, useCallback, useRef } from "react";

import PageContainer from "../../UI/Shared/PageContainer";
import rafting1 from "../../UI/Images/gc-rafting-picture.jpeg";
import rafting2 from "../../UI/Images/cat-rafting-picture.jpeg";
import auri1   from "../../UI/Images/AuriPic_1.jpeg";
import auri2   from "../../UI/Images/AuriPic_2.jpeg";

const CAROUSEL = [
  { src: rafting1, caption: "Navajo Bridge — Colorado River, Grand Canyon trip" },
  { src: rafting2, caption: "Cataract Canyon — a few too many rapids" },
  { src: auri1,   caption: "Auri, aka the best dog" },
  { src: auri2,   caption: "Auri doing Auri things" },
];

const FUN_FACTS = [
  "Licensed massage therapist in Utah",
  "Favorite book series is Wheel of Time",
  "Grew up on Warcraft 3, Diablo 2, and Pokémon",
  "Favorite food is sushi",
  "My dog's names are Auri and Kal",
];

const AboutMe = ({ defaultOpen = false }) => {
  const [open,   setOpen]   = useState(defaultOpen);
  const [imgIdx, setImgIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragRef = useRef({ startX: 0, dragging: false });

  const next = useCallback(
    () => setImgIdx((i) => (i + 1) % CAROUSEL.length),
    []
  );
  const prev = useCallback(
    () => setImgIdx((i) => (i - 1 + CAROUSEL.length) % CAROUSEL.length),
    []
  );

  useEffect(() => {
    if (!open || paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [open, paused, next]);

  const handlePointerDown = (e) => {
    dragRef.current = { startX: e.clientX, dragging: true };
  };

  const handlePointerUp = (e) => {
    if (!dragRef.current.dragging) return;
    dragRef.current.dragging = false;

    const deltaX = e.clientX - dragRef.current.startX;
    const SWIPE_THRESHOLD = 40;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      deltaX < 0 ? next() : prev();
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      clickX > rect.width / 2 ? next() : prev();
    }
  };

  return (
    <section className="py-24">
      <PageContainer>
      <div className="max-w-3xl xl:max-w-4xl mx-auto text-center lg:text-left">

        {/* Header */}
        <h2 className="hero-label mb-10 text-4xl lg:text-5xl xl:text-6xl">about</h2>

        {/* Bio */}
        <p className="text-text-muted text-xl xl:text-2xl leading-relaxed mb-7">
            I'm a software developer based in Utah, with a Computer Science degree
            from the University of Utah.         
            I started learning to code in 2020 and
          haven't stopped since. Since then I've shipped sites for local 
          businesses, built enterprise Java APIs, and even started exploring
          competitive programming and C++. Basically anything that will push my 
            skills / knowledge forward.
        </p>

        <p className="text-text-muted text-xl xl:text-2xl leading-relaxed mb-10">
          My stack today is React on the front end and Java / Spring Boot with
          some sort of relational DB  on the back end. As well as expanding more into C and 
          C++.
          Actively transitioning toward backend engineering and looking for
          roles where I can go deeper.
        </p>

        {/* Toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="font-mono text-base text-text-primary cursor-pointer
                     border border-border rounded px-5 py-2.5 bg-transparent
                     transition-colors duration-150 hover:border-border-strong
                     mb-12"
        >
          a little {open ? "less": "more"} {open ? "▲" : "▼"}
        </button>

        {/* Dropdown */}
        {open && (
          <div className="flex flex-col lg:flex-row gap-12 pt-2 text-left">

            {/* Left — carousel */}
            <div
              className="flex-shrink-0 w-full max-w-[440px] xl:max-w-[480px] 2xl:max-w-[520px]
                         mx-auto lg:mx-0
                         lg:w-[440px] xl:w-[480px] 2xl:w-[520px]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                className="rounded-lg overflow-hidden bg-bg-card select-none
                           border border-border h-[440px] xl:h-[480px] 2xl:h-[520px]
                           cursor-pointer touch-pan-y"
              >
                <img
                  key={imgIdx}
                  src={CAROUSEL[imgIdx].src}
                  alt={CAROUSEL[imgIdx].caption}
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              {/* Caption */}
              <p className="text-center text-text-faint text-sm font-mono
                            tracking-wide mt-3 px-2 h-10 flex items-center
                            justify-center line-clamp-2">
                {CAROUSEL[imgIdx].caption}
              </p>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-3">
                {CAROUSEL.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`h-2 rounded-full cursor-pointer transition-all duration-300
                                ${i === imgIdx
                                  ? "w-8 bg-text-secondary"
                                  : "w-5 bg-border-strong"
                                }`}
                  />
                ))}
              </div>
            </div>

            {/* Right — text */}
            <div className="flex-1 min-w-0">
              <p className="text-text-faint text-xs tracking-[0.14em] uppercase
                            font-mono mb-3">
                outside of code
              </p>
              <p className="text-text-muted text-xl xl:text-2xl leading-relaxed mb-8">
                I'm from Salt Lake City so a lot of skiing, hiking, and rafting and any sort of outdoor activites.
                I'm also a big sports guy love playing basketball and golf specifically. 
                I  love playing video games and chess with my family and friends.
                with my family and I read a lot of speculative fiction.
              </p>

              <p className="text-text-faint text-xs tracking-[0.14em] uppercase
                            font-mono mb-4">
                fun facts
              </p>
              <ul className="space-y-3">
                {FUN_FACTS.map((fact) => (
                  <li key={fact} className="flex gap-3 items-start
                                            text-text-muted text-xl xl:text-2xl">
                    <span className="accent-dot mt-[0.65em]" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      </PageContainer>
    </section>
  );
};

export default AboutMe;
