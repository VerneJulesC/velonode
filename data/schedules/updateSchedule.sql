UPDATE [dbo].[schedule] SET
       [sched_date] = @sched_date
       [patient_id] = @patient_id
       [sched_type] = @sched_type
       [location_desc] = @location_desc
       [location_coord] = @location_coord
       [destination_desc] = @destination_desc
       [destination_coord] = @destination_coord
       [status] = @status
       [last_modified] = @last_modified
    WHERE [sched_id] = @sched_id