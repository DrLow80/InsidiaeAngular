import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleListComponent {
  @Input() items: [];
  @Input() title: string;
  @Output() editItem = new EventEmitter();
  @Output() addItem = new EventEmitter();
}
