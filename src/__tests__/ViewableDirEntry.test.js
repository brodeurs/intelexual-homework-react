import React from 'react';
import ViewableDirEntry from "../ViewableDirEntry";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('My test suite', () => {

    it('show empty structure', () => {

        const wrapper = shallow(
            <ViewableDirEntry />
        );

        console.log("ViewableDirEntry: " + wrapper.html());

        expect(
            wrapper.find('#ViewableDirEntry')
        ).toBeDefined();

        expect(
            wrapper.find(ViewableDirEntry)
        ).toBeDefined();

        let vde = wrapper.find( {id : 'ViewableDirEntry'} );
        expect(
            vde
        ).toBeDefined();

        console.log("vde: " + vde.html());

        expect(
            vde.find({id : 'fileName'}).text()
        ).toEqual('')

        let entryType;
        expect(
            entryType = vde.find({id : 'entryType'}).text()
        ).toEqual('File')

        console.log("Entry Type: " + entryType);

        expect(
            vde.find({id: 'createDate'}).text()
        ).toEqual('')


    })

    it('show initialized structure', () => {

        const dirListEntryProps = {
            name: 'file-entry-1',
            isDir: true,
            createDate: '/01/02/2021',
            onClick: () => {
                console.log('click')
            }
        }

        const vde = shallow(
            <ViewableDirEntry {...dirListEntryProps}/>
        );

        console.log("ViewableDirEntry: " + vde.html());

        expect(
            vde.find({id : 'fileName'}).text()
        ).toEqual('file-entry-1')

    })
}

);

