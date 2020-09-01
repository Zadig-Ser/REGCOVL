import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ExaminationService } from '../../services/examination.service';
// Import Models
import { Examination } from '../../domain/regcovl_db/examination';

// START - USED SERVICES
/**
* examinationService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* examinationService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Examination
 * @class ExaminationListComponent
 */
@Component({
    selector: 'app-examination-list',
    templateUrl: './examination-list.component.html',
    styleUrls: ['./examination-list.component.css']
})
export class ExaminationListComponent implements OnInit {
    list: Examination[];
    search: any = {};
    idSelected: string;
    constructor(
        private examinationService: ExaminationService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.examinationService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Examination to remove
     *
     * @param {string} id Id of the Examination to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Examination
     */
    deleteItem() {
        this.examinationService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
