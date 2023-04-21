FROM python:3.8-alpine


ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1


WORKDIR /app/healthverse_project


COPY requirements.txt /app/healthverse_project/


# Install dependencies for building psycopg2-binary and tkinter
RUN apk add --virtual .build-deps --no-cache postgresql-dev gcc python3-dev musl-dev libpq-dev tk-dev && \
   apk add --no-cache tk && \
   pip install --no-cache-dir -r requirements.txt && \
   apk --purge del .build-deps


COPY . /app/healthverse_project/


CMD [ "python3", "manage.py", "runserver", "0.0.0.0:8000" ]
