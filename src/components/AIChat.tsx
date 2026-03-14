import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Bot, User, X } from 'lucide-react';
import { guidelineData } from '../data/guideline';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIChat({ isOpen, onClose, lang }: { isOpen: boolean; onClose: () => void; lang: 'th' | 'en' }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Prepare context from guideline data
      const context = guidelineData.map(section => 
        `[${section.title.en} / ${section.title.th}]\n${section.content.en}\n${section.content.th}`
      ).join('\n\n');

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage, context }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.answer }]);
    } catch (error: any) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: lang === 'th' ? `ขออภัย เกิดข้อผิดพลาด: ${error.message}` : `Sorry, an error occurred: ${error.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col z-50 sm:bottom-6 sm:right-6" style={{ height: '500px', maxHeight: '80vh' }}>
      {/* Header */}
      <div className="bg-emerald-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot size={20} />
          <h3 className="font-semibold">{lang === 'th' ? 'ถามผู้ช่วย AI' : 'Ask AI Assistant'}</h3>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            <Bot size={40} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">
              {lang === 'th' 
                ? 'ถามคำถามเกี่ยวกับคู่มือการทำงานได้เลย เช่น "ชิพเช้าต้องทำอะไรบ้าง?"' 
                : 'Ask any question about the guideline, e.g., "What should I do first in the morning?"'}
            </p>
          </div>
        )}
        
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Bot size={16} className="text-emerald-600" />
              </div>
            )}
            <div 
              className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                msg.role === 'user' 
                  ? 'bg-emerald-600 text-white rounded-tr-none' 
                  : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <User size={16} className="text-gray-600" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <Bot size={16} className="text-emerald-600" />
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center">
              <Loader2 size={16} className="animate-spin text-emerald-600" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100">
        <div className="flex gap-2 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={lang === 'th' ? 'พิมพ์คำถาม...' : 'Type your question...'}
            className="flex-1 bg-gray-100 rounded-full pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            disabled={!input.trim() || isLoading}
            className="absolute right-1 top-1 bottom-1 w-8 flex items-center justify-center bg-emerald-600 text-white rounded-full disabled:opacity-50 disabled:bg-gray-400 transition-colors"
          >
            <Send size={14} />
          </button>
        </div>
      </form>
    </div>
  );
}
