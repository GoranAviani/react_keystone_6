import {gql} from '@apollo/client';

export const POSTS_DATA = gql`
  query PostsQuery {
    posts{
      title
    }
  }
  `;