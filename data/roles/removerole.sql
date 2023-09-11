DELETE FROM [dbo].[velo_role]
WHERE [user_id] = @user_id
  AND [rolename] = @rolename