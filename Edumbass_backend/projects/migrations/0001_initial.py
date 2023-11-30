# Generated by Django 4.2.7 on 2023-11-30 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('slug', models.SlugField()),
                ('short_description', models.TextField(blank=True, null=True)),
                ('long_description', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='uploads')),
                ('youtube_id', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
    ]