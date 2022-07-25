The `<ConfirmDialog />` component was developed with the idea that a single `<ConfirmDialog />` exists in your 
application component tree. A  RXJS `BehaviorSubject` instance that manages the state of the dialog is shared 
between all features that want to raise a confirmation dialog based on this component.

To raise a confirmation prompt (after adding `<ConfirmDialog />` in the component tree):
```typescript jsx
import { confirm } from '@amsterdam/bmi-component-library';

confirm({
	title: 'Annuleer uploaden',
	message: 'U annuleert het uploaden. Eventueel zojuist toegevoegde bestanden zullen worden verwijderd',
	textCancelButton: 'Terug',
	textConfirmButton: 'Akkoord',
	// ...
});

<ConfirmDialog />
```

## Usage of <ConfirmDialog /> in an NPM package/micro-frontend

If you want to use a `<ConfirmDialog />` in an NPM package which effectively contains a micro-frontend, it is 
important to isolate the state of the `BehaviorSubject` instance to avoid multiple `<ConfirmDialog />` components to 
become visible simultaneously. You can do this by passing your own instance:

```typescript jsx
import { BehaviorSubject } from 'rxjs';
import { confirm, ConfirmDialog } from '@amsterdam/bmi-component-library';

const customSubject = new BehaviorSubject();

confirm({
	title: 'Annuleer uploaden',
	message: 'U annuleert het uploaden. Eventueel zojuist toegevoegde bestanden zullen worden verwijderd',
	textCancelButton: 'Terug',
	textConfirmButton: 'Akkoord',
	// ...
}, customSubject);

<ConfirmDialog store={customSubject} />
```
