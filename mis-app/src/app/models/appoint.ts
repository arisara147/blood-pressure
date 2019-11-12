import { Time } from '@angular/common';

export interface Appoint {
    app_id: number;
    app_date: Date;
    app_time: Time;
    p_id: number;
    dr_id: number;
    p_name: string;
    dr_name: string;
}
