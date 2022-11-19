import React from 'react';
import ReactDOM from 'react-dom';
import ReactBtn, { Props } from '../components/ReactBtn';

const mount = (el: HTMLDivElement, props: Props) => {
	ReactDOM.render(<ReactBtn {...props} />, el);
};

export default mount;
