import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts', //identify component, app- prefix is convention
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() //@Input oznacza że wartość będzie przekazana z parent componentu (tutaj product list component)
  product;

  @Output() //output przekazuje event do parenta, a emitter odpowiada za emitowanie eventu, kiedy property zostanie zmienione
  notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}