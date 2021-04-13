import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
// import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},// empty path string means when we land onhost
  {
    path:'',
    // runGuardsAndResolvers: 'always'
    // canActivate: [AuthGuard],
    children: [
      
  {path: 'members', component: MemberListComponent},
  {path: 'members/:id', component: MemberDetailComponent}, // id= place holder foroute
  {path: 'lists', component: ListsComponent},
  {path: 'messages', component: MessagesComponent} 
    ]
  },
  {path: '**', component:HomeComponent, pathMatch: 'full'}  // wildcard route, if anything out of context
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
