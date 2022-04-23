import { JitsiMeeting } from "@jitsi/react-sdk";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../Dashboard/logo.svg";

export default function Video() {
  const apiRef = useRef();
  const [logItems, updateLog] = useState([]);
  const [showNew, toggleShowNew] = useState(false);
  const [knockingParticipants, updateKnockingParticipants] = useState([]);
  const navigate = useNavigate();

  const printEventOutput = (payload) => {
    updateLog((items) => [...items, JSON.stringify(payload)]);
  };

  const handleAudioStatusChange = (payload, feature) => {
    if (payload.muted) {
      updateLog((items) => [...items, `${feature} off`]);
    } else {
      updateLog((items) => [...items, `${feature} on`]);
    }
  };

  const handleChatUpdates = (payload) => {
    if (payload.isOpen || !payload.unreadCount) {
      return;
    }
    apiRef.current.executeCommand("toggleChat");
    updateLog((items) => [
      ...items,
      `you have ${payload.unreadCount} unread messages`,
    ]);
  };

  const handleKnockingParticipant = (payload) => {
    updateLog((items) => [...items, JSON.stringify(payload)]);
    updateKnockingParticipants((participants) => [
      ...participants,
      payload?.participant,
    ]);
  };

  const resolveKnockingParticipants = (condition) => {
    knockingParticipants.forEach((participant) => {
      apiRef.current.executeCommand(
        "answerKnockingParticipant",
        participant?.id,
        condition(participant)
      );
      updateKnockingParticipants((participants) =>
        participants.filter((item) => item.id === participant.id)
      );
    });
  };

  const handleJitsiIFrameRef1 = (iframeRef) => {
    iframeRef.style.border = "10px solid rgb(9, 73, 57)";
    iframeRef.style.background = "rgb(9, 73, 57)";
    iframeRef.style.height = "610px";
  };

  const handleJitsiIFrameRef2 = (iframeRef) => {
    iframeRef.style.marginTop = "10px";
    iframeRef.style.border = "10px dashed #df486f";
    iframeRef.style.padding = "5px";
    iframeRef.style.height = "400px";
  };

  const handleApiReady = (apiObj) => {
    apiRef.current = apiObj;
    apiRef.current.on("knockingParticipant", handleKnockingParticipant);
    apiRef.current.on("audioMuteStatusChanged", (payload) =>
      handleAudioStatusChange(payload, "audio")
    );
    apiRef.current.on("videoMuteStatusChanged", (payload) =>
      handleAudioStatusChange(payload, "video")
    );
    apiRef.current.on("raiseHandUpdated", printEventOutput);
    apiRef.current.on("titleViewChanged", printEventOutput);
    apiRef.current.on("chatUpdated", handleChatUpdates);
    apiRef.current.on("knockingParticipant", handleKnockingParticipant);
  };

  const handleReadyToClose = () => {
    /* eslint-disable-next-line no-alert */
    navigate("/dashboard");
  };

<<<<<<< HEAD
  const generateRoomName = () => `SageRoomNo${3754 * 13674}`;
=======
  const generateRoomName = () =>
    `SageRoomNo${1}`;
>>>>>>> 05587d60e943b6306eeab5762a3a6812a38de7b2

  // Multiple instances demo
  const renderNewInstance = () => {
    if (!showNew) {
      return null;
    }

    return (
      <JitsiMeeting
        roomName={generateRoomName()}
        getIFrameRef={handleJitsiIFrameRef2}
      />
    );
  };

  const renderSpinner = () => (
    <div
      style={{
        fontFamily:
          "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      Loading..
    </div>
  );

  return (
    <>
      <h1
        style={{
          fontFamily:
            "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
          textAlign: "center",
          border: "2px solid white",
          margin: "2px",
          background: "rgb(91, 125, 116)",
        }}
      >
        <img className="o3" src={logo} alt="logo" />
      </h1>
      <JitsiMeeting
        roomName={generateRoomName()}
        spinner={renderSpinner}
        config={{
          subject: "lalalala",
          hideConferenceSubject: false,
        }}
        onApiReady={(externalApi) => handleApiReady(externalApi)}
        onReadyToClose={handleReadyToClose}
        getIFrameRef={handleJitsiIFrameRef1}
      />
      {renderNewInstance()}
    </>
  );
}
