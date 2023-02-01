from django.db import models

# Create your models here.
class Gallery(models.Model):
    title=models.CharField(max_length=100)
    content=models.CharField(max_length=100)
    image=models.ImageField(null=True,blank=True,default='/holder.jpeg')
    def __str__(self):
        return self.title