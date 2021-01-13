import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: Image[];
  constructor(private imgService: ImagesService) { }

  ngOnInit(): void {
    this.imgService.getAllImages()
    .subscribe((images) => this.images = images);
  }

}
