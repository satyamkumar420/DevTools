import React, { useState, useEffect } from "react";
import TextArea from "../../../Components/utils/textArea/TextArea";
import { Helmet } from "react-helmet-async";
import PrimaryButton from "../../../Components/utils/Button/PrimaryButton";

const TextToSpeech = () => {
  const [textInput, setTextInput] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [voice, setVoice] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const synthesis = window.speechSynthesis;
  let utterance = null;

  const handleSpeak = () => {
    if (textInput) {
      utterance = new SpeechSynthesisUtterance(textInput);
      if (voice) {
        utterance.voice = voice;
      }
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      synthesis.speak(utterance);
      setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
    }
  };

  const handleStop = () => {
    if (synthesis.speaking) {
      synthesis.cancel();
      setSpeaking(false);
    }
  };

  const handlePausePlay = () => {
    if (synthesis.speaking) {
      synthesis.pause();
      setSpeaking(false);
    } else if (synthesis.paused) {
      synthesis.resume();
      setSpeaking(true);
    }
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handlePitchChange = (e) => {
    setPitch(parseFloat(e.target.value));
  };

  const handleRateChange = (e) => {
    setRate(parseFloat(e.target.value));
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleVoiceChange = (e) => {
    const selectedVoiceName = e.target.value;
    const voices = synthesis.getVoices();
    const selectedVoice = voices.find(
      (voice) => voice.name === selectedVoiceName
    );
    setVoice(selectedVoice);
  };

  useEffect(() => {
    const voices = synthesis.getVoices();
    setVoice(voices[0]); // Set the first voice as the default
  }, []);

  return (
    <>
      <Helmet>
        <title>Text To Speech</title>
      </Helmet>
      <div className="p-4 sm:ml-52 max-w-screen overflow-y-auto max-h-screen">
        <div className="my-20 max-w-screen-lg">
          <h3 className="text-left p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
            Text To Speech
          </h3>
          <div className="max-w-screen-md mt-4 p-4 bg-[#1a1c2e] rounded-lg shadow-md">
            <div className="space-y-4">
              <div>
                <label>Select Voice:</label>
                <div>
                  <div>
                    <select
                      value={voice ? voice.name : ""}
                      onChange={handleVoiceChange}
                      className="appearance-none w-full rounded bg-[#23263e] p-2 text-lg  px-4 focus:ring-none focus:outline-none cursor-pointer"
                    >
                      {synthesis.getVoices().map((v, i) => (
                        <option key={i} value={v.name}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  <div className="grid grid-cols-1 mt-2">
                    <label>
                      Pitch:{" "}
                      <strong className="text-orange-500">{pitch}</strong>
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      step="0.1"
                      value={pitch}
                      onChange={handlePitchChange}
                      className="range accent-blue-700 bg-[#1a1c2e]  rounded cursor-pointer w-52"
                    />
                  </div>
                  <div className="grid grid-cols-1 mt-2">
                    <label>
                      Speed: <strong className="text-orange-500">{rate}</strong>
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      step="0.1"
                      value={rate}
                      onChange={handleRateChange}
                      className="range accent-blue-700 bg-[#1a1c2e]  rounded cursor-pointer w-52"
                    />
                  </div>
                  <div className="grid grid-cols-1 mt-2">
                    <label>
                      Volume:{" "}
                      <strong className="text-orange-500">{volume}</strong>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="range accent-blue-700 bg-[#1a1c2e]  rounded cursor-pointer w-52"
                    />
                  </div>
                </div>
              </div>

              <TextArea
                Value={textInput}
                OnChange={handleTextChange}
                Placeholder={"Enter text to speak"}
              />
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <PrimaryButton
                  text={speaking ? "Speaking..." : "Speak"}
                  onClick={handleSpeak}
                  className={"w-32"}
                />
                {/* <PrimaryButton
                  text="Pause"
                  onClick={handlePausePlay}
                  className="bg-orange-600 hover:bg-orange-800 w-32"
                /> */}
                <PrimaryButton
                  text="Stop"
                  onClick={handleStop}
                  className="bg-orange-600 hover:bg-orange-800 w-32"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="border-l-4 text-left border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
              <p className="text-blue-300">
                Transform your text into speech with this powerful online
                software, absolutely free of charge. Take advantage of the
                multiple voice options available, provided they are installed on
                your system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextToSpeech;
