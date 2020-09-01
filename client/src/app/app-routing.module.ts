// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { CenterEditComponent} from './pages/center-edit/center-edit.component';
import { CenterListComponent} from './pages/center-list/center-list.component';
import { CourseEditComponent} from './pages/course-edit/course-edit.component';
import { CourseListComponent} from './pages/course-list/course-list.component';
import { DepartmentEditComponent} from './pages/department-edit/department-edit.component';
import { DepartmentListComponent} from './pages/department-list/department-list.component';
import { ExaminationEditComponent} from './pages/examination-edit/examination-edit.component';
import { ExaminationListComponent} from './pages/examination-list/examination-list.component';
import { GradeEditComponent} from './pages/grade-edit/grade-edit.component';
import { GradeListComponent} from './pages/grade-list/grade-list.component';
import { StudentEditComponent} from './pages/student-edit/student-edit.component';
import { StudentListComponent} from './pages/student-list/student-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'centers/:id',  loadChildren: './pages/center-edit/center-edit.module#CenterEditModule' , canActivate: [AuthGuard] },
    { path: 'centers',  loadChildren: './pages/center-list/center-list.module#CenterListModule' , canActivate: [AuthGuard] },
    { path: 'courses/:id',  loadChildren: './pages/course-edit/course-edit.module#CourseEditModule' , canActivate: [AuthGuard] },
    { path: 'courses',  loadChildren: './pages/course-list/course-list.module#CourseListModule' , canActivate: [AuthGuard] },
    { path: 'departments/:id',  loadChildren: './pages/department-edit/department-edit.module#DepartmentEditModule' , canActivate: [AuthGuard] },
    { path: 'departments',  loadChildren: './pages/department-list/department-list.module#DepartmentListModule' , canActivate: [AuthGuard] },
    { path: 'examinations/:id',  loadChildren: './pages/examination-edit/examination-edit.module#ExaminationEditModule' , canActivate: [AuthGuard] },
    { path: 'examinations',  loadChildren: './pages/examination-list/examination-list.module#ExaminationListModule' , canActivate: [AuthGuard] },
    { path: 'grades/:id',  loadChildren: './pages/grade-edit/grade-edit.module#GradeEditModule' , canActivate: [AuthGuard] },
    { path: 'grades',  loadChildren: './pages/grade-list/grade-list.module#GradeListModule' , canActivate: [AuthGuard] },
    { path: 'students/:id',  loadChildren: './pages/student-edit/student-edit.module#StudentEditModule' , canActivate: [AuthGuard] },
    { path: 'students',  loadChildren: './pages/student-list/student-list.module#StudentListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
