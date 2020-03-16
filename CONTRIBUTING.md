# Contributing

**Working on your first Pull Request?** You can learn how from this _free_ series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Setting Up

### Getting Started - Quick Setup

Here is how to quickly get started. the [README](README.md) has more detailed setup instructions

1. Clone the Repo
```
  git clone git@github.com:penguin-academy/covid-19-py.git
```

2. cd into the repo and install the dependencies
```
cd covid-19-py
yarn
```

3. Start the dev server
```
yarn start
```

**OR** use Storybook to develop components
```
yarn run storybook
```

### Add environment variables

We are working with a .env file that makes environment variables accessible within the project.
Currently only variables for Firebase are required.

1. Get the Firebase config object
    
    Create a firebase project and get your Firebase config object from the project settings. Go to [https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup) to learn how to get your credentials.

2. Create a .env file in your project folder

3. Create the following keys
```
REACT_APP_apiKey=xxxxxxxxxxxx
REACT_APP_authDomain=xxxxxx.firebaseapp.com
REACT_APP_databaseURL=https://xxxxxxx.firebaseio.com
REACT_APP_projectId=xxxxxx
REACT_APP_storageBucket=xxxxxx.appspot.com
REACT_APP_messagingSenderId=xxxxxxxx
REACT_APP_appId=1:xxxxxx:web:xxxxxxx
```
(it is the same as your Firebase config object, just prefixd with REACT_APP_)

# The Contribution Process

It is really important for us that we all are aligned in the development process. Here is a short overview of the contribution process which will help the community to develop the app.

1. We welcome contributions for all issues. Please indicate your interest to avoid two double implementations. Issues labeld as `good first issue` are those that have minimal context and are well suited for new contributors to get started on the project.

2. Fork the repo

3. We are following [git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), with the following conventions (default):

- Branch name for production releases: **master**
- Branch name for "next release" development: **develop**

- Feature branches? feature/
- Release branches? release/
- Hotfix branches? hotfix/
- Support branches? support/

For Features:
```
# make sure you are branching from develop
git checkout develop
# create a new branch for enhancement
git checkout -b feature/issue-<#>
```

For Bugs
```
# make sure you are branching from master
git checkout master
# create a new branch for enhancement
git checkout -b hotfix/issue-<#>
```

4. Push to your fork. Write a [good commit message][http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html].

5. Submit a Pull Request to our repo to **develop** (if it is a feature). The pull request should explain what you did. Please make your pull requests as small and clear as possible.

Others will give constructive feedback.
This is a time for discussion and improvements, and making the necessary changes will be required before we can merge the contribution.
