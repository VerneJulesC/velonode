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