# Credentials and deployment

Configure MONGO_URI in the environment or an untracked .env file. Use a database account scoped to the application database and restrict Atlas network access.

The previously tracked database credential must be revoked in Atlas before considering incident remediation complete. Deleting the file does not revoke the password or remove historical commits. Check database access logs, rotate any reused credentials, and coordinate history cleanup with repository users. Do not copy the old value into a PR, issue, log, or example.

Development servers must remain on loopback. Do not expose this unfinished application until authentication, redirect validation and rate limits are implemented.
