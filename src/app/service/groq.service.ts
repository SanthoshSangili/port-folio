import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

// 05-12-2025 Chat Bot Implemented

export interface ChatMessage {
  role: 'user' | 'system';
  userMsg: string;
}

@Injectable({ providedIn: 'root' })
export class GroqService {

  environmet = environment
  private readonly API_URL = this.environmet.domaiUrl;

  constructor(private http: HttpClient) {
  }

  sendMessage(history: ChatMessage[], newMessage: string): Observable<any> {
    const contents = history.map(msg => ({
      role: msg.role,
      message: msg.userMsg,
    }));
    
    // Construct request body for Groq
    const body = {
      model: 'openai/gpt-oss-120b',
      messages: [{
        role: 'user',
        content: newMessage
      }],
      contents: contents
    };

    // Send POST request
    return this.http.post(`${this.API_URL}`, body);
  }

}



