import { storiesOf } from '@storybook/react';

import Dropdown from './Dropdown';
import Icon from './Icon';
import Text from './Text';
import { Row } from './Layout';
import { MoreHorizontal, ChevronDown } from 'react-feather';
import { ButtonWithIcon } from 'components/base/Button';

const cities = [
  {
    id: '1',
    name: 'Paris',
  },
  {
    id: '2',
    name: 'Grand Ouest',
  },
  {
    id: '3',
    name: 'Nom de ville un peu plus long',
  },
];

const CitiesList = () => (
  <Row>
    <Text>Liste des villes</Text>
  </Row>
);
const menu = [
  {
    id: 'cities',
    name: 'Villes',
    children: <CitiesList />,
  },
  {
    id: 'organizers',
    name: 'Organisateurs',
  },
];

const CitiesDropdownHeader = () => (
  <ButtonWithIcon
    px={3}
    py={2}
    bg="whites.10"
    borderRadius={1}
    color="white"
    rightIcon={ChevronDown}
    iconSize={2}
    fontWeight={0}
  >
    Paris
  </ButtonWithIcon>
);

storiesOf('Dropdown', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Default', () => (
    <Dropdown
      list={cities}
      header={<CitiesDropdownHeader />}
      onSelectId={id => alert(`Selected ${id}`)}
    />
  ))
  .add('With Custom Header', () => (
    <Dropdown
      list={menu}
      header={<Icon icon={MoreHorizontal} color="white" size={4} />}
    />
  ));
