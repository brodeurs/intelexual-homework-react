import { gql, useQuery } from '@apollo/client'

export default class ExampleFetchService {

    constructor() {
        this.url = 'http://localhost:9001/graphql';
        this.data = {
            filePath: ''
        };
        this.query = `
{
  dirListByPath: dirListByPath(path: "c:\\\\") {
    
    name
    isDir
    createDate
  } 
  }
`
        this.jsonQuery = `{ "query": "{ dirListByPath (path: "c:\\\\") { name isDir createDate } }" }'
        `
    }

    Get2(filePath) {
        var query = this.jsonQuery;
        var options = {
            method: 'POST',
            body: query,
            headers: {
            'content-type': 'application/json'
            }
        };
        fetch(this.url, options).then((res) => {
            return res.json();
            }).then((data) => {
            console.log(JSON.stringify(data, null, 2));
            }).catch((e) => {

            console.log("Exception:" + e)
        })
    }

    Get(filePath){
        this.data.filePath = filePath;
        console.log('File path: ' + this.data.filePath);
        console.log('query: ' + this.query);
        return fetch(this.url, {
            //crossDomain: 'true',
            // mode: 'cors',
            method: 'POST',
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // headers: new Headers({'content-type': 'application/json'}),
            //body: JSON.stringify(this.query)})
            //body: this.query})
            body: JSON.stringify({query: this.query})})
                .then(response => {
                    //return response.json();
                    return response.text();
                })
                .then(data => {
                    console.log('Here is the data: ', data);
                }).then(data => {
                    return data
                }).catch((e) => {

                    console.log("Exception:" + e)
                })

    }


}




