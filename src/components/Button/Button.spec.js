import { render } from '@testing-library/react';
import Button from './Button';

describe('@components/Button', () => {
  it('should render', () => {
    // arrange
    const { getByRole } = render(<Button type="button" />);
    // act
    const buttonTest = getByRole('button');
    // assert
    expect(buttonTest).toBeDefined();
  });
});
