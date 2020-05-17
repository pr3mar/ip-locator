# IP Locator service

This service helps you store the geolocation information of incoming HTTP requests based on their IP addresses.
It takes into account the `X-Forwarded-For` header as well.

You can only access the service if you have an authorized token to do so.

## Setup

### `.env`
Create a `.env` file in the root of the repository and put the following content:
```shell script
MONGO_URL= # URL to your MongoDB instance with all authorization information, I used a MongoDB Atlas instance
JWT_SECRET= # your secret for JSON web token generation
JWT_EXPIRE_IN_MINUTES=5 # expiration time of your tokens
```
### Install and run
```shell script
# clone the repo
git clone git@github.com:pr3mar/ip-locator.git && cd ip-locator

# install the dependencies
npm install

# start the server
npm start
```

## Token generation
### Generate a secret

To be able to generate a token, you need to set the `JWT_SECRET` variable in your `.env` file.

To randomly generate a secret, in your terminal run the following command:
```shell script
openssl rand -hex 32
```

### Generate a token
To generate a new token, access `POST $BASE_URL:$PORT/api/token` with the following payload:
```shell script
{
  "secret": "<your secret>"
}
```
The generated token will expire after 5 minutes, or you can change the expiration time by setting `JWT_EXPIRE_IN_MINUTES` variable in your `.env` file.

### Request authorized endpoints

Set the `Authorization` header to:
```
Bearer <your token>
```
Otherwise you will not be able to access the content from those endpoints.


## Access the ip-locator

Once you have generated a token, you can access the `GET /api/status` endpoint.

The endpoint does not take any parameters. What it does:
 - extracts the invoker's IP address
 - looks it up in the database
    - if it doesn't exist, it gets geolocation data from a 3rd party service (https://ipapi.co/)
    - if it does, returns the cached data

## Heroku access

You can access the demo code which is deployed on Heroku on the following base URL: https://tokenized-ip-locator.herokuapp.com/

The code is automatically redeployed each time there is a commit on the `master` branch. 
