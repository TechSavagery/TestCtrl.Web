import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestPacksRequestComponent } from './request/test-packs-request.component';
import { TestPacksComponent } from './test-packs.component';

const routes: Routes = [
  {
    path: '',
    component: TestPacksComponent,
    children: [
      {
        path: 'create-request',
        component: TestPacksRequestComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TestPacksRoutingModule {
}

