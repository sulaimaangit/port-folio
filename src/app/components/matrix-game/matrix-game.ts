import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-matrix-game',
  templateUrl: './matrix-game.html',
  styleUrl: './matrix-game.css',
})
export class MatrixGameComponent implements OnDestroy {
  isGameRunning = signal(false);
  score = signal(0);
  secondsLeft = signal(20);
  targetX = signal(50);
  targetY = signal(50);
  private gameTimer: ReturnType<typeof setInterval> | undefined;

  startGame(): void {
    this.stopGame();
    this.score.set(0);
    this.secondsLeft.set(20);
    this.moveTarget();
    this.isGameRunning.set(true);
    this.gameTimer = setInterval(() => {
      if (this.secondsLeft() <= 1) {
        this.secondsLeft.set(0);
        this.stopGame();
        return;
      }

      this.secondsLeft.update(seconds => seconds - 1);
    }, 1000);
  }

  catchSignal(): void {
    if (!this.isGameRunning()) {
      return;
    }

    this.score.update(score => score + 1);
    this.moveTarget();
  }

  ngOnDestroy(): void {
    this.stopGame();
  }

  private moveTarget(): void {
    this.targetX.set(12 + Math.random() * 76);
    this.targetY.set(16 + Math.random() * 68);
  }

  private stopGame(): void {
    this.isGameRunning.set(false);
    if (this.gameTimer !== undefined) {
      clearInterval(this.gameTimer);
      this.gameTimer = undefined;
    }
  }
}
