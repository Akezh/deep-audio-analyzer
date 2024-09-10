from haystack.components.generators import OpenAIGenerator
from haystack.components.builders import PromptBuilder

from haystack import Pipeline

import os

os.environ["OPENAI_API_KEY"] = 'sk-FNO96e8CQSPwFECTbLdsLOvvY3BzPX7ZmV_4rhlP2nT3BlbkFJ_WykkXs1OtH1clabTVra6IA7Sg-dwoGj12Buq42HYA'
openaigenerator = OpenAIGenerator(model="gpt-4o-mini")

closed_book_template = """
You would be given some text content {{ text }},

Generate a 200-word summary for it. You may also highlight some essential content with bullet points
"""

summary_generation_pipeline = Pipeline()
summary_generation_pipeline.add_component(
    "prompt_builder", PromptBuilder(template=closed_book_template)
)
summary_generation_pipeline.add_component(
    "generator",
    openaigenerator
)
summary_generation_pipeline.connect("prompt_builder", "generator")