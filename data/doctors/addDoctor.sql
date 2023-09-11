INSERT INTO [dbo].[doctor]
    (
        [provider_id],
        [doctor_fname],
        [doctor_mname],
        [doctor_lname],
        [doctor_address],
        [doctor_city],
        [doctor_state],
        [doctor_zip],
        [doctor_ein],
        [doctor_upin],
        [doctor_ssn],
        [doctor_npi],
        [doctor_license],
        [doctor_fax],
        [doctor_email],
        [doctor_phone]
    )
VALUES (
    @provider_id,
    @doctor_fname,
    @doctor_mname,
    @doctor_lname,
    @doctor_address,
    @doctor_city,
    @doctor_state,
    @doctor_zip,
    @doctor_ein,
    @doctor_upin,
    @doctor_ssn,
    @doctor_npi,
    @doctor_license,
    @doctor_fax,
    @doctor_email,
    @doctor_phone
);
SELECT @doctor_id = SCOPE_IDENTITY()