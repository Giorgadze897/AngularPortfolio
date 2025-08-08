import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  darkMode = true; // ✅ სტარტზე dark

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // თუ შენახულია, ვენდობით; თუ არა — ვტოვებთ dark-ს აქტიურს
    const saved = localStorage.getItem('theme');
    if (saved === 'light') this.darkMode = false;
    else if (saved === 'dark') this.darkMode = true;

    this.applyBodyClass();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
    this.applyBodyClass();
  }

  private applyBodyClass() {
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}