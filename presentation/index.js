// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "../themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logoGbm: require("../assets/logo_gbm.jpg"),
  logoInvestifyWhite: require("../assets/logo-investify-white.png"),
  logoInvestifyGray: require("../assets/logo-investify.png"),
  containers: require("../assets/containers.jpg"),
  dockerWay: require("../assets/docker_way.png"),
  dockerCI: require("../assets/docker_ci.png"),
  vms: require("../assets/vms.png")
};

preloader(images);

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              Docker 101
            </Heading>
            <Link href="https://twitter.com/luismendozamx">
              <Text bold caps textColor="tertiary">Luis Mendoza</Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" notes="You can even put notes on your slide. How awesome is that?">
            <Link href="http://mendoza.io/docker-101">
              <Text textSize="1.5em" textColor="primary" margin="50px 0px 0px" bold>Slides: mendoza.io/docker-101</Text>
            </Link>
            <Link href="https://github.com/gbmcode/node-microservice-boilerplate">
              <Text textSize="1.5em" textColor="primary" margin="50px 0px 0px" bold>Código: github.com/gbmcode/node-microservice-boilerplate</Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.containers.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} fit caps lineHeight={1} textColor="secondary">
                ¿Contenedores?
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <Image src={images.vms.replace("/", "")} margin="0 20px" />
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <Image src={images.dockerWay.replace("/", "")} margin="0 20px" />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              ¿Y eso qué?
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary" textFont="primary">
                Dev => Test => Stage => Prod
              </Heading>
            </Appear>
            <Appear fid="1">
              <Text bold caps margin="20px 0 0 0" textColor="primary">1 solo contenedor</Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <div>
              <Heading size={2} fit textColor="secondary" textFont="tertiary">
                $ docker pull
              </Heading>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <Text bold caps margin="20px 0 0 0" textColor="primary">App de Node.js</Text>
              <List>
                <Appear><ListItem>ES6</ListItem></Appear>
                <Appear><ListItem>Express</ListItem></Appear>
                <Appear><ListItem>Joi</ListItem></Appear>
                <Appear><ListItem>Gulp + Babel</ListItem></Appear>
                <Appear><ListItem>Jest</ListItem></Appear>
              </List>
            </div>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit textColor="secondary" textFont="tertiary">
              $ npm start
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit textColor="secondary" textFont="tertiary">
              Dockerfile
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="markup"
            code={require("raw!../assets/Dockerfile")}
            ranges={[
              { loc: [0, 22] },
              { loc: [0, 2] },
              { loc: [3, 5] },
              { loc: [6, 10] },
              { loc: [11, 13] },
              { loc: [14, 17] },
              { loc: [18, 20] },
              { loc: [21, 22] }
            ]}
          />

          <Slide transition={["slide"]} bgColor="primary">
            <div>
              <Heading size={2} fit textColor="secondary" textFont="tertiary">
                $ docker build
              </Heading>
            </div>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <div>
              <Heading size={2} fit textColor="secondary" margin="80px 0 0 0" textFont="tertiary">
                $ docker run
              </Heading>
            </div>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit textColor="secondary" textFont="tertiary">
              docker-compose.yml
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="markup"
            code={require("raw!../assets/docker-compose.yml")}
            ranges={[
              { loc: [0, 22] },
              { loc: [0, 1] },
              { loc: [2, 3] },
              { loc: [4, 17] },
              { loc: [18, 22] }
            ]}
          />

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit textColor="secondary" textFont="tertiary">
              $ docker-compose build
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit textColor="secondary" textFont="tertiary">
              $ docker-compose up
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit textColor="secondary" textFont="tertiary">
              $ docker-compose run
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit textColor="secondary" textFont="tertiary">
              $ docker push
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <Image src={images.dockerCI.replace("/", "")} margin="0 20px" display="block" height="400" />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Gracias
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
