---
title: log files of note on Linux
publish_date: 2022-06-18 20:00:00
snippet: helpful log files for troubleshooting
---
`/var/log/syslog` or `/var/log/messages` Shows general messages and info regarding the system. Basically a data log of all activity throughout the global system.

`/var/log/auth.log` or `/var/log/secure` Keep authentication logs for both successful or failed logins, and authentication processes.

`/var/log/cron.log` keeps a record of Crond-related messages (cron jobs). Like when the cron daemon started a job. 

`/var/log/mail.log` is for mail server logs, handy for postfix, smtpd, or email-related services info running on your server. 

`/var/log/boot.log` start-up messages and boot info. 

`/var/log/kern` keeps in Kernel logs and warning info. Also useful to fix problems with custom kernels. 

`/var/log/dmesg` a repository for device driver messages. Use dmesg to see messages in this file. 

`/var/log/daemon.log` keeps track of running background services but doesn’t represent them graphically.