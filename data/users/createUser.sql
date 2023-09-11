INSERT INTO [dbo].[velo_user]
    (
        [username],
        [password]
    )
VALUES (
    @username,
    @password
);
SELECT @user_id = SCOPE_IDENTITY()