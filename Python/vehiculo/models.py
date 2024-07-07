from usuario.models import Usuario
from django.db import models

# Create your models here.
class Vehiculo(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    placa = models.CharField(max_length=10, unique=True)
    modelo = models.CharField(max_length=100)
    color = models.CharField(max_length=50)