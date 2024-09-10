from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json

from speechprocessing.rag.utils import generate_quiz, generate_text_summary

@csrf_exempt
@require_http_methods(["POST"])
def process_speech(request):
    try:
        data = json.loads(request.body)
        transcript = data.get('transcript')
        
        if not transcript:
            return JsonResponse({"error": "Transcript field is required"}, status=400)
        
        quiz = generate_quiz(transcript)
        return JsonResponse({"message": quiz})
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON in request body"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

@csrf_exempt
@require_http_methods(["POST"])
def generate_summary(request):
    try:
        data = json.loads(request.body)
        transcript = data.get('transcript')
        
        if not transcript:
            return JsonResponse({"error": "Transcript field is required"}, status=400)
        
        summary = generate_text_summary(transcript)
        return JsonResponse({"message": summary['generator']['replies'][0]})
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON in request body"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)