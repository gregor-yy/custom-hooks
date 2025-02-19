import { useEffect } from 'react';
import { useEvent } from './useEvent';

export function useWindowEvent(type: string, callback: (event: Event) => void) {
	const eventCallback = useEvent(callback);

	useEffect(() => {
		window.addEventListener(type, eventCallback);

		return () => window.removeEventListener(type, eventCallback);
	}, [eventCallback]);
}
