from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from prediction.apps import PredictionConfig
import pandas as pd
import os
import numpy as np

from django.conf import settings

from django.core.files.storage import default_storage

# pytorch libraries
import torch
from torch import optim,nn
from torch.autograd import Variable
from torch.utils.data import DataLoader,Dataset
from torchvision import models,transforms

import torchvision.transforms.functional as TF
from PIL import Image

from django.db import connection

import random
import string

# Create your views here.

# Class based view to predict based on IRIS model
class IRIS_Model_Predict(APIView):

    # two lines below are important for user login/logout, dont delete them
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def post(self, request, format=None):
        data = request.data
        keys = []
        values = []
        for key in data:
            keys.append(key)
            values.append(data[key])
        X = pd.Series(values).to_numpy().reshape(1, -1)
        loaded_mlmodel = PredictionConfig.mlmodel 
        y_pred = loaded_mlmodel.predict(X)
        y_pred = pd.Series(y_pred)
        target_map = {0: 'setosa', 1: 'versicolor', 2: 'virginica'}
        y_pred = y_pred.map(target_map).to_numpy()
        response_dict = {"Predicted Iris Species": y_pred[0]}
        return Response(response_dict, status=200)


class SkinCancerPredict(APIView):
    # should I preprocess the photos before they are put into the model? 

    labelsTEST = ['akiec', 'bcc', 'bkl', 'df', 'nv', 'vasc','mel']
    imsize_TEST = 224
    loader_TEST = transforms.Compose([transforms.Scale(imsize_TEST), transforms.ToTensor()])

    def image_loader_TEST(self, image_name):
        """load image, returns cuda tensor"""
        image = Image.open(os.path.join(settings.BASE_DIR, image_name))
        # image = open(os.path.join(settings.BASE_DIR, image_name))
        image = self.loader_TEST(image).float()
        image = Variable(image, requires_grad=True)
        image = image.unsqueeze(0)  #this is for VGG, may not be needed for ResNet
        return image  #assumes that you're using GPU


    def post(self, request, format=None):
        print("REQUEST PREDICT", request.data)

        imageId = request.data['imageId']
        print(imageId)
        loaded_mlmodel = PredictionConfig.mlmodel 
        loaded_mlmodel.eval()

        basePath_TEST = "images/"
        analyzeImage = basePath_TEST + imageId
        imagePaths = [analyzeImage]
        imagePrediction = ""

        for imagePath in imagePaths:
            x = self.image_loader_TEST(imagePath)
            print(x.shape)

            output_TEST = loaded_mlmodel(x)
            _, predicted = torch.max(output_TEST, 1)
            
            prediction = output_TEST.max(1, keepdim=True)[1]
            val = np.squeeze(prediction.cpu().numpy().T)
            
            imagePrediction = self.labelsTEST[val]
            print("RESULT", imagePrediction)

        return Response(imagePrediction, status=200) 
        

class UploadImage(APIView):
    def get_random_string(self, length):
        # choose from all lowercase letter
        letters = string.digits
        result_str = ''.join(random.choice(letters) for i in range(length))
        print("Random string of length", length, "is:", result_str)

        return result_str

    def post(self, request, format=None):
        file_uploaded = request.data
        print(file_uploaded, "## file received (hopefully)")

        """
        1. Make a table in the database for images (autoincrementing primay key)
        2. Insert the image into the database and you need another column in the table 
           for the user ID
        3. In the response send back the image ID
        4. Another entry point for "analyze" part when the user clicks "analyze".
        5. Send the ID from the front-end to the analyze entry point
        6. Store the result in the database
        7. Server is going to analyze the image and return the result

        note:
        Add file extension checking 
        """

        # with connection.cursor() as cursor:
        #     cursor.execute("INSERT INTO image_table (user_id) values (1)")
        #     print("IMAGE ID", cursor.lastrowid)

        cursor = connection.cursor()
        randomNum = self.get_random_string(8)
        print(randomNum)
        query = "INSERT INTO image_table (id, user_id) values ("+randomNum+", 1)"

        cursor.execute(query)

        file_name = default_storage.save("images/" + randomNum + ".jpg", file_uploaded["myImage"])
        returnStr = randomNum +".jpg"
        return Response(returnStr, status=200) 