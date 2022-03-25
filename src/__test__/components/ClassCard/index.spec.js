import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ClassCard from '../../../components/ClassCard';

const homeProps = {
  id: 1,
  name: '',
};

const detailProps = {
  id: 1,
  name: '',
  mentors: [
    {
      id: 1,
      name: '',
      description: '',
    },
  ],
  description: '',
};

it('Renders on Home', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <ClassCard data={homeProps} />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders on Detail', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <ClassCard detail data={detailProps} />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
