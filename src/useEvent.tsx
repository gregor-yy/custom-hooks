import { useCallback, useLayoutEffect, useRef } from 'react';

export function useEvent<Type extends (...args: any[]) => any>(func: Type) {
	const functionRef = useRef(func);

	useLayoutEffect(() => {
		functionRef.current = func;
	}, [func]);

	const eventCallback = useCallback(
		(...args: Parameters<Type>) => {
			return functionRef.current.apply(null, args);
		},
		[functionRef],
	);

	return eventCallback;
}
