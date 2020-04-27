import requests, json

r = requests.get('https://steamspy.com/api.php?request=top100forever')

resultado = r.json()

for indice in resultado.keys():
    print(resultado[indice])
