import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.scss']
})
export class HomeComponent {
  public tiles: any = [
    { imageUrl: 'assets/home/files/banner1.jpg', isHovered: false },
    { imageUrl: 'assets/home/files/banner2.jpg', isHovered: false },
    { imageUrl: 'assets/home/files/banner3.jpg', isHovered: false }
  ];

  public onTileHover(event: MouseEvent): void {
    const tileIndex = this.getTileIndex(event.target as HTMLImageElement);
    this.tiles[tileIndex].isHovered = true;
  }

  public onTileLeave(event: MouseEvent): void {
    const tileIndex = this.getTileIndex(event.target as HTMLImageElement);
    this.tiles[tileIndex].isHovered = false;
  }

  private getTileIndex(imgElement: HTMLImageElement): number {
    const tileElement = imgElement.parentElement;
    if (!tileElement || !tileElement.parentElement) {
      return -1;
    }
    const tileIndex = Array.from(tileElement.parentElement.children).indexOf(tileElement);
    return tileIndex;
  }


  @ViewChild('ngcarousel', { static: true }) ngCarousel!: NgbCarousel;
  ngOnInit() { }
}
