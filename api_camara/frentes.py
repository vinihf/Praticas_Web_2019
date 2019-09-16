import requests

frentes = requests.get("https://dadosabertos.camara.leg.br/api/v2/frentes/53984/membros").json()
partidos = {}
for deputado in frentes['dados']:
    partidos[deputado['siglaPartido']] = partidos.get(deputado['siglaPartido'],0)+1
print(partidos)