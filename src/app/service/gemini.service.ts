import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

// 05-12-2025 Chat Bot Implemented

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

@Injectable({ providedIn: 'root' })
export class GeminiService {
  environmet = environment

  private API_URL = this.environmet.geminiAiUrl;
  private API_KEY = this.environmet.apiKey;

  constructor(private http: HttpClient) {
  }
  private readonly SYSTEM_INSTRUCTION = this.environmet.systemInstruction;


  sendMessage(history: ChatMessage[], newMessage: string): Observable<any> {

    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    contents.push({ role: 'user', parts: [{ text: newMessage }] });

    /* const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': this.API_KEY
    }); */

    const body = {
      contents: contents,
      system_instruction: this.SYSTEM_INSTRUCTION
    };
    return this.http.post(`${this.API_URL}?key=${this.API_KEY}`, body);
  }
}



