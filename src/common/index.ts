/**
 * Common Module
 *
 * Contains all components on a "atomic" level
 * like Buttons, Headers, Links etc.
 *
 * These are the only components that may be used
 * inside other components within this library.
 *
 * @component-library/common
 */

export { default as DescriptionList } from './src/DescriptionList/DescriptionList';
export { default as DocumentViewer } from './src/DocumentViewer/DocumentViewer';
export { default as Modal } from './src/Modal/Modal';
export {
	default as ConfirmDialog,
	confirm,
	initialState as initialConfirmDialogState,
} from './src/ConfirmDialog/ConfirmDialog';
export type { IState as IConfirmDialogStoreState } from './src/ConfirmDialog/ConfirmDialog';
export { default as DocumentTable } from './src/DocumentTable/DocumentTable';
