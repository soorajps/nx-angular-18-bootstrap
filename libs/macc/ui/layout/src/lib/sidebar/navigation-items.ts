import {
  bellFill,
  cash,
  columnsGap,
  file,
  files,
  globe,
  people,
  personBoundingBox,
  tools,
} from 'ngx-bootstrap-icons';

export default [
  {
    label: 'Dashboard',
    path: '',
    icon: columnsGap,
    active: true,
  },
  {
    label: 'Account',
    path: '',
    icon: personBoundingBox,
    active: false,
  },
  {
    label: 'Finance',
    path: '',
    icon: cash,
    active: false,
  },
  {
    label: 'Network',
    path: '',
    icon: globe,
    active: false,
  },
  {
    label: 'Employee',
    path: '',
    icon: people,
    active: false,
  },
  {
    label: 'Reports',
    path: '',
    icon: files,
    active: false,
  },
  {
    label: 'Notifications',
    path: '',
    icon: bellFill,
    active: false,
  },
  {
    label: 'Tools',
    path: '',
    icon: tools,
    active: false,
  },
];
