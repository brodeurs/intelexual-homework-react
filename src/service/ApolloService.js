import React,  {useState, useEffect} from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

export default class ApolloService {

    constructor() {

        this.client = new ApolloClient({
            uri: 'http://localhost:9001/graphql',
            cache: new InMemoryCache()
        });

//         this.GET_DIR_LIST = gql`
//   query getDirList {
//   dirListByPath: dirListByPath(path: "c:\\\\") {
//     name
//     isDir
//     createDate
//   }
// }
// `;

    }


    Get(path) {
        let queryString = gql`
  query getDirList {
  dirListByPath: dirListByPath(path: "${path}") {
    name
    isDir
    createDate
  }
}
`;
        console.log("path: " + path + " queryString: " + queryString.toString());

        const result = this.client
            .query({
                query: queryString

            })
            .then(result => {
                console.log("Client result: " + JSON.stringify(result.data.dirListByPath));
                return result;
            })
            .catch((e) => {

                console.log("Client Exception:" + e)
            });

        console.log("Returned from query. Result: " + JSON.stringify(result));
        return result;
    }

}

