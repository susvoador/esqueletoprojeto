import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [CategoryItemModule],
    imports: [ CommonModule, IonicModule ],
    exports: [CategoryItemModule],
})
export class CategoryItemModule {}

