import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[onlynumber]'
})
export class NumberOnlyDirective {
    private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
    private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home' ];

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', [ '$event' ])
    onKeyDown(evt: KeyboardEvent) {
        let keyCode = evt["keyCode"];
        // console.log(keyCode)
		if((keyCode >= 48 && keyCode <= 57) || keyCode == 8 || (keyCode >= 96 && keyCode <= 105) || keyCode == 110 || keyCode == 190){
			evt.returnValue = true;
		} else {
			evt.returnValue = false;
        }
        // if (this.specialKeys.indexOf(event.key) !== -1) {
        //     return;
        // }
        // let current: string = this.el.nativeElement.value;
        // let next: string = current.concat(event.key);
        // if (next && !String(next).match(this.regex)) {
        //     event.preventDefault();
        // }
    }
}