UPDATE [dbo].[patient] SET
        [patient_doctor] = @patient_doctor,
        [patient_fname] = @patient_fname,
        [patient_mname] = @patient_mname,
        [patient_lname] = @patient_lname,
        [patient_address] = @patient_address,
        [patient_coordinates] = @patient_coordinates,
        [patient_city] = @patient_city,
        [patient_state] = @patient_state,
        [patient_zip] = @patient_zip,
        [patient_bdate] = @patient_bdate,
        [patient_sex] = @patient_sex,
        [patient_phone] = @patient_phone,
        [patient_email] = @patient_email
    WHERE [patient_id] = @patient_id