INSERT INTO [dbo].[patient]
    (
        [doctor_id],
        [patient_doctor],
        [patient_fname],
        [patient_mname],
        [patient_lname],
        [patient_address],
        [patient_coordinates],
        [patient_city],
        [patient_state],
        [patient_zip],
        [patient_bdate],
        [patient_sex],
        [patient_phone],
        [patient_email]
    )
VALUES (
    @doctor_id
    @patient_doctor,
    @patient_fname,
    @patient_mname,
    @patient_lname,
    @patient_address,
    @patient_coordinates,
    @patient_city,
    @patient_state,
    @patient_zip,
    @patient_bdate,
    @patient_sex,
    @patient_phone,
    @patient_email
);
SELECT @patient_id = SCOPE_IDENTITY()