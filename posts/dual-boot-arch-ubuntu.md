---
title: 'Ubuntu & Arch dual boot'
date: '2024-08-18'
backgroundImage: 'ubuntuarch.jpeg'
shortDescription: 'Dual booting Arch Linux and Ubuntu'
---

### Why ###

I wanted to try Arch for development purposes. I've used it before but I wanted to see what the hyprland and neovim combination were like.

### My system before the install ###

I already had Arch installed but from years ago with Hyprland from the AUR. I wanted to do a fresh install so that I could repartition so that I have more swap space without using a swap file as well.

My main disk has an EFI boot partition, 600M swap, Arch Linux and then Ubuntu 22.04. I deleted the 600M swap and Arch Linux partitions and re-created them appropriately.

### Issues ###

- From the Arch install guide, there is a step to mount the boot partition when using EFI. This isn't optional if the partition already exists, you still have to do this. 

- For me, the boot partition created by Ubuntu was too small and it uses the vfat filesystem which can't be resized below a certain size. Luckily, the partitions following it were deleted so I was able to delete the partition with fdisk, re-create it with a bigger size. The contents were copied off the partition, the partition formatted with

`mkfs.vfat`

and then the contents moved back.

- The above then created a further issue as I have Windows installed on a second this from a while back when I needed it to do an exam. To remove Windows as the default boot, I couldn't do this from the BIOS or Windows, I had to use efibootmgr. First to get the boot order:

`sudo efibootmgr -v`

and then to remove Windows, which had boot order 0004 (also 0)

`sudo efibootmgr -b 4 -B`

- Despite the above, the Grub wasn't picking up the Arch Linux install. I installed boot-repair and found the following error in the logs:

`error: grub-install: error: unknown filesystem`

to fix this, I had to double check the filesystem actually gives the error

`grub-probe --target=fs --device /dev/sda1`

and then there is a filesystem parameter which prevents the Grub from picking it up

`tune2fs -l /dev/sda1 | grep metadata_csum_seed`

once removed

`tune2fs -O ^metadata_csum_seed /dev/sda1`

It gets picked up by the GRUB bootloader without any issues

`sudo update-grub`
