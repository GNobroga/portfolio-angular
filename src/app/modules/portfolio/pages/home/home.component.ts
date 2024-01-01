import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {

  private static readonly BREAKPOINT = 600;

  #graduation!: HTMLElement | null;
  #knowledge!: HTMLElement | null;
  #experience!: HTMLElement | null;

  public ngAfterViewInit(): void {
    this.#graduation = document.getElementById('graduation')!;
    this.#knowledge = document.getElementById('knowlegde')!;
    this.#experience = document.getElementById('experience')!;
  }

  @HostListener('window:scroll')
  public onScroll() {

    if (this.#graduation && this.#graduation.getBoundingClientRect().top <= HomeComponent.BREAKPOINT) {
      this.#graduation.classList.add('fadeIn');
      this.#graduation = null;
    }

    if (this.#knowledge && this.#knowledge.getBoundingClientRect().top <= HomeComponent.BREAKPOINT) {
      this.#knowledge.classList.add('fadeIn');
      this.#knowledge = null;
    }

    if (this.#experience && this.#experience.getBoundingClientRect().top <= HomeComponent.BREAKPOINT) {
      this.#experience.classList.add('fadeIn');
      this.#experience = null;
    }
  }
}
