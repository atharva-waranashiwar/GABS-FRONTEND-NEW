
export class AppointmentEntity{
    private _aeID:number;
    private _appointmentCalendarID:number;
    private _ownerid:string;
    private _date:Date;
    private _isApproved:boolean;
    private _timeSlot:number;
    private _apointeeid:string;
    private _description:string;

    constructor(aeID:number,appointmentCalendarID:number, ownerid:string, 
            date:Date, isApproved:boolean, timeSlot:number,
            apointeeid:string, description:string){
        this._aeID = aeID;
        this._appointmentCalendarID = appointmentCalendarID;
        this._ownerid = ownerid;
        this._date = date;
        this._isApproved = isApproved;
        this._timeSlot = timeSlot;
        this._apointeeid = apointeeid;
        this._description = description;
    }   
    
    public getAeID():number {
        return this._aeID;
    }
    public setAeID(aeID:number) {
        this._aeID = aeID;
    }
    public getAppointmentCalendarID():number {
        return this._appointmentCalendarID;
    }
    public setAppointmentCalendarID(appointmentCalendarID:number) {
        this._appointmentCalendarID = appointmentCalendarID;
    }
    public getOwnerid():string {
        return this._ownerid;
    }
    public setOwnerid(ownerid:string) {
        this._ownerid = ownerid;
    }
    public getDate():Date {
        return this._date;
    }
    public setDate(date:Date) {
        this._date = date;
    }
    public getIsApproved():boolean {
        return this._isApproved;
    }
    public setIsApproved(aeID:boolean) {
        this._isApproved = aeID;
    }
    public getTimeSlot():number {
        return this._timeSlot;
    }
    public setTimeSlot(timeSlot:number) {
        this._timeSlot = timeSlot;
    }
    public getAppointeeID():string {
        return this._apointeeid;
    }
    public setAppointeeID(appointeeid:string) {
        this._apointeeid = appointeeid;
    }
    public getDescription():string {
        return this._description;
    }
    public setdescription(description:string) {
        this._description = description;
    }

}
