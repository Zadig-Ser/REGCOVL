// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { DepartmentService } from '../../services/department.service';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
// Import Models
import { Department } from '../../domain/regcovl_db/department';
import { Course } from '../../domain/regcovl_db/course';
import { Student } from '../../domain/regcovl_db/student';

// START - USED SERVICES
/**
* departmentService.create
*	@description CRUD ACTION create
*
* departmentService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* departmentService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* courseService.findBy_department
*	@description CRUD ACTION findBy_department
*	@param Objectid key Id of model to search for
*
* studentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Department
 */
@Component({
    selector: 'app-department-edit',
    templateUrl: 'department-edit.component.html',
    styleUrls: ['department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
    item: Department;
    list_student: Student[];
    externalCourse__department: Course[];
    model: Department;
    formValid: Boolean;

    constructor(
    private departmentService: DepartmentService,
    private courseService: CourseService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Department();
        this.externalCourse__department = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.departmentService.get(id).subscribe(item => this.item = item);
                this.courseService.findBy_department(id).subscribe(list => this.externalCourse__department = list);
            }
            // Get relations
            this.studentService.list().subscribe(list => this.list_student = list);
        });
    }


    /**
     * Save Department
     *
     * @param {boolean} formValid Form validity check
     * @param Department item Department to save
     */
    save(formValid: boolean, item: Department): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.departmentService.update(item).subscribe(data => this.goBack());
            } else {
                this.departmentService.create(item).subscribe(data => this.goBack());
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



