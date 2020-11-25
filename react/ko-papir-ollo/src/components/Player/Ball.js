import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import rock from "../../_images/rock.png";
import paper from "../../_images/paper.png";
import scissors from "../../_images/scissors.png";
import none from "../../_images/none.png";

const Balls = styled.img`
  height: "50px";
  width: "50px";
  margin: 6px;
  z-index: 1;
  transition: 0.2s transform;
  transform: rotate(15deg);

  ${(props) =>
    props.clickable &&
    css`
      &:hover {
        transform: rotate(15deg) scale(1.3);
        z-index: 2;
        cursor: pointer;
      }
    `};
`;

const Ball = (props) => {
  let image = "";
  if (props.red) image = rock;
  else if (props.green) image = paper;
  else if (props.blue) image = scissors;
  else image = none;
  return (
    <Balls
      src={image}
      alt={image}
      style={{ width: "100px", height: "100px" }}
      {...props}
    />
  );
};

Ball.propTypes = {
  red: PropTypes.bool,
  green: PropTypes.bool,
  blue: PropTypes.bool,
};

export default Ball;
