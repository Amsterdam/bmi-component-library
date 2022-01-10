import 'jest-styled-components';
import '@testing-library/jest-dom';

require('jest-fetch-mock').enableMocks();
import { FetchMock } from 'jest-fetch-mock';
export const fetchMock = fetch as FetchMock;
