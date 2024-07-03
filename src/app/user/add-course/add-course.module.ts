import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCourseRoutingModule } from './add-course-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDialogComponent, DeleteComponent } from './course-dialog/course-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AddCourseComponent,
    CourseDialogComponent,

    DeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddCourseRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AddCourseModule { }
