import requests
import pandas as pd
import folium

retorno = requests.get("http://api.open-notify.org/iss-now.json")
iss = retorno.json()

brasil = folium.Map(
    location=[iss['iss_position']['latitude'], iss['iss_position']['longitude']],    # Coordenadas retiradas do Google Maps
    zoom_start=4
)

tooltip = 'ISS'


folium.Marker([iss['iss_position']['latitude'], iss['iss_position']['longitude']], popup='<i>Mt. Hood Meadows</i>', tooltip=tooltip).add_to(brasil)


brasil.save('index.html')