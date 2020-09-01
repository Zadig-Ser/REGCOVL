// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ExaminationService } from '../../services/examination.service';
import { StudentService } from '../../services/student.service';
import { CourseService } from '../../services/course.service';
// Import Models
import { Examination } from '../../domain/regcovl_db/examination';
import { Course } from '../../domain/regcovl_db/course';
import { Student } from '../../domain/regcovl_db/student';

// START - USED SERVICES
/**
* examinationService.create
*	@description CRUD ACTION create
*
* examinationService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* examinationService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* studentService.list
*	@description CRUD ACTION list
*
* courseService.list
*	@description CRUD ACTION list
*
* examinationService.validate
*	@description This API is used to validate the exam
*	@param String id id of the exam
*	@returns Boolean
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Examination
 */
@Component({
    selector: 'app-examination-edit',
    templateUrl: 'examination-edit.component.html',
    styleUrls: ['examination-edit.component.css']
})
export class ExaminationEditComponent implements OnInit {
    item: Examination;
    list_course: Course[];
    list_student: Student[];
    model: Examination;
    formValid: Boolean;

    constructor(
    private examinationService: ExaminationService,
    private studentService: StudentService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Examination();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.examinationService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.courseService.list().subscribe(list => this.list_course = list);
            this.studentService.list().subscribe(list => this.list_student = list);
        });
    }


    /**
     * Save Examination
     *
     * @param {boolean} formValid Form validity check
     * @param Examination item Examination to save
     */
    save(formValid: boolean, item: Examination): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.examinationService.update(item).subscribe(data => this.goBack());
            } else {
                this.examinationService.create(item).subscribe(data => this.goBack());
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



