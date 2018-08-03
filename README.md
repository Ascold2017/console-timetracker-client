# console-timetracker-client

Simple console client for timetracker-server (see https://github.com/Ascold2017/simple-timetracker-server ), building-up on NodeJs, with event-driven architecture. Using standart event library, ES6 syntax.

Console application have 6 main scenes:
1. Login
2. Choose action (show task list, or show user stat) - choosing by enter
3. Task list (choose task by enter)
4. User stat list by task names. Displayed total timestamp in user-friendly format, and work timeline
5. Choose task action - start timetracker or escape to 2)
6. Timetracker - displayed work timer of choosed task. Stop by enter key. Escape to 3) by esc key.
