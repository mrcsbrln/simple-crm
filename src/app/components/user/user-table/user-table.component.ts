import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { User } from '../../../interfaces/user.interface';

const ELEMENT_DATA: User[] = [
  {
    firstName: 'Max',
    lastName: 'Mustermann',
    dateOfBirth: 946684800, // 2000-01-01
    address: 'Musterstraße 1',
    city: 'Musterstadt',
    zipCode: 12345,
  },
  {
    firstName: 'Erika',
    lastName: 'Musterfrau',
    dateOfBirth: 978307200, // 2001-01-01
    address: 'Hauptstraße 23',
    city: 'Berlin',
    zipCode: 10115,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: 915148800, // 1999-01-01
    address: 'Maple Avenue 12',
    city: 'New York',
    zipCode: 10001,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    dateOfBirth: 788918400, // 1995-01-01
    address: 'Pine Street 45',
    city: 'Los Angeles',
    zipCode: 90001,
  },
  {
    firstName: 'Peter',
    lastName: 'Schmidt',
    dateOfBirth: 662688000, // 1991-01-01
    address: 'Bahnhofstraße 8',
    city: 'München',
    zipCode: 80331,
  },
  {
    firstName: 'Laura',
    lastName: 'Meier',
    dateOfBirth: 536457600, // 1987-01-01
    address: 'Hauptstraße 4',
    city: 'Hamburg',
    zipCode: 20095,
  },
  {
    firstName: 'Carlos',
    lastName: 'Garcia',
    dateOfBirth: 410227200, // 1983-01-01
    address: 'Calle Mayor 10',
    city: 'Madrid',
    zipCode: 28001,
  },
  {
    firstName: 'Anna',
    lastName: 'Müller',
    dateOfBirth: 283996800, // 1979-01-01
    address: 'Ringstraße 22',
    city: 'Frankfurt',
    zipCode: 60311,
  },
  {
    firstName: 'James',
    lastName: 'Brown',
    dateOfBirth: 157766400, // 1975-01-01
    address: 'Oak Street 7',
    city: 'Chicago',
    zipCode: 60601,
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    dateOfBirth: 315532800, // 1980-01-01
    address: 'Broadway 30',
    city: 'San Francisco',
    zipCode: 94103,
  },
];

@Component({
  selector: 'app-user-table',
  imports: [MatTableModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})

export class UserTableComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'city'];
  dataSource = ELEMENT_DATA;
}
