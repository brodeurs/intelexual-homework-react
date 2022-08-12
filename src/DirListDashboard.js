import React from 'react';
import ViewableDirList from "./ViewableDirList";
import UpButton from "./UpButton";
import ApolloService from "./service/ApolloService";
import {GetDirList} from "./service/ApolloFuncs";

class DirListDashboard extends React.Component {
    state = {
        dirList : null,
        path : null
    }
    useService = true;

    constructor(props) {
        super(props);

        // Don't use setState for initial state.
        this.state = {
            dirList : null,
            path : 'c:'
        }
    }

    componentDidMount() {

        this.loadDirEntriesFromServer(this.state.path).then((value) => {
            // Setting state via the setter causes another render.
            this.setState({
                dirList: value
            });

        });

    }

    async loadDirEntriesFromServer(path) {
        let result

        if (this.useService) {
            result = await this.getDirListUsingService(path);
        } else {
            result = await this.getDirListUsingFunc(path);
        }
        await result;

        return result.data.dirListByPath;
    }


    getDirListUsingService(path) {
        let service = new ApolloService();

        let result = service.Get(path);

        return result;
    }

    getDirListUsingFunc(path) {
        let result = new GetDirList(path);

        return result;
    }

    handlePathChange = (e) => {
        let newPath = this.state.path + '/' + e.target.innerText;
        this.loadDirEntriesFromServer(newPath).then(value =>{
            // Setting state via the setter causes another render.
            this.setState({
                path: newPath,
                dirList: value
            });
        })
    }

    handleUpButtonClick = (e) => {
        let trimmedPath = this.removeLastDirectorySegment(this.state.path)
        // Setting state via the setter causes another render.
        this.loadDirEntriesFromServer(trimmedPath).then(value => {
            this.setState({
                path: trimmedPath,
                dirList: value
            });
        })
    }

    removeLastDirectorySegment(path) {
        let the_arr = path.split('/');
        if (the_arr.length > 1) {
            the_arr.pop();
        }
        return( the_arr.join('/') );
    }

    render() {

        if (this.state.dirList === null) return (<div><p>Loading...</p></div>);

        console.log("dirList size: " + this.state.dirList.size);

        return (
            <div className='ui three column centered grid'>
                <div><p>Current path: ${this.state.path}</p></div>
                <div>
                    <UpButton onClick={this.handleUpButtonClick} />
                </div>
                <div className='column'>
                    <ViewableDirList dirList={this.state.dirList} onClick={this.handlePathChange}/>
                </div>
            </div>
        );
    }

}


export default DirListDashboard;
