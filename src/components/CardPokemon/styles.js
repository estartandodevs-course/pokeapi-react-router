import styled, { keyframes } from "styled-components";

const loading = keyframes`
 0% {
    transform: translate(0, 0) rotate(0);
  }
  25% {
    transform: translate(-8px, 0) rotate(-18deg);
  }
  33% {
    transform: translate(8px, 0) rotate(18deg);
  }
  50% {
    transform: translate(-8px, 0) rotate(-12deg);
  }
  60% {
    transform: translate(8px, 0) rotate(18deg);
  }
  100% {
    transform: translate(0, 0) rotate(0);
  }
`;

const types = {
  grass: "green",
  fire: "red",
  dark: "black",
  dragon: "gray",
  fairy: "pink",
  flying: "blue",
  ghost: "purple",
  ground: "brown",
  eletric: "yellow",
  poison: "violet",
  psychic: "darkblue",
  rock: "beige",
  stell: "coral",
  normal: "fuchsia",
};

export const LoadingWrapper = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  animation: ${loading} 2s infinite;

  .ball {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    border: 10px solid #1d1d1b;
    z-index: 100;
    display: block;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  .half-ball {
    margin: auto;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 0;
    z-index: 0;
    position: absolute;
    background-color: white;
    border-radius: 0 0 90px 90px;
    width: 200px;
    height: 100px;
  }

  .horizon {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    border-radius: 0px;
    width: 200px;
    height: 40px;
    background-color: #1d1d1b;
    z-index: 3;
  }

  .big-button {
    z-index: 4;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 50%;
    border: 10px solid #1d1d1b;
    position: absolute;
    height: 60px;
    width: 60px;
    background-color: white;
  }

  .small-button {
    z-index: 5;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 50%;
    border: 6px solid #1d1d1b;
    position: absolute;
    height: 38px;
    width: 38px;
    background-color: white;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  height: 300px;
  padding: 5px;
  border-radius: 4px;
  background-color: ${(props) => types[props.bgColor] || "violet"};
`;

export const CardTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AbilitiesTitle = styled.h3``;

export const Abilities = styled.p`
  display: flex;
  flex-direction: column;
`;

export const WrapperImage = styled.div`
  border-radius: 50%;
  background-color: #fff;
  margin: 0 auto;
`;

export const TypesTitle = styled.h3``;
