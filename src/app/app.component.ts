import { Component, AfterViewInit, OnInit } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { steps as defaultSteps, defaultStepOptions } from "./config";
import { ShepherdService } from "angular-shepherd";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ShepherdService]
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'angular-guided-tour';
  constructor(private readonly _shepherdService: ShepherdService) {}

  ngOnInit(): void {
   setTimeout(()=>{
    this.startTour();
   },1000)
  }

  ngAfterViewInit() {
    this._shepherdService.defaultStepOptions = defaultStepOptions;
    this._shepherdService.modal = true;
    this._shepherdService.addSteps(defaultSteps as any);
  }

  startTour() {
    this._shepherdService.start();
  }
}
