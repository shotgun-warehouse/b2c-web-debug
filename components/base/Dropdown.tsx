import React, { useState, useRef, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Column, Row } from 'components/base/Layout';
import { ButtonWithIcon } from 'components/base/Button';
import { capitalize } from 'lodash';
import useOnClickOutside from 'utils/hooks/useOnClickOutside';
import { ChevronRight } from 'react-feather';

const DropdownList = styled(Column)`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  height: 0;
  top: 100%;
  border-radius: 4px;
  &.show {
    visibility: visible;
    opacity: 1;
    height: auto;
  }
`;

const borderBottom = css`
  border-bottom: rgba(255, 255, 255, 0.1) 1px solid;
`;

interface IDropdownItem {
  id: string;
  name: string;
  children?: ReactNode;
}
export interface DropdownStyleProps {
  align?: 'left' | 'right';
  noHeader?: boolean;
}
interface DropdownProps extends DropdownStyleProps {
  header?: ReactNode;
  list: IDropdownItem[];
  onSelectId?: (id: string) => void;
}
const Dropdown = ({
  header,
  list,
  onSelectId,
  align = 'left',
  noHeader = false,
}: DropdownProps) => {
  // Dropdown list is expanded by default if there is no header
  const [isOpen, setIsOpen] = useState(noHeader);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggle = () => {
    if (isOpen) {
      setSelectedId(null);
    }
    setIsOpen(!isOpen);
  };
  const close = () => {
    setSelectedId(null);
    setIsOpen(false);
  };

  const selectItem = (id: string) => {
    setSelectedId(id);
    onSelectId && onSelectId(id);
  };

  // Close dropdown on click outside component
  const ref = useRef();
  useOnClickOutside(ref, close);

  const selectedItem = list.find(c => c.id === selectedId);

  return (
    <Column ref={ref} style={{ position: 'relative' }}>
      {!noHeader && (
        <Row onClick={toggle} style={{ cursor: 'pointer' }}>
          {header}
        </Row>
      )}

      <DropdownList
        className={isOpen ? 'show' : ''}
        bg="blues.veryDark"
        style={align === 'left' ? { left: 0 } : { right: 0 }}
      >
        {(selectedItem && selectedItem.children) || (
          <Column>
            {list.map((c, index) => (
              <Row
                key={c.id}
                color="white"
                css={index < list.length - 1 ? borderBottom : css``}
                px={3}
                py={2}
                onClick={() => {
                  selectItem(c.id);
                  if (!c.children) {
                    close();
                  }
                }}
              >
                <ButtonWithIcon
                  color="white"
                  fontWeight={0}
                  rightIcon={c.children ? ChevronRight : undefined}
                >
                  {capitalize(c.name)}
                </ButtonWithIcon>
              </Row>
            ))}
          </Column>
        )}
      </DropdownList>
    </Column>
  );
};

export default Dropdown;
