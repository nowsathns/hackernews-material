import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from 'app/feeds/feed/feed.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'news/1',
    pathMatch : 'full'
  },
  {
    path: 'news/:page',
    component: FeedComponent,
    data : { feedType : 'news' }
  },
  {
    path: 'newest/:page',
    component: FeedComponent,
    data : { feedType : 'newest' }
  },
  {
    path: 'show/:page',
    component: FeedComponent,
    data : { feedType : 'show' }
  },
  {
    path: 'ask/:page',
    component: FeedComponent,
    data : { feedType : 'ask' }
  },
  {
    path: 'jobs/:page',
    component: FeedComponent,
    data : { feedType : 'jobs' }
  },
  {
    path : '**',
    redirectTo: 'news/1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
