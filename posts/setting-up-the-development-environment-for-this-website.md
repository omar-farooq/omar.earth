---
title: 'Setting up my development environment'
date: '2023-10-15'
---

When re-creating this website, the first thing I had to consider is how I'm going to develop the website.

The choice of IDE is absolutely preferential. For myself, I use vim as I'm used to it and I've never had any issues using it before with a terminal multiplexer (tmux). Others may choose VSCode and that's fine too. In fact, it's one I've been meaning to try a bit more for the extensions.

Instead of installing anything locally, I've installed my application with the help of docker. To initialize a project without first installing npm, I was able to pull the docker image, create a temporary container and run npx install using the following command:

docker run -v $PWD:/app -w="/app" --user $(id -u):$(id -g) --rm -it node:latest npx create-next-app@latest

To break this down:

`-v $PWD:/app` means that it will bind mount the current directory to the app directory inside of the container.

the --rm flag means that the container won't persist after we run this command. Executing `docker ps -a` won't display anything

`-w="/app"` chooses the working directory in the container as /app

`--user $(id -u):$(id -g)` may not be necessary depending on your system and permissions. This essentially sets the user to have the same user and primary group ids as the user on your host machine, which is useful for creating files using bind mounting and persisting permissions between the host and container.

`--it` allows docker to read your inputs in an interactive shell

`node:latest` the latest version of node was used to start the project

`npx create-next-app@latest` the command used to create the project

Once that had been done, I was able to create a Dockerfile for my application, place it in the root of the project (see Github for the Dockerfile) and build it using `docker build . -t frontend`

Once that has been completed, I can run the image in a container using the command `docker run -p 127.0.0.1:3000:3000 -v $PWD:/app --user $(id -u):$(id -g) -it frontend`
