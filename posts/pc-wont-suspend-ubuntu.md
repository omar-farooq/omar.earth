---
title: 'Ubuntu will not suspend'
date: '2024-11-30'
backgroundImage: 'insomniacomputer.jpeg'
shortDescription: 'How to fix an issue with Ubuntu not suspending'
---

### About ###

I found out the other day that my computer will not suspend for an unknown reason. I hoped it was a bug that would get fixed, so today I googled to see if anyone else has the same issue and it happens to just be me.

### Why this matters to you ###

In the past, when discussing using linux as the main OS with people, their issue is that "things don't always just work properly or if they break I don't know how to fix it". My experience as someone who has been both a Linux and Windows admin is that these types of issues are usually easier to fix on Linux if you know how, so I'll discuss my issue and how I went about resolving it and why it's not just about blaming the OS in this case.

### Finding the problem ###

A quick google search for "Ubuntu won't suspend" brings up some extremely vague results as you would expect. People have issues specific to their machine and herein lies the problem. If you don't know what to look for and you type this into a forum then you might get some frustration on the other side because it could be anything.

**Where to look**

The key is where to look and the answer is always log files. There are a few key places for logging: 

- /var/log/ (in particular syslog for this)

- systemd journal

**Creating the log entry**

This is easy - just type in date into the terminal to get the exact time and then hit suspend. I can then check the logs.

**What I found**

Not a lot in /var/log/syslog except for some vague errors. Doing ls -ltr in /var/log shows nothing else of interest popping up so I abandoned that route. The errors I saw in my syslog between suspending and resuming were:

```update-notifier[5559]: gtk_widget_get_scale_factor: assertion 'GTK_IS_WIDGET (widget)' failed```
```Cursor update failed: drmModeAtomicCommit: Invalid argument```

i.e. nothing that would cause the system to stop suspending.

I then checked the systemd boot journal using ```jouralctl -xb``` and found the problem highlighted in yellow:

```Error during inhibitor-delayed operation (already returned success to client): Unit nvidia-suspend.service not found.```

### Resolving ###

I did google this as you would expect to with anything. The internet is a great resource for collective knowledge and the whole point of it is to share knowledge, so I may as well use it rather than waste my own time coming to the same conclusions. Who knows, I may find out something new about my system.

One suggestion was to purge all installed nvidia packages, which was a good idea as I hadn't had an nvidia graphics card in over 2 years. ```sudo apt purge 'nvidia*'``` removed some excess packages but it didn't resolve the issue.

I searched for nvidia related strings and files in relevant places on my filesystem while simultaneously looking at other online resources and came across one on Github which suggested there were broken symlinks for nvidia-suspend in /etc/systemd. I searched for nvidia* in /etc/systemd and found the same broken symlinks and subsequently removed them.

The next step was to test suspend. It still didn't work, but I noticed that I'd missed out a step which was ```sudo systemctl daemon-reload```. It's not always required now apparently but in this case it was a necessary missing step. I suspended my computer successfully and went to do something else.

I noticed that an nvidia package had recently been marked as no longer required so it must have been found by the system and removed. I had upgraded from Ubuntu 22 to 24 recently but not had this issue in a couple of months. I'm going to put this down to an nvidia issue, but at least I am able to resolve this myself. Even if there was no information on the internet, I would have found the solution but it would have taken maybe a few minutes longer.

### Summary ###

It took about 20 minutes or so to resolve this issue. I hope this shows that problems can be fixed yourself when you have a plan. Log files are the best resource to go to when looking for a diagnosis.

I did use the terminal as it makes things a lot easier for me. I know part of the criticism of linux is that you're expected to use the terminal. It's not a requirement most of the time and an issue like this on Windows would perhaps get resolved with a reinstall or masked with a recovery tool. Perhaps you would find an executable which would claim to resolve this for you, but then the issue you have is that you could have accidentally downloaded a virus.
