# EBugMe

The EBugMe Web Application was created to grant R2H Apprentices a glimpse of what their day-to-day will look like as Software Engineers. Sometimes the codebases we work on do not start from the bottom. It's important to know how to read another engineer's code and then provide your own solution on top of theirs.

The EBugMe Web Application contains a few different challenges in the form of tickets. The apprentices will be tasked with finding the solution for each of these tickets and then pushing up their change to repair the App! 

To view how the app is supposed to work after the repair. (<a href="https://github.com/joshuaeup/ebugme/blob/main/completed-example.mov">See The Completed Example</a>)


### Workflow Steps

1. Split up into 5 person pods and designate the tech lead of the group.
2. Tech lead forks the ebugme repo, Then adds the other pod members as contributors to the forked repo via GitHub settings.
3. All pod members now clone the tech lead's forked repo. (<a href="https://github.com/joshuaeup/ebugme#getting-started">See Getting Started Steps</a>)
4. The tech lead starts it off by sharing their screen and creating a branch called <b>ticket-1</b>.
5. All pod members collaborate to solve the first ticket outlined in the app.
6. Once the ticket is complete, the tech lead pushes up the code and marks the pull request as ready for review.
7. All pod members review the Pull Request. If everything looks good, and no pod member has additional comments/suggestions to leave on the Pull Request then merge the Pull Request to the Main branch. 🚀 Then all pod members <b>pull down the latest code from the main branch</b> to avoid merge conflicts. 😬

Repeat steps 4-7 for the remaining tickets (next pod member shares their screen and names the new branch <b>ticket-2</b>)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine

### Prerequisites

-   Must be running npm version 7 or newer
    ```sh
    npm install -g npm@8.5.0
    ```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/joshuaeup/ebugme.git
    ```
2. Open project
    ```sh
    cd ebugme
    ```
3. Install NPM packages
    ```sh
    npm install
    ```
4. Run the app

    ```sh
    npm run start
    ```

    Note: The Application's styling was applied using SASS. If you would like to update any styling you must ensure you are first running the Live Sass Compiler

    <b>This can be installed as an extension in vscode:</b>

    ```sh
    https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass
    ```
    
    
## Authors

-   **Artea Wright** - _Software Engineer_ - Coding Apprenticeship Cohort 8 Alumni
-   **Frederick Evans** - _Software Engineer_ - Coding Apprenticeship Cohort 8 Alumni
-   **Joshua Proctor** - _Software Engineer_ - Coding Apprenticeship Cohort 8 Alumni
