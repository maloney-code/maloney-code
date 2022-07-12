import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useFetchUser from './useFetchUser';

describe('useFetchUser', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useFetchUser());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
