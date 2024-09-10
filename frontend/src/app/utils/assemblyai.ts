// // Start by making sure the `assemblyai` package is installed.
// // If not, you can install it by running the following command:
// // npm install assemblyai

// import { AssemblyAI } from 'assemblyai';
// import { useState } from 'react';

// const client = new AssemblyAI({
//   apiKey: '3c558628c055461e86033df7b79765c4',
// });

// const FILE_URL =
//   'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3';

// // You can also transcribe a local file by passing in a file path
// // const FILE_URL = './path/to/file.mp3';

// // // Request parameters 
// // const data = {
// //   audio: FILE_URL
// // }

// // const run = async () => {
// //   const transcript = await client.transcripts.transcribe(data);
// //   console.log(transcript.text);
// // };

// // run();

// const TranscriptionForm = () => {
//     const [fileUrl, setFileUrl] = useState('https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3');
//     const [transcript, setTranscript] = useState('');
  
//     const handleTranscribe = async () => {
//       const data = { audio: fileUrl };
//       try {
//         const response = await client.transcripts.transcribe(data);
//         setTranscript(response.text);
//       } catch (error) {
//         console.error('Error transcribing audio:', error);
//       }
//     };
  
//     return (
//         <div>
//           <h1>Audio Transcription</h1>
//           <input
//             type="text"
//             placeholder="Enter audio file URL"
//             value={fileUrl}
//             onChange={(e) => setFileUrl(e.target.value)}
//           />
//           <button onClick={handleTranscribe}>Transcribe</button>
//           {transcript && (
//             <div>
//               <h2>Transcript:</h2>
//               <p>{transcript}</p>
//             </div>
//           )}
//         </div>
//       );
//     };
    
//     export default TranscriptionForm;