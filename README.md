# Personal website

## Build Instructions

This is a NextJS app. Bring the application up using docker compose up -d

## About

### The site

A basic blog site for tech challenges I face and want to document. Also a chance to utilise my skills with React, Terraform, AWS, GoLang

### Domain

The website is hosted on omar.earth which itself is registed via Cloudflare. DNS is controlled via CloudFlare.

### Hosting

The front end of the site (which is defined in this repo) is hosted in an AWS S3 bucket and is a static site with the contact form hosted on AWS lambda using a GoLang runtime. Emails are sent via AWS SES. The infrastructure side of things can be explored in my Terraform project
