import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/models/collection.models';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  library: Collection[] = this.libraryService.getLibrary();

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }

}
