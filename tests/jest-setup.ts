import 'jest-styled-components';
import '@testing-library/jest-dom';
import * as React from 'react';
import { TextEncoder, TextDecoder } from 'util';

require('jest-fetch-mock').enableMocks();
import { FetchMock } from 'jest-fetch-mock';
export const fetchMock = fetch as FetchMock;

global.React = React;
if(!global.TextEncoder) global.TextEncoder = TextEncoder;
if(!global.TextDecoder) {
	global.TextDecoder = TextDecoder as typeof global.TextDecoder;
}
