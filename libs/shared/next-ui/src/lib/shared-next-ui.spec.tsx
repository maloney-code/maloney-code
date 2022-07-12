import { render } from '@testing-library/react';

import SharedNextUi from './shared-next-ui';

describe('SharedNextUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedNextUi />);
    expect(baseElement).toBeTruthy();
  });
});
