import { createApp as ViteSPA } from 'vue';
import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import routes from './route';

// vite-ssg must be export `createApp`

console.log(process.argv);
export const createApp =
  process.env.NODE_ENV === 'production'
    ? ViteSSG(
        // the root component
        App,
        // vue-router options
        { routes },
        // function to have custom setups
        ({ app, router, routes, isClient, initialState }) => {
          // install plugins etc.
        }
      )
    : ViteSPA(App).mount('#app');
