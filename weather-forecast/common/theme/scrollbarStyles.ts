import { ThemeMode } from './themeModes';

const getScrollbarStyles = (mode: ThemeMode) => {
  return {
    '*::-webkit-scrollbar': {
      width: '12px',
    },
    '*::-webkit-scrollbar-thumb': {
      borderRadius: '6px',
      backgroundColor: '#0959AA',
      border: `3px solid ${mode === ThemeMode.LIGHT ? '#f0f0f0' : '#2b2b2b'}`,
    },
  };
};
export default getScrollbarStyles;
