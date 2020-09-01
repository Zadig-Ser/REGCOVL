import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CenterService } from '../../services/center.service';
// Import Models
import { Center } from '../../domain/regcovl_db/center';

// START - USED SERVICES
/**
* centerService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* centerService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Center
 * @class CenterListComponent
 */
@Component({
    selector: 'app-center-list',
    templateUrl: './center-list.component.html',
    styleUrls: ['./center-list.component.css']
})
export class CenterListComponent implements OnInit {
    list: Center[];
    search: any = {};
    idSelected: string;
    constructor(
        private centerService: CenterService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.centerService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Center to remove
     *
     * @param {string} id Id of the Center to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Center
     */
    deleteItem() {
        this.centerService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
