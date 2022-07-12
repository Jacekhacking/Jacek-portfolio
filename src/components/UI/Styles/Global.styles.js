import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`



  :root {

    /*Colors*/
    --clr-dark-gray:0, 0%, 33%;
    --clr-blue-gray: 205, 8%, 45%;
    --clr-mint-offwhite: 113, 31%, 95%;
    --clr-light-gray: 205, 8%, 65%;
    --clr-sandy-brown: 28, 83%, 61%;
    --clr-orange-soda: 10, 94%, 60%;

    /*font-sizes*/
    --fs-900: 9.375rem;
    --fs-800: 6.25rem;
    --fs-700: 4.5rem;
    --fs-600: 3rem;
    --fs-500: 1.75rem;
    --fs-400: 1.425rem;
    --fs-300: 1rem;
    --fs-200: 0.875rem;
    --fs-100: 0.25rem;

    /*spacing*/
    --spacing-one: calc(1rem * 0.5);
    --spacing-two: calc(1rem);
    --spacing-five: calc(2.5rem);

    /*Fonts*/
    --ff-cursive: 'Koulen', cursive;
    --ff-sans-serif: 'Lato', sans-serif;
  }


  /*Box sizing*/


  * ,
  *::before,
  *::after {
    box-sizing: border-box;


  }


  /*Reset margins*/
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  picture {
    margin: 0;
  }
  body::backdrop{
    background-color: white;
  }
  /* reset weight/boldness */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: 400;
  }

  /* set up body */
  body {
    line-height: 2;
    min-height: 100vh;
    font-size: var(--fs-500);
    letter-spacing: 0.1em;
    background-color: hsl(var(--clr-mint-offwhite));
    font-family: var(--ff-sans-serif);

  }

  html{
    scroll-behavior: smooth;
  }

  /*make images easier to work with*/
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /*make form elements easier to work with*/

  input,
  button,
  textarea,
  select {
    font: inherit;
  }


  /* remove animations for people who've turned them off */

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }



  a  {
    color: var(--clr-dark-gray);
    border: 0;
    outline: none;
    border-radius: 5px;
    font-weight: 600;
    padding: 2px 4px;
    margin-left: -2px;
    margin-right: -2px;
    text-decoration: none;
  }

  a:active {color: hsl(var(--clr-sandy-brown)) ;}

  a:hover {
    color: hsl(var(--clr-mint-offwhite));
  }

  ul {
    list-style-type: none;
  }
  li{
    list-style: none;
  }



  .flex {
    display: flex;
    gap: var(--gap, 1rem);
  }
  .wrap{
    flex-wrap: wrap;
  }

  .grid {
    display: grid;
    gap: var(--gap, 1rem);
  }


  /* targets any element that has a previous sibling */
  .flow > *:where(:not(:first-child)){
    margin-top: var(--flow-space, 1rem);
  }

  .container {
    padding-inline: 2em;
    margin-inline: auto;
    max-width: 80rem;
  }


  /* Screen reader only!!! */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap; /*added line*/
    border: 0;
  }

  /* colors */

  .bg-dark{background-color: hsl(var(--clr-dark-gray))}
  .bg-light{background-color: hsl(var(--clr-mint-offwhite))}
  .bg-blue-grey{background-color: hsl(var(--clr-blue-gray))}
  .bg-orange{background-color: hsl(var(--clr-orange-soda))}
  .bg-brown{background-color: hsl(var(--clr-sandy-brown))}


  .text-dark{color: hsl(var(--clr-dark-gray))}
  .text-light{color: hsl(var(--clr-mint-offwhite))}
  .text-blue-grey{color: hsl(var(--clr-blue-gray))}
  .text-orange{color: hsl(var(--clr-orange-soda))}
  .text-brown{color: hsl(var(--clr-sandy-brown))}


  /* typography*/

  .ff-cursive { font-family: var(--ff-cursive); }
  .ff-serif { font-family: var(--ff-sans-serif); }



  .letter-spacing-1 { letter-spacing: 4.75px; }
  .letter-spacing-2 { letter-spacing: 2.7px; }
  .letter-spacing-3 { letter-spacing: 2.35px; }

  .uppercase { text-transform: uppercase; }

  .fs-900 { font-size: var(--fs-900); }
  .fs-800 { font-size: var(--fs-800); }
  .fs-700 { font-size: var(--fs-700); }
  .fs-600 { font-size: var(--fs-600); }
  .fs-500 { font-size: var(--fs-500); }
  .fs-400 { font-size: var(--fs-400); }
  .fs-300 { font-size: var(--fs-300); }
  .fs-200 { font-size: var(--fs-200); }
  .fs-100 { font-size: var(--fs-100); }


  .fs-900,
  .fs-800,
  .fs-700,
  .fs-600 {
    line-height: 1.1;
  }

  .typography-section {
    margin: 4rem 0
  }

  .header-style{
    font-size: clamp(var(--fs-500), 8.5vw, var(--fs-900));
  }



`

export default GlobalStyles


