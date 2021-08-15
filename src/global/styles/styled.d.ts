// CORE

// COMMUNITY
import 'styled-components';

// MINE
import theme from './theme';


declare module 'styled-components'{
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType{};
}