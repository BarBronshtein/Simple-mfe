import React from 'react';
import ReactDOM from 'react-dom';
import RemoteVueCmp from './components/RemoteVueCmp';
('./components/RemoteVueCmp');
import './index.scss';

const App = () => (
	<div className="mt-10 text-3xl mx-auto max-w-6xl">
		<div>Name: host</div>
		<div>Framework: react</div>
		<div>Language: TypeScript</div>
		<div>CSS: Tailwind</div>
		<RemoteVueCmp />
	</div>
);
ReactDOM.render(<App />, document.getElementById('app'));
