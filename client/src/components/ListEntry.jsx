/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const FlexColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-weight: 400;
  font-size: 14px;
  min-width: 260px;
  min-height: 300px;
  margin: 0px 10px 0px 10px;
`;

const ImgFlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  overflow: auto;
  width: auto;
  height: 180px;
  position: sticky;
`;

const House = styled.img`
  position: absolute;
  z-index: 0;
  width: 260px;
  height: 180px;
  border-radius: 12px;
  border: .1px solid rgb(215, 215, 215);
`;

const Super = styled.div`
  position: relative;
  z-index: 1;
  height: 15px;
  overflow: hidden;
  margin-left: 7px;
  margin-top: 7px;
  font-weight: 600;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  color: rgb(34, 34, 34);
  padding: 3px;
`;

const Heart = styled.button`
  position: relative;
  z-index: 1;
  background: transparent;
  height: 24px;
  svg {
    background: transparent;
    fill: rgba(0, 0, 0, 0.5);
    min-height: 24px;
    min-width: 24px;
  }
  justify-content: right;
  margin-right: 6px;
  margin-top: 7px;
  overflow: hidden;
  stroke: rgb(255, 255, 255);
  outline: none;
  border: none;
`;

// display: block;
// fill: rgb(255, 56, 92);
// height: 24px;
// width: 24px;
// stroke: rgb(255, 255, 255);
// stroke-width: 2;
// overflow: visible;

const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: sticky;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 1px;
`;

const Reviews = styled.div`
  font-size: 13px;
  img.star {
    width: 18px;
    height: 18px;
    fill: rgb(255, 56, 92);
    stroke: rgb(255, 255, 255);
  }
`;

class ListEntry extends React.Component {
  constructor(props) {
    super(props);
    const { photo } = this.props;
    this.state = {
      saved: photo.heart,
    };
    this.heartClick = this.heartClick.bind(this);
    this.shortenText = this.shortenText.bind(this);
  }

  heartClick(e) {
    e.preventDefault();
    const { saved } = this.state;
    this.setState({
      saved: !saved,
    });
    if (saved) {
      // fill: rgb(255, 56, 92);
    } else {
      // fill: rgba(0, 0, 0, 0.5);
    }
  }

  shortenText(text) {
    let title;
    if (text.length > 30) {
      title = `${text.slice(0, 30)}...`;
    } else {
      title = text;
    }
    return title;
  }

  render() {
    const { photo } = this.props;
    const { ref } = this.props;
    const { handleClick } = this.props;
    const { saved } = this.state;
    return (
      <FlexColumn>
        <ImgFlexRow>
          <House alt="House" src={photo.image} />
          {photo.superhost
            ? <Super>SUPERHOST</Super>
            : <div />}
          <Heart type="button" onClick={this.heartClick}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" /></svg>
          </Heart>
        </ImgFlexRow>
        <Reviews>
          <img className="star" alt="star" src="https://keybox-houses.s3-us-west-1.amazonaws.com/star.png" />
          {photo.reviews}
        </Reviews>
        <FlexRow>{photo.listing}</FlexRow>
        <FlexRow>{this.shortenText(photo.title)}</FlexRow>
        <FlexRow className="price">
          <strong>
            $
            {photo.price}
          </strong> / night
        </FlexRow>
      </FlexColumn>
    );
  }
}

// <svg aria-hidden="true" xmlns="https://keybox-houses.s3-us-west-1.amazonaws.com/favorite_border-24px.svg" />

export default ListEntry;
