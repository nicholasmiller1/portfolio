import React from 'react';
import '../css/home.css';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Thumbnail from '../components/thumbnail.js';

const Home = (props) => {
    return (
        <div className="home">
            <Header pageName="Home"/>
            <section id="about">
                <div className="home-about">
                    <h1>About Me</h1>
                    <span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed massa leo. Donec finibus velit dignissim arcu elementum tristique. Ut sed dignissim nibh, sed vulputate tortor. Curabitur tincidunt mi in ante vulputate hendrerit. Donec vehicula posuere ex, eget lobortis lacus pharetra ut. Quisque sit amet hendrerit leo. Etiam aliquam magna massa, vel maximus odio fringilla vitae. Proin efficitur placerat tristique. Aliquam ullamcorper augue a augue tristique, a gravida nulla egestas.</p> 
                        <p>Vivamus elementum orci tellus, vel ornare nulla pharetra vitae. Suspendisse semper ligula congue dolor eleifend, at mattis orci elementum. Ut pulvinar nec tortor sed rhoncus. Pellentesque finibus erat mauris, vitae viverra mi mollis nec. Sed non feugiat dolor. Vivamus malesuada tincidunt lorem hendrerit consequat. Nulla feugiat justo nisl, at feugiat nibh tincidunt sed. Vestibulum nec nisi ligula. Donec turpis ante, interdum eu pharetra a, varius ac ligula. Nam id iaculis mi, non luctus dolor. Morbi augue nulla, ultrices in lobortis ut, mattis quis ligula. Nam mauris augue, iaculis nec ullamcorper id, convallis in arcu. Donec ipsum leo, consectetur id dictum at, vehicula tempus mi. Nam purus augue, sagittis id libero a, finibus commodo nisl.</p>
                    </span>
                    <img src={require('../assets/header-photo.jpg').default} alt="temporary" />
                </div>
            </section>
            <section className="home-projects">
                <h1>Highlighted Projects</h1>
                <div id="home-project-container">
                    <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="This is an example project thumbnail"/>
                    <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="This is an example project thumbnail"/>
                    <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="This is an example project thumbnail"/>
                    <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="This is an example project thumbnail"/>
                    <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="This is an example project thumbnail"/>
                    <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="This is an example project thumbnail"/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;