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
  it('Given className sent it should be combined with className of the component', () => {
    // arrange
    const newClassName = 'foo';
    const { getByRole } = render(
      <Button type="button" className={newClassName} />
    );
    // act
    const buttonTest = getByRole('button');
    // assert

    expect(buttonTest).toHaveClass(newClassName);
  });

  it('Given the Button, when the props provide width attribute then the component will take those style', () => {
    // arrange
    const { getByRole } = render(<Button type="button" width={'100%'} />);
    // act
    const buttonTest = getByRole('button');
    // assert
    expect(buttonTest).toHaveStyle(`width: 100%`);
  });

  it('Given the Button, when the props provide height attribute then the component will take those style', () => {
    // arrange
    const { getByRole } = render(<Button type="button" height={'30px'} />);
    // act
    const buttonTest = getByRole('button');
    // assert

    expect(buttonTest).toHaveStyle(`height: 30px`);
  });
});
