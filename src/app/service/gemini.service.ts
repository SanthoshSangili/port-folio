import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

// 05-12-2025 Chat Bot Implemented

export interface ChatMessage {
  role: 'user' | 'system';
  text: string;
}

@Injectable({ providedIn: 'root' })
export class GeminiService {
  environmet = environment

  private API_URL = this.environmet.domaiUrl;

  constructor(private http: HttpClient) {
  }
  private readonly SYSTEM_INSTRUCTION = this.environmet.systemInstruction;


  // sendMessage(history: ChatMessage[], newMessage: string): Observable<any> {

  //   const contents = history.map(msg => ({
  //     role: msg.role,
  //     parts: [{ text: msg.text }],
  //   }));

  //   contents.push({ role: 'user', parts: [{ text: newMessage }] });

  //   /* const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'X-Goog-Api-Key': this.API_KEY
  //   }); */

  //   const body = {
  //     contents: contents,
  //     // system_instruction: this.SYSTEM_INSTRUCTION
  //   };
  //   return this.http.post(`${this.API_URL}`, body);
  // }

  sendMessage(history: ChatMessage[], newMessage: string): Observable<any> {
    // Build messages array for Groq
    const messages = []/* history.map(msg => ({
      role: msg.role,        // 'user' or 'assistant'
      content: msg.text      // single string, not parts array
    })); */
  
    // Add the new user message
    messages.push({
      role: 'user',
      content: newMessage
    });
  
    // Construct request body for Groq
    const body = {
      model: 'openai/gpt-oss-120b',
      messages: messages,
      temperature: 1,
      max_completion_tokens: 8192,
      top_p: 1,
      stream: true,
      reasoning_effort: 'medium',
      stop: null
    };
  
    // Set headers if needed (API key)
    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${this.API_KEY}` // if using Groq API key
    // };
  
    // Send POST request
    return this.http.post(`${this.API_URL}`, body);
  }
  

  sendMessage1(history: ChatMessage[], newMessage: string): Observable<any> {

    // Map previous chat history
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    // Add the new user message
    contents.push({ role: 'user', parts: [{ text: newMessage }] });

    // Build the body including system instruction
    const body = {
      model: "openai/gpt-oss-20b",
      system_instruction: this.SYSTEM_INSTRUCTION,
      contents: contents
    };

    return this.http.post(`${this.API_URL}`, body);
}

}



