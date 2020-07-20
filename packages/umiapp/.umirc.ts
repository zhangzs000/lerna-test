import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: false, path: '/', component: '@/layouts/index',
      routes: [
        { exact: true, path: '/index', component: '@/pages/index' },
        {
          path: '/adminList',
          component: '@/pages/layouts',
          routes: [
            { path: '/adminList/list', component: '@/pages/list' },
            { path: '/adminList/admin', component: '@/pages/admin' },
          ],
        },
        { exact: true, path: '/login', component: '@/pages/login' },
        { exact: true, path: '/user', component: '@/pages/user',wrappers: [
              '@/components/wrappers/auth.tsx',
            ],
        },
      ],
    }
  ],
});
