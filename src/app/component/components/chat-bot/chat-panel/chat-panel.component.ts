import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../../../service/gemini.service';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

@Component({
  selector: 'app-chat-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-panel.component.html',
  styleUrl: './chat-panel.component.css'
})
export class ChatPanelComponent {

  @Output() close = new EventEmitter<void>();

  messages: ChatMessage[] = [];

  sendSound = new Audio('assets/sounds/send.mp3');
  receiveSound = new Audio('assets/sounds/receive.mp3');
  constructor(private geminiService: GeminiService) {
  }

  ngOnInit() {
    this.messages.push({
      role: 'model',
      text: "Hello! I'm here to provide information about Santhosh Kumar S. Please feel free to ask any profile-related questions."
    });
  }

  newMessageText: string = '';

  async sendMsg(text: string) {
    if (!text.trim()) return;
    const userMessage: ChatMessage = { role: 'user', text };
    this.messages.push(userMessage);
    this.geminiService.sendMessage(this.messages.slice(0, -1), text).subscribe({
      next: (chatResponse: any) => {
        if (chatResponse.statusCode
          == 0) {
          const botResponse =
            chatResponse?.responseContent?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
          this.messages.push({ role: 'model', text: botResponse });
          this.scrollToBottom();
        } else {
          this.messages.push({
            role: 'model',
            text: "⚠️ Something went wrong. Try again."
          });
          this.scrollToBottom();
        }
      }
    });
    this.newMessageText = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      const box = document.getElementById('messages');
      if (box) box.scrollTop = box.scrollHeight;
    }, 50);
  }
}