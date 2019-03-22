import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
// import { PageNotFoundComponent } from './';

const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "create", component: PostCreateComponent },
  { path: "edit/:postId", component: PostCreateComponent }

  // { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
