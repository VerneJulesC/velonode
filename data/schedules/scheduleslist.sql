SELECT [sched_id],
       [sched_date],
       [patient_id],
       [sched_type],
       [location_desc],
       [location_coord],
       [destination_desc],
       [destination_coord],
       [status],
       [last_modified],
       '' rowclass,
       0 filtered
FROM [dbo].[schedule]