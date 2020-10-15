import React from "react";
import { Avatar, Card } from "antd";
import AvivaBulow from "./AvivaBulow.jpg";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="AboutMe">
        <Card bordered={false}>
          <Photo />
          <MyTitle />
          <ProfessionalSummary />
        </Card>
      </div>
    );
  }
}

class Photo extends React.Component {
  render() {
    return (
      <Avatar
        size={{
          xs: 24 * 3,
          sm: 32 * 3,
          md: 40 * 3,
          lg: 64 * 3,
          xl: 80 * 3,
          xxl: 100 * 3,
        }}
        src={AvivaBulow}
      />
    );
  }
}

class MyTitle extends React.Component {
  render() {
    return <h2>Entrepreneur & Software Engineer</h2>;
  }
}

class ProfessionalSummary extends React.Component {
  render() {
    return (
      <Card bordered={false} style={{}}>
        <p>
          A software engineer with 6 years experience, primarily developing
          back-end systems in Python, I’m currently learning front-end
          development in JavaScript/HTML with React+Ant. As an analytical
          thinker with a background in mathematics, I enjoy tackling difficult
          problems and exploring new ideas. I’m highly effective at
          communicating complex concepts across knowledge barriers.
        </p>
      </Card>
    );
  }
}

export default AboutMe;
