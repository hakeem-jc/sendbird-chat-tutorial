// @ts-ignore
import SendbirdApp from '@sendbird/uikit-react/App';
const APP_ID =  process.env.NEXT_PUBLIC_APP_ID;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

const Chat = () => (
    <div style={{ height: "100vh", width: "100vw" }}>
        <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
);

export default Chat;