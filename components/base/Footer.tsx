import React, { MouseEventHandler } from 'react';
import { css } from '@emotion/core';
import { Column, Row, Line, Flex } from 'components/base/Layout';
import Image from 'components/base/Image';
import Text from 'components/base/Text';
import Heading from 'components/base/Heading';
import Icon from 'components/base/Icon';
import Button, { PrimaryButton } from 'components/base/Button';
import { Plus } from 'react-feather';
import AppRoutes from 'enums/AppRoutes';

const TermSeparator = () => (
  <Text color="white" fontSize={0} display={['none', 'block']} mx="2">
    -
  </Text>
);
const terms = [
  { title: 'Conditions générales', key: 'terms' },
  { title: 'Politique de confidentialité', key: 'privaycy' },
  { title: 'Mention légales', key: 'legals' },
  { title: 'RGPD', key: 'gdpr' },
];
export const FooterLegalMentions = () => (
  <Column
    alignItems={['left', 'center']}
    style={{ cursor: 'pointer' }}
    onClick={() => window.open(AppRoutes.terms, '_blank')}
  >
    <Flex flexDirection={['column', 'row']}>
      {terms.map(term => (
        <Row mb={[2, 0]} key={term.key}>
          <Text color="white" fontSize={0}>
            {term.title}
          </Text>
          <TermSeparator />
        </Row>
      ))}
    </Flex>
  </Column>
);

const FooterResourcesLink = () => (
  <Flex
    flexDirection={['column', 'row']}
    justifyContent={'center'}
    style={{ cursor: 'pointer' }}
  >
    <Row justifyContent={['center', undefined]}>
      <Image
        src="https://d1yyfrhejvllsj.cloudfront.net/b2c-web/images/app-store@3x.png"
        alt="Download on ios"
        width={127}
        onClick={() => window.open(AppRoutes.appleStore, '_blank')}
      />
      <Image
        src="https://d1yyfrhejvllsj.cloudfront.net/b2c-web/images/play-store@3x.png"
        alt="Download on Android"
        width={127}
        ml={3}
        onClick={() => window.open(AppRoutes.playStore, '_blank')}
      />
    </Row>
    <Row mt={[3, 0]} justifyContent={['center', undefined]}>
      <Image
        src="https://d1yyfrhejvllsj.cloudfront.net/b2c-web/images/facebook@3x.png"
        alt="Facebook page"
        width={40}
        ml={3}
        onClick={() => window.open(AppRoutes.facebook, '_blank')}
      />
      <Image
        src="https://d1yyfrhejvllsj.cloudfront.net/b2c-web/images/instagram@3x.png"
        alt="Instagram page"
        width={40}
        ml={3}
        onClick={() => window.open(AppRoutes.instagram, '_blank')}
      />
    </Row>
  </Flex>
);

export const FooterCopyright = () => (
  <Text color="white.40" fontSize={0} textAlign="center">
    © 2019 Shotgun. Tous droits réservés.
  </Text>
);

interface IFooterLink {
  key: string;
  title: string;
  onClick?: MouseEventHandler;
  route?: string;
}
interface IFooterRoute {
  key: string;
  heading: string;
  links: IFooterLink[];
}
const footerRoutes: IFooterRoute[] = [
  // {
  //   key: 'about',
  //   heading: 'À PROPOS',
  //   links: [
  //     { title: 'Notre mission', key: 'mission' },
  //     { title: "L'équipe", key: 'team' },
  //     { title: 'On recrute !', key: 'jobs' },
  //   ],
  // },
  // {
  //   key: 'explore',
  //   heading: 'EXPLORER',
  //   links: [
  //     { title: 'Tous les évènements', key: 'events' },
  //     { title: 'Festivals', key: 'festivals' },
  //     { title: 'Warehouses', key: 'warehouses' },
  //     { title: 'Clubbing', key: 'clubbing' },
  //   ],
  // },
  {
    key: 'partners',
    heading: 'ORGANISATEURS',
    links: [
      {
        title: 'Créer ma billetterie',
        key: 'signup',
        route: AppRoutes.partners.index,
      },
      {
        title: 'Connexion Smartboard',
        key: 'login',
        route: AppRoutes.smartboard,
      },
      {
        title: 'Ressources pro',
        key: 'docs',
        route: AppRoutes.blog,
      },
    ],
  },
  {
    key: 'support',
    heading: 'SUPPORT',
    links: [
      // { title: 'Centre d’aide', key: 'help' },
      // { title: 'J’ai perdu mon billet', key: 'recover' },
      // { title: 'Je veux revendre mon billet', key: 'resale' },
      { title: 'Contacter le SAV', key: 'contact', route: 'debug' },
    ],
  },
];
const FooterLinks = () => (
  <Flex flexDirection={['column', 'row']} justifyContent="space-around">
    {footerRoutes.map(route => (
      <Column alignItems="flex-start" key={route.key}>
        <Button
          p={0}
          css={css`
            text-align: left;
            &:hover ~ div,
            &:focus ~ div {
              display: flex;
            }
          `}
        >
          <Row ml={2} mt={[3, 0]}>
            <Heading fontSize={1} color="whites.50">
              {route.heading}
            </Heading>
            <Flex display={['block', 'none']} pt={1}>
              <Icon icon={Plus} color={'white'} size={1} ml={2} />
            </Flex>
          </Row>
        </Button>

        <Column alignItems={['flex-start']} display={['none', 'flex']}>
          {route.links.map(link => (
            <PrimaryButton
              key={link.key}
              color="white"
              style={{ textAlign: 'left' }}
              fontWeight={0}
              fontSize={1}
              onClick={
                link.onClick || (() => window.open(link.route, '_blank'))
              }
              mt={3}
            >
              {link.title}
            </PrimaryButton>
          ))}
        </Column>
      </Column>
    ))}
  </Flex>
);

const Footer = () => (
  <Column bg="blues.veryDark" px="10%" py={3}>
    <Flex flexDirection={['column', 'row']} justifyContent="space-between">
      <Row justifyContent={'space-between'}>
        <Image
          src="https://d1yyfrhejvllsj.cloudfront.net/b2c-web/images/logo-shotgun@3x.png"
          alt="Shotgun"
          width={100}
          mt={1}
          style={{ cursor: 'pointer' }}
        />
        <Text ml={[0, 3]} color="pinks.barbie">
          Live music events
        </Text>
      </Row>

      <Line bg="whites.10" my={3} display={['flex', 'none']} />

      <Row ml={[0, 3]} pb={1}>
        <Image
          src="https://d1yyfrhejvllsj.cloudfront.net/b2c-web/images/lock@3x.png"
          alt="Lock"
          width={12}
        />
        <Text color="brightTeal" ml="2" fontSize={0}>
          Paiement sécurisé
        </Text>
      </Row>
    </Flex>

    <Line bg="whites.10" my={3} />
    <FooterLinks />

    <Line bg="whites.10" my={3} />
    <FooterLegalMentions />

    <Line bg="whites.10" my={3} />
    <FooterResourcesLink />

    <Line bg="whites.10" my={3} />
    <FooterCopyright />
  </Column>
);

export default Footer;
