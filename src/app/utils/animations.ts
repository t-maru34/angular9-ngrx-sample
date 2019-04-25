import { trigger, transition, style, animate } from '@angular/animations';

export const Animations = {
  fadeInFadeOut: trigger('fadeInFadeOut', [
    transition(':enter', [style({ opacity: 0 }), animate('150ms', style({ opacity: 1 }))]),
    transition(':leave', [style({ opacity: 1 }), animate('150ms', style({ opacity: 0 }))])
  ])
};
