<template>
  <footer class="app-footer">
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
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© {{ currentYear }} AI智能体平台</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

// 计算当前年份
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.app-footer {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 20px 0 15px;
  color: rgba(255, 255, 255, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  margin-top: auto;
  position: relative;
  z-index: 2;
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
  gap: 20px;
}

.footer-brand {
  flex: 1;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 1.5rem;
}

.brand-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 15px;
  position: relative;
}

.footer-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.qrcode {
  display: flex;
  align-items: center;
}

.qrcode-container {
  text-align: center;
}

.qrcode-placeholder {
  width: 90px;
  height: 90px;
  background-color: #f5f5f5;
  margin: 0 auto 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.qrcode-placeholder:after {
  content: '🤖';
}

.footer-bottom {
  text-align: center;
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.footer-bottom p {
  margin: 0;
}

/* 添加动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app-footer {
  animation: fadeInUp 0.8s ease-out;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
    gap: 30px;
  }
  
  .footer-brand {
    max-width: 100%;
    text-align: center;
  }
  
  .footer-links {
    justify-content: center;
    gap: 30px;
  }
  
  .bottom-content {
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .app-footer {
    padding: 30px 0 15px;
  }
  
  .footer-section h4 {
    font-size: 0.95rem;
  }
  
  .footer-links a {
    font-size: 0.9rem;
  }
  
  .qrcode-placeholder {
    width: 80px;
    height: 80px;
  }
}
</style> 