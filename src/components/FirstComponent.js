import React from "react";
import { useQuery } from '@apollo/client';

import {POSTS_DATA} from "../../apollo/graphql/queries/posts";


const FirstComponent = () => {
  const { loading, error, data } = useQuery(POSTS_DATA);

    return(
        <>
        this is first component
        </>
    )
}

export default FirstComponent