# Generated by Django 4.2 on 2023-04-12 14:54

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0007_alter_articles_body'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='body',
            field=tinymce.models.HTMLField(max_length=5000),
        ),
    ]