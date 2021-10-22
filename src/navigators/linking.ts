import screens from './screens';
const config = {
  screens: {
    [screens.mainTab.home]: 'hello',
    [screens.mainTab.notification]: 'world',
  },
};

const linking = {
  prefixes: ['nissispace://app'],
  config,
};

export default linking;
