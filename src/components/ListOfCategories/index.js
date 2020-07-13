import React from 'react'
import { Category } from '../catogory' 
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withCategories = graphql(gql`
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

const ListOfCategoriesComponents = (props) => {
    console.log(props)
    return (
        <div>
        <ul>
            {
                [1, 2, 3, 4].map(category => <li key={category} ><Category /></li>)
            }
        </ul>

        <style jsx>{`
            ul {
                display: flex;
                overflow: scroll;
                width: 100%;

            }

            li {
                padding: 0 8px;
            }

            
        `}</style>            
        
        </div>
    )
    }

export const ListOfCategories = withCategories(ListOfCategoriesComponents)