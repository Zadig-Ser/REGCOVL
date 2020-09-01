// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { GradeService } from '../../services/grade.service';
import { StudentService } from '../../services/student.service';
import { CourseService } from '../../services/course.service';
// Import Models
import { Grade } from '../../domain/regcovl_db/grade';
import { Course } from '../../domain/regcovl_db/course';
import { Student } from '../../domain/regcovl_db/student';

// START - USED SERVICES
/**
* gradeService.create
*	@description CRUD ACTION create
*
* gradeService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* gradeService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* studentService.list
*	@description CRUD ACTION list
*
* courseService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Grade
 */
@Component({
    selector: 'app-grade-edit',
    templateUrl: 'grade-edit.component.html',
    styleUrls: ['grade-edit.component.css']
})
export class GradeEditComponent implements OnInit {
    item: Grade;
    list_courses: Course[];
    list_student: Student[];
    model: Grade;
    formValid: Boolean;

    constructor(
    private gradeService: GradeService,
    private studentService: StudentService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Grade();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.gradeService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.courseService.list().subscribe(list => this.list_courses = list);
            this.studentService.list().subscribe(list => this.list_student = list);
        });
    }


    /**
     * Save Grade
     *
     * @param {boolean} formValid Form validity check
     * @param Grade item Grade to save
     */
    save(formValid: boolean, item: Grade): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.gradeService.update(item).subscribe(data => this.goBack());
            } else {
                this.gradeService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



