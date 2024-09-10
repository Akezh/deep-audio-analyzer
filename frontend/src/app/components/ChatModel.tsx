import Image from 'next/image'
import React from 'react'




const ChatModel = () => {
  return (
    <div>
        <>
      <div className="flex h-screen bg-gray-200">
        <div
          className="flex-grow flex flex-col max-w-[calc(100%-20rem)]"
          // style="max-width: calc(100% - 20rem)"
        >
          <div
            id="chat-history"
            className="flex-1 overflow-y-auto p-6 space-y-4 bg-white flex flex-col-reverse messages-container"
          ></div>
          <div className="px-6 py-2 bg-white shadow-up">
            <form className="flex items-center" id="chat-form">
              <textarea
                id="message-input"
                className="flex-grow m-2 p-2 border border-chat-border rounded shadow-sm placeholder-chat-placeholder"
                placeholder="Type a message..."
              ></textarea>
              <button
                type="button"
                id="audio-options-btn"
                className="m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Audio
              </button>
              <button
                type="submit"
                className="m-2 px-4 py-2 bg-chat-button text-black rounded hover:bg-gray-300"
              >
                Send
              </button>
            </form>
            <div className="text-xs text-gray-500 mt-2">
              <p className="model-display">-</p>
              <input
                type="hidden"
                className="message-user message-assistant message-model"
              />
            </div>
          </div>
        </div>
        <div className="w-80 bg-chat-settings p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Chat Settings</h2>
              <p className="text-sm text-chat-helpertext mt-1">
                Try out different models and configurations for your chat
                application
              </p>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  Model
                </label>
                <select
                  id="model-select"
                  className="border border-chat-border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                ></select>
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2">
                  System Message
                </label>
                <p className="text-sm text-chat-helpertext mb-2">
                  Guides the tone of the response
                </p>
                <textarea
                  id="system-message"
                  className="border border-chat-border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter system message..."
                ></textarea>
              </div>
              <button
                id="apply-chat-settings"
                className="w-full px-4 py-2 bg-chat-apply text-white rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              >
                Apply Changes
              </button>
            </form>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500 flex items-center justify-center">
            <span className="mr-2 pt-2">Powered by</span>
            <a
              href="https://developers.cloudflare.com/workers-ai/"
              target="_blank"
            >
              <Image
                src="/static/cloudflare-logo.png"
                alt="Cloudflare Logo"
                className="h-6 inline"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>

        <div id="audio-modal" className="fixed inset-0 bg-gray-600 bg-opacity-50 hidden flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-bold mb-4">Audio Options</h2>
          <div className="space-y-4">
            <button id="record-audio-btn" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Record Audio
            </button>
            <div id="recording-controls" className="hidden space-x-2">
              <button id="stop-recording-btn" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Stop Recording
              </button>
              <span id="recording-time" className="text-lg font-semibold">00:00</span>
            </div>
            <input
              type="text"
              id="audio-link-input"
              placeholder="Enter audio link"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="file"
              id="audio-file-input"
              accept="audio/*"
              className="w-full"
            />
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button id="close-modal-btn" className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
              Close
            </button>
            <button id="submit-audio-btn" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Submit
            </button>
          </div>
        </div>
        </div>
      </div>
      {/* <script src="/static/script.js"></script>
      <script src="/static/audio-handler.js"></script> */}
    </>
    </div>
  )
}

export default ChatModel