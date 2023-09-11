class Schedule {
    contructor(
        sched_id, sched_date, patient_id, sched_type, location_desc, location_coord, destination_desc, destination_coord, status, last_modified
    ){
        this.sched_id = sched_id;
        this.sched_date = sched_date;
        this.patient_id = patient_id;
        this.sched_type = sched_type;
        this.location_desc = location_desc;
        this.location_coord = location_coord;
        this.destination_desc = destination_desc;
        this.destination_coord = destination_coord;
        this.status = status;
        this.last_modified = last_modified;
    }
    sched_id;
    sched_date;
    patient_id;
    sched_type;
    location_desc;
    location_coord;
    destination_desc;
    destination_coord;
    status;
    last_modified;
    rowclass = '';
    filtered = false;
} 