import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { DepartmentService } from '../../services/department.service';
// Import Models
import { Department } from '../../domain/regcovl_db/department';

// START - USED SERVICES
/**
* departmentService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* departmentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Department
 * @class DepartmentListComponent
 */
@Component({
    selector: 'app-department-list',
    templateUrl: './department-list.component.html',
    styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
    list: Department[];
    search: any = {};
    idSelected: string;
    constructor(
        private departmentService: DepartmentService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.departmentService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Department to remove
     *
     * @param {string} id Id of the Department to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Department
     */
    deleteItem() {
        this.departmentService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
