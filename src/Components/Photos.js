import React from "react";
import styled from "styled-components";

const PhotosDiv = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  position: relative;
`;

const Images = styled.img`
  width: ${(props) => (props.height ? "auto" : "100%")};
  aspect-ratio: ${(props) => (props.height ? "4/5" : "unset")};
  height: ${(props) => (props.height ? "300px" : "auto")};
  border-radius: 10px;
  margin: 10px 10px 5px 0;
  max-height: 90vh;
`;

const PhotoInfo = styled.div`
  background-color: #fff;
  padding: 10px 10px;
  position: absolute;
  bottom: 30px;
  left: 20px;
  font-family: ${(props) => props.theme.Fonts.Syne};

  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 1px;
    bottom: 50%;
    left: -20px;
    background-color: #fff;
  }

  &:before {
    content: "";
    position: absolute;
    width: 300px;
    height: 1px;
    bottom: 50%;
    right: -300px;
    background-color: #fff;
  }
`;

const PhotoNo = styled.p`
  color: #ff5538;
  font-size: 10px;
  font-weight: 700;
`;

const PhotoName = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  max-width: 260px;
  max-height: 43px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 150px;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    width: auto;
    max-width: 260px;
  }
`;

const Photos = ({ img, no, name, height }) => {
  return (
    <PhotosDiv>
      <Images src={img} height={height} />
      <PhotoInfo>
        <PhotoNo>{height ? no : `Project ${no}`}</PhotoNo>
        <PhotoName>{name}</PhotoName>
      </PhotoInfo>
    </PhotosDiv>
  );
};

export default Photos;
