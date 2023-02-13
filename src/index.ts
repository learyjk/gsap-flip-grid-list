import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

// declare global {
//   interface Window {
//     Webflow: any;
//   }
// }

window.Webflow ||= [];
window.Webflow.push(() => {
  const flipButton = document.querySelector('#flip-button');
  const layout = document.querySelector('.layout');
  if (!flipButton || !layout) return;

  let layoutPref = localStorage.getItem('layoutPref');

  if (layoutPref) {
    // change layout to grid
    layout.classList.toggle('is-list');
    layout.childNodes.forEach((childNode) => {
      let childEl = childNode as HTMLDivElement;
      childEl.classList.toggle('is-list');
    });
  }

  flipButton.addEventListener('click', () => {
    const state = Flip.getState(['.layout', '.layout-item', '.image', 'h2']);

    layout.classList.toggle('is-list');
    layout.childNodes.forEach((childNode) => {
      let childEl = childNode as HTMLDivElement;
      childEl.classList.toggle('is-list');
    });

    Flip.from(state, {
      duration: 0.5,
      ease: 'power1.inOut',
      simple: true,
      prune: true,
      onComplete: () => {
        if (layoutPref) {
          localStorage.removeItem('layoutPref');
        } else {
          localStorage.setItem('layoutPref', 'grid');
        }
        layoutPref = localStorage.getItem('layoutPref');
      },
    });
  });
});
