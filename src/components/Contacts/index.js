import React, { Component } from 'react';

class Contacts extends Component {

    render() {
        return (
            <section>
                <h3>Contacts</h3>
                <ul>
                    <li><a href="https://drive.google.com/drive/u/0/folders/0B1llL225yBwBT2NWS0ZNOExoQU0">Google Drive</a></li>
                    <li><a href="https://reactjs.org/docs/jsx-in-depth.html">Advanced Guides</a></li>
                    <li><a href="https://maxfarseer.gitbooks.io/react-router-course-ru/content/">Роутинг в react-приложениях</a></li>
                    <li><a href="http://prgssr.ru/development/pogruzhenie-v-react-router.html">Погружение в React: роутер</a></li>
                    <li><a href="https://reacttraining.com/react-router/web/example/basic">React Training / React Router</a></li>
                    <li><a href="https://semantic-ui.com/introduction/getting-started.html">semantic-ui</a></li>
                    <li><a href="http://www.material-ui.com/#/components/table">material-ui</a></li>
                    <li><a href="https://www.youtube.com/channel/UCY10FZglXJ8RL3xB04VpykQ/playlists">Video 1</a></li>
                    <li><a href="https://www.youtube.com/channel/UCyUFMVZ6VnbB5a8d_EyrFBQ/playlists">Video 2</a></li>
                    <li><a href="https://maxfarseer.gitbooks.io/redux-course-ru/content/osnovi_redux.html">Основы Redux (теория)</a></li>
                    <li><a href="https://redux.js.org/">Redux</a></li>
                </ul>
            </section>
        );
    }
}

export default Contacts;