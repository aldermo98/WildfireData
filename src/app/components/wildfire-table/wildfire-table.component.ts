import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Wildfire } from 'src/app/data/wildfire.model';
import { WildfireService } from 'src/app/services/wildfire.service';

@Component({
  selector: 'app-wildfire-table',
  templateUrl: './wildfire-table.component.html',
  styleUrls: ['./wildfire-table.component.css']
})

export class WildfireTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['county', 'name', 'acresBurned', 'percentContained', 'isActive'];
  dataSource: MatTableDataSource<Wildfire> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private wildfireService: WildfireService) { }

  ngOnInit() {
    this.wildfireService.fetchWildfires().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}