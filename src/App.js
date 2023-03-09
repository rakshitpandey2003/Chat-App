import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID="1da924b2-3521-4c19-8e81-344fe8f896c0"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
        
    );
}

export default App;