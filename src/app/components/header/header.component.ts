import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    isMenuOpen = false;
    isScrolled = false;
    activeSection = '';

    links = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    @HostListener('window:scroll')
    onScroll() {
        this.isScrolled = window.scrollY > 20;

        const offset = window.scrollY + window.innerHeight * 0.35;
        let current = '';
        for (const link of this.links) {
            const el = document.getElementById(link.id);
            if (el && el.offsetTop <= offset) {
                current = link.id;
            }
        }
        this.activeSection = current;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }

    closeMenu() {
        this.isMenuOpen = false;
        document.body.style.overflow = '';
    }
}
