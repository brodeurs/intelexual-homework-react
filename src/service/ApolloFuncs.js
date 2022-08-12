import React,  {useState, useEffect} from 'react';

import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

export function GetDirList(path) {

    if (!(this instanceof GetDirList)) {
        return new GetDirList(path)
    }
    this.client = new ApolloClient({
        uri: 'http://localhost:9001/graphql',
        cache: new InMemoryCache()
    });

    this.queryString = gql`
  query getDirList {
  dirListByPath: dirListByPath(path: "${path}") {
    name
    isDir
    createDate
  }
}
`;

    return this.client
        .query({
            query: this.queryString

        }, )
        .then(result => {
            console.log("Client result: " + JSON.stringify(result.data.dirListByPath));
            return result;
        })
        .catch((e) => {

            console.log("Client Exception:" + e)
        });

}

