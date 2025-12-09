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