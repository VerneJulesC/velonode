SELECT [velo_user].[user_id],
       [velo_user].[username],
       STRING_AGG([velo_role].[rolename], ',')
        WITHIN GROUP (ORDER BY [velo_role].[rolename]) roles
FROM [dbo].[velo_user], [dbo].[velo_role]
WHERE [velo_user].[user_id] = [velo_role].[user_id]
GROUP BY [velo_user].[user_id], [velo_user].[username]