import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    speed: number = 0;
    direction: string = 'Forward';

    pullCord(type: string) {
        if (type === 'speed') {
            if (this.speed < 3) {
                this.speed++;
            } else {
                this.speed = 0;
            }
        } else if (type === 'direction') {
            this.direction =
                this.direction === 'Forward' ? 'Reverse' : 'Forward';
        }
    }
}
