import {} from 'styled-components';

import DarkTheme from '../themes/dark';

type FreyaTheme = typeof DarkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends FreyaTheme {}
}
