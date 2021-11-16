import { AppointmentEntity } from "./AppointmentEntity";

export class AppointmentCalendar{
    private _acID:number;
    private _ownername:string;
    private _type:string;
    private _location:string;
    private _description:string;
    private _listAppointmentEntries:AppointmentEntity[];

    constructor(aeID:number, ownerid:string, type:string,
            location:string, description:string, listAppointmentEntries:AppointmentEntity[]){
        this._acID = aeID;
        this._ownername = ownerid;
        this._type = type;
        this._location = location;
        this._listAppointmentEntries = listAppointmentEntries;
        this._description = description;
    }   
    
    public getAcID():number {
        return this._acID;
    }
    public setAcID(adID:number) {
        this._acID = adID;
    }
    public getOwnerName():string {
        return this._ownername;
    }
    public setOwnerName(ownerid:string) {
        this._ownername = ownerid;
    }
    public getType():string {
        return this._type;
    }
    public setType(type:string) {
        this._type = type;
    }
    public getLocation():string {
        return this._location;
    }
    public setLocation(location:string) {
        this._location = location;
    }
    public getDescription():string {
        return this._description;
    }
    public setdescription(description:string) {
        this._description = description;
    }
    public getListAppointmentEntries():AppointmentEntity[]
    {
        return this._listAppointmentEntries;
    }
    public setListAppointmentEntries(listAppointmentEntries:AppointmentEntity[])
    {
        this._listAppointmentEntries = listAppointmentEntries;
    }

}
