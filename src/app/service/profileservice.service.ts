import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../environment/environment';

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private profile = environment.profileData;

    constructor() { }

    sendMessage(history: ChatMessage[], newMessage: string): Observable<ChatMessage[]> {
        const question = newMessage.toLowerCase();
        let answer = '';

        if (question.includes('hi') || question.includes('hello') || question.includes('hey')) {
            answer = 'Hi! Please ask profile-related questions.';
        } else if (question.includes('your name') || question.includes('who are you') || question.includes('name') || question.includes('w r u')) {
            answer = `My name is ${this.profile.name}.`;
        } else if (question.includes('current role') || question.includes('role') || question.includes('what do you do')) {
            answer = this.profile.personalDetails.currentRole;
        } else if (question.includes('experience') || question.includes('angular') || question.includes('react')) {
            answer = `I have ${this.profile.personalDetails.experience.total} years in total, with ${this.profile.personalDetails.experience.angular} years in Angular and ${this.profile.personalDetails.experience.react} year in React.`;
        } else if (question.includes('location') || question.includes('living') || question.includes('live')) {
            answer = this.profile.personalDetails.location;
        } else if (question.includes('currently working') || question.includes('company') || question.includes('work')) {
            answer = this.profile.personalDetails.currentlyWorking;
        } else if (question.includes('job change') || question.includes('career goal') || question.includes('why change')) {
            answer = `${this.profile.personalDetails.jobChange}. ${this.profile.personalDetails.reasonForChange}`;
        } else {
            answer = 'This question is outside my scope. Please ask only profile-related queries.';
        }

        const botMessage: ChatMessage = { role: 'model', text: answer };
        const newHistory: ChatMessage[] = [...history, botMessage];

        return of(newHistory);
    }
}
