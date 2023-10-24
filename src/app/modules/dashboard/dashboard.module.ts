import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  imports: [DashboardRoutingModule],
  declarations: [
    LandingComponent
  ],
})
export class DashboardModule {}
