from .pipeline import (
    quiz_generation_pipeline,
)
from .summarypipeline import (
    summary_generation_pipeline
)
from typing import Dict, Any


def generate_quiz(transcript_content: str) -> Dict[str, Any]:
    return quiz_generation_pipeline.run({"prompt_builder": { "text": transcript_content }})[
        "quiz_parser"
    ]["quiz"]

def generate_text_summary(transcript_content: str) -> Dict[str, Any]:
    return summary_generation_pipeline.run({"prompt_builder": { "text": transcript_content }})

# def get_closed_book_answers(quiz: Dict[str, Any]) -> List[str]:
#     topic = quiz["topic"]
#     questions = quiz["questions"]

#     answers = []

#     for question in questions:
#         answer = closed_book_answer_pipeline.run(
#             {"prompt_builder": {"topic": topic, "question": question}}
#         )["generator"]["replies"][0]
#         # in some rare cases, the model answers "I don't know" or something similar
#         if answer not in ["a", "b", "c", "d"]:
#             answer = random.choice(["a", "b", "c", "d"])
#         answers.append(answer)

#     return answers


# def get_web_rag_answers_and_snippets(quiz: Dict[str, Any]) -> Tuple:
#     topic = quiz["topic"]
#     questions = quiz["questions"]

#     answers, snippets = [], []

#     for question in questions:
#         result = web_rag_pipeline.run(
#             data={
#                 "websearch": {"query": question["question"]},
#                 "prompt_builder": {"topic": topic, "question": question},
#             },
#             include_outputs_from=["websearch", "generator"],
#         )

#         print(result)

#         answer = result["generator"]["replies"][0]
#         # in some rare cases, the model answers "I don't know" or something similar
#         if answer not in ["a", "b", "c", "d"]:
#             answer = random.choice(["a", "b", "c", "d"])
#         snippets_ = [doc.content for doc in result["websearch"]["documents"]]
#         answers.append(answer)
#         snippets.append(snippets_)

#     return answers, snippets