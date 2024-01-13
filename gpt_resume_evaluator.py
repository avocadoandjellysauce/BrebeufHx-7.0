from dotenv import load_dotenv
import openai

# Load environment variables
load_dotenv()

# Load openai API
client = openai.OpenAI()

user_input = {
    "job title": "petroleum engineer",
    "experience": "Petro-Canada: Fuel inspector, Suncor: Peutroleum Engineer, Enbridge: Peutroleum Products Transportation Engineer"
}

# Define LLM Prompt
prompt = f"You are a skilled resume technician aiming to maximimise the chances of a person getting hired as {user_input["job title"]} by creating the perfect resume for the job of {user_input["job title"]}."

def evaluate_resume():
    resume_summary = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": f"Here is all the relevant information provided by the user which you will use to craft the perfect resume for him: {user_input}. Compose a resume summary or a resume objective according to whichever you think would work best. A resume summary quickly tells employers about you and why you're qualified for the role. A resume objective tells employers about your professional goals and why you want the position. To help you write your summary or objective, review the job posting the user is applying to and highlight skills or experience that the user has the the employer might be looking for. Make sure to only include the resume summary or the resume objective."}
                ]
            )  
    return resume_summary