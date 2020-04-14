import { Component, OnInit } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-example';
  update: boolean = false;
  joke: any;

  constructor(swUpdate: SwUpdate, private dataService: DataService) {
    swUpdate.available.subscribe(event => {
      this.update = true;
      setTimeout(() => {
        swUpdate.activateUpdate().then(() => document.location.reload());
      }, 2000)
    })
  }

  ngOnInit(): void {
    this.dataService.gimmejokes().subscribe((res) => {
      this.joke = res;
    })
  }

}
