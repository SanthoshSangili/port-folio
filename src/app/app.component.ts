import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/components/header/header.component';
import { AboutComponent } from './component/components/about/about.component';
import { ContactComponent } from './component/components/contact/contact.component';
import { ExperienceComponent } from './component/components/experience/experience.component';
import { ProjectsComponent } from './component/components/projects/projects.component';
import { SkillsComponent } from './component/components/skills/skills.component';
import { UserComponent } from './component/components/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatButtonComponent } from './component/components/chat-bot/chat-button/chat-button.component';
import { ChatPanelComponent } from './component/components/chat-bot/chat-panel/chat-panel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    HeaderComponent,
    ProjectsComponent,
    SkillsComponent,
    ReactiveFormsModule,
    ChatPanelComponent,
    ChatButtonComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'port-folio';
  showChat = false;
  openChat() {
    console.log("Chat Open Triggered");
    this.showChat = true; setTimeout(() => focusInput(), 50);
  }
  closeChat() { this.showChat = false; }
}

// helper to focus input (place in same file or better use ViewChild)
function focusInput() {
  const el = document.querySelector('.panel input') as HTMLInputElement | null;
  if (el) el.focus();
}