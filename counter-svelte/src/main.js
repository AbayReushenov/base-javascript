import App from './App.svelte';
import './main.css';

const app = new App({
	target: document.body,
	props: {
		name: 'Counter from svelte',
    initialCount: 0,
	}
});

export default app;
