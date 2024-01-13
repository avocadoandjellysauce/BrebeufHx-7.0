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
prompt = f"You are a demanding hiring manager hiring for the job position of {user_input["job title"]}. Evaluate the following resume and quickly critique both its qualities and points that could be improved upon."

def evaluate_resume():
    resume_summary = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": f"Contact Information: Address: 123 Fake Street, Imaginary City, IL 56789 Phone: 555-1234 Email: notarealemail@email.com LinkedIn: linkedin.com/in/fakeresume Objective: I want a job as a petroleum engineer. Hire me! Education: Bachelor of Science in Something Vague Imaginary University, Imaginary City Graduated: May 2020 Professional Experience: Suncor - Petroleum Engineer Imaginary City | January 2021 – Present Worked on stuff Did things Enbridge - Petroleum Products Transportation Engineer Imaginary Town | June 2020 - December 2020 Managed pipelines Did more things Petro-Canada - Fuel Inspector Make-Believe City | May 2019 - May 2020 Inspected fuels Checked for issues Skills: Hardworking Good at stuff Fast learner Excellent communication Microsoft Office Certifications: Certificate of Participation in Webinar on Time Management (2021) References: Available upon request.  Additional Notes:  Once won a sack race in elementary school. Fluent in Klingon (self-taught)."}
                ]
            )  
    return resume_summary

print(evaluate_resume().choices[0].message.content)