1. First clone repository; changes made by adding USSD feature include adding the USSD app to the django project and 
editing the views.py, urls.py of app and urls.py file of project.
2. Create an Africastalking account, create a channel. 
To access africastalking api: https://africastalking.com/
3. Download and install ngrok from site: https://ngrok.com/
To install ngrok add add to path, extract downloaded zipped folder to desktop.
4. Add the authtoken to sign up by running this command on ngrok prompt on pc:
$ngrok config add-authtoken <yourauthtoken>
5. run the python code on django using on the commandprompt: 
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
6. Start a new tunnel on ngrok prompt by inputting command: ngrok http 8000
7. Copy the callback url and add it to ALLOWED_HOSTS in settings.py file of django project and to the callback url 
of the africastalking created channel.
8. Run on command prompt again:python manage.py runserver
9. In Africastalking, go to 'launchsimulator' add launch a session with the created USSD
10. If the code is correct, the instructions in views.py of our USSD app will run on Africastalking

