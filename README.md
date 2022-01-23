[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://app.circleci.com/pipelines/github/kareem19999/udagram)
# Documentation

This is a documentation for Udagram. Very slightly modified version of the initial code on github for verbose purposes.

Front-End Link: http://udagram-frontend123456.s3-website-us-east-1.amazonaws.com/
## Infrastructure Description
This project consists of 2 parts in terms of source code and 3 in terms of deploying infrastructure.

### Source Code
1. Front-End: This is the UI of the application which uses the back-end to send/fetch data to/from database.

![Front End](/Screenshots/S3_Frontend_Running.png)

2. Back-End: This connects to the database and contains CRUD operations. It also deals with signing_urls for image storage.
![Back End](/Screenshots/API_Running.png)
### Deploying Infrastructure 
1. Amazon S3: This is the storage servers for frontend, backend and the media.
2. Amazon RDS: This is the database used in this project.
3. Amazon Elastic Beanstalk: This is the service used to deploy the API in.

## App Dependencies
In addition to the dependencies listed in package.json for both front-end and API. AWS CLI and Elastic Beanstalk CLIs are required for deploying the projects.

## Pipeline Process
The pipeline is deployed on CircleCI and uses the following order. The top level commands are defined in top-level package.json:

1. Use node.js as the server.
2. Install AWS CLI.
3. Install EB CLI by first installing Python3.
4. Front-End Install: Installs dependencies for Front-End.
5. Back-End Install: Installs dependencies for Back-End.
6. Front-End Build: Builds the Front-End to be used for hosting.
7. Back-End Build: Builds the Back-End to be used for hosting.
6. Front-End Deploy: Deploys Front-End to S3.
7. Back-End Build: Deploys Back-End to Elastic Beanstalk.


![Architecture Diagram](/Architecture_Diagram.png)