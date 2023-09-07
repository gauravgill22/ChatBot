import React, { useState, useRef, useEffect, Component } from "react";
import { Chatbot } from "react-chatbot-kit";
import { createChatBotMessage } from "react-chatbot-kit";
// import { FlightBotAvatar } from './FlightBotAvatar';
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import "./chatbot.css";

const MyComponent = () => {
    return (
      <div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    );
  };