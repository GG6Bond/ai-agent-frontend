<template>
  <div class="home-container">
    <div class="header">
      <div class="glitch-wrapper">
        <h1 class="glitch-title">AI智能体平台</h1>
      </div>
      <p class="subtitle">/ 探索AI的无限可能 /</p>
      <div class="cyber-line"></div>
    </div>
    
    <div class="apps-container">
      <div class="app-card" @click="navigateTo('/travel-master')">
        <div class="card-glow"></div>
        <div class="app-icon travel-icon">✈️</div>
        <div class="app-info">
          <div class="app-title">AI旅游大师</div>
          <div class="app-desc">智能旅游顾问，帮你规划完美旅行</div>
        </div>
        <div class="app-button">
          <span class="btn-text">立即体验</span>
          <span class="btn-icon">→</span>
        </div>
      </div>
      
      <div class="app-card" @click="navigateTo('/super-agent')">
        <div class="card-glow"></div>
        <div class="app-icon robot-icon">🤖</div>
        <div class="app-info">
          <div class="app-title">AI超级智能体</div>
          <div class="app-desc">全能型AI助手，解决各类专业问题</div>
        </div>
        <div class="app-button">
          <span class="btn-text">立即体验</span>
          <span class="btn-icon">→</span>
        </div>
      </div>
    </div>
    
    <div class="cyber-circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>
    
    <!-- 合并的底部信息 -->
    <div class="unified-footer">
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <div class="brand-logo">
              <span class="logo-icon">🤖</span>
              <span class="brand-text">AI智能体平台</span>
            </div>
          </div>
          
          <div class="footer-links">
            <a href="#" class="footer-link">用户协议</a>
            <a href="#" class="footer-link">隐私政策</a>
            <a href="#" class="footer-link">联系我们</a>
          </div>
          
          <div class="footer-copyright">
            <span class="copyright-text">© 2024</span>
          </div>
          
          <div class="contact-info">
            <div class="contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor" class="contact-icon">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:lpz5586@gmail.com" class="contact-link">lpz5586@gmail.com</a>
            </div>
            <div class="contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor" class="contact-icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span class="contact-text">QQ: 738881948</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

// 设置页面标题和元数据
useHead({
  title: 'AI智能体平台 - 首页',
  meta: [
    {
      name: 'description',
      content: 'AI智能体平台提供AI旅游大师和AI超级智能体服务，满足您的各种AI对话需求'
    },
    {
      name: 'keywords',
      content: 'AI智能体,AI应用,AI旅游大师,AI助手,智能对话,AI超级智能体,首页'
    }
  ]
})

const router = useRouter()

const navigateTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap');

/* 全局样式变量 */
:root {
  --neon-blue: #00f0ff;
  --neon-purple: #9000ff;
  --neon-pink: #ff00d4;
  --cyber-black: #0a0a12;
  --cyber-dark: #111122;
  --cyber-light: #edf7ff;
}

.home-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
  overflow: hidden;
}

.home-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
  pointer-events: none;
}

/* 赛博朋克风格标题 */
.header {
  padding: 80px 20px 60px;
  text-align: center;
  background-color: transparent;
  position: relative;
  z-index: 2;
}

.glitch-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.glitch-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 30px rgba(255, 255, 255, 0.4);
  letter-spacing: 3px;
  position: relative;
  animation: glitch 3s infinite;
  margin-bottom: 30px;
}

.glitch-title::before,
.glitch-title::after {
  content: 'AI智能体平台';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.glitch-title::before {
  color: var(--neon-pink);
  z-index: -1;
  animation: glitch-anim 2s infinite;
}

.glitch-title::after {
  color: var(--neon-blue);
  z-index: -2;
  animation: glitch-anim-2 3s infinite;
}

.subtitle {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 30px;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 300;
}

.cyber-line {
  height: 3px;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  position: relative;
  border-radius: 2px;
}

.cyber-line::before,
.cyber-line::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.6);
}

.cyber-line::before {
  left: 20%;
}

.cyber-line::after {
  right: 20%;
}

.apps-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  flex: 1;
  position: relative;
  z-index: 2;
}

.app-card {
  width: 340px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  padding: 30px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgba(var(--neon-blue-rgb), 0.1) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}

.app-card:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 
    0 15px 50px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.4);
}

.app-card:hover .card-glow {
  opacity: 1;
}

.app-icon {
  font-size: 4rem;
  margin-bottom: 25px;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}

.travel-icon {
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  box-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.robot-icon {
  background: linear-gradient(135deg, #00b2ff, #4f56ff);
  box-shadow: 0 0 20px rgba(0, 178, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.app-info {
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
}

.app-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  margin-bottom: 12px;
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
}

.app-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.app-button {
  background: linear-gradient(90deg, #10a37f, #0d8a6b);
  color: white;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s;
  margin-top: auto;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(16, 163, 127, 0.3);
}

.app-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.7s;
}

.app-button:hover {
  box-shadow: 0 0 15px rgba(16, 163, 127, 0.7);
  transform: scale(1.05);
}

.app-button:hover::before {
  left: 100%;
}

.btn-text {
  margin-right: 8px;
  letter-spacing: 1px;
}

.btn-icon {
  font-size: 1.2rem;
  transition: transform 0.3s;
}

.app-button:hover .btn-icon {
  transform: translateX(4px);
}

/* 背景圆圈动画 */
.cyber-circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
  animation: float 15s infinite alternate;
}

.circle-2 {
  width: 500px;
  height: 500px;
  bottom: -200px;
  left: -200px;
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-pink));
  animation: float 20s infinite alternate-reverse;
}

.circle-3 {
  width: 200px;
  height: 200px;
  top: 40%;
  right: 15%;
  background: linear-gradient(135deg, var(--neon-pink), var(--neon-blue));
  animation: float 12s infinite alternate;
}

/* 动画效果 */
@keyframes float {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(50px, 50px) rotate(10deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.app-icon {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes glitch {
  0% {
    text-shadow: 
      0 0 5px rgba(0, 240, 255, 0.7),
      0 0 10px rgba(0, 240, 255, 0.5);
  }
  50% {
    text-shadow: 
      0 0 5px rgba(0, 240, 255, 0.7),
      0 0 10px rgba(0, 240, 255, 0.5),
      0 0 20px rgba(0, 240, 255, 0.3);
  }
  100% {
    text-shadow: 
      0 0 5px rgba(0, 240, 255, 0.7),
      0 0 10px rgba(0, 240, 255, 0.5);
  }
}

@keyframes glitch-anim {
  0%, 100% {
    transform: translate(0);
  }
  20% {
    transform: translate(-5px, 5px);
  }
  40% {
    transform: translate(-5px, -5px);
  }
  60% {
    transform: translate(5px, 5px);
  }
  80% {
    transform: translate(5px, -5px);
  }
}

@keyframes glitch-anim-2 {
  0%, 100% {
    transform: translate(0);
  }
  20% {
    transform: translate(3px, -3px);
  }
  40% {
    transform: translate(3px, 3px);
  }
  60% {
    transform: translate(-3px, -3px);
  }
  80% {
    transform: translate(-3px, 3px);
  }
}

/* 合并的底部信息样式 */
.unified-footer {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px 0;
  margin-top: auto;
  position: relative;
  z-index: 3;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.logo-icon {
  font-size: 1.3rem;
}

.brand-text {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  font-family: 'Orbitron', sans-serif;
}

.footer-links {
  display: flex;
  gap: 15px;
  flex-shrink: 0;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  padding: 4px 8px;
  border-radius: 12px;
  position: relative;
}

.footer-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.footer-copyright {
  flex-shrink: 0;
}

.copyright-text {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  font-family: 'Orbitron', sans-serif;
}

.contact-info {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-shrink: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.contact-item:hover {
  color: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
}

.contact-icon {
  width: 12px;
  height: 12px;
  opacity: 0.8;
}

.contact-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--neon-blue);
}

.contact-text {
  color: rgba(255, 255, 255, 0.8);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    padding: 60px 20px 40px;
  }
  
  .glitch-title {
    font-size: 2.5rem;
    margin-bottom: 25px;
  }
  
  .subtitle {
    font-size: 1rem;
    margin-bottom: 25px;
  }
  
  .apps-container {
    gap: 30px;
    margin: 40px auto;
  }
  
  .app-card {
    width: 100%;
    max-width: 420px;
    padding: 25px;
  }
  
  .footer-main {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  .footer-brand {
    max-width: 100%;
  }
  
  .footer-links {
    justify-content: center;
    gap: 20px;
  }
  
  .contact-info {
    gap: 20px;
  }
  
  .app-icon {
    font-size: 3.5rem;
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 50px 15px 40px;
  }
  
  .glitch-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .subtitle {
    font-size: 0.9rem;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }
  
  .apps-container {
    margin: 30px auto;
    padding: 0 15px;
  }
  
  .app-card {
    padding: 20px;
  }
  
  .app-icon {
    font-size: 3rem;
    margin-bottom: 20px;
    width: 70px;
    height: 70px;
  }
  
  .app-title {
    font-size: 1.4rem;
  }
  
  .app-desc {
    font-size: 0.9rem;
  }
  
  .circle-1, .circle-2, .circle-3 {
    opacity: 0.1;
  }
  
  .unified-footer {
    padding: 12px 0;
  }
  
  .footer-content {
    padding: 0 15px;
  }
  
  .footer-main {
    gap: 12px;
  }
  
  .footer-links {
    gap: 15px;
  }
  
  .contact-info {
    gap: 12px;
  }
  
  .contact-item {
    font-size: 10px;
  }
  
  .contact-icon {
    width: 10px;
    height: 10px;
  }
}
</style> 