import type { FC } from 'react';

export interface ComponentMockProps {
	onClick: () => void;
	onChange: () => void;
	'data-testid': string;
	className?: string;
}

export function createMockComponent(componentName: string, defaultDataTestId: string = ''): FC<ComponentMockProps> {
	const NamedComponentMock = ({
		children,
		'data-testid': dataTestId = defaultDataTestId,
		onClick,
		onChange,
		className,
	}: React.PropsWithChildren<ComponentMockProps>) => (
		<div
			data-mock={`Mock${componentName}`}
			data-testid={dataTestId}
			onClick={onClick}
			onChange={onChange}
			className={className}
		>
			{children}
		</div>
	);
	NamedComponentMock.displayName = componentName;
	return jest.fn().mockImplementation(NamedComponentMock);
}
