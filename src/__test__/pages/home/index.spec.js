import ShallowRenderer from 'react-test-renderer/shallow';
import Home from '../../../pages/home';

it('Renders home to match snapshot', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<Home />);
  expect(tree).toMatchSnapshot();
});
