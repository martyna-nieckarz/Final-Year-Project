from django.urls import path, include
from users.views import APILoginView, APILogoutView, APIPasswordUpdateView, APIUserCreate
#from users.views import APILoginView, APILogoutView, APIPasswordUpdateView, APIUserCreate, APIUserDetails


urlpatterns = [
    path('login/', APILoginView.as_view(), name='api_login'),
    path('register/', APIUserCreate.as_view(), name='api_register'),
    #path('getUserDetails/', APIUserDetails.as_view(), name='api_getUserDetails'),
    path('logout/', APILogoutView.as_view(), name='api_logout'),
    path('update_password/', APIPasswordUpdateView.as_view(), name='api_update_password'),
]