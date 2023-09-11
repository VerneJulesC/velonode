INSERT INTO [dbo].[schedule]
    (
        [sched_date],
        [patient_id],
        [sched_type],
        [location_desc],
        [location_coord],
        [destination_desc],
        [destination_coord],
        [status],
        [last_modified],
    )
VALUES (
    @sched_date,
    @patient_id,
    @sched_type,
    @location_desc,
    @location_coord,
    @destination_desc,
    @destination_coord,
    @status,
    @last_modified
);
SELECT @sched_id = SCOPE_IDENTITY()