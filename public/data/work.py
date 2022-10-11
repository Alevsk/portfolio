from quart import render_template, request, current_app
from app.work import bp

@bp.route('/', methods=['GET'])
async def index():
  # Let's Work together
  # Send me an email to lenin@alevsk.com
  core_skills = [
    'Effective communication in both Spanish and English',
    'System Architecture',
    'Object-oriented Analysis and Design',
    'Refactoring',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Web Application Security'
    'UNIX-based System Administration',
  ]

  emerging_skills = [
    'Public speaking',
    'Reverse Engineering',
    'Malware analysis',
    'Monitoring/intrusion detection',
    'Hardware/firmware/TPM security',
  ]

  freelance_work = [
    'Web Penetration Testing',
    'Mobile Penetration Testing',
    'Security Code Review',
    'Application and Environment Hardening',
    'Web Development for Short and Mid Size Projects',
    'Hiring Process Consulting',
    'Development Process Consulting',
  ]
  return await render_template('index.html',
    core_skills=core_skills,
    emerging_skills=emerging_skills,
    freelance_work=freelance_work
  )
