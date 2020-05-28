import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {
    AutoPositionStrategy,
    CloseScrollStrategy,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxDropDownComponent, ISelectionEventArgs,
    VerticalAlignment
} from 'igniteui-angular';
import {IServerDropdownOption} from '../../models/server-dropdown';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.css']
})
export class DropdownSelectComponent implements OnInit {

    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    @Input() title: string;
    @Input() options: IServerDropdownOption[] = [];

    @Output() optionSelected = new EventEmitter<IServerDropdownOption>();

    // tslint:disable-next-line: variable-name
    private _overlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new AutoPositionStrategy(),
        scrollStrategy: new CloseScrollStrategy()
    };

    constructor() { }

    public ngOnInit() { }

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }

    onSelect($event: ISelectionEventArgs) {
        this.optionSelected.emit($event.newSelection.value);
    }
}
