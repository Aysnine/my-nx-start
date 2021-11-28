import { render } from '@testing-library/react';

import MyReactUi from './my-react-ui';

describe('MyReactUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyReactUi />);
    expect(baseElement).toBeTruthy();
  });
});
