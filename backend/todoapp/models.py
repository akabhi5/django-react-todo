from django.db import models


class Todo(models.Model):
    todo = models.CharField(max_length=1024)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_on']