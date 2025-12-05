import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-button',
  standalone: true,
  imports: [],
  templateUrl: './chat-button.component.html',
  styleUrl: './chat-button.component.css'
})
export class ChatButtonComponent {
  @Output() open = new EventEmitter<void>();
  clickBtn() { this.open.emit(); }

  // keyboard accessibility (Enter / Space)
  onKey(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.open.emit();
    }
  }
}
