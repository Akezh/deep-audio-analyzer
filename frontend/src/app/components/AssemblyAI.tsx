"use client";
import React, { useState } from "react";
import { AssemblyAI } from "assemblyai";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

// Define types for the quiz data
interface QuizQuestion {
  question: string;
  options: string[];
}

interface QuizData {
  topic: string;
  questions: QuizQuestion[];
}

const client = new AssemblyAI({
  apiKey: "3c558628c055461e86033df7b79765c4",
});

const TranscriptionForm: React.FC = () => {
  const [fileUrl, setFileUrl] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState<string>("");
  const [isTranscribing, setIsTranscribing] = useState<boolean>(false);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState<boolean>(false);
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});

  const handleTranscribe = async () => {
    if (!file && !fileUrl) {
      console.error("Please provide either a file or a URL.");
      return;
    }
    if (file && fileUrl) {
      console.error("Please provide either a file or a URL, not both.");
      return;
    }

    setIsTranscribing(true);
    setTranscript("");
    setQuizData(null);

    let transcriptionData: {
      audio: string | File;
      speaker_labels: boolean;
      auto_highlights: true;
    };
    if (file) {
      transcriptionData = {
        audio: file,
        speaker_labels: true,
        auto_highlights: true,
      };
    } else {
      transcriptionData = {
        audio: fileUrl,
        speaker_labels: true,
        auto_highlights: true,
      };
    }

    try {
      const response = await client.transcripts.transcribe(transcriptionData);
      setTranscript(response.text || "");
    } catch (error) {
      console.error("Error transcribing audio:", error);
    } finally {
      setIsTranscribing(false);
    }
  };

  const handleGenerateQuiz = async () => {
    if (!transcript) {
      console.error("Please transcribe audio first.");
      return;
    }

    setIsGeneratingQuiz(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/speechprocessing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transcript }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate quiz");
      }

      const quiz: { message: QuizData } = await response.json();
      setQuizData(quiz?.message);
    } catch (error) {
      console.error("Error generating quiz:", error);
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  return (
    <div className="w-full min-h-screen bg-green-50 p-8">
      <Card className="max-w-3xl mx-auto bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-700">
            Audio Transcription and Quiz Generation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Enter audio file URL"
              value={fileUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFileUrl(e.target.value)
              }
              className="w-full"
              disabled={isTranscribing}
            />
            <Input
              type="file"
              accept="audio/*"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFile(e.target.files ? e.target.files[0] : null)
              }
              className="w-full"
              disabled={isTranscribing}
            />
            <Button
              onClick={handleTranscribe}
              className="bg-green-500 hover:bg-green-600 text-white w-full"
              disabled={isTranscribing}
            >
              {isTranscribing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Transcribing...
                </>
              ) : (
                "Transcribe"
              )}
            </Button>
          </div>

          {transcript && (
            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-700">
                  Transcript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800">{transcript}</p>
                <Button
                  onClick={handleGenerateQuiz}
                  className="bg-green-500 hover:bg-green-600 text-white mt-4"
                  disabled={isGeneratingQuiz}
                >
                  {isGeneratingQuiz ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Quiz...
                    </>
                  ) : (
                    "Generate Quiz"
                  )}
                </Button>
              </CardContent>
            </Card>
          )}

          {quizData && (
            <Card className="bg-green-100">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-800">
                  Quick Quiz
                </CardTitle>
                <p className="text-lg italic text-green-700">
                  <span className="font-semibold not-italic">Topic:</span>{" "}
                  {quizData.topic}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {quizData?.questions?.map((question, qIndex) => (
                  <Card key={`question-${qIndex}`} className="bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-green-700">
                        Question {qIndex + 1}:
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 font-semibold">{question.question}</p>
                      <RadioGroup
                        value={selectedAnswers[qIndex]?.toString()}
                        onValueChange={(value) =>
                          handleAnswerSelect(qIndex, parseInt(value))
                        }
                      >
                        {question.options.map((option, oIndex) => (
                          <div
                            key={`option-${qIndex}-${oIndex}`}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={oIndex.toString()}
                              id={`option-${qIndex}-${oIndex}`}
                              className="text-green-500 focus:ring-green-500"
                            />
                            <Label
                              htmlFor={`option-${qIndex}-${oIndex}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TranscriptionForm;
