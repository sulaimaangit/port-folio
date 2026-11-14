import { Component } from '@angular/core';
import { MatrixGameComponent } from '../matrix-game/matrix-game';

@Component({
  selector: 'app-home-visual',
  imports: [MatrixGameComponent],
  templateUrl: './home-visual.html',
  styleUrl: './home-visual.css',
})
export class HomeVisualComponent {
  activeView: 'terminal' | 'game' = 'terminal';

  selectView(view: 'terminal' | 'game'): void {
    this.activeView = view;
  }
}
