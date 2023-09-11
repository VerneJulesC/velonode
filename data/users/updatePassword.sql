UPDATE [dbo].[velo_user]
    SET [password] = @password
    WHERE [user_id] = @user_id