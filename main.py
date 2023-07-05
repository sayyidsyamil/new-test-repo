import time
import bardapi
import os

# set your __Secure-1PSID value to key
token = 'XwjWs8pYfkpFwVKBnGo_zYBolXeTygZpZWe1MbfdMasFKZkMQr6Gk4JarTcyrPORvGovAw.'

def type_response(response):
    for char in response:
        print(char, end='', flush=True)
        time.sleep(0.005)
    print()

def chatbot():
    while True:
        user_input = input('User: ')
        response = bardapi.core.Bard(token).get_answer(user_input.lower())
        type_response('Bot: ' + response['content'])

chatbot()