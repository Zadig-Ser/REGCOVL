// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CenterService } from '../../services/center.service';
import { StudentService } from '../../services/student.service';
// Import Models
import { Center } from '../../domain/regcovl_db/center';
import { Student } from '../../domain/regcovl_db/student';

// START - USED SERVICES
/**
* centerService.create
*	@description CRUD ACTION create
*
* centerService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* centerService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* studentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Center
 */
@Component({
    selector: 'app-center-edit',
    templateUrl: 'center-edit.component.html',
    styleUrls: ['center-edit.component.css']
})
export class CenterEditComponent implements OnInit {
    item: Center;
    list_student: Student[];
    model: Center;
    formValid: Boolean;

    constructor(
    private centerService: CenterService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Center();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.centerService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.studentService.list().subscribe(list => this.list_student = list);
        });
    }


    /**
     * Save Center
     *
     * @param {boolean} formValid Form validity check
     * @param Center item Center to save
     */
    save(formValid: boolean, item: Center): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.centerService.update(item).subscribe(data => this.goBack());
            } else {
                this.centerService.create(item).subscribe(data => this.goBack());
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



