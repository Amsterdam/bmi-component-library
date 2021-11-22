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
export { default as Modal } from './src/Modal/Modal';
export { default as ConfirmDialog, confirm } from './src/ConfirmDialog/ConfirmDialog';
export { default as FileUpload, Props as FileUploadProps } from './src/FileUpload/FileUpload';
export { default as FileList } from './src/FileUpload/FileList/FileList';
export { CustomFile } from './src/FileUpload/hooks';
export { default as DocumentTable } from './src/DocumentTable/DocumentTable';
