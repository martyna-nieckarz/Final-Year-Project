from django.urls import path, include
from users.views import APILoginView, APILogoutView, APIPasswordUpdateView, UserCreate

urlpatterns = [
    path('login/', APILoginView.as_view(), name='api_login'),
    path('register/', UserCreate.as_view(), name='account-create'),
    path('logout/', APILogoutView.as_view(), name='api_logout'),
    path('update_password/', APIPasswordUpdateView.as_view(), name='api_update_password'),
]