# Generated by Django 5.0.3 on 2024-03-26 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0003_alter_employee_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='email',
            field=models.CharField(default=0, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='hire',
            field=models.CharField(default=9, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='job',
            field=models.CharField(default=2, max_length=50),
            preserve_default=False,
        ),
    ]
