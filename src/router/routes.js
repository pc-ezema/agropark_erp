const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/welcome.vue') }
    ]
  },

  {
    path: '/auth',
    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/auth/login.vue') },
      { path: '/password_reset', component: () => import('pages/auth/password_reset.vue') }
    ]
  },

  {
    path: '/admin',
    component: () => import('src/layouts/AdminLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/admin/dashboard.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/page_not_found.vue')
  }
]

export default routes
