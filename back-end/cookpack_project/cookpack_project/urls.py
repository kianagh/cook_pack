
from django.contrib import admin
from django.urls import path, include
from food.views import FoodView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'foods', FoodView, 'food')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
