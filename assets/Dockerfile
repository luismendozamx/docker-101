FROM node:6.7

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
ENV NPM_CONFIG_LOGLEVEL=warn

COPY npm-shrinkwrap.json $HOME/node-docker/

RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/node-docker
RUN npm install

USER root
COPY . $HOME/node-docker

RUN chown -R app:app $HOME/*

USER app

EXPOSE 4040

CMD ["npm", "start"]
