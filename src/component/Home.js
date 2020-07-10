import React, { Component } from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';

/**
 * Isi dari Halaman Home
 */

//Menampilkan Header
function Header(props) {
  return (
    <div className='header'>
      <div className='company-pic'></div>
      <div className='company-text'>
        <h1>Welcome to Prototype.</h1>
        <p>an company that provide course about Web Development.</p>
        <Button onClick={props.onMessage}>Read More</Button>
      </div>
    </div>
  );
}
//Menampilkan Information di Middle Page
function Middle() {
  return (
    <div className='information'>
      <div className='information-text'>
        <p>Learn with Us, course that we provide for you</p>
        <ul>
          <li className='course-list'>
            <a href='# ' className='button1'>
              HTML
            </a>
          </li>
          <li className='course-list'>
            <a href='# ' className='button1'>
              CSS
            </a>
          </li>
          <li className='course-list'>
            <a href='# ' className='button1'>
              Javascript
            </a>
          </li>
          <li className='course-list'>
            <a href='# ' className='button1'>
              React
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

//Menampilkan Konten Halaman Home
function MainSection() {
  return (
    <div className='main-section'>
      <div className='content'>
        <h4>My Website</h4>
        <p>
          We spend so much of our life looking - but never seeing. In your world
          you can create anything you desire. Let's put some highlights on these
          little trees. The sun wouldn't forget them. Isn't that fantastic that
          you can create an almighty tree that fast? Just go back and put one
          little more happy tree in there. A thin paint will stick to a thick
          paint.
        </p>
        <p>
          You can't make a mistake. Anything that happens you can learn to use -
          and make something beautiful out of it. Volunteering your time; it
          pays you and your whole community fantastic dividends. We have a
          fantastic little sky! Maybe there's a little something happening right
          here. I thought today we would do a happy little picture. No worries.
          No cares. Just float and wait for the wind to blow you around.
        </p>
        <div className='content-pic'></div>
        <p>
          We don't have to be concerned about it. We just have to let it fall
          where it will. Don't be afraid to make these big decisions. Once you
          start, they sort of just make themselves. Let's put some happy little
          bushes on the other side now. Just think about these things in your
          mind and drop em' on canvas. It all happens automatically.
        </p>
        <p>
          Every single thing in the world has its own personality - and it is up
          to you to make friends with the little rascals. Everyone needs a
          friend. Friends are the most valuable things in the world. I thought
          today we would do a happy little picture. Trees live in your fan
          brush, but you have to scare them out. See how easy it is to create a
          little tree right in your world. We need a shadow side and a highlight
          side. Only eight colors that you need. We're not trying to teach you a
          thing to copy. We're just here to teach you a technique, then let you
          loose into the world.
        </p>
      </div>
    </div>
  );
}

export default class Home extends Component {
  //Method yang akan digunakan untuk alert dengan metode Lifting State up dengan Component Header
  onMessage = () => {
    alert(`Learning with us buy purchase our course`);
  };

  render() {
    return (
      <>
        <Header onMessage={this.onMessage} />
        <Middle />
        <MainSection />
      </>
    );
  }
}
