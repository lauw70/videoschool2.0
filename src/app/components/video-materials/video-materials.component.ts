import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-materials',
  templateUrl: './video-materials.component.html',
  styleUrls: ['./video-materials.component.css']
})
export class VideoMaterialsComponent implements OnInit {

  materials: Material[];

  constructor() { }

  ngOnInit() {
    this.materials = [
        {
            type: 'download',
            url: './assets/downloads/pdf-sample.pdf',
            outsource: false,
            text: 'Oefenen met vermenigvuldigen'
        }
    ];


  }

}

interface Material {
  type: string;
  url: string;
  outsource: boolean;
  text: string;
}
