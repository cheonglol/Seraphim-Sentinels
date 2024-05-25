import { Card } from "primereact/card";
import ReactPlayer from "react-player";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import React, {useEffect, useRef, useState} from 'react'
import { resolveObjectURL } from "buffer";

// TODO: move each post as its own component under `src\Components\blog` so i dont make this fucking landing page SO LONG TO READ wtf



export const LandingView = () => {
  
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSupported, setIsSupported] = useState(true);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    // Check if the browser supports the webkitSpeechRecognition API
    if (!('webkitSpeechRecognition' in window)) {
      console.error("Web speech API is not supported.");
      setIsSupported(false);
      return;
    }

    // Initialize the webkitSpeechRecognition API
    recognitionRef.current = new window.webkitSpeechRecognition();
    const recognition = recognitionRef.current;

    recognition.continuous = true; // Keep recognizing continuously
    recognition.interimResults = true; // Get interim results

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          setTranscript((prevTranscript) => prevTranscript + event.results[i][0].transcript);
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };

    // Cleanup function to stop recognition when the component unmounts
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  return { isListening, transcript, isSupported, startListening, stopListening };

};
