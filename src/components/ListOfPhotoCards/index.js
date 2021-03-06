import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'


const withPhotos = graphql(gql`
query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)



 const ListOfPhotoCardsComponents = ({ data: {photos = [] } } = {}) => {
    return (
        <ul>
            {photos.map( photo => <PhotoCard key={photo.id}  src={photo.src}/>)}
        </ul>
    )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponents)