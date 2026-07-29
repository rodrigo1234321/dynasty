import { useSyncExternalStore } from 'react';

// No-op subscribe: hydration status never changes after mount, so there is
// nothing to subscribe to — we only need the differing server/client snapshots.
const subscribe = () => () => {};

/**
 * Returns `false` on the server and during the first client render (so SSR
 * output matches), then `true` after hydration completes. Using
 * useSyncExternalStore instead of a useEffect + setState avoids the
 * "setState synchronously in an effect" cascading-render pattern.
 */
export function useHydration() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
