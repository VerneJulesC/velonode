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