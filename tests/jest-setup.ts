import 'jest-styled-components';
import '@testing-library/jest-dom';
import * as React from 'react';

import JestFetchMock from 'jest-fetch-mock';
JestFetchMock.enableMocks();

import type { FetchMock } from 'jest-fetch-mock';
export const fetchMock = fetch as FetchMock;

global.React = React;
