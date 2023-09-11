SELECT [velo_user].[user_id],
       [velo_user].[username],
       [velo_role].[rolename]
FROM [dbo].[velo_user], [dbo].[velo_role]
WHERE [velo_user].[user_id] = [velo_role].[user_id]