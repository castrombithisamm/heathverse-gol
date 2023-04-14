# HeathVerse
HealthVerse is a platform that leverages affordable digital technology to improve access to quality primary healthcare in Africa. The platform will serve as an interactive tool to educate people about primary healthcare and its importance. It will feature educational videos, written content, infographics, and quizzes aimed at promoting health literacy and improving health-seeking behaviors.

## Prerequisites

Before you can run this project on your local machine, you'll need to install:

- Python 3
- Node.js
- Git

## Installation

1. Clone this repository to your local machine:

git clone https://github.com/castrombithisamm/heathverse-gol.git

2. Navigate to the project directory and Install Virtualenv:

cd heathverse-gol

pip install virtualenv

3. Activate Virtualenv:

Windows: venv\Scripts\activate

Linux: source venv/bin/activate

4. Navigate to the project directory:

cd heathverse-gol

5. Install Django dependencies:

pip install -r requirements.txt

6. Navigate to the frontend directory and Install React dependencies:

cd frontend

npm install

7. Configure the project by creating a `.env` file by simply copying the .env.example file then rename it to .env and setting the required environment variables (see `.env.example` for an example). Make sure to create a local database and run migrations as well. Use PostgreSql for the database.

8. Run the Django development server:

python manage.py runserver

9. Remember to run this command everytime you make some changes on the frontend React app directory:

npm run build


 TO CHANGE DJANGO ADMIN UI:
1. Create a virtual environment and install django in it.
2. On the command prompt, run this command: pip install -U django-jazzmin
3. Add 'jazzmin' package in project level Settings.py file:
 INSTALLED_APPS = [
    'jazzmin',

    'django.contrib.admin',
    [...]
]
4. Reload the localhost/admin page, the UI should have changed.
5. Further instructions on customizing UI can be found in: https://django-jazzmin.readthedocs.io/configuration/


## Contributing

If you'd like to contribute to this project, please read our [contributing guidelines](CONTRIBUTING.md) and [code of conduct](CODE_OF_CONDUCT.md).

## Contact

If you have any questions or issues, please contact the Team Captain at castro.mbithi@studentambassadors.com





