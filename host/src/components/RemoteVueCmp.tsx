import React, { useEffect, useRef } from 'react';
import { header } from 'remote/VueHeader';
const RemoteVueCmp = () => {
	const ref = useRef(null);
	useEffect(() => header(ref.current), []);
	return <div ref={ref}></div>;
};

export default RemoteVueCmp;
