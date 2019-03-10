import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    @Input() public parentData: string;

    rowData: User;
    columnDefs: ColDef[];

    // gridApi and columnApi
    api: GridApi;
    columnApi: ColumnApi;

    frameworkComponents: any;

    newUser: User;

    selectedRow: any;

    removeUserDisabled = true;

    userForm = new FormGroup({
        name: new FormControl(),
        city: new FormControl(),
        age: new FormControl()
    });

    constructor(private formBuilder: FormBuilder, private userService: UserService) {
        this.createUserForm();
        this.getUsers();

    }

    ngOnInit() {
        this.getUsers();
    }

    private createColumnDefs(users: User) {
        return [
            { headerName: 'Name', field: 'name', sortable: true, filter: true },
            { headerName: 'City', field: 'city', sortable: true, filter: true },
            { headerName: 'Age', field: 'age', sortable: true, filter: true }
        ];
    }

    onGridReady(params): void {
        this.api = params.api;
        this.columnApi = params.columnApi;
        this.api.sizeColumnsToFit();
    }

    onRowClicked(event: any) { this.removeUserDisabled = false; }

    createUserForm() {
        this.userForm = this.formBuilder.group({
            name: '',
            city: '',
            age: ''
        });
    }

    getUsers() {
        this.userService.getUsers().subscribe(
            users => {
                this.columnDefs = this.createColumnDefs(users);
                this.rowData = users;
            }
        );
    }

    saveUser() {
        console.log(this.userForm.value.name);

        this.newUser = new User(this.userForm.value.name,
            this.userForm.value.city,
            this.userForm.value.age);

        this.userService.addUser(this.newUser).subscribe(
            data => {
                console.log(data);
                this.rowData = data;
                this.userForm.reset();
            }
        );

    }

    deleteUser() {
        console.log(this.api.getSelectedRows);
        this.selectedRow = this.api.getSelectedRows()[0];
        this.userService.deleteUser(this.selectedRow.name).subscribe(
            data => {
                console.log(data);
                this.rowData = data;
            }
        );
    }

    deleteAll() {
        this.userService.deleteAll().subscribe(
            data => {
                this.rowData = data;
            }
        );
    }

}


