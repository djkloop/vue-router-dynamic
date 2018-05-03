export default = [
  {
    path: '/app',
    icon: 'disc',
    name: 'app',
    title: '应用管理',
    component_parent: 100,
    children: [
      {
        path: 'application',
        title: '应用管理',
        name: 'application',
        component_url: '/views/manager/app/application.vue'
      }, {
        path: 'config',
        title: '配置管理',
        name: 'app_config',
        component_url: '/views/manager/app/config.vue'
      }
    ]
  }
]
