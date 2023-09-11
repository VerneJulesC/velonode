UPDATE [dbo].[doctor] SET
       [provider_id] = @provider_id,
       [doctor_fname] = @doctor_fname,
       [doctor_mname] = @doctor_mname,
       [doctor_lname] = @doctor_lname,
       [doctor_address] = @doctor_address,
       [doctor_city] = @doctor_city,
       [doctor_state] = @doctor_state,
       [doctor_zip] = @doctor_zip,
       [doctor_ein] = @doctor_ein,
       [doctor_upin] = @doctor_upin,
       [doctor_ssn] = @doctor_ssn,
       [doctor_npi] = @doctor_npi,
       [doctor_license] = @doctor_license,
       [doctor_fax] = @doctor_fax,
       [doctor_email] = @doctor_email,
       [doctor_phone] = @doctor_phone
    WHERE [doctor_id] = @doctor_id