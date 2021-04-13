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
    redirect: "/auth/login",
    children: [
      { path: '/auth/login', component: () => import('pages/auth/login.vue') },
      { path: '/auth/password_reset', component: () => import('pages/auth/password_reset.vue') }
    ]
  },

  {
    path: '/admin',
    component: () => import('src/layouts/AdminLayout.vue'),
    redirect: "/admin/dashboard",
    meta: {
      requiresAuth: true
    },
    children: [
      { path: '/admin/dashboard', component: () => import('pages/admin/dashboard.vue') },
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
