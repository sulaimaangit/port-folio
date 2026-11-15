import { Component, ElementRef, ViewChild } from '@angular/core';

interface TerminalEntry {
  command: string;
  output: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  @ViewChild('cursorMeasure') private cursorMeasure?: ElementRef<HTMLSpanElement>;

  private readonly commandResponses: Readonly<Record<string, readonly string[]>> = {
    whoami: ['Java Full Stack Developer', 'Building Spring Boot and Angular applications.'],
    ls: ['about.txt', 'skills/'],
    'ls skills/': ['Spring Boot', 'Angular', 'AWS', 'Linux', 'CI/CD'],
    'cat skills/backend.txt': ['Java', 'Spring Boot', 'Microservices', 'SQL & PostgreSQL'],
    'cat skills/frontend.txt': ['Angular', 'TypeScript'],
    'cat skills/platform.txt': ['AWS', 'Linux', 'CI/CD', 'Git & Version Control'],
    help: [
      'whoami',
      'ls',
      'ls skills/',
      'cat skills/backend.txt',
      'cat skills/frontend.txt',
      'cat skills/platform.txt',
      'help',
      'clear',
    ],
  };

  command = '';
  cursorLeft = 0;

  terminalHistory: TerminalEntry[] = [
    { command: 'whoami', output: [...this.commandResponses['whoami']] },
    {
      command: 'ls skills/',
      output: [...this.commandResponses['ls skills/']],
    },
  ];

  updateCommand(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.command = event.target.value;
      this.updateCursorPosition(event);
    }
  }

  runCommand(event: SubmitEvent): void {
    event.preventDefault();
    const command = this.command.trim();
    if (!command) {
      return;
    }

    const normalizedCommand = command.toLowerCase();
    if (normalizedCommand === 'clear') {
      this.clearTerminal();
      return;
    }

    const output = this.commandResponses[normalizedCommand] ?? [`command not found: ${command}`];

    this.terminalHistory = [...this.terminalHistory, { command, output: [...output] }];
    this.command = '';
    this.resetCursorPosition();
  }

  clearTerminal(): void {
    this.terminalHistory = [];
    this.command = '';
    this.resetCursorPosition();
  }

  updateCursorPosition(event: Event): void {
    if (!(event.target instanceof HTMLInputElement) || !this.cursorMeasure) {
      return;
    }

    const input = event.target;
    const caretIndex = input.selectionStart ?? input.value.length;
    const measure = this.cursorMeasure.nativeElement;
    measure.textContent = input.value.slice(0, caretIndex);

    const inputStyle = getComputedStyle(input);
    this.cursorLeft =
      input.offsetLeft +
      measure.getBoundingClientRect().width +
      Number.parseFloat(inputStyle.paddingLeft) -
      input.scrollLeft;
  }

  private resetCursorPosition(): void {
    if (this.cursorMeasure) {
      this.cursorMeasure.nativeElement.textContent = '';
    }
    this.cursorLeft = 0;
  }
}
