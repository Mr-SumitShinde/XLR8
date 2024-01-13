# XLR8 2024
create New folder
open terminal
git clone https://github.com/Mr-SumitShinde/XLR8.git
open 2 terminals:

1> cd XLR8/goal
npm i (only first time when node modules)
npm start
2> cd XLR8/backend
python -m uvicorn main:app --reload


Create credential.py [inside backend]
""""
class FyersCredentials:
    username = ""
    totp = ''
    pin1 = 0
    pin2 = 6
    pin3 = 1
    pin4 = 7

    client_id=''
    secret_key=''
    redirect_uri = 'https://www.google.com/'
    response_type = "code"  
    state = "sample_state"
    grant_type="authorization_code"
"""
New terminal:  

new terminal: 
