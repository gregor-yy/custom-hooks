import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T) {
	const previousValue = useRef<T | null>(null);

	useEffect(() => {
		previousValue.current = value;
	}, [value]);

	return previousValue;
}
