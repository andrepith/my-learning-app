import ShallowRenderer from 'react-test-renderer/shallow';
import Detail from '../../../pages/detail';

it('Renders detail to match snapshot', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<Detail />);
  expect(tree).toMatchSnapshot();
});
