import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ScrollToService} from '../../services/scroll-to.service';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, AfterContentInit {
    @ViewChild('video') video;


    constructor(private _Scroll: ScrollToService) {
    }

    ngOnInit() {
        // console.log(this.video);
        // @ViewChild('video')
        // this._Scroll.scroll(video);
    }

    ngAfterContentInit() {
        // this._Scroll.scroll(this.video);
        console.log(this.video.nativeElement.scrollIntoView());
    }

    public doIt() {

    }

}
