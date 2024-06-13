from rest_framework import serializers
from .models import usuario


# Serializador para el modelo Usuario
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = usuario
        fields = '__all__'  
