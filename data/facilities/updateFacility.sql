UPDATE [dbo].[facility] SET
       [facility_name] = @facility_name,
       [facility_doctor_id] = @facility_doctor_id,
       [facility_doctor] = @facility_doctor,
       [facility_address] = @facility_address,
       [facility_coordinates] = @facility_coordinates,
       [facility_city] = @facility_city,
       [facility_state] = @facility_state,
       [facility_zip] = @facility_zip,
       [facility_ein] = @facility_ein,
       [facility_ssn] = @facility_ssn,
       [facility_npi] = @facility_npi,
       [facility_fax] = @facility_fax,
       [facility_email] = @facility_email,
       [facility_phone] = @facility_phone
    WHERE [facility_id] = @facility_id