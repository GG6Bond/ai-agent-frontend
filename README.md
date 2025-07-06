# AI智能体平台前端

<div align="center">

![Vue](https://img.shields.io/badge/Vue-3.2.47-4FC08D?style=for-the-badge&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**探索AI的无限可能**

[在线演示](#) | [问题反馈](mailto:lpz5586@gmail.com) | [QQ交流群](https://qm.qq.com/cgi-bin/qm/qr?k=xxx&jump_from=webapi&authKey=xxx)

</div>

## 📖 项目简介

AI智能体平台是一个基于Vue3开发的现代化AI应用平台，提供多种专业AI智能体服务。平台采用实时流式对话技术，为用户提供流畅、智能的AI交互体验。

### 🎯 核心功能

- **AI旅游大师** ✈️ - 智能旅游顾问，提供个性化旅行规划
- **AI超级智能体** 🤖 - 全能型AI助手，解答各类专业问题
- **实时流式对话** 💬 - 基于SSE技术的实时消息流
- **现代化UI设计** 🎨 - 赛博朋克风格界面，提供沉浸式体验

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/your-username/ai-agent-frontend.git
cd ai-agent-frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

### Docker部署

```bash
# 构建Docker镜像
docker build -t ai-agent-frontend .

# 运行容器
docker run -p 3000:80 ai-agent-frontend
```

## 🏗️ 技术架构

### 前端技术栈

- **Vue 3** - 渐进式JavaScript框架
- **Vue Router 4** - 官方路由管理器
- **Vite** - 下一代前端构建工具
- **Axios** - HTTP客户端
- **SSE** - Server-Sent Events实时通信

### 项目结构

```
ai-agent-frontend/
├── public/                 # 静态资源
├── src/
│   ├── api/               # API接口封装
│   ├── assets/            # 静态资源
│   ├── components/        # 公共组件
│   │   ├── ChatRoom.vue  # 聊天室组件
│   │   └── ...
│   ├── router/            # 路由配置
│   ├── views/             # 页面组件
│   │   ├── Home.vue      # 首页
│   │   ├── TravelMaster.vue  # AI旅游大师
│   │   └── SuperAgent.vue    # AI超级智能体
│   ├── App.vue           # 根组件
│   └── main.js           # 入口文件
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 配置说明

### 环境变量

创建 `.env` 文件配置后端API地址：

```env
VITE_API_BASE_URL=http://localhost:8123
```

### 后端接口

项目依赖以下后端接口：

| 接口路径 | 描述 | 方法 |
|---------|------|------|
| `/api/ai/love_app/chat/sse` | AI旅游大师聊天接口 | SSE |
| `/api/ai/manus/chat` | AI超级智能体聊天接口 | POST |

## 🎨 功能特性

### AI旅游大师 ✈️

- **智能旅行规划** - 根据用户需求制定个性化旅行方案
- **景点推荐** - 推荐热门景点和隐藏宝藏
- **美食指南** - 提供当地特色美食推荐
- **交通建议** - 优化出行路线和交通方式
- **预算规划** - 智能预算分配和成本控制

### AI超级智能体 🤖

- **多领域问答** - 涵盖科技、文化、历史等多个领域
- **专业建议** - 提供专业的技术和业务建议
- **问题分析** - 深度分析用户问题并提供解决方案
- **知识科普** - 通俗易懂的知识普及和解释

### 用户体验

- **实时对话** - 基于SSE的流式响应，实时显示AI回复
- **会话管理** - 自动生成会话ID，支持多会话切换
- **响应式设计** - 适配各种设备屏幕尺寸
- **现代化UI** - 赛博朋克风格界面，提供沉浸式体验

## 📱 界面预览

### 首页
![首页预览](docs/images/home.png)

### AI旅游大师
![AI旅游大师预览](docs/images/travel-master.png)

### AI超级智能体
![AI超级智能体预览](docs/images/super-agent.png)

## 🛠️ 开发指南

### 添加新的AI智能体

1. 在 `src/views/` 目录下创建新的页面组件
2. 在 `src/router/index.js` 中添加路由配置
3. 在 `src/api/index.js` 中添加对应的API接口
4. 在首页 `src/views/Home.vue` 中添加新的应用卡片

### 自定义样式

项目使用CSS变量进行主题定制，主要变量定义在 `src/style.css` 中：

```css
:root {
  --neon-blue: #00f0ff;
  --neon-purple: #9000ff;
  --neon-pink: #ff00d4;
  --cyber-black: #0a0a12;
  --cyber-dark: #111122;
  --cyber-light: #edf7ff;
}
```

## 🚀 部署

### 生产环境部署

```bash
# 构建生产版本
npm run build

# 使用Nginx部署
cp -r dist/* /var/www/html/
```

### Nginx配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # API代理配置
    location /api/ {
        proxy_pass http://localhost:8123;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发规范

- 遵循 Vue 3 组合式API规范
- 使用 ESLint 进行代码检查
- 提交信息使用约定式提交格式
- 新功能需要添加相应的测试用例

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- **邮箱**: lpz5586@gmail.com
- **QQ**: 738881948
- **项目地址**: [GitHub Repository](https://github.com/your-username/ai-agent-frontend)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和用户！

---

<div align="center">

**如果这个项目对您有帮助，请给我们一个 ⭐️**

</div>
