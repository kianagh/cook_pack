# import serializers from the REST framework
from rest_framework import serializers

# import the todo data model
from .models import Food

# create a serializer class
class FoodSerializer(serializers.ModelSerializer):

    # create a meta class
    class Meta:
        model = Food
        fields = ('id', 'src', 'name', 'time', 'description')
