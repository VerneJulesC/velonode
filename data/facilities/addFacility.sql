INSERT INTO [dbo].[facility]
    (
        [facility_name],
        [facility_doctor_id],
        [facility_doctor],
        [facility_address],
        [facility_coordinates],
        [facility_city],
        [facility_state],
        [facility_zip],
        [facility_ein],
        [facility_ssn],
        [facility_npi],
        [facility_fax],
        [facility_email],
        [facility_phone]
    )
VALUES (
    @facility_name,
    @facility_doctor_id,
    @facility_doctor,
    @facility_address,
    @facility_coordinates,
    @facility_city,
    @facility_state,
    @facility_zip,
    @facility_ein,
    @facility_ssn,
    @facility_npi,
    @facility_fax,
    @facility_email,
    @facility_phone
);
SELECT @facility_id = SCOPE_IDENTITY()