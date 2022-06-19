import React from "react";
import { Grid, Header, Image, Icon, Card, Reveal } from "semantic-ui-react";
import me from "../data/me.png";
import { access, data, project, projects, schoolsx } from "../data";

export default function Info() {
  return (
    <Grid divided>
      <Grid.Column computer={3} mobile={16} tablet={5} className="profile">
        {/* Side Profile Information */}
        <div className="info">
          <Image src={me} size="small" centered style={{ zIndex: "5000" }} />
          <Header
            textAlign="center"
            content="Debrah, Bill Clinton"
            subheader="Fullstack Developer"
          />
          <div className="social">
            <a
              title="@bill-greatness - Github"
              href="https://github.com/bill-greatness"
              style={{ color: "black" }}
            >
              <Icon name="github" size="large" />
            </a>
            <a
              title="Debrah Bill Clinton - StackOverflow"
              href="https://stackoverflow.com/users/10958531/bill-greatness"
            >
              <Icon name="stack overflow" color="orange" size="large" />
            </a>
            <a
              title="Debrah Bill Clinton - Linkedin"
              href="https://linkedin.com/in/bill-clinton-debrah-086278196"
            >
              <Icon name="linkedin" color="blue" size="large" />
            </a>
            <a
              title="Preview CV"
              href="https://1drv.ms/b/s!Aq4jxV6Tax9ckyH885cKzglXwkx4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="file pdf" color="teal" size="large" />
            </a>
          </div>
        </div>

        <div className="desc">
          <Header
            content="About Me"
            subheader="I write, review, debug and design code patterns. Frequently work with React & Nodejs.
        I love to mentor kids code!"
          />

          {/* Some Brief Information */}

          {/* Tech Stack */}
          <Header content="Tech Stack" subheader="Tools I've been Using" />
          <Grid padded centered>
            {data.map((dt, idx) => (
              <Grid.Column key={idx} computer={5} mobile={5} tablet={5}>
                <Image avatar src={dt.img} alt={dt.item} title={dt.item} />
              </Grid.Column>
            ))}
          </Grid>
        </div>
      </Grid.Column>

      <Grid.Column computer={13} mobile={16} tablet={10} className="projects">
        {/*  Projects and Tags */}
        
        <Header
          content="My Projects"
          subheader="Concepts -> Ideas -> Products"
          inverted
        />
        <Grid >
          {/* Logic Schools X */}
          <Grid centered>
            <Grid.Column computer={16} tablet={16}>
              <Header
                inverted
                content="Schools X "
                subheader="A robust school management system to regulate data in educational institutions"
              />
            </Grid.Column>
            {schoolsx.map((info, idx) => (
              <Grid.Column computer={4} tablet={8} key={idx} mobile={16}>
                <Reveal animated="move up">
                  <Reveal.Content visible as={Card}>
                    <Card>
                      <Card.Content>
                        <Image floated="right" size="mini" src={project} />
                        <Card.Header>{info.name}</Card.Header>
                        <Card.Meta style={{ fontSize: "12px" }}>
                          {info.screens}
                        </Card.Meta>
                        <Card.Description>{info.description}</Card.Description>
                      </Card.Content>
                    </Card>
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Card>
                      <Card.Content>
                        <Image floated="right" src={access} size="mini" />
                        <Card.Header>Credentials</Card.Header>
                        <Card.Meta>
                          <a
                            className="link"
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Project
                          </a>
                        </Card.Meta>
                        <Card.Description>
                          <p style={{ fontSize: "12px" }}>
                            <Icon name="terminal" size="small" />
                            {info.cred.accessCode}
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <Icon name="envelope" size="small" />
                            {info.cred.mail}
                            {"  >>>  "}
                            <Icon name="lock" size="small" />
                            {info.cred.pwd}
                          </p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Reveal.Content>
                </Reveal>
              </Grid.Column>
            ))}
          </Grid>
          {/* Other Projects */}
        </Grid>
        <Grid centered>
          <Grid.Column computer={16} tablet={16}>
            <Header
              content="Other Projects"
              inverted
              subheader="Websites, Freelance and Hobby Projects"
            />
          </Grid.Column>
          {projects.map((info, idx) => (
            <Grid.Column computer={5} mobile={16} tablet={8} key={idx}>
              <Card centered>
                <Card.Content>
                  <Image floated="right" src={project} size="mini" />
                  <Card.Header>{info.header}</Card.Header>
                  <Card.Meta>{info.meta}</Card.Meta>
                  <Card.Description>{info.content}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a
                    className="link"
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Icon name="globe" size="small" /> Visit Project{" "}
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
      </Grid.Column>
    </Grid>
  );
}
