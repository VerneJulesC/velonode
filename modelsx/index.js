'use strict';

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