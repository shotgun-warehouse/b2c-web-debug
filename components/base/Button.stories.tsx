import { storiesOf } from '@storybook/react';

import Button, {
  CTAButton,
  RoundButton,
  PrimaryButton,
  ButtonWithIcon,
} from './Button';
import Text from './Text';
import { DownloadCloud, ArrowLeft } from 'react-feather';

storiesOf('Button', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Default', () => <Button>Default Button</Button>)
  .add('Facebook', () => (
    <CTAButton bg="blues.deepSky" fontWeight={2}>
      Continuer via Facebook
    </CTAButton>
  ))
  .add('CTA With Left Icon', () => (
    <CTAButton bg="blues.deepSky" fontWeight={0} leftIcon={DownloadCloud}>
      Télécharger le pdf
    </CTAButton>
  ))
  .add('Loading', () => (
    <CTAButton
      bg="blues.deepSky"
      fontWeight={0}
      leftIcon={DownloadCloud}
      loading={true}
    >
      Télécharger le pdf
    </CTAButton>
  ))
  .add('With Gradient', () => (
    <CTAButton gradient={['blues.purply', 'pinks.barbie']} fontSize={1}>
      CONTINUER AVEC MON MAIL
    </CTAButton>
  ))
  .add('Round', () => (
    <RoundButton size={4}>
      <Text>+</Text>
    </RoundButton>
  ))
  .add('Primary Button', () => <PrimaryButton>Se connecter</PrimaryButton>)
  .add('Primary Button with Icon', () => (
    <ButtonWithIcon color="black" leftIcon={ArrowLeft}>
      Retour
    </ButtonWithIcon>
  ));
