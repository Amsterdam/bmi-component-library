FROM node:14.16.1-alpine

RUN apk --no-cache add ca-certificates git

## Setup certificates for ADP/Motiv
COPY certificates/adp_rootca.crt /usr/local/share/ca-certificates/adp_rootca.crt
RUN chmod 644 /usr/local/share/ca-certificates/adp_rootca.crt \
  && update-ca-certificates --fresh

ENV NODE_EXTRA_CA_CERTS=/etc/ssl/certs/adp_rootca.pem

WORKDIR /var/service

COPY . .

RUN npm install
