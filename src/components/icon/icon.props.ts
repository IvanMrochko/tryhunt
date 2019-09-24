import { WithStyles } from '@shared';
import { IIconScss } from './icon.scss';

type IconProps = {
  /*
  * Styles for icon
  * */
  className?: string;
  /*
  * Color set
  * */
  fill?: string;
  /*
  * Size, width and height set
  * */
  size?: string;
  width?: string;
  height?: string;
  /*
  * Text if icon is not found
  * */
  alt?: string;
  /*
  * Click handler
  * */
  onClick?: any;
};

export { IconProps };
