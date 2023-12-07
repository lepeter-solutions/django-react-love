# Generated by Django 4.2.6 on 2023-12-07 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webpage', '0003_rename_hotel_main_img_sliderslide_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='ImgCards',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=200)),
                ('img', models.ImageField(upload_to='images/')),
            ],
        ),
    ]
