from django.shortcuts import render
from django.conf import settings
from django.core.files.storage import default_storage
from django.db import connection

from prediction.apps import PredictionConfig
import pandas as pd
import os
import numpy as np
from PIL import Image
import random
import string

# REST libraries
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# pytorch libraries
import torch
from torch import optim,nn
from torch.autograd import Variable
from torch.utils.data import DataLoader,Dataset
from torchvision import models,transforms
import torchvision.transforms.functional as TF

class SkinCancerPredict(APIView):

    labelsTEST = ['akiec', 'bcc', 'bkl', 'df', 'nv', 'vasc','mel']
    imsize_TEST = 224
    loader_TEST = transforms.Compose([transforms.Scale(imsize_TEST), transforms.ToTensor()])

    def image_loader_TEST(self, image_name):

        """load image, returns cuda tensor"""
        image = Image.open(os.path.join(settings.BASE_DIR, image_name))
        image = self.loader_TEST(image).float()
        image = Variable(image, requires_grad=True)
        image = image.unsqueeze(0)
        return image

    def post(self, request, format=None):

        imageId = request.data['imageId']
        loaded_mlmodel = PredictionConfig.mlmodel 
        loaded_mlmodel.eval()

        basePath_TEST = "images/"
        analyzeImage = basePath_TEST + imageId
        imagePaths = [analyzeImage]
        imagePrediction = ""

        for imagePath in imagePaths:
            x = self.image_loader_TEST(imagePath)
            output_TEST = loaded_mlmodel(x)
            _, predicted = torch.max(output_TEST, 1)
            prediction = output_TEST.max(1, keepdim=True)[1]
            val = np.squeeze(prediction.cpu().numpy().T)
            imagePrediction = self.labelsTEST[val]

        return Response(imagePrediction, status=200) 
        
class UploadImage(APIView):
    def get_random_string(self, length):
        letters = string.digits
        result_str = ''.join(random.choice(letters) for i in range(length))
        return result_str

    def post(self, request, format=None):
        file_uploaded = request.data
        cursor = connection.cursor()
        randomNum = self.get_random_string(8)
        query = "INSERT INTO image_table (id, user_id) values ("+randomNum+", 1)"
        cursor.execute(query)
        file_name = default_storage.save("images/" + randomNum + ".jpg", file_uploaded["myImage"])
        returnStr = randomNum +".jpg"
        return Response(returnStr, status=200) 