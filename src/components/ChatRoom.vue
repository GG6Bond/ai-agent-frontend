<template>
  <div class="chat-container">
    <!-- 聊天记录区域 -->
    <div class="chat-messages" ref="messagesContainer">
      <!-- 欢迎消息 -->
      <div v-if="messages.length === 0" class="welcome-message">
        <div class="welcome-card">
          <div class="welcome-icon">
            <div class="icon-circle">🤖</div>
          </div>
          <h3>AI智能助手</h3>
          <p>我是您的专属AI助手，随时为您提供帮助</p>
          <div class="feature-grid">
            <div class="feature-item">
              <span class="feature-icon">💬</span>
              <span>智能对话</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">⚡</span>
              <span>快速响应</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🔒</span>
              <span>安全可靠</span>
            </div>
          </div>
        </div>
      </div>
      
      <div v-for="(msg, index) in messages" :key="index" class="message-wrapper">
        <!-- AI消息 -->
        <div v-if="!msg.isUser" 
             class="message ai-message" 
             :class="[msg.type]">
          <div class="avatar ai-avatar">
            <AiAvatarFallback :type="aiType" />
          </div>
          <div class="message-bubble">
            <div class="message-content">
              {{ msg.content }}
              <span v-if="connectionStatus === 'connecting' && index === messages.length - 1" class="typing-indicator">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </span>
            </div>
            <div class="message-time">{{ formatTime(msg.time) }}</div>
          </div>
        </div>
        
        <!-- 用户消息 -->
        <div v-else class="message user-message" :class="[msg.type]">
          <div class="message-bubble">
            <div class="message-content">{{ msg.content }}</div>
            <div class="message-time">{{ formatTime(msg.time) }}</div>
          </div>
          <div class="avatar user-avatar">
            <div class="user-avatar-inner">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入区域 -->
    <div class="chat-input-area">
      <div class="input-container">
        <div class="input-wrapper">
          <textarea 
            v-model="inputMessage" 
            @keydown.enter.prevent="sendMessage"
            placeholder="输入您的消息..." 
            class="message-input"
            :disabled="connectionStatus === 'connecting'"
            rows="1"
          ></textarea>
          <button 
            @click="sendMessage" 
            class="send-btn"
            :disabled="connectionStatus === 'connecting' || !inputMessage.trim()"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="send-icon">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
        <div class="input-hint">
          <span>按 Enter 发送，Shift + Enter 换行</span>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick, watch, computed } from 'vue'
import AiAvatarFallback from './AiAvatarFallback.vue'

const props = defineProps({
  messages: {
    type: Array,
    default: () => []
  },
  connectionStatus: {
    type: String,
    default: 'disconnected'
  },
  aiType: {
    type: String,
    default: 'default'
  }
})

const emit = defineEmits(['send-message'])

const inputMessage = ref('')
const messagesContainer = ref(null)

// 发送消息
const sendMessage = () => {
  if (!inputMessage.value.trim()) return
  
  emit('send-message', inputMessage.value)
  inputMessage.value = ''
}

// 格式化时间
const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
}

// 自动滚动到底部
const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// 监听消息变化与内容变化，自动滚动
watch(() => props.messages.length, () => {
  scrollToBottom()
})

watch(() => props.messages.map(m => m.content).join(''), () => {
  scrollToBottom()
})

onMounted(() => {
  scrollToBottom()
})
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(135deg, #212C4A 0%, #212C4A 100%);
  position: relative;
  overflow: hidden;
}

.chat-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
  pointer-events: none;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  padding-bottom: 120px;
  position: relative;
  z-index: 1;
}

/* 欢迎消息 */
.welcome-message {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  padding: 20px;
}

.welcome-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  animation: fadeInUp 0.8s ease-out;
}

.welcome-icon {
  margin-bottom: 24px;
}

.icon-circle {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.welcome-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.welcome-card p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  line-height: 1.6;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 1.5rem;
}

.feature-item span:last-child {
  font-size: 0.85rem;
  font-weight: 500;
  color: white;
}

/* 消息样式 */
.message-wrapper {
  margin-bottom: 20px;
  animation: fadeInUp 0.4s ease-out;
}

.message {
  display: flex;
  align-items: flex-start;
  max-width: 85%;
  margin-bottom: 12px;
}

.user-message {
  margin-left: auto;
  flex-direction: row-reverse;
}

.ai-message {
  margin-right: auto;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 12px;
}

.user-avatar-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.user-avatar-inner svg {
  width: 20px;
  height: 20px;
}

.message-bubble {
  padding: 16px 20px;
  border-radius: 20px;
  position: relative;
  word-wrap: break-word;
  min-width: 120px;
  max-width: 100%;
}

.user-message .message-bubble {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border-bottom-right-radius: 6px;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
}

.ai-message .message-bubble {
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  border-bottom-left-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.message-content {
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;
  color: inherit;
}

.message-time {
  font-size: 11px;
  opacity: 0.7;
  margin-top: 8px;
  text-align: right;
  font-weight: 400;
}

/* 输入区域 */
.chat-input-area {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px;
  z-index: 10;
}

.input-container {
  max-width: 800px;
  margin: 0 auto;
}

.input-wrapper {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.message-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 12px 16px;
  font-size: 15px;
  line-height: 1.4;
  resize: none;
  min-height: 20px;
  max-height: 100px;
  font-family: inherit;
  color: #333;
}

.message-input::placeholder {
  color: #999;
  font-style: normal;
}

.send-btn {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  flex-shrink: 0;
}

.send-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #059669, #047857);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.send-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.send-btn:hover .send-icon {
  transform: translateX(2px);
}

.input-hint {
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
  font-weight: 400;
}

/* 打字指示器 */
.typing-indicator {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: currentColor;
  border-radius: 50%;
  animation: typing 1.4s infinite ease-in-out;
}

.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }
.dot:nth-child(3) { animation-delay: 0s; }

@keyframes typing {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

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

/* 滚动条样式 */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chat-messages {
    padding: 16px;
    padding-bottom: 100px;
  }
  
  .welcome-card {
    padding: 30px 20px;
  }
  
  .icon-circle {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }
  
  .welcome-card h3 {
    font-size: 1.5rem;
  }
  
  .feature-grid {
    gap: 12px;
  }
  
  .feature-item {
    padding: 12px 8px;
  }
  
  .input-wrapper {
    padding: 6px;
  }
  
  .message-input {
    padding: 10px 14px;
    font-size: 14px;
  }
  
  .send-btn {
    width: 44px;
    height: 44px;
  }
  
  .send-icon {
    width: 22px;
    height: 22px;
  }
}

@media (max-width: 480px) {
  .chat-messages {
    padding: 12px;
    padding-bottom: 90px;
  }
  
  .message {
    max-width: 90%;
  }
  
  .avatar {
    width: 36px;
    height: 36px;
    margin: 0 8px;
  }
  
  .message-bubble {
    padding: 12px 16px;
  }
  
  .message-content {
    font-size: 14px;
  }
  
  .welcome-card {
    padding: 24px 16px;
  }
  
  .icon-circle {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
  }
  
  .welcome-card h3 {
    font-size: 1.3rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  
  .feature-item {
    flex-direction: row;
    justify-content: center;
    padding: 8px 12px;
  }
  
  .chat-input-area {
    padding: 16px;
  }
  
  .input-wrapper {
    padding: 4px;
  }
  
  .message-input {
    padding: 8px 12px;
    font-size: 13px;
  }
  
  .send-btn {
    width: 40px;
    height: 40px;
  }
  
  .send-icon {
    width: 20px;
    height: 20px;
  }
}
</style> 