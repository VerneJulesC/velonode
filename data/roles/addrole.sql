INSERT INTO [dbo].[velo_role]
    (
        [user_id],
        [rolename],
        [doctor_id]
    )
VALUES (
    @user_id,
    @rolename,
    @doctor_id
)