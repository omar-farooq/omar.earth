---
title: 'Cava background'
date: '2025-06-29'
backgroundImage: 'cava.jpg'
shortDescription: 'Setting cava as a background with hyprland'
---

### What it is ###

An audio visualizer that shows up as part of your desktop background.

This guide may be of use to anyone that wants to play 'pimp my pc' but it doesn't have any other practical purposes.

### Setup ###

The relevant setup in case of replication:

- Arch Linux (operating system)

- Alacritty (terminal)

- Hyprland (window manager)

- Cava (audio visualizer)


### Potential issues to overcome ###

- When using Hyprland, the background of translucent applications will bake in a blurred image of your desktop wallpaper in the background of the window. An example is Alacritty where if the opacity of Alacritty is set to less than 1 then a blurring effect will automatically apply. The blurring effect means that you can't see anything that is actually in the background. 

The reason this is done by default is to save resources. If resource isn't a concern then we'll disable this.

- In my case, I just want cava to run on a single monitor - my secondary monitor (or primary monitor for coding where I primarily use the terminal). If you want it on every monitor then you will need to modify the script that turns cava on when the monitor is on to basically turn cava on when any monitor is turned on.

### Filesystem structure ###

To follow along it helps to know my directory structure for my configuration files which [can be found here](https://github.com/omar-farooq/dotfiles/tree/main/.config). It should be worth noting that on my actual pc there is a symlink from ~/.config/dir to ~/dotfiles/.config/dir

It may also help to know that I used the [ml4w dotfiles](https://github.com/mylinuxforwork/dotfiles) to get started. I highly recommend if you want to save time on your configuration (i.e. I made a custom build a while ago but it got too much effort to complete).

### How to get this to work ###

The magic plugin is hyprwinwrap. To install it visit the github page and follow the latest instructions: [click here](https://github.com/hyprwm/hyprland-plugins)

Once it's installed, we need to make sure the plugins load every time we start hyprland. Add this to the end of ~/.config/hypr/conf/autostart.conf

<code>
# reload plugins
exec-once = hyprpm reload

# autostart cava
exec-once = ~/.config/hypr/scripts/manage-cava.sh
</code>

It requires a few additional code changes.

The first is in ~/.config/alacritty and create a file called 'cava.toml'. Add the following:

<code>
[window]
opacity = 0.0
[window.padding]
x = 0
y = 0
</code>

The next is in alacritty.toml (the main config file for alacritty). I set the opacity to 0.92 so that I can still read the text but the effect is similar to a 0.7 opacity with a blurred background like I previously had:

<code>
[window]
opacity = 0.92
</code>

The next few changes are in the hypr config. Mine is separated out into separate files, but the configuration changes should be made within ~/.config/hypr/conf.

In my case, the changes were made in ~/.config/hypr/conf/windowrules/default.conf where I added the following line to ensure that cava only runs on the monitor connected to the DP-1 port.

`windowrule = monitor DP-1, class:^(alacritty-cava-bg)$`

You can use the following command to list your monitors:

`hyprctl monitors`

The final change in ~/.config/hypr/conf/ is in custom.conf where I added the following to make sure the plugin takes effect on any windows with the class alacritty-cava-bg and, while we're here, we'll add the general rule for all Alacritty windows to disable the blurring as mentioned previously:

<code>
plugin {
    hyprwinwrap {
        class = alacritty-cava-bg
    }
}

windowrule = noblur, class: ^(Alacritty)$
</code>

The next is to add scripts into ~/.config/hypr/scripts/cava.sh:

<code>
#!/bin/sh
sleep 1 && cava
</code>

and [~/.config/hypr/scripts/manage-cava.sh](https://github.com/omar-farooq/dotfiles/blob/main/.config/hypr/scripts/manage-cava.sh) which I've linked to as it's too large.

Be sure to change references to DP-1 with the correct monitor port and the home directory location and that should be that.
