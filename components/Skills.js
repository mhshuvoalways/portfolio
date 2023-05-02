import { Element } from "react-scroll";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import JS from "../public/skills/js.png";
import Reactjs from "../public/skills/reactjs.png";
import Nextjs from "../public/skills/nextjs.png";
import Redux from "../public/skills/redux.png";
import HTML from "../public/skills/html.png";
import CSS from "../public/skills/css.png";
import Tailwind from "../public/skills/tailwindcss.png";
import Bootstrap from "../public/skills/bootstrap.png";
import Sass from "../public/skills/sass.png";
import Express from "../public/skills/expressjs.png";
import Nodejs from "../public/skills/nodejs.png";
import Prisma from "../public/skills/prisma.png";
import Postgres from "../public/skills/postgresql.png";
import ReactNative from "../public/skills/reactnative.png";
import Mongoose from "../public/skills/mongoose.png";
import Mongodb from "../public/skills/mongodb.png";
import MySQL from "../public/skills/mysql.png";
import FramerMotion from "../public/skills/framermotion.png";
import TypeScript from "../public/skills/typescript.png";
import MaterialUI from "../public/skills/materialui.png";
import StyleComponent from "../public/skills/styledcomponent.png";
import Wordpress from "../public/skills/wordpress.png";
import Webpack from "../public/skills/webpack.png";
import EasyPeasy from "../public/skills/easypeasy.png";
import Server from "../public/skills/server.png";
import Git from "../public/skills/git.png";
import GitHub from "../public/skills/github.png";
import VSCode from "../public/skills/vscode.png";
import Slack from "../public/skills/slack.png";
import ChromeDev from "../public/skills/cromedev.png";
import NPM from "../public/skills/npm.png";
import Yarn from "../public/skills/yarn.png";
import Figma from "../public/skills/figma.png";
import XD from "../public/skills/xd.png";
import Postman from "../public/skills/postman.png";

const Skillls = () => {
  return (
    <Element className="my-container" name="skills">
      <p className="section-title">What I Am Good At</p>
      <Fade right>
        <div className="space-y-20">
          <div>
            <p className="text3 font-semibold border-secondary border-2 tracking-widest w-full sm:w-4/12 lg:w-3/12 px-5 mx-auto py-1 rounded text-center">
              EXPERTISE
            </p>
            <div className="flex gap-8 justify-center flex-wrap mt-10 items-end">
              <div>
                <Image src={JS} alt={JS} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">JavaScript</p>
              </div>
              <div>
                <Image src={Reactjs} alt={Reactjs} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Reactjs</p>
              </div>
              <div>
                <Image src={Nextjs} alt={Nextjs} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Nextjs</p>
              </div>
              <div>
                <Image src={Redux} alt={Redux} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Redux</p>
              </div>
              <div>
                <Image
                  src={EasyPeasy}
                  alt={EasyPeasy}
                  className="w-14 mx-auto"
                />
                <p className="mt-3 tracking-widest text-center">Easy Peasy</p>
              </div>
              <div>
                <Image src={HTML} alt={HTML} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">HTML</p>
              </div>
              <div>
                <Image src={CSS} alt={CSS} className="w-11 mx-auto" />
                <p className="mt-3 tracking-widest text-center">CSS</p>
              </div>
              <div>
                <Image src={Tailwind} alt={Tailwind} className="w-14 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Tailwind</p>
              </div>
              <div>
                <Image
                  src={Bootstrap}
                  alt={Bootstrap}
                  className="w-14 mx-auto"
                />
                <p className="mt-3 tracking-widest text-center">Bootstrap</p>
                <small>Reactstrap, React Bootstrap</small>
              </div>
              <div>
                <Image src={Sass} alt={Sass} className="w-14 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Sass</p>
              </div>
              <div>
                <Image src={Express} alt={Express} className="w-14 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Expressjs</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text3 font-semibold border-secondary border-2 tracking-widest w-full sm:w-4/12 lg:w-3/12 px-5 mx-auto py-1 rounded text-center">
              COMFORTABLE
            </p>
            <div className="flex gap-8 justify-center flex-wrap mt-10 items-end">
              <div>
                <Image src={Nodejs} alt={Nodejs} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Nodejs</p>
              </div>
              <div>
                <Image src={Prisma} alt={Prisma} className="w-11 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Prisma</p>
              </div>
              <div>
                <Image src={Mongoose} alt={Mongoose} className="w-14 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Mongoose</p>
              </div>
              <div>
                <Image src={Postgres} alt={Postgres} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">PostgreSQL</p>
              </div>
              <div>
                <Image src={Mongodb} alt={Mongodb} className="w-14 mx-auto" />
                <p className="mt-3 tracking-widest text-center">MongoDB</p>
              </div>
              <div>
                <Image src={MySQL} alt={MySQL} className="w-14 mx-auto" />
                <p className="mt-3 tracking-widest text-center">MySQL</p>
              </div>
              <div>
                <Image
                  src={ReactNative}
                  alt={ReactNative}
                  className="w-12 mx-auto"
                />
                <p className="mt-3 tracking-widest text-center">React Native</p>
              </div>
              <div>
                <Image
                  src={FramerMotion}
                  alt={FramerMotion}
                  className="w-11 mx-auto"
                />
                <p className="mt-3 tracking-widest text-center">
                  Framer Motion
                </p>
              </div>
              <div>
                <Image src={Server} alt={Server} className="w-14 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Server</p>
                <small>Heroku, Netlify, Vercel, Render, Cyclic</small>
              </div>
            </div>
          </div>
          <div>
            <p className="text3 font-semibold border-secondary border-2 tracking-widest w-full sm:w-4/12 lg:w-3/12 px-5 mx-auto py-1 rounded text-center">
              FAMILIAR
            </p>
            <div className="flex gap-8 justify-center flex-wrap mt-10 items-end">
              <div>
                <Image
                  src={TypeScript}
                  alt={TypeScript}
                  className="w-12 mx-auto"
                />
                <p className="mt-3 tracking-widest text-center">TypeScript</p>
              </div>
              <div>
                <Image
                  src={MaterialUI}
                  alt={MaterialUI}
                  className="w-14 mx-auto"
                />
                <p className="mt-3 tracking-widest text-center">MaterialUI</p>
              </div>
              <div>
                <Image
                  src={StyleComponent}
                  alt={StyleComponent}
                  className="w-32 mx-auto"
                />
                <p className="mt-3 tracking-widest text-center">
                  Styled Component
                </p>
              </div>
              <div>
                <Image src={Webpack} alt={Webpack} className="w-16 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Webpack</p>
              </div>
              <div>
                <Image
                  src={Wordpress}
                  alt={Wordpress}
                  className="w-16 mx-auto"
                />
                <p className="mt-3 tracking-widest text-center">Wordpress</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text3 font-semibold border-secondary border-2 tracking-widest w-full sm:w-4/12 lg:w-3/12 px-5 mx-auto py-1 rounded text-center">
              TOOLS
            </p>
            <div className="flex gap-8 justify-center flex-wrap mt-10 items-end">
              <div>
                <Image src={VSCode} alt={VSCode} className="w-11 mx-auto" />
                <p className="mt-3 tracking-widest text-center">VS Code</p>
              </div>
              <div>
                <Image src={Git} alt={Git} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Git</p>
              </div>
              <div>
                <Image src={GitHub} alt={GitHub} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">GitHub</p>
              </div>
              <div>
                <Image
                  src={ChromeDev}
                  alt={ChromeDev}
                  className="w-12 mx-auto"
                />
                <p className="mt-3 tracking-widest text-center">
                  Chrome Dev Tools
                </p>
              </div>
              <div>
                <Image src={Postman} alt={Postman} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Postman</p>
              </div>
              <div>
                <Image src={NPM} alt={NPM} className="w-16 mx-auto" />
                <p className="mt-3 tracking-widest text-center">NPM</p>
              </div>
              <div>
                <Image src={Yarn} alt={Yarn} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Yarn</p>
              </div>
              <div>
                <Image src={Figma} alt={Figma} className="w-8 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Figma</p>
              </div>
              <div>
                <Image src={XD} alt={XD} className="w-12 mx-auto" />
                <p className="mt-3 tracking-widest text-center">XD</p>
              </div>
              <div>
                <Image src={Slack} alt={Slack} className="w-14 mx-auto" />
                <p className="mt-3 tracking-widest text-center">Slack</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Element>
  );
};

export default Skillls;
