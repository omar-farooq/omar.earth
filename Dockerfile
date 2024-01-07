FROM node:20.7.0 AS base
RUN mkdir /app
WORKDIR /app

FROM base AS development
ENTRYPOINT ["/usr/local/bin/npm"]
CMD ["run", "dev"]

FROM base AS production
ENTRYPOINT ["/usr/local/bin/npm"]
CMD ["run", "build"]
