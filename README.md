# IP Locator service

This service helps you store the geolocation information of incoming HTTP requests.

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
