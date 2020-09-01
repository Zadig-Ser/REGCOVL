// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CourseService } from '../../services/course.service';
import { ExaminationService } from '../../services/examination.service';
import { DepartmentService } from '../../services/department.service';
import { StudentService } from '../../services/student.service';
import { GradeService } from '../../services/grade.service';
// Import Models
import { Course } from '../../domain/regcovl_db/course';
import { Examination } from '../../domain/regcovl_db/examination';
import { Grade } from '../../domain/regcovl_db/grade';
import { Student } from '../../domain/regcovl_db/student';
import { Department } from '../../domain/regcovl_db/department';

// START - USED SERVICES
/**
* courseService.create
*	@description CRUD ACTION create
*
* courseService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* courseService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* examinationService.findBy_course
*	@description CRUD ACTION findBy_course
*	@param Objectid key Id of model to search for
*
* departmentService.list
*	@description CRUD ACTION list
*
* studentService.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key Id of model to search for
*
* gradeService.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Course
 */
@Component({
    selector: 'app-course-edit',
    templateUrl: 'course-edit.component.html',
    styleUrls: ['course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
    item: Course;
    list_department: Department[];
    externalExamination__course: Examination[];
    externalGrade__courses: Grade[];
    externalStudent__courses: Student[];
    model: Course;
    formValid: Boolean;

    constructor(
    private courseService: CourseService,
    private examinationService: ExaminationService,
    private departmentService: DepartmentService,
    private studentService: StudentService,
    private gradeService: GradeService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Course();
        this.externalExamination__course = [];
        this.externalGrade__courses = [];
        this.externalStudent__courses = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.courseService.get(id).subscribe(item => this.item = item);
                this.examinationService.findBy_course(id).subscribe(list => this.externalExamination__course = list);
                this.gradeService.findBy_courses(id).subscribe(list => this.externalGrade__courses = list);
                this.studentService.findBy_courses(id).subscribe(list => this.externalStudent__courses = list);
            }
            // Get relations
            this.departmentService.list().subscribe(list => this.list_department = list);
        });
    }

    /**
     * Check if an Department is in  _department
     *
     * @param {string} id Id of Department to search
     * @returns {boolean} True if it is found
     */
    containDepartment(id: string): boolean {
        if (!this.item._department) return false;
        return this.item._department.indexOf(id) !== -1;
    }

    /**
     * Add Department from Course
     *
     * @param {string} id Id of Department to add in this.item._department array
     */
    addDepartment(id: string) {
        if (!this.item._department)
            this.item._department = [];
        this.item._department.push(id);
    }

    /**
     * Remove an Department from a Course
     *
     * @param {number} index Index of Department in this.item._department array
     */
    removeDepartment(index: number) {
        this.item._department.splice(index, 1);
    }

    /**
     * Save Course
     *
     * @param {boolean} formValid Form validity check
     * @param Course item Course to save
     */
    save(formValid: boolean, item: Course): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.courseService.update(item).subscribe(data => this.goBack());
            } else {
                this.courseService.create(item).subscribe(data => this.goBack());
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



