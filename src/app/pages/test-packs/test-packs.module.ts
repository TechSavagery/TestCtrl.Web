import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { TestPacksRoutingModule } from './test-packs-routing.module';
import { TestPacksComponent } from './test-packs.component';
import { TestPacksRequestComponent } from './request/test-packs-request.component';
import { LayoutModule} from '../layout/layout.module';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    TestPacksRoutingModule,
    NbSelectModule,
    NbIconModule,
    LayoutModule,
  ],
  declarations: [
    TestPacksComponent,
    TestPacksRequestComponent,
  ],
})
export class TestPacksModule { }
