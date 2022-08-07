import { NgModule } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { MessageModule } from 'primeng/message';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ColorPickerModule } from 'primeng/colorpicker';
import { EditorModule } from 'primeng/editor';
import { TreeModule } from 'primeng/tree';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';

@NgModule({
  imports: [
    FileUploadModule,
    ButtonModule,
    HttpClientModule,
    MessageModule,
    FullCalendarModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
    DialogModule,
    ContextMenuModule,
    MultiSelectModule,
    SliderModule,
    CalendarModule,
    ToastModule,
    TableModule,
    ColorPickerModule,
    ToastModule,
    EditorModule,
    TreeModule,
    OrganizationChartModule,
    GalleriaModule,
    ImageModule,
  ],
  exports: [
    FileUploadModule,
    ButtonModule,
    HttpClientModule,
    MessageModule,
    FullCalendarModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
    DialogModule,
    ContextMenuModule,
    MultiSelectModule,
    SliderModule,
    CalendarModule,
    ToastModule,
    TableModule,
    ColorPickerModule,
    ToastModule,
    EditorModule,
    TreeModule,
    OrganizationChartModule,
    GalleriaModule,
    ImageModule,
  ],
  providers: [],
})
export class PrimengModule {}
