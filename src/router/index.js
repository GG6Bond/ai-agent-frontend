import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '首页 - AI智能体平台',
      description: 'AI智能体平台提供AI旅游大师和AI超级智能体服务，满足您的各种AI对话需求'
    }
  },
  {
    path: '/travel-master',
    name: 'TravelMaster',
    component: () => import('../views/TravelMaster.vue'),
    meta: {
      title: 'AI旅游大师 - AI智能体平台',
      description: 'AI旅游大师是AI智能体平台的专业旅游顾问，帮你规划旅行路线，推荐景点美食，提供旅游建议'
    }
  },
  {
    path: '/super-agent',
    name: 'SuperAgent',
    component: () => import('../views/SuperAgent.vue'),
    meta: {
      title: 'AI超级智能体 - AI智能体平台',
      description: 'AI超级智能体是AI智能体平台的全能助手，能解答各类专业问题，提供精准建议和解决方案'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局导航守卫，设置文档标题
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router 