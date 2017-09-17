import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {VideoPlayerComponent} from './components/video-player/video-player.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {VideoComponent} from './components/video/video.component';
import { VideoMaterialsComponent } from './components/video-materials/video-materials.component';
import { VideoTextComponent } from './components/video-text/video-text.component';
import { VideoQuestionsComponent } from './components/video-questions/video-questions.component';
import { SearchPipe } from './pipes/search.pipe';

const appRoutes: Routes = [
    {path: '',
        redirectTo: 'video',
        pathMatch: 'full'
    },
    {path: 'video', component: VideoComponent},
    {path: 'question', component: VideoQuestionsComponent},
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
        VideoQuestionsComponent,
        SearchPipe
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
