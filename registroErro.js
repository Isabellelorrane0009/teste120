/* Assistente de Treinamentos - Chat Widget */
.chat-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,.55);
  display: none; align-items: center; justify-content: center;
  z-index: 9999; font-family: inherit;
}
.chat-overlay.open { display: flex; }

.chat-window {
  width: min(420px, 92vw); height: min(600px, 90vh);
  background: #fff; border-radius: 14px; box-shadow: 0 20px 60px rgba(0,0,0,.3);
  display: flex; flex-direction: column; overflow: hidden;
}

.chat-header {
  background: #c0392b; color: #fff; padding: 14px 16px;
  display: flex; align-items: center; gap: 10px;
}
.chat-header .avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(255,255,255,.18); display: grid; place-items: center;
  font-size: 18px;
}
.chat-header .meta { flex: 1; }
.chat-header .meta strong { display: block; font-size: 15px; }
.chat-header .meta small { opacity: .85; font-size: 12px; }
.chat-header .close {
  background: transparent; border: 0; color: #fff; font-size: 22px;
  cursor: pointer; line-height: 1;
}

.chat-body {
  flex: 1; padding: 16px; overflow-y: auto;
  background: #f7f7f8; display: flex; flex-direction: column; gap: 10px;
}

.msg { max-width: 85%; padding: 10px 12px; border-radius: 12px;
  font-size: 14px; line-height: 1.4; white-space: pre-wrap; word-wrap: break-word; }
.msg.bot { background: #fff; color: #222; border: 1px solid #e5e5e5;
  align-self: flex-start; border-bottom-left-radius: 4px; }
.msg.user { background: #c0392b; color: #fff;
  align-self: flex-end; border-bottom-right-radius: 4px; }
.msg.tool { align-self: center; background: #eef; color: #335;
  font-size: 12px; padding: 6px 10px; border-radius: 8px; font-family: monospace; }

.typing { display: inline-flex; gap: 4px; }
.typing span { width: 6px; height: 6px; background: #999; border-radius: 50%;
  animation: blink 1.2s infinite; }
.typing span:nth-child(2) { animation-delay: .2s; }
.typing span:nth-child(3) { animation-delay: .4s; }
@keyframes blink { 0%,80%,100%{opacity:.2} 40%{opacity:1} }

.chat-footer {
  display: flex; gap: 8px; padding: 10px; border-top: 1px solid #eee; background: #fff;
}
.chat-footer input {
  flex: 1; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px;
  font-size: 14px; outline: none;
}
.chat-footer input:focus { border-color: #c0392b; }
.chat-footer button {
  background: #c0392b; color: #fff; border: 0; padding: 0 16px;
  border-radius: 8px; cursor: pointer; font-weight: 600;
}
.chat-footer button:disabled { opacity: .5; cursor: not-allowed; }
