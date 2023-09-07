import React, { Component } from 'react';
// crée un class app 
class App extends Component {
  // initialisation du state dans le class composant 
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://placeimg.com/200/200/people',
      profession: 'Web Developer',
    },
    show: false,
    mountTime: null,
  };

  componentDidMount() {
    this.setState({ mountTime: new Date() });
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    // props with destructuring
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountTime } = this.state;
    const currentTime = new Date();
    const timeSinceMount = (currentTime - mountTime) / 1000; // Convert to seconds

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          Toggle Profile {show ? 'Off' : 'On'}
        </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>Profession: {profession}</p>
            <p>Bio: {bio}</p>
          </div>
        )}
        <p>Time since mount: {timeSinceMount.toFixed(2)} seconds</p>
      </div>
    );
  }
}

export default App;
