SELECT 
  MAX([user_id]) user_id,
  CASE WHEN COUNT([user_id]) = 1 THEN 'Y' ELSE 'N' END vlogin,
  MAX([username]) username
FROM 
  [velo_user]
WHERE
  [username] = @username
  and [password] = @password;