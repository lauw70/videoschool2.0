import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {VideoPlayerComponent} from './components/video-player/video-player.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {VideoComponent} from './components/video/video.component';
import { VideoMaterialsComponent } from './components/video-materials/video-materials.component';
import { VideoTextComponent } from './components/video-text/video-text.component';
import { VideoQuestionsComponent } from './components/video-questions/video-questions.component';

const appRoutes: Routes = [
    {path: 'video', component: VideoComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        VideoPlayerComponent,
        PageNotFoundComponent,
        VideoComponent,
        VideoMaterialsComponent,
        VideoTextComponent,
        VideoQuestionsComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
