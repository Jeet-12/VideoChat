import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Room = () => {
  const { roomId } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async () => {
      // generate Kit Token
      const appID = 1765552998;
      const serverSecret = "fdabf630b76d73e9e80681ec1f8f56a9";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "TheCodeShow"
      );

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: 'Copy link',
            url:`https://video-chat-sigma-sand.vercel.app/room/${roomId}`
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    };

    myMeeting();
  }, [roomId]);

  return <div ref={containerRef}></div>;
};

export default Room;
