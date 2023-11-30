---
title: 'Contact Me Form'
date: '2023-11-30'
series: 'recreating my website'
part: '3'
backgroundImage: 'mailrain.jpeg'
shortDescription: 'Setting up the Contact form on my website'
---

The contact form was the hardest part of my website. Setting up a lambda using GoLang was straightforward and configuring it to send emails via SES was also easy. In fact, getting a lambda function url that I can point to in order to invoke the function was also easy. So what was hard?

### The easy parts ###

- Sending an email using SES. There is a full example [here](https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/ses-example-send-email.html) from AWS on how to do this using their runtime. All I had to do was create my function based on their example.

- Creating a lambda function. There is a guide [here](https://docs.aws.amazon.com/lambda/latest/dg/golang-handler.html) on using the handler. There is also a gateway response that can be returned which is detailed in their github page.

- Creating a container image and deploying to ECR was also straightforward using their documentation.

### Needed some work ###

Testing the image. It seemed to me from the wording in the documentation [here](https://docs.aws.amazon.com/lambda/latest/dg/go-image.html) like their runtime would be included as part of the amazon linux image, which wasn't the case. I had to download it in the Dockerfile in order to test it. To build this test, I had to create a test image using 

`docker build --platform linux/amd64 --target=test -t contact-form:test`

and then run the image. I then had to test from my local nextjs react app which wasn't hard once I got the hang of it.

### difficulties ###

For me, the hard part was securing the lambda. The first thing I looked into was function urls, but there's an obvious flaw with them in this scenario.

If someone had decided to set up a script to invoke my lambda continuously via the function url, I'd not only receive lots of emails, but a very high bill for the number of invocations and the number of emails.

The alternative was to set up an api gateway and look at securing it.

At first I tried the http gateway recommended by AWS for 'most use cases'. However, this was essentially like a function url but with an added cost of going through a gateway. There's not any way to secure it.

Lastly is the 'most expensive option' provided that no one hammers your endpoint. The REST api gateway allowed me to "secure" my endpoint with an api key, which itself isn't secure as I have to reference it from a static website, but allows me to create a usage plan to limit the number of calls that can be made to my api on a daily basis.
