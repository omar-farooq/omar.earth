---
title: 'Hosting my site'
date: '2023-10-29'
series: 'recreating my website'
part: '2'
backgroundImage: 'clouds.jpg'
shortDescription: 'Configuring DNS and choosing hosting'
---

Hosting the site is a bit of fun. I decided to change hosting provider. I previously used a free provider who provided hosting for people setting up their personal sites, but I don't have any contact with them or control over anything other than cpanel. I had already decided I wanted to use a cloud provider for reliability, control and speed. My site was slow to load previously.

I already know that it's possible to host a static website on AWS S3, all I had to do was either make my site static or find a way to host a NextJS app at minimal costs.

After some research, I discovered AWS Amplify, which would mean that I don't have to force my site to be static, but the reviews of it seemed bad and it looks more expensive overall. For a site like mine, it seemed like overkill, although the pipeline is a nice touch.

Initially I had a plan to use AWS Route 53 for DNS, but a hosted zone is 50 cents a month so I quickly dropped out of that and opted for Cloudflare instead. They [even have a page explaining how to configure the DNS](https://developers.cloudflare.com/support/third-party-software/others/configuring-an-amazon-web-services-static-site-to-use-cloudflare/) which is the power of using AWS - there is a guide for even the simplest thing.

On the AWS side of things, I will set it up using Terraform (more on that later) but it simply entails creating a bucket called 'omar.earth', making it public, enabling static website hosting and possibly setting up Cloudfront for caching (although the amount of traffic I'm expected to get means that I will likely forego using Cloudfront - particularly as I'm serving content via Cloudflare anyway).

**Cost:**
As I'm on free tier, the cost of hosting my website is presently zero. The cost after that also looks to be close to zero as my data usage is so low and the size of the website is so small.

**Difficulty:**
Easy
