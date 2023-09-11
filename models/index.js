'use strict';

class VeloUser {
    constructor(user_id, username, password){
        this.user_id = user_id;
        this.username = username;
        this.password = password;
    }
    user_id;
    username;
    password;
    roles = [];
    rowclass = '';
    filtered = false;
}

class VeloRole {
    constructor(user_id, rolename, doctor_id){
        this.user_id = user_id;
        this.rolename = rolename;
        this.doctor_id = doctor_id;
    }
    user_id;
    rolename;
    doctor_id;
}
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

class Patient {
    constructor(
        patient_id, doctor_id, patient_doctor, patient_fname, patient_mname, patient_lname, patient_address, patient_coordinates, patient_city, patient_state, patient_zip, patient_bdate, patient_sex, patient_phone, patient_email
    ){
        this.patient_id = patient_id;
        this.doctor_id = doctor_id;
        this.patient_doctor = patient_doctor;
        this.patient_fname = patient_fname;
        this.patient_mname = patient_mname;
        this.patient_lname = patient_lname;
        this.patient_address = patient_address;
        this.patient_coordinates = patient_coordinates;
        this.patient_city = patient_city;
        this.patient_state = patient_state;
        this.patient_zip = patient_zip;
        this.patient_bdate = patient_bdate;
        this.patient_sex = patient_sex;
        this.patient_phone = patient_phone;
        this.patient_email = patient_email;
    }
    patient_id;
    doctor_id;
    patient_doctor;
    patient_fname;
    patient_mname;
    patient_lname;
    patient_address;
    patient_coordinates;
    patient_city;
    patient_state;
    patient_zip;
    patient_bdate;
    patient_sex;
    patient_phone;
    patient_email;
    rowclass = '';
    filtered = false;
} 

class Facility {
    constructor(facility_id, facility_name, facility_doctor_id, facility_doctor, facility_address, facility_coordinates, facility_city, facility_state, facility_zip, facility_ein, facility_ssn, facility_npi, facility_fax, facility_email, facility_phone){
        this.facility_id = facility_id;
        this.facility_name = facility_name;
        this.facility_doctor_id = facility_doctor_id;
        this.facility_doctor = facility_doctor;
        this.facility_address = facility_address;
        this.facility_coordinates = facility_coordinates;
        this.facility_city = facility_city;
        this.facility_state = facility_state;
        this.facility_zip = facility_zip;
        this.facility_ein = facility_ein;
        this.facility_ssn = facility_ssn;
        this.facility_npi = facility_npi;
        this.facility_fax = facility_fax;
        this.facility_email = facility_email;
        this.facility_phone = facility_phone;
    }

    facility_id;
    facility_name;
    facility_doctor_id;
    facility_doctor;
    facility_address;
    facility_coordinates;
    facility_city;
    facility_state;
    facility_zip;
    facility_ein;
    facility_ssn;
    facility_npi;
    facility_fax;
    facility_email;
    facility_phone;
    rowclass = '';
    filtered = false;
} 

class Doctor {
    contructor(doctor_id, provider_id, doctor_fname, doctor_mname, doctor_lname, doctor_address, doctor_city, doctor_state, doctor_zip, doctor_ein, doctor_upin, doctor_ssn, doctor_npi, doctor_license, doctor_fax, doctor_email, doctor_phone){
        this.doctor_id = doctor_id;
        this.provider_id = provider_id;
        this.doctor_fname = doctor_fname;
        this.doctor_mname = doctor_mname;
        this.doctor_lname = doctor_lname;
        this.doctor_address = doctor_address;
        this.doctor_city = doctor_city;
        this.doctor_state = doctor_state;
        this.doctor_zip = doctor_zip;
        this.doctor_ein = doctor_ein;
        this.doctor_upin = doctor_upin;
        this.doctor_ssn = doctor_ssn;
        this.doctor_npi = doctor_npi;
        this.doctor_license = doctor_license;
        this.doctor_fax = doctor_fax;
        this.doctor_email = doctor_email;
        this.doctor_phone = doctor_phone;
    }

    doctor_id;
    provider_id;
    doctor_fname;
    doctor_mname;
    doctor_lname;
    doctor_address;
    doctor_city;
    doctor_state;
    doctor_zip;
    doctor_ein;
    doctor_upin;
    doctor_ssn;
    doctor_npi;
    doctor_license;
    doctor_fax;
    doctor_email;
    doctor_phone;
    rowclass = '';
    filtered = false;
} 

const newUser = (user_id, username, password) => {
    return new VeloUser(user_id, username, password);
}

const newDoctor = (doctor_id, provider_id, doctor_fname, doctor_mname, doctor_lname, doctor_address, doctor_city, doctor_state, doctor_zip, doctor_ein, doctor_upin, doctor_ssn, doctor_npi, doctor_license, doctor_fax, doctor_email, doctor_phone) => {
    return new Doctor(doctor_id, provider_id, doctor_fname, doctor_mname, doctor_lname, doctor_address, doctor_city, doctor_state, doctor_zip, doctor_ein, doctor_upin, doctor_ssn, doctor_npi, doctor_license, doctor_fax, doctor_email, doctor_phone);
}

const newFacility = (facility_id, facility_name, facility_doctor_id, facility_doctor, facility_address, facility_coordinates, facility_city, facility_state, facility_zip, facility_ein, facility_ssn, facility_npi, facility_fax, facility_email, facility_phone) => {
    return new Facility(facility_id, facility_name, facility_doctor_id, facility_doctor, facility_address, facility_coordinates, facility_city, facility_state, facility_zip, facility_ein, facility_ssn, facility_npi, facility_fax, facility_email, facility_phone);
}

const newPatient = (patient_id, doctor_id, patient_doctor, patient_fname, patient_mname, patient_lname, patient_address, patient_coordinates, patient_city, patient_state, patient_zip, patient_bdate, patient_sex, patient_phone, patient_email) => {
    return new Patient(patient_id, doctor_id, patient_doctor, patient_fname, patient_mname, patient_lname, patient_address, patient_coordinates, patient_city, patient_state, patient_zip, patient_bdate, patient_sex, patient_phone, patient_email);
}

const newSchedule = (sched_id, sched_date, patient_id, sched_type, location_desc, location_coord, destination_desc, destination_coord, status, last_modified) => {
    return new Schedule(sched_id, sched_date, patient_id, sched_type, location_desc, location_coord, destination_desc, destination_coord, status, last_modified);
}

module.exports = {
    newUser,
    newDoctor,
    newFacility,
    newPatient,
    newSchedule
}