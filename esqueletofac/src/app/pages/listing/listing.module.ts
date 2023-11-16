import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { ListingPageRoutingModule } from './listing-routing.module';

import { ListingPage } from './listing.page';

import { SearchbarModule } from 'src/app/searchbar/searchbar.module';
import { CategoryItemModule } from 'src/app/category-item/category-item.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ListingPageRoutingModule,
    SearchbarModule,
    CategoryItemModule
  ],
  declarations: [ListingPage]
})
export class ListingPageModule {}
