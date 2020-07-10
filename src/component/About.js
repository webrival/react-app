import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';
import CourseList from './CourseList';
import Course from './Course';
import AddCourse from './AddCourse';
import { CourseProvider } from '../CourseContext';

/**
 * Isi dari Halaman About
 */

function SectionContent() {
  return (
    <div className='section-content'>
      <h4 className='content-title'>About Us</h4>
      <p>
        If it's not what you want - stop and change it. Don't just keep going
        and expect it will get better. Maybe, just to play a little, we'll put a
        little tree here. Have fun with it. Painting should do one thing. It
        should put happiness in your heart. You need to have a very firm paint
        to do this. It's important to me that you're happy.
      </p>
      <p>
        Talk to trees, look at the birds. Whatever it takes. Use what happens
        naturally, don't fight it. Everyone needs a friend. Friends are the most
        valuable things in the world. You can't make a mistake. Anything that
        happens you can learn to use - and make something beautiful out of it.
        Just think about these things in your mind and drop em' on canvas. Now
        it's beginning to make a little sense.
      </p>
      <div className='content-pic'></div>
      <p>
        I think there's an artist hidden in the bottom of every single one of
        us. I thought today we would make a happy little stream that's just
        running through the woods here. You could sit here for weeks with your
        one hair brush trying to do that - or you could do it with one stroke
        with an almighty brush. And I know you're saying, 'Oh Bob, you've done
        it this time.' And you may be right. There isn't a rule. You just
        practice and find out which way works best for you. It just happens -
        whether or not you worried about it or tried to plan it.
      </p>
      <p>
        We'll put some happy little leaves here and there. Just think about
        these things in your mind and drop em' on canvas. Anytime you learn
        something your time and energy are not wasted. Let your imagination just
        wonder around when you're doing these things. You need the dark in order
        to show the light. Don't be bashful drop me a line.
      </p>
      <hr />
    </div>
  );
}

function SectionMentor() {
  return (
    <div className='section-mentor'>
      <Container>
        <Row>
          <Col xs={12} sm={4} className='about-text'>
            This is Our Mentor
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image
              src={require('../assets/profile-1.jpg')}
              roundedCircle
              className='profile-pic'
            />
            <h4>Robin</h4>
            <hr />
            <p>
              We don't really know where this goes - and I'm not sure we really
              care. In your imagination you can go anywhere you want. Trees grow
              in all kinds of ways. They're not all perfectly straight. Not
              every limb is perfect. Follow the lay of the land. It's most
              important.
            </p>
          </Col>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image
              src={require('../assets/profile-2.jpg')}
              roundedCircle
              className='profile-pic'
            />
            <h4>Maria</h4>
            <hr />
            <p>
              I started painting as a hobby when I was little. I didn't know I
              had any talent. I believe talent is just a pursued interest.
              Anybody can do what I do. Painting should do one thing. It should
              put happiness in your heart. In your world you can create anything
              you desire. Play with the angles.
            </p>
          </Col>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image
              src={require('../assets/profile-3.jpg')}
              roundedCircle
              className='profile-pic'
            />
            <h4>Frank</h4>
            <hr />
            <p>
              I'm gonna add just a tiny little amount of Prussian Blue. You can
              do anything here. So don't worry about it. It's so important to do
              something every day that will make you happy.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default class About extends Component {
  render() {
    return (
      <div className='main'>
        <SectionContent />
        <CourseProvider>
          <div className='list-course'>
            <Course />
            <AddCourse />
            <CourseList />
          </div>
        </CourseProvider>
        <SectionMentor />
      </div>
    );
  }
}
