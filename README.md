# Homework 17 -
## TODO:

1. install passport 2.0
  - npm install passport-google-oauth20
2. Create account via Google Developers Console
  - https://console.developers.google.com/
  - create a new project and give it a name
  - click oauth consent screen and external
  - Section: oauth consent screen
    - app name
    - logo
    - email

  - Section: Scopes
    - select the first 3 checkmarks
      - email
      - profile
      - openid

  - Section: Test user
    - enter in a gmail email address

  - click Credentials 
    - create a new credential and select oauth client id 
    - web application
    - name of app
    - URI: http://localhost:3000
    - Redirect URI: http://localhost:3000/auth/google/secrets

3. Configure Strategy 
  - require findOrCreate
  - require passport google strategy
  - add google strategy as a passport middleware

4. add buttons to trigger Google oauth
  -z