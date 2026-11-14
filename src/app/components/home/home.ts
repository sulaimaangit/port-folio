import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  isDraggingAtom = false;
  private isAtomPointerDown = false;
  private dragStartX = 0;
  private dragStartY = 0;
  private dragStartTiltX = 0;
  private dragStartTiltY = 0;
  private atomTiltX = 0;
  private atomTiltY = 0;

  startAtomDrag(event: PointerEvent): void {
    const surface = event.currentTarget;
    if (!(surface instanceof HTMLElement) || !event.isPrimary || event.pointerType !== 'mouse' || event.button !== 0) {
      return;
    }

    this.isAtomPointerDown = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.dragStartTiltX = this.atomTiltX;
    this.dragStartTiltY = this.atomTiltY;
    surface.setPointerCapture(event.pointerId);
  }

  moveAtom(event: PointerEvent): void {
    const surface = event.currentTarget;
    if (!(surface instanceof HTMLElement) || !this.isAtomPointerDown || event.pointerType !== 'mouse') {
      return;
    }

    const deltaX = event.clientX - this.dragStartX;
    const deltaY = event.clientY - this.dragStartY;
    if (!this.isDraggingAtom && Math.hypot(deltaX, deltaY) < 4) {
      return;
    }

    const bounds = surface.getBoundingClientRect();
    if (bounds.width === 0 || bounds.height === 0) {
      return;
    }

    this.isDraggingAtom = true;
    this.atomTiltX = Math.max(-18, Math.min(18, this.dragStartTiltX - (deltaY / bounds.height) * 36));
    this.atomTiltY = Math.max(-24, Math.min(24, this.dragStartTiltY + (deltaX / bounds.width) * 48));
    surface.style.setProperty('--atom-tilt-x', `${this.atomTiltX}deg`);
    surface.style.setProperty('--atom-tilt-y', `${this.atomTiltY}deg`);
  }

  endAtomDrag(event: PointerEvent): void {
    if (event.pointerType === 'mouse' && event.button === 0) {
      this.finishAtomDrag(event);
    }
  }

  cancelAtomDrag(event: PointerEvent): void {
    this.finishAtomDrag(event);
  }

  private finishAtomDrag(event: PointerEvent): void {
    const surface = event.currentTarget;
    if (!(surface instanceof HTMLElement)) {
      return;
    }

    this.isAtomPointerDown = false;
    this.isDraggingAtom = false;
    if (surface.hasPointerCapture(event.pointerId)) {
      surface.releasePointerCapture(event.pointerId);
    }
  }
}
