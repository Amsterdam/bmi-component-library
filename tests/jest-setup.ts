import 'jest-styled-components';
import '@testing-library/jest-dom';
import React from 'react';

require('jest-fetch-mock').enableMocks();
import { FetchMock } from 'jest-fetch-mock';
export const fetchMock = fetch as FetchMock;

global.React = React;
