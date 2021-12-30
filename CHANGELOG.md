# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.12-alpha.5](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.12-alpha.4...v0.0.12-alpha.5) (2021-12-30)

### [0.0.12-alpha.4](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.12-alpha.3...v0.0.12-alpha.4) (2021-12-30)

### [0.0.12-alpha.3](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.12-alpha.2...v0.0.12-alpha.3) (2021-12-29)


### Features

* **creatable:** Added error state to CreatableSelect ([aa68b3c](https://github.com/Amsterdam/bmi-component-library/commit/aa68b3c9aff0f7c6f0fbbeb1becc6b39bbf7bb54))

### [0.0.12-alpha.2](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.12-alpha.1...v0.0.12-alpha.2) (2021-12-29)


### Features

* **creatableselect:** Added prop for new option label ([1f2d5c3](https://github.com/Amsterdam/bmi-component-library/commit/1f2d5c3c8157147572eafaa6f30d5985c8b26ba5))
* **react-select:** Introduction of styled react-select component of the Creatable kind ([5e57ae1](https://github.com/Amsterdam/bmi-component-library/commit/5e57ae19aa5fb072f84bd60675e47e61c9bce529))


### Bug Fixes

* **creatable:** converted back to uncontrolled to leave the controlling to the implementor ([d32bfbc](https://github.com/Amsterdam/bmi-component-library/commit/d32bfbc12ae16de36eca791e22436caa4802028f))
* **creatable:** CreatableSelect was not being exported ([0cc3c53](https://github.com/Amsterdam/bmi-component-library/commit/0cc3c5355cd949c6fc92a3c2d773e3b47be848c2))
* **creatable:** fix issues in state management around onCreateOption and onChange ([d1f7d20](https://github.com/Amsterdam/bmi-component-library/commit/d1f7d208948690f87a6c281f5382cfd451e3e5e4))

### [0.0.12-alpha.1](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.12-alpha.0...v0.0.12-alpha.1) (2021-12-29)


### Features

* **creatableselect:** Added prop for new option label ([651ff9f](https://github.com/Amsterdam/bmi-component-library/commit/651ff9f07a9f7e36e331b1d088bda6961660fed1))
* **react-select:** Introduction of styled react-select component of the Creatable kind ([212160d](https://github.com/Amsterdam/bmi-component-library/commit/212160dd24cef6b82fabdb05dfcab3f39a7ab9f3))


### Bug Fixes

* **creatable:** converted back to uncontrolled to leave the controlling to the implementor ([559dec9](https://github.com/Amsterdam/bmi-component-library/commit/559dec974976255a90c9d77f96685b476f806ed2))
* **creatable:** fix issues in state management around onCreateOption and onChange ([f86e98c](https://github.com/Amsterdam/bmi-component-library/commit/f86e98c0a398799b3c4f61f629ed2722a76cbed5))

### [0.0.12-alpha.0](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.11...v0.0.12-alpha.0) (2021-12-17)


### Features

* **fileupload hooks:** send file with getPostUrl callback ([9674f58](https://github.com/Amsterdam/bmi-component-library/commit/9674f587db3e6f0df3699d6c2cc2c2b18f46faec))

### [0.0.11](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.10...v0.0.11) (2021-12-14)


### Bug Fixes

* **modal:** better way of determining children count ([1ab3acc](https://github.com/Amsterdam/bmi-component-library/commit/1ab3acc95c7e8e67e9203868879591bfaa0c083a))
* **modal:** production compatible method of determining modal actions left/right ([b2c7fc6](https://github.com/Amsterdam/bmi-component-library/commit/b2c7fc67acc66dc13768b99a3258febac6f66f4e))

### [0.0.10](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.9...v0.0.10) (2021-12-14)


### Bug Fixes

* **documenttable:** increased margin between table and pagination ([8c025d1](https://github.com/Amsterdam/bmi-component-library/commit/8c025d12123ac6a14b16521904357df5ff607fb4))

### [0.0.9](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.8...v0.0.9) (2021-12-13)


### Features

* **DocumentTable:** Introduction of a loading state with a <Skeleton /> in place of each cell. ([096b18e](https://github.com/Amsterdam/bmi-component-library/commit/096b18e30068b74da8e55ecfc8fcd1e01d370662))

### [0.0.8](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.7...v0.0.8) (2021-12-08)


### Bug Fixes

* **ConfirmDialog:** BehaviorSubject state is now being reset on unmount ([3c3ef37](https://github.com/Amsterdam/bmi-component-library/commit/3c3ef3781176da5db1bf30fcfe23704598f04634))
* **ConfirmDialog:** Better alignment with design system ([c438fea](https://github.com/Amsterdam/bmi-component-library/commit/c438fea6b478a982de16959faee4da9a939183c4))

### [0.0.7](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.7-alpha.3...v0.0.7) (2021-12-07)


### Bug Fixes

* **filelist:** close icons for cancellation of file uploads instead of chevrons ([61375b1](https://github.com/Amsterdam/bmi-component-library/commit/61375b187aa33749f0b6936c4caa01471c77e428))
* **modal:** brought default modal styles inline with design system after qa session ([7fcba89](https://github.com/Amsterdam/bmi-component-library/commit/7fcba8936d7ec9d9c827d64db4ad2df609e32d1d))
* **modal footer:** adjusted modal footer styles to better align with the design system ([a17a950](https://github.com/Amsterdam/bmi-component-library/commit/a17a9506de9af92548afbcb08c5c9e2f7b04d159))
* **modal header:** positioned the close button on the modal header a little better ([8c109bb](https://github.com/Amsterdam/bmi-component-library/commit/8c109bb8e228c9253f0062b15801e68a870abe5f))

### [0.0.7-alpha.3](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.7-alpha.2...v0.0.7-alpha.3) (2021-12-03)


### Bug Fixes

* **column filter:** renamed onchange to onfilter to work around TS glitch ([d8be4fc](https://github.com/Amsterdam/bmi-component-library/commit/d8be4fc83d68d9216a22b613dd2727b111276b1d))
* **documenttable:** [wip] refactor of <DocumentTable> to fix state issues ([28f7846](https://github.com/Amsterdam/bmi-component-library/commit/28f7846d19b10a6cd2e27a1657b82c9ce44365d9))
* **documenttable:** fixed state issues with documenttable and its column filters ([c0fd2be](https://github.com/Amsterdam/bmi-component-library/commit/c0fd2be2450d59c36e613ed0570fbbb09706e072))

### [0.0.7-alpha.2](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.7-alpha.1...v0.0.7-alpha.2) (2021-11-24)


### Bug Fixes

* **confirmdialog:** fixed bug that caused confirm dialog to be instantly visible ([f5d13d0](https://github.com/Amsterdam/bmi-component-library/commit/f5d13d020fc4392368db10959a5d7f8028b66a28))
* **fileupload:** ensuring multiple failed uploads each have a unique key ([ac7182e](https://github.com/Amsterdam/bmi-component-library/commit/ac7182eb735dbfb0e7ecb4e80fdd7527c14a994a))
* **fileupload:** ensuring tmpId counter is not reset on each re-render ([864fb9d](https://github.com/Amsterdam/bmi-component-library/commit/864fb9db1f771060161bfc11a153399878b72a35))

### [0.0.7-alpha.1](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.7-alpha.0...v0.0.7-alpha.1) (2021-11-22)


### Bug Fixes

* **confirmdialog:** added missing export and make props optional ([8b7ee4f](https://github.com/Amsterdam/bmi-component-library/commit/8b7ee4f30a34256ffc7e81c34195c7f4f50a6e81))
* **material-ui:** replaced deprecated method with createTheme ([5174329](https://github.com/Amsterdam/bmi-component-library/commit/5174329fb1c45513d2dab5f51ff42650d661680c))

### [0.0.7-alpha.0](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.5-alpha.5...v0.0.7-alpha.0) (2021-11-18)


### Bug Fixes

* **documenttable:** adding export for <DocumentTable /> ([#14](https://github.com/Amsterdam/bmi-component-library/issues/14)) ([0684dc4](https://github.com/Amsterdam/bmi-component-library/commit/0684dc48558f7804a5a6a4393843269b4c61346e))

### [0.0.5-alpha.5](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.5-alpha.4...v0.0.5-alpha.5) (2021-10-27)

### [0.0.5-alpha.4](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.5-alpha.3...v0.0.5-alpha.4) (2021-10-21)


### Features

* **filelist:** added defaultValue prop for storedfiles to the fileList ([c2471af](https://github.com/Amsterdam/bmi-component-library/commit/c2471af8c17cd4ec76bfbb07d2598f23c303c5aa))
* **filelist:** forgot to commit this file with devaultValues prop added to Filelist ([4a8e6cc](https://github.com/Amsterdam/bmi-component-library/commit/4a8e6cc86fbc6e20882a8e2c29de110991678f02))
* **fileupload:** added Stored files prop to fileUpload component ([4563b74](https://github.com/Amsterdam/bmi-component-library/commit/4563b74cc486c0a94c396650bff9dcabfd79e912))

### [0.0.5-alpha.3](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.5-alpha.2...v0.0.5-alpha.3) (2021-10-13)


### Bug Fixes

* **fileupload:** files didn't show in fileList ([81c4b7d](https://github.com/Amsterdam/bmi-component-library/commit/81c4b7ddf86ba00c5accc3721e9253979b456594))

### [0.0.5-alpha.2](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.5-alpha.1...v0.0.5-alpha.2) (2021-09-16)

### [0.0.5-alpha.1](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.5-alpha.0...v0.0.5-alpha.1) (2021-09-16)

### [0.0.5-alpha.0](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.3-alpha.0...v0.0.5-alpha.0) (2021-09-13)


### Features

* **fileupload:** exposing Props interface of <FileUpload /> ([#7](https://github.com/Amsterdam/bmi-component-library/issues/7)) ([6d8b86f](https://github.com/Amsterdam/bmi-component-library/commit/6d8b86fd4b5c7f60a6511859677df31c17129fd5))
* **fileupload:** upload single file per request + refined component … ([#5](https://github.com/Amsterdam/bmi-component-library/issues/5)) ([5158f41](https://github.com/Amsterdam/bmi-component-library/commit/5158f414fb8879e8a818f46c9a1795e876dbe8fb))


### Bug Fixes

* **fileupload:** fileUpload outer element should be a styled component ([2aea672](https://github.com/Amsterdam/bmi-component-library/commit/2aea672c31c7e38f43c97f5ad509b86959191c0b))
* **fileupload:** setting button type so forms are not submitted on click ([636d7fe](https://github.com/Amsterdam/bmi-component-library/commit/636d7fe9a7b794c574f1810537f39f70caea3250))

### [0.0.3-alpha.1](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.3-alpha.0...v0.0.3-alpha.1) (2021-08-09)


### Bug Fixes

* **fileupload:** fileUpload outer element should be a styled component ([2aea672](https://github.com/Amsterdam/bmi-component-library/commit/2aea672c31c7e38f43c97f5ad509b86959191c0b))

### 0.0.3-alpha.0 (2021-08-09)


### Features

* **fileupload:** upload single file per request + refined component interface aiding implementation ([b1da96d](https://github.com/Amsterdam/bmi-component-library/commit/b1da96d1233e4f639ec146f0b60a49a5a65b6259))
* add asc packages ([3f94b4c](https://github.com/Amsterdam/bmi-component-library/commit/3f94b4c78b6d4b1f94638a0b007100b9bcba5fbc))
* husky config setup ([2e94dc9](https://github.com/Amsterdam/bmi-component-library/commit/2e94dc92fce07f9ff0cda2ef8da71f7053cf89d6))
* implement breakpoints (for drag detection) ([85f5844](https://github.com/Amsterdam/bmi-component-library/commit/85f5844bc4db5b2735550f4d0bf180938c338d35))
* setup common lib ([5af2904](https://github.com/Amsterdam/bmi-component-library/commit/5af29040c113c7f10378b2ae7cfc339af6b1e19f))


### Bug Fixes

* **fileupload:** added missing export ([c7eaba9](https://github.com/Amsterdam/bmi-component-library/commit/c7eaba910be1bb1be90defb02d4e12de9cfcb5b9))
* **fileupload:** fixed typo in storybook entry ([ded0046](https://github.com/Amsterdam/bmi-component-library/commit/ded00464ddd758c4415051b2b5f82925acee0d27))
* breakpoint < laptop ([f4c8ed2](https://github.com/Amsterdam/bmi-component-library/commit/f4c8ed221539c1da06aae6bd82d6dcfa170cff95))
* cleanup code ([82f007c](https://github.com/Amsterdam/bmi-component-library/commit/82f007c03deb703e8f3d4ae986be00ab110952fb))
* cleanup code and xhr req to file ([1f89d55](https://github.com/Amsterdam/bmi-component-library/commit/1f89d55d0d629920fb41d326ada5b0d3a5fecaf6))
* leave out unwanted comment block ([150284b](https://github.com/Amsterdam/bmi-component-library/commit/150284b720bc0770cfccc15c8259955c1d51e760))
* some cleanup ([f9e2eca](https://github.com/Amsterdam/bmi-component-library/commit/f9e2eca61b768332563f38c613cc9cdb734a261d))
* theme spacing for padding list ([884ea84](https://github.com/Amsterdam/bmi-component-library/commit/884ea84e84e23d5c432128f2ed7828c5cabed651))

### [0.0.1-alpha.2](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.1-alpha.1...v0.0.1-alpha.2) (2021-07-30)


### Features

* **descriptionlist:** added footer option + wrapping ReactNodes with <dd> ([ba62cfa](https://github.com/Amsterdam/bmi-component-library/commit/ba62cfa426e9d2a16cddef25a59835fa29ef22cb))

### [0.0.1-alpha.1](https://github.com/Amsterdam/bmi-component-library/compare/v0.0.1-alpha.0...v0.0.1-alpha.1) (2021-07-30)

### 0.0.1-alpha.0 (2021-07-30)


### Features

* add asc packages ([3f94b4c](https://github.com/Amsterdam/bmi-component-library/commit/3f94b4c78b6d4b1f94638a0b007100b9bcba5fbc))
* husky config setup ([2e94dc9](https://github.com/Amsterdam/bmi-component-library/commit/2e94dc92fce07f9ff0cda2ef8da71f7053cf89d6))
* implement breakpoints (for drag detection) ([85f5844](https://github.com/Amsterdam/bmi-component-library/commit/85f5844bc4db5b2735550f4d0bf180938c338d35))
* setup common lib ([5af2904](https://github.com/Amsterdam/bmi-component-library/commit/5af29040c113c7f10378b2ae7cfc339af6b1e19f))


### Bug Fixes

* breakpoint < laptop ([f4c8ed2](https://github.com/Amsterdam/bmi-component-library/commit/f4c8ed221539c1da06aae6bd82d6dcfa170cff95))
* cleanup code ([82f007c](https://github.com/Amsterdam/bmi-component-library/commit/82f007c03deb703e8f3d4ae986be00ab110952fb))
* cleanup code and xhr req to file ([1f89d55](https://github.com/Amsterdam/bmi-component-library/commit/1f89d55d0d629920fb41d326ada5b0d3a5fecaf6))
* leave out unwanted comment block ([150284b](https://github.com/Amsterdam/bmi-component-library/commit/150284b720bc0770cfccc15c8259955c1d51e760))
* some cleanup ([f9e2eca](https://github.com/Amsterdam/bmi-component-library/commit/f9e2eca61b768332563f38c613cc9cdb734a261d))
* theme spacing for padding list ([884ea84](https://github.com/Amsterdam/bmi-component-library/commit/884ea84e84e23d5c432128f2ed7828c5cabed651))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
