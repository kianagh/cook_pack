from django.contrib import admin
from .models import Food
# Register your models here.

class FoodAdmin(admin.ModelAdmin):
    list_display = ("name","time","is_active")

admin.site.register(Food, FoodAdmin)