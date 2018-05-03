import createApp from './app'

const { app, router } = createApp()

router.beforeResolve((to, from, next) => {
  const matched = router.getMatchedComponents(to)
  console.log(matched)
  const prevMatched = router.getMatchedComponents(from)
  console.log(prevMatched)
  next()
})

router.onReady(() => app.$mount('#app'))
