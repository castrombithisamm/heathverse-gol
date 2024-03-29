# Generated by Django 4.1.7 on 2023-03-23 16:16

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_video_description')
    ]

    operations = [
        migrations.CreateModel(
            name='Articles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('body', models.TextField(max_length=2000)),
                ('img', models.FileField(upload_to='banners/', validators=[django.core.validators.FileExtensionValidator(['pdf', 'doc', 'svg'])])),
            ],
        ),
    ]
