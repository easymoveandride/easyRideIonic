import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mosque',
  templateUrl: './mosque.component.html',
  styleUrls: ['./mosque.component.scss'],
})
export class MosqueComponent implements OnInit {
  @Input() public name: string;
  @Input() public address: string;
  @Output() public select = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
