import React, {useEffect, useState} from 'react';
import ApolloService from "./service/ApolloService";
import {GetDirList} from "./service/ApolloFuncs";
import ViewableDirListFunc from "./ViewableDirListFunc";
import UpButtonFunc from "./UpButtonFunc";

function DirListDashboardFunc() {

    const [path, setPath] = useState('c:');
    const [dirList, setDirList] = useState(null);
    let useService = true;

    useEffect(() => {
        loadDirEntriesFromServer(path).then((value) => {
            // Setting state via the setter causes another render.
            console.log("useEffect: value: " + JSON.stringify(value));
            setDirList(value);
        });
    }, []);


    const loadDirEntriesFromServer = async (path) => {
        let result

        if (useService) {
            result = await getDirListUsingService(path);
        } else {
            result = await getDirListUsingFunc(path);
        }
        await result;

        return result.data.dirListByPath;
    }


    const getDirListUsingService = (path) => {
        let service = new ApolloService();

        let result = service.Get(path);

        return result;
    }

    const getDirListUsingFunc = (path) => {
        let result = new GetDirList(path);

        return result;
    }

    const handlePathChange = (e) => {
        let newPath = path + '/' + e.target.innerText;
        loadDirEntriesFromServer(newPath).then(value =>{
            // Setting state via the setter causes another render.
            setPath(newPath);
            setDirList(value);
        })
    }

    const handleUpButtonClick = (e) => {
        let trimmedPath = removeLastDirectorySegment(path);
        // Setting state via the setter causes another render.
        loadDirEntriesFromServer(trimmedPath).then(value => {
            setPath(trimmedPath);
            setDirList(value);
        })
    }

    const removeLastDirectorySegment = (path) => {
        let the_arr = path.split('/');
        if (the_arr.length > 1) {
            the_arr.pop();
        }
        return( the_arr.join('/') );
    }

    // if (!dirList || !dirList.size) {
    //     console.log("dirList is empty");
    //     return (<div><p>Loading...</p></div>);
    // }
    //
    // if (dirList) {
    //     console.log("dirList size: " + dirList.size);
    // }

    return (

        <div className='ui three column centered grid'>
            <div><p>Current path: ${path}</p></div>
            <div>
                <UpButtonFunc onClick={handleUpButtonClick} />
            </div>
            <div className='column'>
                <ViewableDirListFunc dirList={dirList} onClick={handlePathChange}/>
            </div>
        </div>
    )

}


export default DirListDashboardFunc;
