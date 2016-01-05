One Word Weather API
====================

# About

# Prerequisites

1. Node.js and NPM. You can either [install using your favorite package manager](https://nodejs.org/en/download/package-manager) (e.g. Homebrew on OS X or yum/apt-get on Linux) or [install the latest stable binary for your platform](https://nodejs.org/en/download/stable).

2. Git. Comes preinstalled on OS X and modern linuxes, or see [the git manual](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for advice on installing on your current platform.

3. Python version 2.7 or 3.4. Comes preinstalled on OS X, or see https://www.python.org/downloads for installation options.

4. An Amazon Web Services account. You can create one [here](https://www.amazon.com/ap/signin).

5. A Twitter account. You can create one [here](https://twitter.com/signup) if you don't already have one.

# Local Installation

1. Clone this repository

    ```
    $ git clone https://github.com/ulfmagnetics/one_word_weather_api.git
    ```

2. Install Node.js packages

    ```
    $ npm install
    ```

3. Install and configure the AWS Elastic Beanstalk CLI.
   (For more detailed installation instructions see [Amazon's documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html).)

    ```
    $ sudo pip install awsebcli

    Collecting awsebcli
      Downloading awsebcli-3.6.2.tar.gz (171kB)
      ... etc ...

    $ eb --version
    EB CLI 3.6.2 (Python 2.7.9)

    $ eb init
    ```

4. Authorize the Feed Reader app from the [Twitter app dashboard](https://apps.twitter.com/app/9326497)

5. Copy `env.js.example` to `env.js` and fill in the requested API tokens and secrets from Twitter's dashboard.

6. Run the app locally.

    ```
    npm start
    ```

# Deploying to Elastic Beanstalk

This section is still TODO.
