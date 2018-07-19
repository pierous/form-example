import { NativeDateAdapter } from "@angular/material";


export class AppDateAdapter extends NativeDateAdapter {

    format(date: Date, displayFormat: Object): string {

        // if (displayFormat === 'input') {

            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        // }
        // console.log(date.toDateString());
        // return date.toDateString();
    }

    parse(value: any): Date {
        return new Date(value);
    }

    // private _2digit(n: number) {
    //     return ('00' + n).slice(-2);
    // }
}