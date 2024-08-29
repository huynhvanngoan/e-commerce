export default [
    {
      path: '/vendor',
      name: 'vendor-dashboard',
      file: '~/pages/vendors/index.vue',
      middleware: ['vendor']
    },
    {
      path: '/vendor/products',
      name: 'vendor-products',
      file: '~/pages/vendors/products/index.vue',
      middleware: ['vendor']
    },
    {
      path: '/vendor/products/create',
      name: 'vendor-product-create',
      file: '~/pages/vendors/products/create.vue',
      middleware: ['vendor']
    },
    {
      path: '/vendor/products/:id/edit',
      name: 'vendor-product-edit',
      file: '~/pages/vendors/products/productId/edit.vue',
      middleware: ['vendor']
    }, 
    {
      path: '/vendor/categories',
      name: 'vendor-categories',
      file: '~/pages/vendors/categories/index.vue',
      middleware: ['vendor']
    },
    {
      path: '/vendor/categories/create',
      name: 'vendor-product-create',
      file: '~/pages/vendors/categories/create.vue',
      middleware: ['vendor']
    },
    {
      path: '/vendor/categories/:id/edit',
      name: 'vendor-product-edit',
      file: '~/pages/vendors/categories/categoryId/edit.vue',
      middleware: ['vendor']
    },
    {
      path: '/vendor/orders',
      name: 'vendor-orders',
      file: '~/pages/vendors/orders/index.vue',
      middleware: ['vendor']
    },
    {
      path: '/vendor/orders/:id',
      name: 'vendor-order-detail',
      file: '~/pages/vendors/orders/orderDetails.vue',
      middleware: ['vendor']
    },
    {
      path: '/vendor/analytics',
      name: 'vendor-analytics',
      file: '~/pages/vendors/analytics.vue',
      middleware: ['vendor']
    }
  ]