import React from 'react';
import SvgHelp from 'src/shared/assets/icons/Help';
import SvgNotification from 'src/shared/assets/icons/Notification';
import SvgSettings from 'src/shared/assets/icons/Settings';
import { Input } from 'src/shared/components/Input';
import TooltipButton from 'src/shared/components/TooltipButton/TooltipButton';
import styled from 'styled-components';

import { color } from '../../shared/utils/styles';
import { Navigation } from '../Navigation';

const PHOTO_URL =
  'https://i1.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/TH-4.png?ssl=1';

const Bar = styled.div`
  ::after {
    position: absolute;
    content: '';
    height: 0.4rem;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(9, 30, 66, 0.13) 0%,
      rgba(9, 30, 66, 0.13) 25%,
      rgba(9, 30, 66, 0.08) 25.01%,
      rgba(9, 30, 66, 0) 100%
    );
  }
`;

const Wrapper = styled.header`
  min-height: 5.6rem;
  color: ${color.borderLight};
  width: 100vw;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 1.4rem;
`;

const OtherOptions = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin-right: 0.4rem;
`;

const TopBar = () => {
  return (
    <Bar>
      <Wrapper>
        <Navigation />
        <OtherOptions>
          <StyledInput placeholder="Szukaj" />
          <TooltipButton label="Powiadomienia" icon={<SvgNotification />} />
          <TooltipButton label="Pomoc" icon={<SvgHelp />} />
          <TooltipButton label="Ustawienia" icon={<SvgSettings />} />
          <TooltipButton label="Twój profil i ustawienia" photo={PHOTO_URL} />
        </OtherOptions>
      </Wrapper>
    </Bar>
  );
};

export default TopBar;
