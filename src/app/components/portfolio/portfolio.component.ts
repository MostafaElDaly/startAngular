import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  img1: string = './assets/images/portfolio/cabin.png';
  img2: string = './assets/images/portfolio/cake.png';
  img3: string = './assets/images/portfolio/circus.png';
  img4: string = './assets/images/portfolio/game.png';
  img5: string = './assets/images/portfolio/safe.png';
  img6: string = './assets/images/portfolio/submarine.png';
}
