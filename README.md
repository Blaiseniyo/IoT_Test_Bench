# IOTT Test bench

This React + Flask application is an application that allows a user to load test a message broker and its publishers and subscribers.

## Installation

### Requirements

##### Backend

- Python 3

##### Frontend

- NodeJS
- NPM or Yarn

### Live Testing

- The backend is hosted on Heroku [on this link](https://iot-testbench.herokuapp.com/)
- This frontend is deployed on Netlify on [this link](https://iot-testbench.netlify.app/).

### Local Machine testing

You are going to have to setup both the backend.

##### Backend

- Clone [this](https://github.com/Blaiseniyo/IoT-Test-Bench-Backend) project from GitHub to your local machine
- Install required dependencies using `pip install -r requirements.txt`
- After that is done, now you can run the server using `python run.py`

##### Frontend

- Clone [this](https://github.com/Blaiseniyo/IoT_Test_Bench) project from GitHub to your Local machine
- In the project directory, install dependencies using `npm install`
- After successfully installing, run `npm run start` to run the project

##### Available endpoints

- `/connect`
- `/publisher/connect`
- `/subscriber/connect`
- `/test`
