import React, { ReactComponentElement } from 'react';
export type Props = {
	text?: string;
	color?: string;
	onClick?: (...args: any[]) => void;
};
const ReactBtn = (props: Props) => {
	return (
		<button
			onClick={props.onClick}
			className="p-5"
			style={{ backgroundColor: props.color, color: '#fff' }}
		>
			{props.text || 'React Btn'}
		</button>
	);
};

export default ReactBtn;
