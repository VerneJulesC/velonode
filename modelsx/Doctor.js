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