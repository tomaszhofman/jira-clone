import { FunctionComponent } from 'react';

import SvgCode from '../assets/icons/Code';
import SvgSettings from '../assets/icons/Settings';
import SvgShortcut from '../assets/icons/Shortcut';
import SvgSubprojectPage from '../assets/icons/subprojectPage';
import SvgTable from '../assets/icons/Table';
import SvgTimetable from '../assets/icons/Timetable';

export type Link = {
  name: string;
  to?: string;
  icon: FunctionComponent;
};

export const SIDEBAR_LINKS: Link[] = [
  {
    name: 'Harmongoram',
    to: '/harmonogram',
    icon: SvgTimetable,
  },
  {
    name: 'Tablica',
    to: '/harmonogram',
    icon: SvgTable,
  },
  {
    name: 'Kod',
    icon: SvgCode,
  },
  {
    name: 'Strony projektów',
    icon: SvgSubprojectPage,
  },
  {
    name: 'Dodaj skrót',
    to: '/harmonogram',
    icon: SvgShortcut,
  },
  {
    name: 'Ustawienia projektu',
    to: '/harmonogram',
    icon: SvgSettings,
  },
];
