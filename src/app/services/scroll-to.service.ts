import {Injectable} from '@angular/core';

@Injectable()
export class ScrollToService {

    constructor() {
    }

    public scroll(element) {
        element.nativeElement.scrollIntoView();
    }

}
