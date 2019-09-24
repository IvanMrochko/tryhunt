import * as React from 'react';
import { IconButtonProps } from './icon-button.props'
import * as classNames from "classnames";

const IconButton: React.SFC<IconButtonProps> = ({
	styles,
	children,
	className,
	theme,
	...props
}) => {
	/**
	 * Renders IconButton
	 */
	return (
		<button {...props as any} className={classNames(
			className,
			styles.iconButton,
			styles["iconButton" + theme.charAt(0).toUpperCase() + theme.substring(1)])}>
			{children}
		</button>
	);
}

IconButton.defaultProps = {
	theme: "primary",
	type: "button",
	className: "",
}

export { IconButton }