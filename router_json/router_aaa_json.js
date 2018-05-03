export default = [
  {
    path: '/operation',
    icon: 'ios-pie',
    name: 'operation',
    title: '广告运营',
    component_parent: 101,
    children: [
      {
        path: 'adGroup',
        title: '广告组管理',
        name: 'ad_group_manager',
        component_url: '/views/manager/adGroup/index.vue'
      }, {
        path: 'cpcAdLiveData',
        title: 'cpc广告实时数据',
        name: 'cpc_ad_live_data',
        component_url: '/views/manager/operation/cpcAdLiveData/index.vue'
      }
    ]
  }
]
