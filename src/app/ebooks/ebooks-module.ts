import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbooksRoutingModule } from './ebooks-routing-module';
import { EbooksList } from './ebooks-list/ebooks-list';
import { EbooksEdit } from './ebooks-edit/ebooks-edit';
import { EbooksAdd } from './ebooks-add/ebooks-add';


@NgModule({
  declarations: [
    EbooksList,
    EbooksEdit,
    EbooksAdd
  ],
  imports: [
    CommonModule,
    EbooksRoutingModule
  ]
})
export class EbooksModule { }
