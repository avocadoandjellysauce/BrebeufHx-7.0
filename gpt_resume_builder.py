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
prompt = f"You are a skilled resume technician aiming to maximimise the chances of a person getting hired as {user_input['job title']} by creating the perfect resume for the job of {user_input['job title']}. Make sure to not include any of your personal comments in your response. Your response will be dfirectly used in the user's resume. DO NOT INCLUDE ADDITIONAL NOTES WHICH HAVE NOT BEEN REQUESTED. For example, do not include anything of the such: 'Note: Please make sure to proofread, format, and tailor this resume according to your specific needs and requirements.' Only provide the structure requested by the user. No notes section."

# Create a dump of user input to always send to the LLM
user_input_dump = ""
for key, value in user_input.items():
    user_input_dump = user_input_dump + " \n" + str(key + "- " + value)
print(user_input_dump)

# Create the dictionary that will be exported as JSON
exported_summary = {
    "resume_summary": "",
    "resume_experience": "",
    "resume_skills": ""
}

# Creates a resume for the user according to inputs to questions
def create_resume(user_input, choice_amount, choice_section, experience_response_type, user_input_dump):

    if choice_section == 1:
        # Feed all the data in & request full resume list
        for each in range(2):
            resume_all = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": prompt},
                    {"role": "user", "content": f"Here is all the relevant information provided by the user which you will use to craft the perfect resume for him: {user_input_dump}.Create a short but realistic list of information containing the objective, the work experience section and the skills section that would be used to create a resume for the job title of {user_input['job title']} and having the following experience: {user_input['experience']}. Make sure to separate your response into these 3 parts: 'Objective', 'Work Experience' and 'Skills'."}
                    ]
                )
            try:
                exported_summary["resume_summary"] = resume_all.choices[0].message.content.split("Objective:")[1].split("Work Experience:")[0]
                exported_summary["resume_experience"] = resume_all.choices[0].message.content.split("Work Experience:")[1].split("Skills:")[0]
                exported_summary["resume_skills"] = resume_all.choices[0].message.content.split("Work Experience:")[1].split("Skills:")[1]
                return
            except:
                pass
        return "ERROR"
    
    elif choice_section == 2:
        # Feed all the data in & request summary
        for each in range(2):
            resume_summary = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": prompt},
                    {"role": "user", "content": f"Here is all the relevant information provided by the user which you will use to craft the perfect resume for him: {user_input_dump}. Compose a resume objective. A resume objective quickly tells employers about you and why you're qualified for the role. To help you write your objective, review the job posting the user is applying to and highlight skills or experience that the user has the the employer might be looking for. Make sure to only include the resume summary. Format your response as such: Objective: resume objective."}
                    ]
                )
            print(resume_summary.choices[0].message.content)
            try:
                exported_summary["resume_summary"] = resume_summary.choices[0].message.content.split("Objective:")[1]
                return
            except:
                pass
        return "ERROR"

    elif choice_section == 3:
        # Feed all the data in & request experience
        for each in range(2):
            resume_experience = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": prompt},
                    {"role": "user", "content": f"Here is all the relevant information provided by the user which you will use to craft the perfect resume for him: {user_input_dump}. Compose a {experience_response_type} which effectively showcases the strong points that the user demonstrated in each of these job positions previously held by the user: {user_input['experience']}. Take note that this is meant to be part of the work experience part of the user's resume. Format your response as such: Work Experience: name of job: detailed experience for that job in the form of a {experience_response_type}. DO NOT ADD A SUMMARY AT THE END OF YOUR RESPONSE."}
                    ]
                )
            print(resume_experience.choices[0].message.content)
            try:
                exported_summary["resume_experience"] = resume_experience.choices[0].message.content.split("Work Experience:")[1]
                return
            except:
                pass
        return "ERROR"
create_resume(user_input, 1, 1, "paragraph", user_input_dump) #

print(exported_summary)
objective = exported_summary['resume_summary']
resume = exported_summary["resume_experience"]
skills = exported_summary['resume_skills']

print(objective)
print(resume)
print(skills)