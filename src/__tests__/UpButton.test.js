import React from 'react';
import UpButton from "../UpButton";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('My test suite', () => {

        it('show empty structure', () => {

            const wrapper = shallow(
                <UpButton />
            );

            console.log("UpButton: " + wrapper.html());

            expect(
                wrapper.find({name: 'button-1'})
            ).toBeDefined();

            expect(
                wrapper.find({value: 'up'})
            ).toBeDefined();

            expect(
                wrapper.text()
            ).toEqual('Up')


        })

        it('Test click event', () => {
            const mockCallBack = jest.fn();

            const buttonProps = {
                onClick: mockCallBack
            }

            const button = shallow(
                <UpButton {...buttonProps}/>
            );

            button.find('button').simulate('click');
            expect(mockCallBack.mock.calls.length).toEqual(1);
        });

    }

);

