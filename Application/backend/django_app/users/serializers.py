from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from rest_framework.test import APITestCase

class UserSerializer(serializers.ModelSerializer):
    
    # firstName = serializers.CharField(
    #         required=True,
    #         validators=[UniqueValidator(queryset=User.objects.all())]
    #         )
    # lastName = serializers.CharField(
    #         required=True,
    #         validators=[UniqueValidator(queryset=User.objects.all())]
    #         )
    username = serializers.CharField(
            max_length=32,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    password = serializers.CharField(min_length=8, write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
            #validated_data['firstName'] = ['firstName'], 
            #validated_data['lastName'] = ['firstName'], 
            validated_data['username'], 
            validated_data['email'], 
            validated_data['password'])
        return user

    class Meta:
        model = User
        #fields = ('id', 'firstName', 'lastName', 'username', 'email', 'password')
        fields = ('id', 'username', 'email', 'password')

class AccountsTest(APITestCase):
    
    def test_create_user_with_short_password(self):
        """
        Ensure user is not created for password lengths less than 8.
        """
        data = {
                'username': 'foobar',
                'email': 'foobarbaz@example.com',
                'password': 'foo'
        }

        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data['password']), 1)

    def test_create_user_with_no_password(self):
        data = {
                'username': 'foobar',
                'email': 'foobarbaz@example.com',
                'password': ''
        }

        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data['password']), 1)
