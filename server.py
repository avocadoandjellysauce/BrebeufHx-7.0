from flask import Flask
from gpt_resume_builder import create_resume

app = Flask(__name__)


user_input = {
    "job title": "petroleum engineer",
    "experience": "Petro-Canada: Fuel inspector, Suncor: Peutroleum Engineer, Enbridge: Peutroleum Products Transportation Engineer"
}

# Define LLM Prompt
prompt = f"You are a skilled resume technician aiming to maximimise the chances of a person getting hired as {user_input['job title']} by creating the perfect resume for the job of {user_input['job title']}. Make sure to not include any of your personal comments in your response. Your response will be dfirectly used in the user's resume. DO NOT INCLUDE ADDITIONAL NOTES WHICH HAVE NOT BEEN REQUESTED. For example, do not include anything of the such: 'Note: Please make sure to proofread, format, and tailor this resume according to your specific needs and requirements.' Only provide the structure requested by the user. No notes section."

# Create a dump of user input to always send to the LLM
user_input_dump = ""
for key, value in user_input.items():
    user_input_dump = user_input_dump + " \n" + str(key + "- " + value)


# Members API Route
@app.route("/members")
def members():
    return {"members": ["Member1","Member2","Member3"]}

@app.route("/create_resume")
def custom():
    result = create_resume(user_input, 1, 1, "paragraph", user_input_dump)
    return {'result': result}


if __name__ == "__main__":
    app.run(debug=True)