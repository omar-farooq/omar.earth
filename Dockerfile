FROM node:20.7.0 AS base

FROM base AS development
RUN mkdir /app
WORKDIR /app
ENTRYPOINT ["/usr/local/bin/npm"]
CMD ["run", "dev"]
