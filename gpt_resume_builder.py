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

# Create a dump of user input to always send to the LLM
user_input_dump = ""
for key, value in user_input.items():
    user_input_dump = user_input_dump + " \n" + str(key + "- " + value)
print(user_input_dump)

# Creates a resume for the user according to inputs to questions
def create_resume(user_input, choice_amount, choice_section, experience_response_type, user_input_dump):

    if choice_section == 1:
        # Feed all the data in & request full resume list
        resume_all = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": f"Here is all the relevant information provided by the user which you will use to craft the perfect resume for him: {user_input_dump}.Create a short but realistic list of information containing the objective, the work experience section and the skills section that would be used to create a resume for the job title of {user_input["job title"]} and having the following experience: {user_input["experience"]}. Make sure to separate your response into these 3 parts: 'Objective', 'Work Experience' and 'Skilles'"}
                ]
            )  
        return resume_all
    
    elif choice_section == 2:
        # Feed all the data in & request summary
        resume_summary = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": f"Here is all the relevant information provided by the user which you will use to craft the perfect resume for him: {user_input_dump}. Compose a resume summary or a resume objective according to whichever you think would work best. A resume summary quickly tells employers about you and why you're qualified for the role. A resume objective tells employers about your professional goals and why you want the position. To help you write your summary or objective, review the job posting the user is applying to and highlight skills or experience that the user has the the employer might be looking for. Make sure to only include the resume summary or the resume objective."}
                ]
            )  
        return resume_summary

    elif choice_section == 3:
        # Feed all the data in & request experience
        resume_experience = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": f"Here is all the relevant information provided by the user which you will use to craft the perfect resume for him: {user_input_dump}. Compose a {experience_response_type} which effectively showcases the strong points that the user demonstrated in each of these job positions previously held by the user: {user_input["experience"]}. Take note that this is meant to be part of the work experience part of the user's resume."}
                ]
            )   
        return resume_experience

# print(create_resume(user_input, 1, 3, "paragraph", dump).choices[0].message.content)