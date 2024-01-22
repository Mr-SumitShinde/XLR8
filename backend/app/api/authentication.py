import time
from fyers_apiv3 import fyersModel
from pyotp import TOTP
from selenium import webdriver

def generate_and_save_access_token(FyersCredentials):
    # Create a session model with the provided credentials
    session = fyersModel.SessionModel(
        client_id=FyersCredentials.client_id,
        secret_key=FyersCredentials.secret_key,
        redirect_uri=FyersCredentials.redirect_uri,
        response_type=FyersCredentials.response_type,
        grant_type=FyersCredentials.grant_type
    )

    # Generate the auth code using the session model
    response = session.generate_authcode()

    # Set up Selenium WebDriver
    driver = webdriver.Chrome()
    driver.get(response)
    time.sleep(2)

    # Fill in the login details
    driver.find_element('xpath', '//* [@id="login_client_id"]').click()
    driver.find_element('xpath', '//* [@id="fy_client_id"]').send_keys(FyersCredentials.username)
    driver.find_element('xpath', '//* [@id="clientIdSubmit"]').click()
    time.sleep(2)

    # Generate TOTP and fill in the OTP fields
    t = TOTP(FyersCredentials.totp).now()
    driver.find_element('xpath', '//*[@id="first"]').send_keys(t[0])
    driver.find_element('xpath', '//* [@id="second"]').send_keys(t[1])
    driver.find_element('xpath', '//* [@id="third"]').send_keys(t[2])
    driver.find_element('xpath', '//* [@id="fourth"]').send_keys(t[3])
    driver.find_element('xpath', '//* [@id="fifth"]').send_keys(t[4])
    driver.find_element('xpath', '//* [@id="sixth"]').send_keys(t[5])
    driver.find_element('xpath', '//* [@id="confirmOtpSubmit"]').click()
    time.sleep(1)

    # Fill in the PIN
    driver.find_element('id', "verify-pin-page").find_element('id', "first").send_keys(FyersCredentials.pin1)
    driver.find_element('id', "verify-pin-page").find_element('id', "second").send_keys(FyersCredentials.pin2)
    driver.find_element('id', "verify-pin-page").find_element('id', "third").send_keys(FyersCredentials.pin3)
    driver.find_element('id', "verify-pin-page").find_element('id', "fourth").send_keys(FyersCredentials.pin4)
    driver.find_element('xpath', '//* [@id="verifyPinSubmit"]').click()
    time.sleep(1)

    # Extract the auth code from the URL
    new_url = driver.current_url
    auth_code = new_url[new_url.index('auth_code=') + 10: new_url.index('&state')]

    # Close the WebDriver
    driver.quit()

    # Set the token and generate the access token
    session.set_token(auth_code)
    response = session.generate_token()

    if response['code'] == 200:
        access_token = response["access_token"]
        with open("access.txt", 'w') as file:
            file.write(access_token)
        return access_token
    else:
        return None


def get_user_details(client_id,access_token):
    # Initialize the FyersModel instance with your client_id, access_token, and enable async mode
    fyers = fyersModel.FyersModel(client_id=client_id, is_async=False, token=access_token, log_path="")

    # Make a request to get the user profile information
    profile = fyers.get_profile()
    funds = fyers.funds()
    if profile['code']==200:
        user = {
            'profile': profile,
            'fund': funds
        }
        return user
    else:
        return None

def get_access_token():
    file_path = "access.txt"
    # Open the file in read mode
    with open(file_path, "r") as file:
        # Read the contents of the file into a string
        file_content = file.read()
    return file_content
