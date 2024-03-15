import google.generativeai as genai

genai.configure(api_key="AIzaSyDKr4l5EzE2POaqXJEukYsGgXaT45GBEYQ")

model = genai.GenerativeModel('gemini-pro')

response = model.generate_content("provide a basic node.js code")
print(response.text)  