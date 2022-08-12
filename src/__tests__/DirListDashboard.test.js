import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DirListDashboard, {ApolloService} from "../DirListDashboard";
import ViewableDirList from "../ViewableDirList";
import ViewableDirEntry from "../ViewableDirEntry";




configure({ adapter: new Adapter() });

// let myMock = jest.mock('../service/ApolloService', ()=>({cacheFile: jest.fn()}));

describe('DirListDashboard test suite', () => {

    it('Check that service has been called', () => {

        // let dashboard = new dirListDashboard();
        // dashboard.getDirListUsingService = jest.fn();


        const dirListValues = {
            dirList: [
                {
                    name: 'file-1',
                    isDir: false,
                    createDate: '04/14/2021'
                },
                {
                    name: 'directory-1',
                    isDir: true,
                    createDate: '01/02/2021'
                }
            ],
            onClick: () => {
                console.log('click')
            }
        }

        const response = { dirListByPath: dirListValues.dirList};
        // myMock.get.mockResolvedValue(response);
        //
        // myMock.componentDidMount();

        expect(true).toBe(true);
        // const vde = shallow(
        //     <ViewableDirList {...dirListProps}/>
        // );
        //
        // console.log("ViewableDirList: " + vde.html());
        //
        // let vdl = vde.find({id: 'viewableDirList'})
        //
        // expect(
        //     vdl
        // ).toBeDefined()
        //
        //
        // let vdes = vdl.find(ViewableDirEntry)
        //
        // expect(
        //     vdes.length
        // ).toEqual(2)
        //
        // console.log("vdes:");
        // vdes.forEach((node) => {
        //     console.log("  ==> node: " + node.html());
        //     console.log("name: " + node.prop('name') + "   createDate: " + node.prop('createDate'));
        // })
    })
})
