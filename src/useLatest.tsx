import { useLayoutEffect, useRef } from 'react';

export function useLatest<Value>(value: Value) {
	const latestRef = useRef(value);

	useLayoutEffect(() => {
		latestRef.current = value;
	}, [value]);

	return latestRef;
}
