from django.contrib import admin
from .models import Food
# Register your models here.

class FoodAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "time", "src", "is_active")
    ordering = ['id']

admin.site.register(Food, FoodAdmin)