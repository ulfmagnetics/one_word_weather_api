One Word Weather API
====================

# About

This is a simple Node.js app that connects to the Twitter API and pulls the latest tweet from (by default) the @onewordsfwthr account's timeline.
In essence, it can give you a daily, single-word update on the weather in San Francisco, if that's something that you want :)

# Prerequisites

1. Node.js and NPM. You can either [install using your favorite package manager](https://nodejs.org/en/download/package-manager) (e.g. Homebrew on OS X or yum/apt-get on Linux) or [install the latest stable binary for your platform](https://nodejs.org/en/download/stable).

2. Git. Comes preinstalled on OS X and modern linuxes, or see [the git manual](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for advice on installing on your current platform.

3. Python version 2.7 or 3.4 and the `pip` package installer. Comes preinstalled on OS X, or see https://www.python.org/downloads for installation options.

4. An Amazon Web Services account, including an active access key ID and access key secret. You can create an account [here](https://www.amazon.com/ap/signin).

5. A working installation of the AWS Elastic Beanstalk CLI. For more detailed installation instructions see [Amazon's documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html).

6. A Twitter account and a fresh Twitter app from http://apps.twitter.com. Here's a [simple walkthrough](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&ved=0ahUKEwj3rY3555XKAhUS0GMKHUhHD7kQFggxMAQ&url=http%3A%2F%2Fiag.me%2Fsocialmedia%2Fhow-to-create-a-twitter-app-in-8-easy-steps%2F&usg=AFQjCNGh6hveEJCPHVQuYm6czsKJ1OK1tA&sig2=vG3UYcC7fSQvroaLjVuAPg&bvm=bv.110151844,d.cGc)
   of the process.

# Local Installation

1. Clone this repository

    ```
    $ git clone https://github.com/ulfmagnetics/one_word_weather_api.git
    ```

2. Install Node.js packages

    ```
    $ npm install
    ```

3. Copy `env.js.example` to `env.js` and fill in the requested API tokens and secrets from your Twitter app's "Keys and Access Tokens" tab.

4. Run the app locally.

    ```
    $ npm start

    > one_word_weather_api@1.0.0 start /Users/john/src/one_word_weather_api
    > node app.js

    API app listening at http://:::3000
    ```

5. Test using curl:

    ```
    $ curl http://localhost:3000/word
    Niño-ing.
    ```

# Deploying to Elastic Beanstalk

This section is still TODO.
