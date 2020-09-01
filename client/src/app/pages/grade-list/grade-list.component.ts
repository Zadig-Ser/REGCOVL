import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { GradeService } from '../../services/grade.service';
// Import Models
import { Grade } from '../../domain/regcovl_db/grade';

// START - USED SERVICES
/**
* gradeService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* gradeService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Grade
 * @class GradeListComponent
 */
@Component({
    selector: 'app-grade-list',
    templateUrl: './grade-list.component.html',
    styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements OnInit {
    list: Grade[];
    search: any = {};
    idSelected: string;
    constructor(
        private gradeService: GradeService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.gradeService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Grade to remove
     *
     * @param {string} id Id of the Grade to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Grade
     */
    deleteItem() {
        this.gradeService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
