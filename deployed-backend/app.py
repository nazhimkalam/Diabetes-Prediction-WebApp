
# Make sure that all the following modules are already installed for use.
import joblib
import numpy as np
from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse

APP = Flask(__name__)
APP.config['CORS_HEADERS'] = 'Content-Type'
CORS(APP)
API = Api(APP)

DIABETIES_PREDICTION_MODEL = joblib.load('diabeties-pred-model.pkl')


# In[8]:


class Predict(Resource):

    @staticmethod
    def post():
        parser = reqparse.RequestParser()
        parser.add_argument('Pregnancies')
        parser.add_argument('Glucose')
        parser.add_argument('BloodPressure')
        parser.add_argument('SkinThickness')
        parser.add_argument('Insulin')
        parser.add_argument('BMI')
        parser.add_argument('DiabetesPedigreeFunction')
        parser.add_argument('Age')

        
        args = parser.parse_args()  # creates dictionary

        X_new = np.fromiter(args.values(), dtype=float)  # convert input to array
        
        CATEGORIES = ["Negative", "Positive"]

        out = {'Prediction': CATEGORIES[DIABETIES_PREDICTION_MODEL.predict([X_new])[0]]}

        return out, 200


# In[9]:


API.add_resource(Predict, '/predict')

if __name__ == '__main__':
    APP.run(debug=True)


# In[ ]:


# import requests

# URL = 'http://127.0.0.1:1080/predict'  # localhost and the defined port + endpoint

# body = {
#     "Pregnancies": 6,
#     "Glucose": 188,
#     "BloodPressure": 72,
#     "SkinThickness": 35,
#     "Insulin": 168,
#     "BMI": 33.6,
#     "DiabetesPedigreeFunction": 0.627,
#     "Age": 50
    
# }

# response = requests.post(URL, data=body)
# response.json()

