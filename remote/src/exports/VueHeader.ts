import { createApp } from 'vue';
import VueHeader from '../components/VueHeader.vue';

// const mount = (el: HTMLDivElement) => {
// 	createApp(VueHeader).mount(el);
// };
// export default mount;

const func = (component: any) => {
	return (el: HTMLDivElement) => {
		createApp(component).mount(el);
	};
};
const header = func(VueHeader);

export { header };
