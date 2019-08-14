import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Listener } from 'AppTypes';
import Icon from 'components/base/Icon';
import { X } from 'react-feather';
import Button from './Button';
import { Row } from './Layout';

const Background = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  opacity: 0;
  transition: visibility 500ms, opacity 500ms ease-in-out;
  -moz-transition: visibility 500ms, opacity 500ms ease-in-out;
  -webkit-transition: visibility 500ms, opacity 500ms ease-in-out;
  &.show {
    visibility: visible;
    opacity: 1;
  }
`;

const Content = styled.div`
  float: right;
  height: 100%;
  width: 40vw;
  background-color: white;
  transform: translateX(100%);
  transition: all 500ms ease-in-out;
  padding: 32px;
  overflow-y: scroll;
  &.show {
    transform: translateX(0%);
  }
  @media (max-width: 52em) {
    width: 100vw;
  }
`;

export interface SlidingPanelProps {
  isOpen: boolean;
  close: Listener;
  children?: ReactNode;
}
const SlidingPanel = ({ isOpen, close, children }: SlidingPanelProps) => (
  <Background
    className={isOpen ? 'show' : ''}
    id="closePanel"
    onClick={e => {
      if ((e.target as Element).id == 'closePanel') {
        close();
      }
    }}
  >
    <Content className={isOpen ? 'show' : ''} id="slidingPanelContent">
      <Row justifyContent="flex-end" mb={[3, 5]}>
        <Button onClick={close}>
          <Icon icon={X} size={3} />
        </Button>
      </Row>

      {children}
    </Content>
  </Background>
);

export default SlidingPanel;
