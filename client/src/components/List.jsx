/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ListEntry from './ListEntry.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex:
  overflow-x: auto;
  white-space: nowrap;
  justify-content: center;
  margin: auto;
  min-height: 300px;
  max-height: 300px;
  position: relative;
`;

const List = ({ listings, refs, handleModal }) => (
  <Container>
    {listings.photos
      ? listings.photos.map((photo, index) => (
        <ListEntry key={photo._id} photo={photo} refs={refs} index={index} handleModal={handleModal} />
      ))
      : <h1>Loading...</h1>}
  </Container>
);

export default List;
