import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ViewableDirList from "../ViewableDirList";
import ViewableDirEntry from "../ViewableDirEntry";

configure({ adapter: new Adapter() });

describe('My test suite', () => {

        it('show empty structure', () => {

            const dirListProps = {
                dirList: null,
                onClick: () => {
                    console.log('click')
                }
            }

            const wrapper = shallow(
                <ViewableDirList {...dirListProps}/>
            );

            console.log("ViewableDirList: " + wrapper.html());

            expect(
                wrapper.equals(<div><p>empty</p></div>)
            );

            expect(
                wrapper.find('#ViewableDirList')
            ).toBeDefined();

            expect(
                wrapper.find(ViewableDirList)
            ).toBeDefined();

            let vde = wrapper.find( {id : 'ViewableDirList'} );
            expect(
                vde
            ).toBeDefined();

        })

        it('show initialized structure', () => {

            const dirListProps = {
                dirList: [
                    {
                        name : 'file-1',
                        isDir : false,
                        createDate : '04/14/2021'
                    },
                    {
                        name : 'directory-1',
                        isDir : true,
                        createDate : '01/02/2021'
                    }
                ],
                onClick: () => {
                    console.log('click')
                }
            }

            const vde = shallow(
                <ViewableDirList {...dirListProps}/>
            );

            console.log("ViewableDirList: " + vde.html());

            let vdl = vde.find({id : 'viewableDirList'})

            expect(
                vdl
            ).toBeDefined()


            let vdes = vdl.find(ViewableDirEntry)

            expect(
                vdes.length
            ).toEqual(2)

            console.log("vdes:");
            vdes.forEach((node) => {
                console.log("  ==> node: " + node.html());
                console.log("name: " + node.prop('name') + "   createDate: " + node.prop('createDate'));
            })
        })
    }

);

