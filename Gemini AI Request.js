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