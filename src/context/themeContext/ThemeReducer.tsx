import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teel',
  },
  dividerColor: 'rgba(0,0,0,0.7)',
};

export const darkTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#5856D6',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'black',
    notification: 'teel',
  },
  dividerColor: 'rgba(0,0,0,0.7)',
};

export const ThemeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
    case 'set_dark_theme':
      return {...darkTheme};

    default:
      return state;
  }
};
