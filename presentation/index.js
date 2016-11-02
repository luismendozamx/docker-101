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
              Docker + Node.js
            </Heading>
            <Link href="https://twitter.com/luismendozamx">
              <Text bold caps textColor="tertiary">Luis Mendoza</Text>
            </Link>
            <Link href="https://twitter.com/eventloopmx">
              <Text textSize="1.5em" textColor="secondary" margin="50px 0px 0px" bold>@ Eventloop, noviembre 2016, CDMX</Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" notes="You can even put notes on your slide. How awesome is that?">
            <Appear fid="1">
              <div>
                <Heading size={2} caps fit textColor="primary" textFont="primary">
                  @luismendozamx
                </Heading>
                <Text bold caps margin="20px 0 0 0" textColor="tertiary">GitHub | Twitter | Instagram </Text>
              </div>
            </Appear>
            <Appear fid="2">
              <Text bold italic margin="40px 0 0 0" textColor="primary">Full-stack developer</Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Appear fid="1">
              <Image src={images.logoGbm.replace("/", "")} margin="0 auto 40px auto" display="block" height="200px"/>
            </Appear>
            <Appear fid="2">
              <Image src={images.logoInvestifyGray.replace("/", "")} margin="40px auto 0 auto" display="block" height="100px"/>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Docker + Node.js
            </Heading>
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

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <Text bold caps margin="20px 0 0 0" textColor="primary">App de Node.js</Text>
              <List>
                <Appear><ListItem>ES6</ListItem></Appear>
                <Appear><ListItem>Express</ListItem></Appear>
                <Appear><ListItem>Mongoose</ListItem></Appear>
                <Appear><ListItem>Gulp + Babel</ListItem></Appear>
                <Appear><ListItem>Mocha + Chai</ListItem></Appear>
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
              { loc: [0, 26] },
              { loc: [0, 1] },
              { loc: [2, 3] },
              { loc: [4, 6] },
              { loc: [7, 8] },
              { loc: [9, 14] },
              { loc: [15, 19] },
              { loc: [20, 26] }
            ]}
          />

          <Slide transition={["slide"]} bgColor="primary">
            <div>
              <Heading size={2} fit textColor="secondary" textFont="tertiary">
                $ docker build
              </Heading>
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
              $ docker-compose up
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit textColor="secondary" textFont="tertiary">
              $ docker-compose run node-docker npm run test
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              ¿Cómo diablos pongo esto en producción?
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit textColor="secondary" textFont="tertiary">
              $ docker push
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              CI/CD con Jenkins
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="markup"
            code={require("raw!../assets/deploy.sh")}
            ranges={[
              { loc: [0, 13] },
              { loc: [0, 1] },
              { loc: [2, 10] },
              { loc: [11, 13] }
            ]}
          />

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <div>
              <Text bold caps margin="20px 0 0 0" textColor="primary">Opciones</Text>
              <List>
                <Appear><ListItem>DCOS / Apache Mesos</ListItem></Appear>
                <Appear><ListItem>Kubernetes</ListItem></Appear>
                <Appear><ListItem>Docker Swarm & cloud.docker.com</ListItem></Appear>
                <Appear><ListItem>Otros</ListItem></Appear>
              </List>
            </div>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.logoInvestifyWhite.replace("/", "")} margin="40px auto 0 auto" display="block" height="100px"/>
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
