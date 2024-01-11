import time


def get_realtime_data(symbol, interval='1min'):

    url = f'https://api.fyers.in/api/v1/instruments/indices'
    headers = {
        'Authorization': f'Bearer {access_token}'
    }
    
    params = {
        'symbol': symbol,
        'interval': interval
    }

    response = requests.get(url, headers=headers, params=params)

    if response.status_code == 200:
        data = response.json()
        print(json.dumps(data, indent=2))
        return data
    else:
        print(f"Error: {response.status_code}, {response.text}")
        return None
    

symbol = 'your_symbol'

# Run the function continuously
while True:
    try:
        realtime_data = get_realtime_data(symbol)
        time.sleep(60)  # Adjust the interval based on the API rate limits
    except KeyboardInterrupt:
        print("Stopping the loop.")
        break
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        time.sleep(60)  # Wait for a minute before retrying

