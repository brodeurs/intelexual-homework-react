import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ApolloService from "../service/ApolloService";

/*
The above import causes problems: graphql module is not transpiled:

E:\Users\TheBrodeurs\Workspaces\React\dirlist\node_modules\graphql\index.mjs:25
export { version, versionInfo } from "./version.mjs"; // The primary entry point into fulfilling a GraphQL request.
^^^^^^

SyntaxError: Unexpected token export

Without ejecting, there are modules that allow configuration tweaking (like react-app-rewired) but are not
compatible with react-scripts 1.1.1     Jeez...
 */

configure({ adapter: new Adapter() });

// let myMock = jest.mock('../service/ApolloService', ()=>({cacheFile: jest.fn()}));
// let myMock = jest.mock('../service/ApolloService');

describe('My test suite', () => {

    it('show empty structure', () => {

        const myMock = jest.fn();

        let myService = new ApolloService();

        myService.Get = jest.fn();

        const result = myMock();
        expect(result).toBeUndefined();
        expect(myMock).toHaveBeenCalledTimes(1);

        // expect(math.add).toHaveBeenCalledWith(1, 2);
        // expect(myMock.Get).toHaveBeenCalledTimes(0);
    })
})
