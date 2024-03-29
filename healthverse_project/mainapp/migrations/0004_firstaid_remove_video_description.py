# Generated by Django 4.1.7 on 2023-03-24 09:35

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_articles'),
    ]

    operations = [
        migrations.CreateModel(
            name='Firstaid',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=500)),
                ('Content', models.TextField(max_length=5000)),
                ('Imageillustration', models.FileField(upload_to='banners/', validators=[django.core.validators.FileExtensionValidator(['pdf', 'doc', 'svg'])])),
            ],
        ),
        migrations.RemoveField(
            model_name='video',
            name='description',
        ),
    ]
