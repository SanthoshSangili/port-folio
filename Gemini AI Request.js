Gemini AI Request


/* Customize Request :

curl --location 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent' \
--header 'X-Goog-Api-Key: ' \
--header 'Content-Type: application/json' \
--data '{
  "system_instruction": {
    "parts": [
      { 
        "text": "Configuration"
      }
    ]
  },
  "contents": [
    {
      "role": "user",
      "parts": [
        { "text": "What is the current time and date" }
      ]
    }
  ]
}
'


Response : 

{
    "errorDescription": null,
    "message": null,
    "responseContent": {
        "id": "chatcmpl-ff82d425-8107-4f86-b507-1b7a161176e9",
        "object": "chat.completion",
        "created": 1765367280,
        "model": "openai/gpt-oss-120b",
        "choices": [
            {
                "index": 0,
                "message": {
                    "role": "assistant",
                    "content": "Hello! 👋 Feel free to ask any questions about my profile"
                },
                "logprobs": null,
                "finish_reason": "stop"
            }
        ],
        "usage": {
            "queue_time": 0.00411454,
            "prompt_tokens": 602,
            "prompt_time": 0.031948048,
            "completion_tokens": 61,
            "completion_time": 0.133256068,
            "total_tokens": 663,
            "total_time": 0.165204116,
            "completion_tokens_details": {
                "reasoning_tokens": 24
            }
        },
        "usage_breakdown": null,
        "system_fingerprint": "fp_0060895c89",
        "x_groq": {
            "id": "req_01kc41dwn3eanbhskfw18dvkw2",
            "seed": 1610953962
        },
        "service_tier": "on_demand"
    },
    "statusCode": 0
}


---------------


curl --location 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent' \
--header 'X-Goog-Api-Key: ' \
--header 'Content-Type: application/json' \
--data '{
  "system_instruction": {
    "parts": [
      { 
        "text": "Configuration"
      }
    ]
  },
  "contents": [
    {
      "role": "user",
      "parts": [
        { "text": "What is the current time and date" }
      ]
    }
  ]
}
'
 */


/* Google Request :

curl --location 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent' \
--header 'X-Goog-Api-Key: AIzaSyBZUeZsI-6PlSyzmsvU5NMkNVToNG7q--0' \
--header 'Content-Type: application/json' \
--data '{
  "contents": [
    {
      "parts": [
        {
          "text": "What is the current time and date"
        }
      ],
      "role": "user"
    }
  ]
}'

*/



/* https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyC8CEMCUApQCQvSPiy3e2JckTNL41wl-xM


{
  "contents": [
    {
      "role": "model",
      "parts": [
        {
          "text": "Hello! I'm here to provide information about Santhosh Kumar S. Please feel free to ask any profile-related questions."
        }
      ]
    },
    {
      "role": "user",
      "parts": [
        {
          "text": "Hi"
        }
      ]
    },
    {
      "role": "model",
      "parts": [
        {
          "text": "Hello! Please feel free to ask any questions related to Santhosh Kumar S's profile, skills, projects, or experience."
        }
      ]
    },
    {
      "role": "user",
      "parts": [
        {
          "text": "Skills"
        }
      ]
    }
  ],
  "system_instruction": {
    "role": "bot",
    "parts": [
      {
        "text": "📌 PROFILE INFORMATION"
      }
    ]
  }
}

{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Santhosh Kumar S's skills include:\n\n**Frontend Frameworks:** Angular, React.js, JavaScript, TypeScript, HTML, CSS\n**Backend & Tools:** Node.js, REST API\n**Version Control:** Git, GitHub, GitLab\n**Project Management:** JIRA, Postman, Swagger\n**Strengths:** Reusable Components, Performance Optimization"
          }
        ],
        "role": "model"
      },
      "finishReason": "STOP",
      "index": 0
    }
  ],
  "usageMetadata": {
    "promptTokenCount": 958,
    "candidatesTokenCount": 74,
    "totalTokenCount": 1032,
    "promptTokensDetails": [
      {
        "modality": "TEXT",
        "tokenCount": 958
      }
    ]
  },
  "modelVersion": "gemini-2.5-flash",
  "responseId": "SJ43aameAtm54-EP_eCH8Qg"
}
 */





/* groq -- https://console.groq.com/home */

/* https://api.groq.com/openai/v1/chat/completions

curl--location 'http://localhost:8080/chat/send' \
--header 'Content-Type: application/json' \
--header 'Authorization: -------' \
--data '{
"messages": [
  {
    "role": "user",
    "content": "where is he working now ?"
  }
],
  "model": "openai/gpt-oss-120b"
       }'

---------------------------------------------------------------------------------------------------

curl --location 'https://api.groq.com/openai/v1/responses' \
--header 'Authorization: ---' \
--header 'Content-Type: application/json' \
--header 'Cookie: __cf_bm=t4MkDQ54kDUsxHP2JTsYz73C3a3TYofS24zvdJwuXeI-1765351562.3513658-1.0.1.1-q09YOG07zxNBnZIgrTksUXOB7GJEy0zvMyys_rfDLyxVRPf6r2bQ7TvzStIrXeg9J.PhQpgaErLcWa9AUlpMjjAXUShStVVKXjdezG9GPZ7xjMVyoJQWg2lycXMRl41r' \
--data '{
    "model": "openai/gpt-oss-20b",
    "input": "Explain the importance of fast language models"
}' */